import styles from "./Card.module.scss";

interface Props {
  name: string;
  image: string;
  price: number;
  fullPrice: number;
  screen: string;
  capacity: string;
  ram: string;
  hasDiscount: boolean;
}

export const Card: React.FC<Props> = ({
  name,
  image,
  capacity,
  price,
  fullPrice,
  screen,
  ram,
  hasDiscount,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img className={styles.card_image} src={image} alt={name} />
      </div>
      <h3 className={styles.title}>{name}</h3>

      <p className={styles.price}>
        ${price}{" "}
        {hasDiscount ? (
          <span className={styles.full_price}>${fullPrice}</span>
        ) : (
          ""
        )}
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
