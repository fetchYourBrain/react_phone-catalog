import styles from './CardLayout.module.css';
import iphoneImage from '../../images/iphone.jpg';
import heartIcon from '../../images/heart-icon.svg'

export const CardLayout = () => {
  return (
    <div
      className={styles.card}
    >
      <div розміри, відступи>
        <img
          className={styles.card__image}
          src={iphoneImage}
          alt="Apple iPhone 14 Pro 128GB Silver (MQ023)"
        />
      </div>
      <h3 className={styles.card__title}>
      Apple iPhone 14 Pro 128GB Silver (MQ023)
      </h3>

      <p className={styles.card__price}>$999</p>


      <div className={styles.card__specifications}>
        <div className={styles.card__specificationRaw}>
        <p className={styles.card__specification}>Screen</p>
        <p className={styles.card__specificationValue}>6.1” OLED</p>
        </div>
        <div className={styles.card__specificationRaw}>
        <p className={styles.card__specification}>Capacity</p>
        <p className={styles.card__specificationValue}>128 GB</p>
        </div>
        <div className={styles.card__specificationRaw}>
        <p className={styles.card__specification}>RAM</p>
        <p className={styles.card__specificationValue}>6 GB</p>
        </div>
      </div>

      <div className={styles.card__buttons}>
        <a
          href="#"
          className={styles.card__addToCartButton}
        >
          Add to cart
        </a>
        <a
          href="#"
          className={styles.card__heartIconButton}
        >
          <img src={heartIcon} alt="Heart Icon" />
          
        </a>
      </div>
    </div>
  );
};
