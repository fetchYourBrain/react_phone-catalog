import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { NavItem} from "../NavItem/NavItem";
import { NAV_ITEMS } from "../../constants/constJS";
import { IconLink } from "../IconLink/IconLink";
import { RoutesLink } from "../../types/routes";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { useAppSelector } from "../../hooks/helperToolkit";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { loadFavoritesFromStorage } from "../../slices/favoritesSlice";
import { loadCardFromStorage } from "../../slices/cartSlice";
import { useAuth } from "../../context/AuthContext";
import { auth } from "../../firebase";
import Skeleton from "react-loading-skeleton";

export const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, loading } = useAuth();
  const favoritesCount = useAppSelector(
    (state) => state.favorites.items.length
  );
  const cartItemCount = useAppSelector((state) => state.cart.items.length);

  useEffect(() => {
    dispatch(loadFavoritesFromStorage());
    dispatch(loadCardFromStorage());
  }, [dispatch]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(() => {});
  };

  const isFavoritesPage = location.pathname === RoutesLink.FavoritesPage;
  const isCartPage = location.pathname === RoutesLink.CartPage;

  const baseColor = "#0F1121";
  const highlightColor = "#4A4D58";

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
            {loading ? (
              <div className={styles.loader}>
                <Skeleton
                  baseColor={baseColor}
                  highlightColor={highlightColor}
                  height={20}
                  width={100}
                />
              </div>
            ) : user ? (
              <>
                <button onClick={handleLogout} className={styles.signout}>
                  Sign out
                </button>
                <div
                  className={`${styles.favorites} ${
                    isFavoritesPage ? styles.active : ""
                  }`}
                >
                  <IconLink
                    to={RoutesLink.FavoritesPage}
                    iconSrc={"img/icons/favorites-icon.svg"}
                    alt="The icon of favorites page"
                    className={styles.favoritesButton}
                  />
                  {favoritesCount > 0 && (
                    <span className={styles.countBadge}>{favoritesCount}</span>
                  )}
                </div>
              </>
            ) : (
              <NavLink to="/signup" className={styles.profile}>
                <img src="img/icons/profile.svg" alt="" />
              </NavLink>
            )}

            <div
              className={`${styles.cart} ${isCartPage ? styles.active : ""}`}
            >
              <IconLink
                to={RoutesLink.CartPage}
                iconSrc={"img/icons/cart-logo.svg"}
                alt="The icon of cart page"
                className={styles.cartButton}
              />
              {cartItemCount > 0 && (
                <span className={styles.countBadge}>{cartItemCount}</span>
              )}
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
