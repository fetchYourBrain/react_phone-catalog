import styles from './BurgerMenu.module.scss';
import logo from "../../../public/img/icons/logo.svg";
import closeButton from '../../../public/img/icons/close-button-icon.svg';
import heartIcon from '../../../public/img/icons/heart-icon.svg';
import cartIcon from '../../../public/img/icons/cart-logo.svg';
import { IconLink } from "../IconLink/IconLink";
import { NAV_ITEMS } from '../../constants/constJS';
import { NavItem } from '../NavItem/NavItem';

export const BurgerMenu: React.FC = () => {
  return (
    <>
    <div className={styles.top}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <IconLink
            src={logo}
            alt="The logo of Nice Gadgets"
            className={styles.logoLink}
          />
        </div>

          <div className={styles.close}>
            <IconLink
              src={closeButton}
              alt="Close menu button"
              className={styles.icon}
            />
          </div>
      </div>
    </div>

    <nav className={styles.nav}>
      <ul className={styles.list}>
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.name} {...item} />
        ))}
      </ul>
    </nav>

    <div className={styles.bottom}>
        <div className={styles.button}>
          <IconLink
            src={heartIcon}
            alt="Favorites"
            className={styles.icon}
          />
        </div>
        <div className={styles.button}>
          <IconLink
            src={cartIcon}
            alt="Cart"
            className={styles.icon}
          />
        </div>
      </div>
    </>
  );
};