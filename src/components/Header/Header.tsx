import styles from "./Header.module.scss";
import burgerIcon from "../../../public/img/icons/burger-menu-icon.svg";
import favoritesIcon from "../../../public/img/icons/favorites-icon.svg";
import cartIcon from "../../../public/img/icons/cart-logo.svg";
import { NavItem } from "../NavItem/NavItem";
import { NAV_ITEMS } from "../../constants/constJS";
import { IconLink } from "../IconLink/IconLink";
import { RoutesLink } from "../../types/routes";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link to={RoutesLink.HomePage}>
          <div className={styles.logo_icon}></div></Link>
        </div>

        <nav className={styles.navContainer}>
          <ul className={styles.navigation}>
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.name} {...item} />
            ))}
          </ul>
        </nav>

        <div className={styles.iconsBlock}>
          <div className={styles.favorites}>
            <IconLink
              to={RoutesLink.FavoritesPage}
              iconSrc={favoritesIcon}
              alt="The icon of favorites page"
              className={styles.favoritesButton}
            />
          </div>

          <div className={styles.cart}>
            <IconLink
              to={RoutesLink.CartPage}
              iconSrc={cartIcon}
              alt="The icon of cart page"
              className={styles.cartButton}
            />
          </div>

          <div className={styles.burgerIcon}>
            <IconLink
              to={RoutesLink.FavoritesPage}
              iconSrc={burgerIcon}
              alt="burger-menu-icon"
              className={styles.iconLink}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
