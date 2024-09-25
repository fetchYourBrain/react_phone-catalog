import { useState, useEffect } from "react";
import { GoBackButton } from "../../components/GoBackButton/GoBackButton";
import styles from "./CartPage.module.scss";
import { CartItem } from "../../components/CartItem/CartItem";
import { useAppDispatch, useAppSelector } from "../../hooks/helperToolkit";
import { loadCardFromStorage } from "../../slices/cartSlice";
import { CheckoutProcess } from "../../components/Checkout/Checkout";
import { CartEmpty } from "../../components/CartEmpty/CartEmpty";

export const CartPage = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  useEffect(() => {
    dispatch(loadCardFromStorage());
  }, [dispatch]);

  const totalCount = cartItems.itemsCount;
  const totalPrice = cartItems.items.reduce((acc, item) => {
    if (item.price && item.quantity) {
      return acc + item.price * item.quantity;
    }
    return acc;
  }, 0);

  useEffect(() => {
    document.body.style.overflow = isCheckoutOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCheckoutOpen]);

  const handleCheckoutClick = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className={styles.cart}>
      <div className={styles.inner}>
        <GoBackButton />

        <h1 className={styles.title}>Cart</h1>
        {totalCount === 0 ? (
          <CartEmpty />
        ) : (
          <div className={styles.cart_block_container}>
            <div>
              {cartItems.items.map((item) => (
                <CartItem item={item} key={item.id} />
              ))}
            </div>
            <div className={styles.total}>
              <div className="total__cost">
                <h2 className={styles.number}>${totalPrice}</h2>
              </div>

              <div className={styles.total__items}>
                <span className={styles.items}>
                  Total for {totalCount} items
                </span>
              </div>

              <hr className={styles.line} />

              <button
                className={styles.main_button}
                onClick={handleCheckoutClick}
              >
                <p className={styles.button_text}>Checkout</p>
              </button>
            </div>
          </div>
        )}
      </div>

      {isCheckoutOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <CheckoutProcess onClose={handleCloseCheckout} />
          </div>
        </div>
      )}
    </div>
  );
};
