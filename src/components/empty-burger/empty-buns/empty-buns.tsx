import styles from './empty-buns.module.css';

export const EmptyBunsUp = () => {
  return (
    <div className={styles.emptyBunsUp}>
      <span className="text text_type_main-default">Выберите булку</span>
    </div>
  )
}

export const EmptyBunsDown = () => {
  return (
    <div className={styles.emptyBunsDown}>
      <span className="text text_type_main-default">Выберите булку</span>
    </div>
  )
}
