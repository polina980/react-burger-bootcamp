import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header.jsx';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx';
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx';
import { apiBurger } from '../../utils/api.js';
import Modal from '../modal/modal.jsx';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';
import { GET_INGREDIENTS_SUCCESS } from '../../services/actions/ingredients-list';
import { GET_ORDER_SUCCESS } from '../../services/actions/order-details';
import { useDispatch, useSelector } from 'react-redux';


export default function App() {

//  const [ingredients, setIngredients] = useState([]);
  const [element, setElement] = useState();
  const [openOrderModal, setOrderOpenModal] = useState();
  const [openIngredientsModal, setOpenIngredientModal] = useState();

  const dispatch = useDispatch();
  const ingredients = useSelector(state => state.ingredientsList.ingredientsList);

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
  console.dir(ingredients)

  useEffect(() => {
    apiBurger.requestOrderDetails()
      .then(({ order }) => {
        dispatch({
          type: GET_ORDER_SUCCESS,
          id: order.number
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const handleElementModal = (event, element) => {
    setOpenIngredientModal(!openIngredientsModal);
    setElement(element);
  }

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients ingredients={ingredients} onClick={handleElementModal} />
        <BurgerConstructor onClick={setOrderOpenModal} />
      </main>

      {!!openIngredientsModal && (
        <Modal onClose={() => setOpenIngredientModal(false)} title='Детали ингредиента'>
          <IngredientDetails ingredient={element} />
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


  //    Q&A
  // useEffect(() => {
  //   if (ingredients.length > 0) {
  //     const res = [];
  //     const getRandomNumber = (n) => Math.floor(Math.random() * n);
  //     const bunsArray = ingredients.filter((ingredient) => ingredient.type === 'bun');
  //     const noBunsArray = ingredients.filter((ingredient) => ingredient.type !== 'bun')
  //     res.push(bunsArray[getRandomNumber(bunsArray.length - 1)]);
  //     for (let i = 0; i <= 12; i += 1) {
  //       res.push(noBunsArray[getRandomNumber(noBunsArray.length - 1)])
  //     }
  //     setOrder(res);
  //   }
  // }, [ingredients])