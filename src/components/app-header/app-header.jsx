import React from 'react';
import styles from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export default function AppHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.headerNavigation}>
        <ul className={styles.navigationList}>
          <div style={{ display: 'flex' }}>
            <li className={styles.constructor}>
              <BurgerIcon type="primary" />
              <a href='#' className='text text_type_main-default ml-2' style={{ textDecoration: 'none', color: '#fff' }}>Конструктор</a>
            </li>
            <li className={styles.orders}>
              <ListIcon type="secondary" />
              <a href='#' className='text text_type_main-default ml-2 text_color_inactive' style={{ textDecoration: 'none' }}>Лента заказов</a>
            </li>
          </div>
          <li className={styles.logo}>
            <Logo />
          </li>
          <li className={styles.account}>
            <ProfileIcon type="secondary" />
            <a href='#' className='text text_type_main-default ml-2 text_color_inactive' style={{ textDecoration: 'none' }}>Личный кабинет</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}