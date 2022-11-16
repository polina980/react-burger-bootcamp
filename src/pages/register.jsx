import React, { useState, useEffect } from 'react';
import styles from './pages.module.css';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Redirect } from 'react-router-dom';
import { createNewAccount } from '../services/actions/register';
import { useDispatch, useSelector } from 'react-redux';

export function Registration() {

    const authorization = useSelector(state => state.registration.success);

    const dispatch = useDispatch();
    const [value, setValue] = useState({ name: '', email: '', password: '' });

    const onChangeValue = (event) => {
        setValue({
            ...value,
            [event.target.name]: event.target.value,
        })
    }

    const registrationData = ((event) => {
        event.preventDefault();
        dispatch(createNewAccount(value.name, value.email, value.password))
    })

    if (authorization) {
        return (<Redirect to={'/login'} />)
    }

    return (
        <form className={styles.main} onSubmit={(event) => registrationData(event)} >
            <h1 className="text text_type_main-medium mb-6">Регистрация</h1>
            <Input
                type={'text'}
                placeholder={'Имя'}
                onChange={onChangeValue}
                value={value.name}
                name={'name'}
                extraClass="mb-6"
            />
            <EmailInput
                onChange={onChangeValue}
                value={value.email}
                name={'email'}
                extraClass="mb-6"
            />
            <PasswordInput
                onChange={onChangeValue}
                value={value.password}
                name={'password'}
                extraClass="mb-6"
            />
            <Button
                type="primary"
                htmlType="submit"
                size="medium">
                Зарегистрироваться
            </Button>
            <div className={`${styles.line} mt-20`}>
                <h2 className="text text_type_main-default text_color_inactive">Уже зарегистрированы?</h2>
                <Link to='/login' className={`${styles.link} text text_type_main-default`}>Войти</Link>
            </div>
        </form>
    )
}
