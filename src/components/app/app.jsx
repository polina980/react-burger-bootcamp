import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header.jsx';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx';
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx';
import { apiBurger } from '../../utils/api.js';
import Modal from '../modal/modal.jsx';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';


export default function App() {

  const [ingredients, setIngredients] = useState([]);
  const [openOrderModal, setOrderOpenModal] = useState();
  const [openIngredientsModal, setOpenIngredientModal] = useState();

  useEffect(() => {
    apiBurger.getIngredients()
      .then(({ success, data }) => {
        if (success) {
          setIngredients(data)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  console.dir(ingredients)

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients ingredients={ingredients} onClick={setOpenIngredientModal}/>
        <BurgerConstructor onClick={setOrderOpenModal} />
      </main>

      {!!openIngredientsModal && (
      <Modal onClose={() => setOpenIngredientModal(false)}>
        <IngredientDetails ingredient={ingredients} />
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