import styles from './ingredient-card.module.css';
import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/components-prop-types';
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";

export default function IngredientCard({ ingredient, onClick }) {
  return (
    <button className={styles.cardButton} onClick={(event) => onClick(event, ingredient)}>
      <img src={ingredient.image} alt={ingredient.name} />
      <Counter id={ingredient._id} count={ingredient.count} size="small" />
      <div className={styles.priceBlock}>
        <p className="text text_type_digits-default pt-2 pr-2">{ingredient.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <h3 className="text text_type_main-default pt-2">{ingredient.name}</h3>
    </button>
  )
}

IngredientCard.propTypes = {
  ingredient: ingredientType.isRequired,
  onClick: PropTypes.func.isRequired
}