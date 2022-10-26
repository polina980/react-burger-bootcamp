import React, { useEffect, useRef, useState } from 'react';
import styles from './burger-ingredients.module.css'
import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/components-prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientsSet from '../ingredients-set/ingredients-set';

export default function BurgerIngredients({ ingredients, onClick }) {

  const containerRef = useRef();
  const bunRef = useRef();
  const sauceRef = useRef();
  const mainRef = useRef();

  const [current, setCurrent] = useState('bun');

  const scrollToRef = (ref) => {
    if (ref === 'bun') {
      bunRef.current.scrollIntoView({ behavior: "smooth" })
    }
    if (ref === 'sauce') {
      sauceRef.current.scrollIntoView({ behavior: "smooth" })
    }
    if (ref === 'main') {
      mainRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    let observer = new IntersectionObserver((entries) => {
      const activeIngredientSection = entries[0];

      if (!activeIngredientSection.isIntersecting) {
        return;
      }

      if (activeIngredientSection.target === bunRef.current) {
        setCurrent('bun');
      } else if (activeIngredientSection.target === sauceRef.current) {
        setCurrent('sauce');
      } else if (activeIngredientSection.target === mainRef.current) {
        setCurrent('main');
      }
    }, {
      root: containerRef.current,
      // rootMargin: ' px'
    });

    observer.observe(containerRef.current);
    // observer.observe(bunRef.current);
    // observer.observe(sauceRef.current);
    // observer.observe(mainRef.current);
  }, [])

  return (
    <section>
      <h3 className="text text_type_main-large mt-10 mb-5">
        Соберите бургер
      </h3>
      <div className={styles.sectionTab}>
        <Tab value='bun' active={current === 'bun'} onClick={() => scrollToRef('bun')}>
          Булки
        </Tab>
        <Tab value='sauce' active={current === 'sauce'} onClick={() => scrollToRef('sauce')}>
          Соусы
        </Tab>
        <Tab value='main' active={current === 'main'} onClick={() => scrollToRef('main')}>
          Начинки
        </Tab>
      </div>
      <div className={styles.largeScroll} ref={containerRef}>
        <IngredientsSet ingredients={ingredients} onClick={onClick} type='bun' title='Булки' containerRef={bunRef.current} />
        <IngredientsSet ingredients={ingredients} onClick={onClick} type='sauce' title='Соусы' containerRef={sauceRef.current} />
        <IngredientsSet ingredients={ingredients} onClick={onClick} type='main' title='Начинки' containerRef={mainRef.current} />
      </div>
    </section>
  )
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientType).isRequired,
  onClick: PropTypes.func.isRequired
}