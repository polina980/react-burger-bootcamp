import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

export default function BurgerIngredientsTab() {
  const [current, setCurrent] = React.useState('one')
  return (
    <section style={{ width: '600px', marginTop: '40px' }}>
      <p className="text text_type_main-large mb-5">
        Соберите бургер
      </p>
      <div style={{ display: 'flex' }}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
    </section>
  )
}