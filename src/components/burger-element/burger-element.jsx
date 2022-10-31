import { DragIcon, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components"
import { useDrag, useDrop } from "react-dnd";
import styles from './burger-element.module.css'
import { moveIngredient } from "../../services/actions/ingredients-constructor";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/components-prop-types';

export default function BurgerElement({ deleteElement, element, id, index }) {

  const ref = useRef(null)
  const dispatch = useDispatch()

  const moveCard = (start, end) => {
    dispatch(moveIngredient(start, end))
  }

  const [, drop] = useDrop({
    accept: 'item',
    // collect(monitor) {
    //   return {
    //     handlerId: monitor.getHandlerId(),
    //   }
    // },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      // Don't replace items with themselves // Не заменяйте предметы самими собой
      if (dragIndex === hoverIndex) {
        return
      }
      // Determine rectangle on screen // Определите прямоугольник на экране
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      // Get vertical middle // Получить вертикальную середину
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determine mouse position // Определение положения мыши
      const clientOffset = monitor.getClientOffset()
      // Get pixels to the top // Переместите пиксели наверх
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // Only perform the move when the mouse has crossed half of the items height
      //Выполняйте перемещение только тогда, когда мышь пересекла половину высоты элементов
      // When dragging downwards, only move when the cursor is below 50%
      // При перетаскивании вниз перемещайтесь только тогда, когда курсор находится ниже 50%
      // When dragging upwards, only move when the cursor is above 50%
      // При перетаскивании вверх перемещайтесь только тогда, когда курсор находится выше 50%

      // Dragging downwards
      // Перетаскивание вниз
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      // Перетаскивание вверх
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      // Time to actually perform the action // Время для фактического выполнения действия
      moveCard(dragIndex, hoverIndex)
      // Note: we're mutating the monitor item here!
      // Примечание: здесь мы изменяем элемент монитора!
      // Generally it's better to avoid mutations,
      // Как правило, лучше избегать мутаций,
      // but it's good here for the sake of performance
      // но здесь это хорошо ради производительности
      // to avoid expensive index searches.
      // чтобы избежать дорогостоящего поиска по индексам.
      item.index = hoverIndex
    },
  })
  const [, drag] = useDrag({
    type: 'item',
    item: () => {
      return { id, index }
    },
    // collect: (monitor) => ({
    //   isDragging: monitor.isDragging(),
    // }),
  })
  // const opacity = isDragging ? 0 : 1
  drag(drop(ref))

  return (<div className={styles.listElement} key={element.id} ref={ref}>
    <DragIcon type="primary" />
    <ConstructorElement
      handleClose={() => deleteElement(element)}
      text={element.name}
      price={element.price}
      thumbnail={element.image}
    />
  </div>)
}

BurgerElement.propTypes = {
  deleteElement: PropTypes.func.isRequired,
  element: PropTypes.arrayOf(ingredientType).isRequired,
  id: PropTypes.string,
  index: PropTypes.number.isRequired,
}