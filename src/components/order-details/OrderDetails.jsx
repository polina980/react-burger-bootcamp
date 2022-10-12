import styles from './OrderDetails.module.css';
import done from '../../images/done.png'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export default function OrderDetails() {
  return (
    <div className={styles.orderModal}>
      <div className={styles.closeOrder}><CloseIcon type="primary" /></div>
      <h2 className="text text_type_digits-large mt-30" style={{ textShadow: '0 0 30px #4c4cff' }}>034536</h2>
      <p className="text text_type_main-medium mt-8 mb-15">идентификатор заказа</p>
      <img src={done} alt='Готово!' />
      <p className="text text_type_main-default mt-15 mb-2">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
    </div>
  )
}