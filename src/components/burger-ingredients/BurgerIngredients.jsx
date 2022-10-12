import React from 'react';
import styles from './BurgerIngredients.module.css'
import IngredientCard from '../ingredient-card/IngredientCard.jsx';

export default function BurgerIngredients({ ingredients }) {
  return (
    <div className={styles.largeScroll}>
      <div style={{ paddingBottom: '65px' }}>
        <h3 className="text text_type_main-medium mb-6">Булки</h3>
        <ul className={styles.ingredientCard}>
          {ingredients.filter((ingredients) => ingredients.type === 'bun').map((ingredients) => (<IngredientCard key={ingredients._id} ingredients={ingredients} />))}
        </ul>
      </div>
      <div style={{ paddingBottom: '65px' }}>
        <h3 className="text text_type_main-medium mb-6">Соусы</h3>
        <ul className={styles.ingredientCard}>
          {ingredients.filter((ingredients) => ingredients.type === 'sauce').map((ingredients) => (<IngredientCard key={ingredients._id} ingredients={ingredients} />))}
        </ul>
      </div>
      <div>
        <h3 className="text text_type_main-medium mb-6">Начинки</h3>
        <ul className={styles.ingredientCard}>
          {ingredients.filter((ingredients) => ingredients.type === 'main').map((ingredients) => (<IngredientCard key={ingredients._id} ingredients={ingredients} />))}
        </ul>
      </div>
    </div>
  )
}