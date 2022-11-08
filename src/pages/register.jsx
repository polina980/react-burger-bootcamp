import styles from './pages.module.css';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

export function Registration() {
    return (
        <div className={styles.main}>
            <h1 className="text text_type_main-medium mb-6">Регистрация</h1>
            <Input
                //onChange={onChange}
                //value={value}
                type={'text'}
                placeholder={'Имя'}
                extraClass="mb-6"
            />
            <EmailInput
                //onChange={onChange}
                //value={value}
                name={'email'}
                extraClass="mb-6"
            />
            <PasswordInput
                //onChange={onChange}
                //value={value}
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
        </div>
    )
}
