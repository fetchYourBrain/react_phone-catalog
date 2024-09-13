import styles from "./Header.module.scss";
import logo from "../../../public/img/icons/logo.svg";
import burgerIcon from "../../../public/img/icons/burger-menu-icon.svg";
import favoritesIcon from "../../../public/img/icons/favorites-icon.svg";
import cartIcon from "../../../public/img/icons/cart-logo.svg";
import { NavItem } from "../NavItem/NavItem";
import { NAV_ITEMS } from "../../constants/constJS";
import { IconLink } from "../IconLink/IconLink";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <IconLink
            src={logo}
            alt="The logo of Nice Gadgets"
            className={styles.logoLink}
          />
        </div>

        <nav className={styles.navContainer}>
          <ul className={styles.navigation}>
            {NAV_ITEMS.map((item) => (
              <NavItem key={item} item={item} />
            ))}
          </ul>
        </nav>

        <div className={styles.iconsBlock}>
          <div className={styles.favorites}>
            <IconLink
              src={favoritesIcon}
              alt="The icon of favorites page"
              className={styles.favoritesButton}
            />
          </div>

          <div className={styles.cart}>
            <IconLink
              src={cartIcon}
              alt="The icon of cart page"
              className={styles.cartButton}
            />
          </div>

          <div className={styles.burgerIcon}>
            <IconLink
              src={burgerIcon}
              alt="burger-menu-icon"
              className={styles.iconLink}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
