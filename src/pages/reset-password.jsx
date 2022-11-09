import React, { useState } from 'react';
import styles from './pages.module.css';
import { PasswordInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { confirmNewPassword } from '../services/actions/password-reset'

export function ResetPassword() {

    const dispatch = useDispatch();
    const [resetValue, setResetValue] = useState({ password: '', token: '' });

    const onChangeValue = (event) => {
        setResetValue({
            ...resetValue,
            [event.target.name]: event.target.value,
        })
    }

    const resetData = ((event) => {
        event.preventDefault();
        dispatch(confirmNewPassword(resetValue.password, resetValue.token))
    })

    return (
        <form className={styles.main} onSubmit={(event) => resetData(event)}>
            <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
            <PasswordInput
                onChange={onChangeValue}
                value={resetValue.password}
                name={'password'}
                placeholder={'Введите новый пароль'}
                extraClass="mb-6"
            />
            <Input
                onChange={onChangeValue}
                value={resetValue.token}
                type={'text'}
                placeholder={'Введите код из письма'}
                extraClass="mb-6"
            />
            <Button type="primary" size="medium">
                Сохранить
            </Button>
            <div className={`${styles.line} mt-20`}>
                <h2 className="text text_type_main-default text_color_inactive">Вспомнили пароль?</h2>
                <Link to='/login' className={`${styles.link} text text_type_main-default`}>Войти</Link>
            </div>
        </form>
    )
}
