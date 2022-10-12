import styles from './IngredientDetails.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export default function IngredientDetails({ ingredients }) {
  return (
    <div className={styles.detailsModal}>
      <h2 className="text text_type_main-large mt-10 ml-10">Детали ингредиента</h2>
      <div className={styles.closeDetails}><CloseIcon type="primary" /></div>
      <img src={ingredients.image_large} alt={ingredients.name} />
      <h3 className="text text_type_main-medium">{ingredients.name}</h3>
      <ul style={{ display: 'flex', justifyContent: 'space-around', width: '520px', margin: 'auto', padding: '0' }}>
        <div>
          <p className="text text_type_main-small text_color_inactive">Калории,ккал</p>
          <p className="text text_type_main-small text_color_inactive">{ingredients.calories}</p>
        </div>
        <div>
          <p className="text text_type_main-small text_color_inactive">Белки, г</p>
          <p className="text text_type_main-small text_color_inactive">{ingredients.proteins}</p>
        </div>
        <div>
          <p className="text text_type_main-small text_color_inactive">Жиры, г</p>
          <p className="text text_type_main-small text_color_inactive">{ingredients.fat}</p>
        </div>
        <div>
          <p className="text text_type_main-small text_color_inactive">Углеводы, г</p>
          <p className="text text_type_main-small text_color_inactive">{ingredients.carbohydrates}</p>
        </div>
      </ul>
    </div>
  )
}