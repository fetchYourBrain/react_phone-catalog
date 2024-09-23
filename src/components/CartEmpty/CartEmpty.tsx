import React from "react";
import styles from './CartEmpty.module.scss';
import emptyCartImage from "../../../public/img/cart-is-empty.png";

export const CartEmpty: React.FC = () => {
    return (
        <div className={styles.cart_empty_container}>
            <div className={styles.img_container}>
                <img src={emptyCartImage} alt="Cart is empty" className={styles.empty_cart_img}/>
            </div>
            <h2 className={styles.empty_cart_title}>Your cart is currently empty</h2>
        </div>
    );
};