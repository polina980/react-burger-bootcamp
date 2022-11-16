import React, { useState } from 'react';
import styles from './pages.module.css';
import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { createNewPassword } from '../services/actions/password-forgot';
import { useDispatch, useSelector } from 'react-redux';

export function ForgotPassword() {

    const dispatch = useDispatch();
    const [value, setValue] = useState({ email: '' });

    const history = useHistory();
    const authorization = useSelector(state => state.passwordForgot.success);
    // const authorization = JSON.parse(localStorage.getItem('authorization'));

    const onChangeValue = (event) => {
        setValue({
            ...value,
            [event.target.name]: event.target.value,
        })
    }

    const emailData = ((event) => {
        event.preventDefault();
        dispatch(createNewPassword(value.email));
        // success ? history.push('/reset-password') : history.push('/register')
    })

    if (authorization) {
        return (<Redirect to={'/reset-password'} />)
    }

    return (
        <form className={styles.main} onSubmit={(event) => emailData(event)}>
            <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
            <EmailInput
                onChange={onChangeValue}
                value={value.email}
                name={'email'}
                placeholder={'Укажите e-mail'}
                extraClass="mb-6"
            />
            <Button 
            type="primary" 
            htmlType="submit"
            size="medium">
                Восстановить
            </Button>
            <div className={`${styles.line} mt-20`}>
                <h2 className="text text_type_main-default text_color_inactive">Вспомнили пароль?</h2>
                <Link to='/login' className={`${styles.link} text text_type_main-default`}>Войти</Link>
            </div>
        </form>
    )
}
