import styles from './profile.module.css';
import { Input, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
//import { Link } from 'react-router-dom';

export function ProfilePage() {
    return (
        <section className={styles.profile}>
            <div>
                <h1 className={`${styles.profileMenu} text text_type_main-medium`}>Профиль</h1>
                <h1 className={`${styles.profileMenu} text text_type_main-medium text_color_inactive`}>История заказов</h1>
                <h1 className={`${styles.profileMenu} text text_type_main-medium text_color_inactive`}>Выход</h1>
                <p className="text text_type_main-default text_color_inactive mt-20">В этом разделе вы можете <br /> изменить свои персональные данные</p>
            </div>
            <div>
                <Input
                    //onChange={onChange}
                    //value={value}
                    type={'text'}
                    placeholder={'Имя'}
                    icon={'EditIcon'}
                    extraClass="mb-6"
                />
                <EmailInput
                    //onChange={onChange}
                    //value={value}
                    name={'email'}
                    placeholder={'Логин'}
                    icon={'EditIcon'}
                    extraClass="mb-6"
                />
                <PasswordInput
                    //onChange={onChange}
                    //value={value}
                    name={'password'}
                    icon={'EditIcon'}
                    extraClass="mb-6"
                />
            </div>
        </section>
    )
}
