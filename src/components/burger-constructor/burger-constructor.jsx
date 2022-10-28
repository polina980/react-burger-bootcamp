import styles from './burger-constructor.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag, useDrop } from 'react-dnd';
import { nanoid } from 'nanoid';
import { setBun, addIngredient, deleteIngredient, moveIngredient } from '../../services/actions/ingredients-constructor';
import { useDispatch, useSelector } from 'react-redux';

export default function BurgerConstructor(element) {
  const elements = useSelector(state => state.constructorList.constructorList)
  const buns = useSelector(state => state.constructorList.buns)
  const dispatch = useDispatch();
  console.log(elements)
  console.log(buns)

///////////////////
  const [ , dragConstructor ] = useDrag(() => ({
    type: 'item',
    // item: { element,
      // id: element._id,
      // type: element.type
    //  },
  }), [])


  const [, dropConstructor] = useDrop(() => ({
    accept: 'item',
    drop: (item => moveIngredient(item.ingredient))
  }))
//////////////

  const [, dropIngredient] = useDrop(() => ({
    accept: 'card',
    drop: (item => addCardElement(item.ingredient))
  }))

  const addCardElement = (element) => {
    element = { ...element, id: nanoid() }
    if (element.type === 'bun') {
      dispatch(setBun(element))
    }
    console.log(buns)
    if (element.type !== 'bun') {
      dispatch(addIngredient(element))
    }
    console.log(elements)
  }

  const deleteElement = (ingredient) => {
    dispatch(deleteIngredient(ingredient))
  }

  return (
    <section className={styles.total} ref={dropIngredient}>
      <ul className={styles.ingredientsList}>
        {buns.map((element) => {
          if (element.type === 'bun')
            return <li className={styles.listElement} key={element.id}>
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${element.name} (верх)`}
                price={element.price}
                thumbnail={element.image}
              />
            </li>
        })}
        <div className={styles.smallScroll} ref={dropConstructor}>
          {elements.map((element) => {
            if (element.type !== 'bun')
              return <li className={styles.listElement} key={element.id} ref={dragConstructor}>
                <DragIcon type="primary" />
                <ConstructorElement
                  handleClose={() => deleteElement(element)}
                  text={element.name}
                  price={element.price}
                  thumbnail={element.image}
                />
              </li>
          }
          )}
        </div>
        {buns.map((element) => {
          if (element.type === 'bun')
            return <li className={styles.listElement} key={element.id}>
              <ConstructorElement
                type="bottom"
                isLocked={true}
                text={`${element.name} (низ)`}
                price={element.price}
                thumbnail={element.image}
              />
            </li>
        })}
      </ul>
    </section>
  )
}