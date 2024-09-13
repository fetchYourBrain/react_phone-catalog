import styles from './Card.module.scss';

export const Card: React.FC = () => {
  return (
    <div
      className={styles.card}
    >
      <div className={styles.image}>
        <img
          className={styles.card_image}
          src=''
          alt="Apple iPhone 14 Pro 128GB Silver (MQ023)"
        />
      </div>
      <h3 className={styles.title}>
        Apple iPhone 14 Pro 128GB Silver (MQ023)
      </h3>

      <p className={styles.price}>$999</p>


      <div className={styles.specifications}>
        <div className={styles.raw}>
        <p className={styles.specification}>Screen</p>
        <p className={styles.value}>6.1” OLED</p>
        </div>
        <div className={styles.raw}>
        <p className={styles.specification}>Capacity</p>
        <p className={styles.value}>128 GB</p>
        </div>
        <div className={styles.raw}>
        <p className={styles.specification}>RAM</p>
        <p className={styles.value}>6 GB</p>
        </div>
      </div>

      <div className={styles.buttons}>
        <a
          href="#"
          className={styles.add_to_cart_button}
        >
          Add to cart
        </a>
        <a
          href="#"
          className={styles.heart_icon_button}
        >
          <img src='/img/icons/heart-icon.svg' alt="Heart Icon" />
          
        </a>
      </div>
    </div>
  );
};
