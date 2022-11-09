import React, { useState } from 'react';
import styles from './pages.module.css';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { createNewAccount } from '../services/actions/register';
import { useDispatch } from 'react-redux';


export function Registration() {

    const dispatch = useDispatch();
    const [registerValue, setRegisterValue] = useState({ name: '', email: '', password: '' });


    const onChangeValue = (event) => {
        setRegisterValue({
            ...registerValue,
            [event.target.name]: event.target.value,
        })
    }

    const registrationData = ((event) => {
        event.preventDefault();
        dispatch(createNewAccount(registerValue.name, registerValue.email, registerValue.password))
    })

    return (
        <form className={styles.main} onSubmit={(event) => registrationData(event)} >
            <h1 className="text text_type_main-medium mb-6">Регистрация</h1>
            <Input
                type={'text'}
                placeholder={'Имя'}
                onChange={onChangeValue}
                value={registerValue.name}
                name={'name'}
                extraClass="mb-6"
            />
            <EmailInput
                onChange={onChangeValue}
                value={registerValue.email}
                name={'email'}
                extraClass="mb-6"
            />
            <PasswordInput
                onChange={onChangeValue}
                value={registerValue.password}
                name={'password'}
                extraClass="mb-6"
            />
            <Button type="primary" size="medium">
                Зарегистрироваться
            </Button>
            <div className={`${styles.line} mt-20`}>
                <h2 className="text text_type_main-default text_color_inactive">Уже зарегистрированы?</h2>
                <Link to='/login' className={`${styles.link} text text_type_main-default`}>Войти</Link>
            </div>
        </form>
    )
}
