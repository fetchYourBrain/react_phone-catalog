import styles from './CartButton.module.scss';

export const CartButton = () => {
  return (
    <div className={styles.button_container}>
    <button className={styles.button}>
      <p className={styles.button_text}>Checkout</p>
    </button>
  </div>
  )
}