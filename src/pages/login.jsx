import styles from './pages.module.css';
import { EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

export function LoginPage() {
    return (
        <div className={styles.main}>
            <h1 className="text text_type_main-medium mb-6">Вход</h1>
            <EmailInput
                //onChange={onChange}
                //value={value}
                name={'email'}
                isIcon={false}
                extraClass="mb-6"
            />
            <PasswordInput
                //onChange={onChange}
                //value={value}
                name={'password'}
                extraClass="mb-6"
            />
            <Button type="primary" size="medium">
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
        </div>
    )
}
