import React from "react";
import styles from './CartEmpty.module.scss';
import emptyCartImage from "../../../public/img/cart-is-empty.png";
import { Link } from "react-router-dom";
import { RoutesLink } from "../../types/routes";

export const CartEmpty: React.FC = () => {
    return (
        <div className={styles.cart_empty_container}>
            <div className={styles.img_container}>
                <img src={emptyCartImage} alt="Cart is empty" className={styles.empty_cart_img}/>
            </div>
            <h2 className={styles.empty_cart_title}>Your cart is snoozing... <br /> Time to wake it up with some items!</h2>
            <Link to={RoutesLink.HomePage} className={styles.go_back}>
        Shop now
      </Link>
        </div>
    );
};