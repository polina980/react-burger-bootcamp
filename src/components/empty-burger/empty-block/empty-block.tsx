import styles from './empty-block.module.css';

export const EmptyBlock = () => {
  return (
    <div className={styles.addIngredients}>
      <h3 className="text text_type_main-medium">
        Перетяните сюда ингредиенты
      </h3>
    </div>
  )
}
