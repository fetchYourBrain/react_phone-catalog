import styles from './Header.module.scss';
import logo from '../../../public/img/icons/nice-gadgets-logo.png';
import burger_icon from '../../../public/img/icons/burger-menu-icon.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className="logo-container">
            <a className="logo-link">
              <img src={logo} alt="The logo of Nice Gadgets" />
            </a>
        </div>
        <div className="burger-icon">
          <div className="icon">
            <a className='icon-link'>
              <img src={burger_icon} alt="burger-menu-icon" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
