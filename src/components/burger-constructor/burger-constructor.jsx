import styles from './burger-constructor.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
// import { useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';
import { nanoid } from 'nanoid';
import { setBun, addIngredient } from '../../services/actions/ingredients-constructor';
import { useDispatch, useSelector } from 'react-redux';

export default function BurgerConstructor(element) {

  const dispatch = useDispatch();

  const [, drop] = useDrop(() => ({
    accept: 'card',
    drop: (item => addCardElement(item.element))
  }))

  const addCardElement = (element) => {
    element = { ...element, id: nanoid() }
    dispatch(setBun(element))
    dispatch(addIngredient(element))
  }

  return (
    <section className={styles.total} ref={drop}>
      <ul className={styles.ingredientsList}>
        <li className={styles.listElement}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${element.name} (верх)`}
            price={element.price}
            thumbnail={element.image}
          />
        </li>
        <div className={styles.smallScroll}>
          <li className={styles.listElement}>
            <DragIcon type="primary" />
            <ConstructorElement
              text={element.name}
              price={element.price}
              thumbnail={element.image}
            />
          </li>
        </div>
        <li className={styles.listElement}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${element.name} (низ)`}
            price={element.price}
            thumbnail={element.image}
          />
        </li>
      </ul>
    </section>
  )
}