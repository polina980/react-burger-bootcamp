import React, { useState } from 'react';
import styles from './pages.module.css';
import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { createNewPassword } from '../services/actions/password-forgot';
import { useDispatch, useSelector } from 'react-redux';

export function ForgotPassword() {

    const dispatch = useDispatch();
    const [emailValue, setEmailValue] = useState({ email: '' });
    const forgotSuccess = useSelector(state => state.passwordForgot.email);
    const location = useLocation()

    const onChangeValue = (event) => {
        setEmailValue({
            ...emailValue,
            [event.target.name]: event.target.value,
        })
    }

    const emailData = ((event) => {
        event.preventDefault();
        dispatch(createNewPassword(emailValue.email))
    })

    // const handleClear = (event) => {
    //     event.preventDefault()
    //     setEmailValue({ email: '' })
    // }

    if (forgotSuccess) {
        return (
            <Redirect to={{ pathname: '/reset-password', state: { from: location } }} exact={true}/>
        )
    }

    return (
        <form className={styles.main} onSubmit={(event) => emailData(event)}>
            <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
            <EmailInput
                onChange={onChangeValue}
                value={emailValue.email}
                name={'email'}
                placeholder={'Укажите e-mail'}
                // required = {true}
                extraClass="mb-6"
            />
            <Button type="primary" size="medium" /*onClick={handleClear}*/>
                Восстановить
            </Button>
            <div className={`${styles.line} mt-20`}>
                <h2 className="text text_type_main-default text_color_inactive">Вспомнили пароль?</h2>
                <Link to='/login' className={`${styles.link} text text_type_main-default`}>Войти</Link>
            </div>
        </form>
    )
}
