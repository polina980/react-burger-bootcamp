import React from 'react';
import IngredientCard from '../ingredient-card/IngredientCard.jsx';

export default function BurgerIngredients() {
  return (
    <section>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
      <li >
        <h3>Булки</h3>
        <IngredientCard />
      </li>

      <li>
        <h3>Соусы</h3>
        <IngredientCard />
      </li>

      <li>
        <h3>Начинки</h3>
        <IngredientCard />
        </li>
      </ul>
    </section>
  )
}