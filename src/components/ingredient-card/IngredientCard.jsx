import React from "react";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";

export default function IngredientCard() {
  return (
    <article style={{ position: 'relative' }}>
      <img />
      <Counter count={1} size="small" />
      <div>
        <p></p>
        <CurrencyIcon type="primary" />
      </div>
      <h3></h3>
    </article>
  )
}