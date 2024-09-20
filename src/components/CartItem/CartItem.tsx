import styles from "./CartItem.module.scss";
import classNames from "classnames";
import { CartProduct } from "../../types/CartProduct ";
import { useAppDispatch } from "../../hooks/helperToolkit";
import { removeItem, updateItemQuantity } from "../../slices/cartSlice";

interface Props {
  item: CartProduct;
}

export const CartItem: React.FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch();
  const { id, name, price, image, quantity } = item;

  const removeCartItemHandler = () => {
    dispatch(removeItem(id));
  };

  const handleIncrease = () => {
    dispatch(updateItemQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      dispatch(updateItemQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  return (
    <div className={styles.cart_item}>
      <div className={styles.container}>
        <div className={styles.item}>
          <button
            className={styles.button}
            aria-label="Remove item"
            onClick={removeCartItemHandler}
          >
            <div className={styles.button_image} />
          </button>
          <div className={styles.image_container}>
            <img
              className={styles.image}
              src={`${image}`}
              alt="Image of the phone"
            />
          </div>
          <p className={styles.title}>{name}</p>
        </div>
        <div className={styles.amount}>
          <div className={styles.counter}>
            <div
              className={classNames(styles.subtract_container, {
                [styles.active]: item.quantity > 1,
              })}
            >
              <button
                disabled={item.quantity <= 1}
                aria-label="Decrease quantity"
                className={classNames(styles.change_button, {
                  [styles.active]: item.quantity > 1,
                })}
                onClick={handleDecrease} 
              >
                <div
                  className={classNames(styles.subtract, {
                    [styles.active]: item.quantity > 1,
                  })}
                ></div>
              </button>
            </div>
            <div className={styles.count}>{item.quantity}</div>
            <div className={styles.add_container}>
              <button
                aria-label="Increase quantity"
                className={styles.change_button}
                onClick={handleIncrease}
              >
                <div className={styles.add}></div>
              </button>
            </div>
          </div>
          <div className={styles.value}>
            <h3>${price}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
