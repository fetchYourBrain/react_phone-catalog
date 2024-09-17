import { useState } from "react";
import styles from "./CartItem.module.scss";
import classNames from "classnames";

export const CartItem = () => {
  const [count, setCount] = useState(1);
  const price = 999;
  const value = count * price;
  return (
    <div className={styles.cart_item}>
      <div className={styles.container}>
        <div className={styles.item}>
          <button className={styles.button} aria-label="Remove item">
            <div className={styles.button_image} />
          </button>
          <div className={styles.image_container}>
            <img
              className={styles.image}
              src="../public/img/phones/apple-iphone-14/purple/00.webp"
              alt="Image of the phone"
            />
          </div>
          <p className={styles.title}>
            Apple iPhone 14 Pro 128GB Silver (MQ023)
          </p>
        </div>
        <div className={styles.amount}>
          <div className={styles.counter}>
            <div
              className={classNames(styles.subtract_container, {
                [styles.active]: count > 1,
              })}
            >
              <button
                disabled={count <= 1}
                aria-label="Decrease quantity"
                className={classNames(styles.change_button, {
                  [styles.active]: count > 1,
                })}
                onClick={() => setCount((prev) => prev - 1)}
              >
                <div
                  className={classNames(styles.subtract, {
                    [styles.active]: count > 1,
                  })}
                ></div>
              </button>
            </div>
            <div className={styles.count}>{count}</div>
            <div className={styles.add_container}>
              <button
              aria-label="Increase quantity"
                className={styles.change_button}
                onClick={() => setCount((prev) => prev + 1)}
              >
                <div className={styles.add}></div>
              </button>
            </div>
          </div>
          <div className={styles.value}>
            <h3>${value}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
