import styles from './price-count.module.css';
import CurrencyIconBig from '../../images/currency-icon-big.png';
import PropTypes from 'prop-types';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

export default function PriceCount({ onClick }) {

// const total = useSelector(state => state.)

    return (
        <div className={styles.payment}>
            <div className={styles.price}>
                <p className="text text_type_digits-medium">610</p>
                <img src={CurrencyIconBig} alt='Значок валюты' />
            </div>
            <Button type="primary" size="large" htmlType='button' onClick={onClick}>Оформить заказ</Button>
        </div>
    )
}

PriceCount.propTypes = {
    onClick: PropTypes.func.isRequired
}