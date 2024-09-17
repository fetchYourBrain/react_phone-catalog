import { GoBackButton } from "../../components/Buttons/GoBackButton/GoBackButton";
import styles from "./CartPage.module.scss";
import { CartButton } from "../../components/Buttons/CartButton/CartButton";
import { CartItem } from "../../components/Cart/CartItem";

const testingStorageArray: number[] = [1, 2, 3, 4, 5];

export const CartPage = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.inner}>
        <GoBackButton />

        <h1 className={styles.title}>Cart</h1>
        <div className={styles.cart_block_container}>
          <div>
            {testingStorageArray.map((item) => (
              <CartItem key={item} />
            ))}
          </div>
          <div className={styles.total}>
            <div className="total__cost">
              <h2 className={styles.number}>$2657</h2>
            </div>

            <div className={styles.total__items}>
              <span className={styles.items}>Total for 3 items</span>
            </div>

            <hr className={styles.line} />

            <button className={styles.main_button}>
              <p className={styles.button_text}>Checkout</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
