import React from "react";
import classNames from "classnames";
import styles from "./BurgerMenu.module.scss";
import { IconLink } from "../IconLink/IconLink";
import { NAV_ITEMS } from "../../constants/constJS";
import { NavItem } from "../NavItem/NavItem";
import { RoutesLink } from "../../types/routes";
import { Link, useLocation } from "react-router-dom";

interface BurgerMenuProps {
  onClose: () => void;
}

const styledActive = (path: string, currentPath: string) =>
  classNames(styles.button, {
    [styles.active]: currentPath === path,
  });

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ onClose }) => {
  const location = useLocation();

  return (
    <>
      <div className={styles.top} onClick={onClose}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link to={RoutesLink.HomePage}>
              <div className={styles.logo_icon}></div>
            </Link>
          </div>

          <div className={styles.close} onClick={onClose}>
            <IconLink
              to="#"
              iconSrc="img/icons/close-button-icon.svg"
              alt="Close menu button"
              className={styles.icon}
            />
          </div>
        </div>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.list}>
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.name} {...item} onClick={onClose} />
          ))}
        </ul>
      </nav>

      <div className={styles.bottom}>
        <div
          className={styledActive(RoutesLink.FavoritesPage, location.pathname)}
          onClick={onClose}
        >
          <IconLink
            to={RoutesLink.FavoritesPage}
            iconSrc="img/icons/heart-icon.svg"
            alt="Favorites"
            className={styles.icon}
          />
        </div>
        <div
          className={styledActive(RoutesLink.CartPage, location.pathname)}
          onClick={onClose}
        >
          <IconLink
            to={RoutesLink.CartPage}
            iconSrc="img/icons/cart-logo.svg"
            alt="Cart"
            className={styles.icon}
          />
        </div>
      </div>
    </>
  );
};
