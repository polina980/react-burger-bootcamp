import React, { useEffect, useState, useCallback } from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import PriceCount from '../price-count/price-count'
import { apiBurger } from '../../utils/api';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredientsSuccess } from '../../services/actions/ingredients-list';
import { deleteIgredientDetails } from '../../services/actions/ingredient-details';
import { getOrderSuccess } from '../../services/actions/order-details';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

export default function App() {
  const [openOrderModal, setOrderOpenModal] = useState();
  const openIngredientsModal = useSelector(state => !!state.ingredientDetails.ingredientDetails);
  const dispatch = useDispatch();
  const ingredients = useSelector(state => state.ingredientsList.ingredientsList);
  const idList = (ingredients.map(element => element._id))

  const buns = useSelector(state => state.constructorList.buns)

  useEffect(() => {
    apiBurger.getIngredients()
      .then(({ data }) => {
        dispatch(getIngredientsSuccess(data));
      })
      .catch((error) => {
        console.log(error)
      })
  }, [dispatch])

  const handleOrderOpenModal = (() => {
    setOrderOpenModal(true)
    apiBurger.requestOrderDetails(idList)
      .then(({ order: { number } }) => {
        dispatch(getOrderSuccess(number));
      })
      .catch((error) => {
        console.log(error)
      })
  })

  const closeIngredientsModal = useCallback(() => {
    dispatch(deleteIgredientDetails())
  }, [dispatch])

  const closeOrderModal = useCallback(() => {
    setOrderOpenModal(false)
  }, [])

  return (
    <DndProvider backend={HTML5Backend}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients ingredients={ingredients} />
        <div className={styles.twoBlocks}>
          <BurgerConstructor />
          {buns.length > 0 ?
          <PriceCount onClick={handleOrderOpenModal} /> 
          : null}
        </div>
      </main>

      {openIngredientsModal && (
        <Modal onClose={closeIngredientsModal} title='Детали ингредиента'>
          <IngredientDetails />
        </Modal>
      )}

      {!!openOrderModal && (
        <Modal onClose={closeOrderModal}>
          <OrderDetails />
        </Modal>
      )}
    </DndProvider>
  )
}
