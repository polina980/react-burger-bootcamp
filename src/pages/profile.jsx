import React, { useEffect, useCallback, useState } from 'react';
import styles from './profile.module.css';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../services/actions/user';
import { userLogout } from '../services/actions/logout';
import { patchUserInfo } from '../services/actions/user';

export function ProfilePage() {

    const dispatch = useDispatch();
    const userName = useSelector(state => state.userInfo.user.name);
    const userEmail = useSelector(state => state.userInfo.user.email);

    useEffect(() => {
        dispatch(getUserInfo());
    }, [dispatch])

    const logoutUser = useCallback(() => {
        dispatch(userLogout());
        localStorage.setItem('authorization', JSON.stringify(false));
    }, [dispatch])

    const [value, setValue] = useState({
        name: userName,
        email: userEmail,
        password: ''
    });

    const saveInfo = (event) => {
        event.preventDefault();
        dispatch(patchUserInfo(value.name, value.email, value.password));
    }

    const cancelChanges = () => {
        setValue({
            name: userName,
            email: userEmail,
            password: ''
        })
    }

    const render = value.name !== userName || value.email !== userEmail || value.password.length >= 6;

    return (
        <section className={styles.profile}>
            <nav>
                <NavLink
                    to='/profile'
                    exact={true}
                    className={`${styles.profileMenu} text text_type_main-medium text_color_inactive`}
                    activeClassName={styles.active}>
                    Профиль
                </NavLink>
                <NavLink
                    to='/profile/orders'
                    className={`${styles.profileMenu} text text_type_main-medium text_color_inactive`}
                    activeClassName={styles.active}>
                    История заказов
                </NavLink>
                <NavLink
                    to='/login'
                    className={`${styles.profileMenu} text text_type_main-medium text_color_inactive`}
                    activeClassName={styles.active}
                    onClick={logoutUser}>
                    Выход
                </NavLink>
                <p className="text text_type_main-default text_color_inactive mt-20">
                    В этом разделе вы можете <br /> изменить свои персональные данные
                </p>
            </nav>
            <form>
                <Input
                    onChange={event => setValue({ ...value, name: event.target.value })}
                    value={value.name}
                    type={'text'}
                    placeholder={'Имя'}
                    icon={'EditIcon'}
                    extraClass="mb-6"
                />
                <EmailInput
                    onChange={event => setValue({ ...value, email: event.target.value })}
                    value={value.email}
                    name={'email'}
                    placeholder={'Логин'}
                    icon={'EditIcon'}
                    extraClass="mb-6"
                />
                <PasswordInput
                    onChange={event => setValue({ ...value, password: event.target.value })}
                    value={value.password}
                    name={'password'}
                    icon={'EditIcon'}
                    extraClass="mb-6"
                />
                {render ? <div className={styles.buttons}>
                    <Button
                        onClick={cancelChanges}
                        type="secondary"
                        htmlType="reset"
                        size='medium'>
                        Отмена
                    </Button>
                    <Button
                        onClick={(event) => saveInfo(event)}
                        type='primary'
                        htmlType="submit"
                        size='medium'>
                        Сохранить
                    </Button>
                </div> : null}
            </form>
        </section>
    )
}
