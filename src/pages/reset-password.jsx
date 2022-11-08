import styles from './pages.module.css';
import { PasswordInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

export function ResetRassword() {
    return (
        <div className={styles.main}>
            <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
            <PasswordInput
                //onChange={onChange}
                //value={value}
                name={'password'}
                placeholder={'Введите новый пароль'}
                extraClass="mb-6"
            />
            <Input
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
        </div>
    )
}
