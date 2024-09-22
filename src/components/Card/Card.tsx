import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import { useAppDispatch } from "../../hooks/helperToolkit";
import {  addItemToCart } from "../../slices/cartSlice";
import { useState } from "react";

interface Props {
  name: string;
  image: string;
  price: number;
  fullPrice: number;
  screen: string;
  capacity: string;
  ram: string;
  hasDiscount: boolean;
  itemId: string,
  category: string,
  id: number,
  
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
  itemId,
  category,
  id
}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const dispatch = useAppDispatch();

const addToCartHandler = () => {
  if (isClicked) {
    return;
  };

  const product = {
    id,
    name,
    price,
    image,
    itemId,
    category,

  };
console.log(product);
  dispatch(addItemToCart({ item: product }));
  setIsClicked(true);
}

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img className={styles.card_image} src={image} alt={name} />
      </div>
      <Link to={`/${category}/${itemId}`}>
        <h3 className={styles.title}>{name}</h3>
      </Link>

      <h3 className={styles.price}>
        ${price}{" "}
        {hasDiscount ? (
          <span className={styles.full_price}>${fullPrice}</span>
        ) : (
          ""
        )}
      </h3>

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

      <div className={styles.buttons} onClick={addToCartHandler}>
      <button
          onClick={addToCartHandler}
          className={isClicked ? styles.disabledButton : styles.add_to_cart_button}
          disabled={isClicked}
        >
          {isClicked ? "Added to Cart" : "Add to cart"}
        </button>
        <a href="#" className={styles.heart_icon_button}>
          <img src="img/icons/heart-icon.svg" alt="Heart Icon" />
        </a>
      </div>
    </div>
  );
};
