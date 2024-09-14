import { Product } from "../../types/products";
import styles from "./Card.module.scss";

export const Card: React.FC<Product> = ({
  name,
  price,
  fullPrice,
  capacity,
  ram,
  screen,
  image,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img className={styles.card_image} src={image} alt={name} />
      </div>
      <h3 className={styles.title}>{name}</h3>

      <p className={styles.price}>
        ${price} <span className={styles.full_price}>${fullPrice}</span>
      </p>

      <div className={styles.specifications}>
        <div className={styles.row}>
          <p className={styles.specification}>Screen</p>
          <p className={styles.value}>{screen}</p>
        </div>
        <div className={styles.row}>
          <p className={styles.specification}>Capacity</p>
          <p className={styles.value}>{capacity}</p>
        </div>
        <div className={styles.row}>
          <p className={styles.specification}>RAM</p>
          <p className={styles.value}>{ram}</p>
        </div>
      </div>

      <div className={styles.buttons}>
        <a href="#" className={styles.add_to_cart_button}>
          Add to cart
        </a>
        <a href="#" className={styles.heart_icon_button}>
          <img src="/img/icons/heart-icon.svg" alt="Heart Icon" />
        </a>
      </div>
    </div>
  );
};
