import React from 'react';
import styles from './ingredient-card.module.css';
// import { ingredientType } from '../../utils/components-prop-types';
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from 'react-redux';
import { setIgredientDetails } from '../../services/actions/ingredient-details';
import { useDrag } from 'react-dnd';
import { useSelector } from 'react-redux';

export default function IngredientCard({ingredient}) {

  // const ingredient = useSelector(state => state.ingredientDetails.ingredientDetails)

  const dispatch = useDispatch();
  const handleIngredientClick = () => {
    dispatch(setIgredientDetails(ingredient))
  }

const [ , drag ] = useDrag(() => ({
      type: 'card',
      item: { ingredient,
        id: ingredient._id,
        type: ingredient.type
       },
    }), [])

  return (
    <button className={styles.cardButton} onClick={handleIngredientClick} ref={drag}>
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

// IngredientCard.propTypes = {
//   ingredient: ingredientType.isRequired,
// }