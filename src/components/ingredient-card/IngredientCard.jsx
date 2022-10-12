import React from "react";
import styles from './IngredientCard.module.css'
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";

export default function IngredientCard({ ingredients }) {
  return (
    <article className={styles.ingredientBlock}>
      <img src={ingredients.image} alt={ingredients.name} />
      <Counter id={ingredients._id} count={ingredients.count} size="small" />
      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        <p className="text text_type_digits-default pt-2 pr-2">{ingredients.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <h3 className="text text_type_main-default pt-2">{ingredients.name}</h3>
    </article>
  )
}