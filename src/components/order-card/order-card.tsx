import React, { FC } from 'react';
import styles from './order-card.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { TOrderProps } from '../../services/types/types';
import { useSelector } from '../../services/hooks/hooks';
import { useHistory, useLocation } from 'react-router-dom';
import { conversionDateForCard } from '../../utils/date';

function inNotUndefined<T>(item: T | undefined): item is T {
    return item !== undefined
}

export const OrderCard: FC<TOrderProps> = ({ order }) => {

    const history = useHistory();
    const location = useLocation();

    const ingredients = useSelector(store => store.ingredientsList.ingredientsList);
    const orderIngredientsForTotal =
        order.ingredients.map(id => {
            return ingredients.find(item => item._id === id);
        }).filter(inNotUndefined);
    const orderIngredientsForImage = ingredients.filter((ingredient) => order.ingredients.includes(ingredient._id))
    const totalOrderPrice = orderIngredientsForTotal.reduce(
        (acc, ingredient) => acc + ingredient.price,
        0
    );

    const openOrderDetails = () => {
        if (location.pathname === '/feed') {
            const url = `/feed/${order._id}`;
            history.push({
                pathname: url,
                state: { background: location }
            })
        }
        if (location.pathname === '/profile/orders') {
            const url = `/profile/orders/${order._id}`;
            history.push({
                pathname: url,
                state: { background: location }
            })
        }
    }

    const date = conversionDateForCard(order.createdAt);

    return (
        <div onClick={openOrderDetails} className={styles.historyBlock}>
            <div className={styles.firstString}>
                <p className='text text_type_digits-default mt-6'>#{order.number}</p>
                <p className='text text_type_main-default text_color_inactive mt-6'>{date}</p>
            </div>
            <h3 className={`${styles.text} text text_type_main-medium mt-6 mb-6`}>{order.name}</h3>
            <div className={styles.lastBlock}>
                <ul className={styles.list}>
                    {orderIngredientsForImage.map(image =>
                        <li className={styles.ingredientFrame} key={image._id}>
                            <img className={styles.ingredientImage} src={image.image_mobile} />
                            {/* <span className={`${styles.span}text text_type_main-default`}>5</span> */}
                        </li>
                    )}
                </ul>
                <div className={`${styles.priceBlock} mt-6 mb-6`}>
                    <p className='text text_type_digits-default ml-6 mr-2'>{totalOrderPrice}</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
    )
}
