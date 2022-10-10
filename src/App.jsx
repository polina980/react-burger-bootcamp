import React, { useEffect } from 'react';
import AppHeader from './components/app-header/AppHeader.jsx';
import BurgerIngredientsTab from './components/burger-ingredients-tab/BurgerIngredientsTab.jsx';
import BurgerConstructor from './components/burger-constructor/BurgerConstructor.jsx';
import { apiBurger } from './utils/api';

export default function App() {
  useEffect(() => {
    apiBurger.getIngredients()
      .then((data) => {
        console.dir(data)
      })
      .catch(console.log)
  }, [])
  return (
    <div>
      <AppHeader />
      <section style={{ display: 'flex', justifyContent: 'center', gap: '61.5px' }}>
        <BurgerIngredientsTab />
        <BurgerConstructor />
      </section>
    </div>
  )
}