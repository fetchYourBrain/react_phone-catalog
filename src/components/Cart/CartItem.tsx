import { AddButton } from "../AddButton/AddButton";
import styles from "./CartItem.module.scss";

export const CartItem = () => {
  return (
    <div className={styles.cart_item}>
      <div className={styles.container}>
        <button className={styles.button}>
        <img
            className={styles.button_image}
            src="../public/img/icons/close_card_item_button.svg"
          />
        </button>
        <div className={styles.image_container}>
          <img
            className={styles.image}
            src="../public/img/phones/apple-iphone-14/purple/00.webp"
            alt="Image of the phone"
          />
        </div>
        <h3 className={styles.title}>Apple iPhone 14 Pro 128GB Silver (MQ023)</h3>
      </div>

      <div className={styles.amount}>
        <div className={styles.counter}>
          <div className={styles.change}>
            <img src="../public/img/icons/minus-icon.svg" alt="Minus amount button" />
          </div>
          <div className={styles.count}>1</div>
        <AddButton />
        </div>
        <div className="value">
          <p>$999</p>
        </div>
      </div>
    </div>
  );
};
