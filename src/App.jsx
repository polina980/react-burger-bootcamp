import React, { useEffect, useState } from 'react';
import AppHeader from './components/app-header/AppHeader.jsx';
import BurgerIngredientsTab from './components/burger-ingredients-tab/BurgerIngredientsTab.jsx';
import BurgerIngredients from './components/burger-ingredients/BurgerIngredients.jsx';
import BurgerConstructor from './components/burger-constructor/BurgerConstructor.jsx';
import { apiBurger } from './utils/api';

import IngredientDetails from './components/ingredient-details/IngredientDetails.jsx';
import OrderDetails from './components/order-details/OrderDetails.jsx'

export default function App() {

  const [ingredients, setIngredients] = useState([]);

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
    <div>
      <AppHeader />
      <section style={{ display: 'flex', justifyContent: 'center', gap: '41.5px' }}>
        <div>
          <BurgerIngredientsTab />
          <BurgerIngredients ingredients={ingredients} />
        </div>
        <BurgerConstructor />
      </section>

      <IngredientDetails ingredients={ingredients} />
      <OrderDetails />

    </div>
  )
}