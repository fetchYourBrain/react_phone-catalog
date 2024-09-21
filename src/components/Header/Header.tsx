import { useState } from "react";
import styles from "./Header.module.scss";
import { NavItem } from "../NavItem/NavItem";
import { NAV_ITEMS } from "../../constants/constJS";
import { IconLink } from "../IconLink/IconLink";
import { RoutesLink } from "../../types/routes";
import { Link } from "react-router-dom";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <Link to={RoutesLink.HomePage}>
              <div className={styles.logo_icon}></div>
            </Link>
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
                iconSrc={"img/icons/favorites-icon.svg"}
                alt="The icon of favorites page"
                className={styles.favoritesButton}
              />
            </div>

            <div className={styles.cart}>
              <IconLink
                to={RoutesLink.CartPage}
                iconSrc={"img/icons/cart-logo.svg"}
                alt="The icon of cart page"
                className={styles.cartButton}
              />
            </div>

            <div className={styles.burgerIcon} onClick={toggleMenu}>
              <IconLink
                to="#"
                iconSrc={"img/icons/burger-menu-icon.svg"}
                alt="burger-menu-icon"
                className={styles.iconLink}
              />
            </div>
          </div>
        </div>
      </header>

      <div className={`${styles.side_menu} ${isMenuOpen ? styles.open : ""}`}>
        <div className={styles.menu_content}>
          <BurgerMenu onClose={closeMenu} />
        </div>
      </div>
    </>
  );
};
