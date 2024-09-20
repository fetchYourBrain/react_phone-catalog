import { GoBackButton } from "../../components/Buttons/GoBackButton/GoBackButton";
import styles from "./CartPage.module.scss";
import { CartItem } from "../../components/CartItem/CartItem";
import { useAppDispatch, useAppSelector } from "../../hooks/helperToolkit";
import { useEffect } from "react";
import { loadCardFromStorage } from "../../slices/cartSlice";

export const CartPage = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart);

  useEffect(() => {
    dispatch(loadCardFromStorage());
  }, [dispatch]);

  const totalCount = cartItems.itemsCount;
  const totalPrice = cartItems.items.reduce((acc, item) => {
    if (item.price && item.quantity) {
      return acc + (item.price * item.quantity);
    }
    return acc;
  }, 0);

  return (
    <div className={styles.cart}>
      <div className={styles.inner}>
        <GoBackButton />

        <h1 className={styles.title}>Cart</h1>
        {totalCount === 0 ? (
          <div className={styles.emptyCart}>Ваш кошик порожній</div>
        ) : (
          <div className={styles.cart_block_container}>
            <div>
              {cartItems.items.map((item) => (
                <CartItem 
                item={item} 
                key={item.id} 
                />
              ))}
            </div>
            <div className={styles.total}>
              <div className="total__cost">
                <h2 className={styles.number}>${totalPrice}</h2>
              </div>

              <div className={styles.total__items}>
                <span className={styles.items}>Total for {totalCount} items</span>
              </div>

              <hr className={styles.line} />

              <button className={styles.main_button}>
                <p className={styles.button_text}>Checkout</p>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
