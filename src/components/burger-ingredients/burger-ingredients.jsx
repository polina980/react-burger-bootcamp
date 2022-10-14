import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/components-prop-types.js';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import ScrollArea from '../scroll-area/scroll-area.jsx';
import IngredientsSet from '../ingredients-set/ingredients-set.jsx';

export default function BurgerIngredients({ ingredients, onClick }) {
  const [current, setCurrent] = useState('bun')
  return (
    <section>
      <h3 className="text text_type_main-large mt-10 mb-5">
        Соберите бургер
      </h3>
      <div style={{ display: 'flex' }}>
        <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === 'main'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <ScrollArea>
        <IngredientsSet ingredients={ingredients} onClick={onClick} type='bun' title='Булки' />
        <IngredientsSet ingredients={ingredients} onClick={onClick} type='sauce' title='Соусы' />
        <IngredientsSet ingredients={ingredients} onClick={onClick} type='main' title='Начинки' />
      </ScrollArea>
    </section>
  )
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientType).isRequired,
}