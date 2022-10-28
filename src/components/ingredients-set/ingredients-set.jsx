import React from 'react';
import styles from './ingredients-set.module.css';
import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/components-prop-types';
import IngredientCard from '../ingredient-card/ingredient-card';

const IngredientsSet = React.forwardRef(({ ingredients, type, title }, ref) => (
  <section className="pb-10" ref={ref}>
    <h3 className="text text_type_main-medium mb-6">{title}</h3>
    <ul className={styles.set}>
      {ingredients
        .filter((ingredient) => ingredient.type === type)
        .map((ingredient) => (
          <IngredientCard
            key={ingredient._id}
            ingredient={ingredient}
          />
        ))}
    </ul>
  </section>
)
)

IngredientsSet.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientType).isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default IngredientsSet;