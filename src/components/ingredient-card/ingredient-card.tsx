import styles from './ingredient-card.module.css';
import { useDrag } from 'react-dnd';
import { FC, useCallback, useMemo, useState } from 'react';
import { useSelector, useDispatch } from '../../services/hooks/hooks';
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { setIgredientDetails } from '../../services/actions/ingredient-details';
import { TIngredientCard } from '../../services/types/types';
import { Modal } from '../../components/modal/modal';
import { IngredientDetails } from '../../components/ingredient-details/ingredient-details';
import { deleteIgredientDetails } from '../../services/actions/ingredient-details';
import { Link } from 'react-router-dom';

export const IngredientCard: FC<TIngredientCard> = ({ ingredient }) => {

  const dispatch = useDispatch();
  const [openIngredientModal, setIngredientOpenModal] = useState(false);

  const elements = useSelector(state => state.constructorList.constructorList);
  const buns = useSelector(state => state.constructorList.buns);
  const authorization = useSelector(state => state.getLogin.login);

  const count = useMemo(() => (
    elements.filter(element => element._id === ingredient._id).length || buns.filter(element => element._id === ingredient._id).length * 2
  ), [buns, elements, ingredient._id]);

  const [, dragIngredient] = useDrag(() => ({
    type: 'card',
    item: {
      ingredient,
      id: ingredient._id,
      type: ingredient.type
    },
  }), [])

  const handleIngredientClick = (event: any) => {
    event.preventDefault();
    setIngredientOpenModal(true);
    dispatch(setIgredientDetails(ingredient))
  }

  const closeIngredientsModal = useCallback(() => {
    setIngredientOpenModal(false)
    dispatch(deleteIgredientDetails())
  }, [dispatch])

  return (
    <>
      <button className={styles.cardButton} onClick={handleIngredientClick} ref={dragIngredient}>
        {authorization && (
          <Link to='/ingredients/:${id}'>
            <img src={ingredient.image} alt={ingredient.name} />
          </Link>
        )}
        {!authorization && (
          <img src={ingredient.image} alt={ingredient.name} />
        )}
        {count > 0 ? <Counter count={count} size="small" /> : null}
        <div className={styles.priceBlock}>
          <p className="text text_type_digits-default pt-2 pr-2">{ingredient.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <h3 className="text text_type_main-default pt-2">{ingredient.name}</h3>
      </button>

      {!authorization && openIngredientModal && (
        <Modal onClose={closeIngredientsModal} title='Детали ингредиента'>
          <IngredientDetails />
        </Modal>
      )}
    </>
  )
}
