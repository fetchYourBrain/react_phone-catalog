import { CartItem } from "../../components/CartItem/CartItem";
import styles from './CartPage.module.scss';

const testingStorageArray: number[] = [];

export const CartPage = () => {
  return (
    <div className="cart">
      <div className="container">
        <div className="back_button">
          <button className="button">Back</button>
          <div className="cart-items-block">
            {testingStorageArray.map((item) => (
              <CartItem item={item} key={item}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
