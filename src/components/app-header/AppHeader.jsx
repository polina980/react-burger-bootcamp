import React from 'react';
import styles from './AppHeader.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

export default function AppHeader() {
  return (
    <header className={styles.header}>
      <ul className={styles.navigation}>
        <li className={styles.constructor}>
          <BurgerIcon type="primary" />
          <p className='text text_type_main-default ml-2'>Конструктор</p>
        </li>
        <li className={styles.orders}>
          <ListIcon type="secondary" />
          <p className='text text_type_main-default ml-2 text_color_inactive'>Лента заказов</p>
        </li>
        <li className={styles.logo}>
          <Logo />
        </li>
        <li className={styles.empty}>

        </li>
        <li className={styles.account}>
          <ProfileIcon type="secondary" />
          <p className='text text_type_main-default ml-2 text_color_inactive'>Личный кабинет</p>
        </li>
      </ul>
    </header>
  )
}