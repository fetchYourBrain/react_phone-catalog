import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="header__container">
        <div className="header__logo"></div>
        <nav className='header__navigation'>
          <li className='header__navigation-item'>home</li>
          <li>phones</li>
          <li>tablets</li>
          <li>accessories</li>
        </nav>
        <div className="header__favorites"></div>
        <div className="header__cart"></div>
      </div>
    </header>
  );
}

export default Header;
