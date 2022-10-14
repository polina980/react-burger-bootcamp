import styles from './ingredient-details.module.css';
import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/components-prop-types.js';

export default function IngredientDetails({ ingredient }) {
  return (
    <>
      <h2 className="text text_type_main-large mt-10 ml-10">Детали ингредиента</h2>
      <img src={ingredient.image_large} alt={ingredient.name} />
      <h3 className="text text_type_main-medium">{ingredient.name}</h3>
      <ul className={styles.description}>
        <div>
          <p className="text text_type_main-small text_color_inactive">Калории,ккал</p>
          <p className="text text_type_main-small text_color_inactive">{ingredient.calories}</p>
        </div>
        <div>
          <p className="text text_type_main-small text_color_inactive">Белки, г</p>
          <p className="text text_type_main-small text_color_inactive">{ingredient.proteins}</p>
        </div>
        <div>
          <p className="text text_type_main-small text_color_inactive">Жиры, г</p>
          <p className="text text_type_main-small text_color_inactive">{ingredient.fat}</p>
        </div>
        <div>
          <p className="text text_type_main-small text_color_inactive">Углеводы, г</p>
          <p className="text text_type_main-small text_color_inactive">{ingredient.carbohydrates}</p>
        </div>
      </ul>
    </>
  )
}

IngredientDetails.propTypes = {
  ingredient: PropTypes.arrayOf(ingredientType).isRequired,
}