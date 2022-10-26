import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { apiBurger } from '../../utils/api';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';
import { GET_INGREDIENTS_SUCCESS } from '../../services/actions/ingredients-list';
import { GET_ORDER_SUCCESS } from '../../services/actions/order-details';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredientsSuccess } from '../../services/actions/ingredients-list'
import { setIgredientDetails } from '../../services/actions/ingredient-details';


export default function App() {

//  const [element, setElement] = useState(false);
  const [openOrderModal, setOrderOpenModal] = useState();
  const [openIngredientsModal, setOpenIngredientModal] = useState();

  const dispatch = useDispatch();
  const ingredients = useSelector(state => state.ingredientsList.ingredientsList);
  const idList = (ingredients.map(element => element._id))

  // useEffect(() => {
  //   apiBurger.getIngredients()
  //     .then(({ data }) => {
  //       dispatch(getIngredientsSuccess(data))
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }, [])

  useEffect(() => {
    apiBurger.getIngredients()
      .then(({ data }) => {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const handleOrderOpenModal = (() => {
    setOrderOpenModal(true)
    apiBurger.requestOrderDetails(idList)
      .then(({ order }) => {
        dispatch({
          type: GET_ORDER_SUCCESS,
          id: order.number,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  })

  const handleElementModal = (ingredient) => {
    setOpenIngredientModal(!openIngredientsModal);
    dispatch(setIgredientDetails(ingredient))
  }

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients ingredients={ingredients} onClick={handleElementModal} />
        <BurgerConstructor onClick={handleOrderOpenModal} />
      </main>

      {!!openIngredientsModal && (
        <Modal onClose={() => setOpenIngredientModal(false)} title='Детали ингредиента'>
          <IngredientDetails />
        </Modal>
      )}

      {!!openOrderModal && (
        <Modal onClose={() => setOrderOpenModal(false)}>
          <OrderDetails />
        </Modal>
      )}
    </>
  )
}