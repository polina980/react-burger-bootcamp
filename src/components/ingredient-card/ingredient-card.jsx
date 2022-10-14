import React from "react";
import styles from './ingredient-card.module.css';
import { ingredientType } from '../../utils/components-prop-types.js';
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";

export default function IngredientCard({ ingredient, onClick }) {
  return (
    <button className={styles.cardButton} onClick={onClick}>
      <img src={ingredient.image} alt={ingredient.name} />
      <Counter id={ingredient._id} count={ingredient.count} size="small" />
      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        <p className="text text_type_digits-default pt-2 pr-2">{ingredient.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <h3 className="text text_type_main-default pt-2">{ingredient.name}</h3>
    </button>
  )
}

IngredientCard.propTypes = {
  ingredient: ingredientType.isRequired,
}