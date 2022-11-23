import React, { useEffect } from 'react';
import styles from './pages.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../services/actions/user';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { ProfileForm } from '../components/profile-form/profile-form';
import { OrdersHistory } from '../components/orders-history/orders-history';
import { Menu } from '../components/menu/menu';

export function ProfilePage() {

    const dispatch = useDispatch();
    const authorization = useSelector(state => state.getLogin.login);

    useEffect(() => {
        dispatch(getUserInfo());
    }, [dispatch])

    if (!authorization) {
        return (
            <Redirect to={'/login'} />
        )
    }

    return (
        <section className={styles.profile}>
            <Menu />
            <Route path="/profile" exact={true} component={ProfileForm} />
            <Route path="/profile/orders" exact={true} component={OrdersHistory} />
        </section>
    )
}
