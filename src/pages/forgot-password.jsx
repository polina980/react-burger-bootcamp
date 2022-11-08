import styles from './pages.module.css';
import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

export function ForgotRassword() {
    return (
        <div className={styles.main}>
            <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
            <EmailInput
                //onChange={onChange}
                //value={value}
                name={'email'}
                placeholder={'Укажите e-mail'}
                extraClass="mb-6"
            />
            <Button type="primary" size="medium">
            Восстановить
            </Button>
            <div className={`${styles.line} mt-20`}>
                <h2 className="text text_type_main-default text_color_inactive">Вспомнили пароль?</h2>
                <Link to='/login' className={`${styles.link} text text_type_main-default`}>Войти</Link>
            </div>
        </div>
    )
}
