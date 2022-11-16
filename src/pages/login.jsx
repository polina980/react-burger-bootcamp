import React, { useState, useEffect } from 'react';
import styles from './pages.module.css';
import { EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserLogin } from '../services/actions/login'

export function LoginPage() {

    const dispatch = useDispatch();
    const authorization = useSelector(state => state.getLogin.success);

    const [value, setValue] = useState({
        email: '',
        password: ''
    })
    const handleLogin = (evt) => {
        evt.preventDefault();
        dispatch(getUserLogin(value.email, value.password));
    }

    if (authorization) {
        return (<Redirect to={'/'} />)
    }

    return (
        <form className={styles.main} onSubmit={handleLogin}>
            <h1 className="text text_type_main-medium mb-6">Вход</h1>
            <EmailInput
                onChange={(evt) => setValue({ ...value, email: evt.target.value })}
                value={value.email}
                name={'email'}
                isIcon={false}
                extraClass="mb-6"
            />
            <PasswordInput
                onChange={(evt) => setValue({ ...value, password: evt.target.value })}
                value={value.password}
                name={'password'}
                extraClass="mb-6"
            />
            <Button
                type="primary"
                htmlType="submit"
                size="medium">
                Войти
            </Button>
            <div className={`${styles.line} mt-20`}>
                <h2 className="text text_type_main-default text_color_inactive">Вы — новый пользователь?</h2>
                <Link to='/register' className={`${styles.link} text text_type_main-default`}>Зарегистрироваться</Link>
            </div>
            <div className={`${styles.line} mt-4`}>
                <h2 className="text text_type_main-default text_color_inactive">Забыли пароль?</h2>
                <Link to='/forgot-password' className={`${styles.link} text text_type_main-default`}>Восстановить пароль</Link>
            </div>
        </form>
    )
}
