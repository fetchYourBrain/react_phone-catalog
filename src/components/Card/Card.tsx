import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/helperToolkit";
import {  addItemToCart } from "../../slices/cartSlice";
import { useEffect, useState } from "react";
import { addItemToFavorites, removeItemFromFavorites } from "../../slices/favoritesSlice";
import { auth } from "../../firebase";

interface Props {
  name: string;
  image: string;
  price: number;
  fullPrice: number;
  screen: string;
  capacity: string;
  ram: string;
  hasDiscount: boolean;
  itemId: string;
  category: string;
  id: number;
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
  id,
}) => {
  const user = auth.currentUser;
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const favorites = useAppSelector((state) => state.favorites.items);
  const isFavorited = favorites.some(item => item.id === id);
  const cartItems = useAppSelector((state) => state.cart.items);
  const isInCart = cartItems.some((item) => item.id === id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsClicked(isInCart);
  }, [isInCart]);

  const addToCartHandler = () => {
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

  const toggleFavoritesHandler = () => {
    const product = {
      id,
      name,
      price,
      image,
      itemId,
      category,
      ram,
      screen,
      capacity
    };

    if (isFavorited) {
      dispatch(removeItemFromFavorites(id));
    } else {
      dispatch(addItemToFavorites({ item: product }));
    }
  }

  return (
    <div className={styles.card}>
      <Link to={`/${category}/${itemId}`} className={styles.image}>
        <img className={styles.card_image} src={image} alt={name} />
      </Link>
      <Link to={`/${category}/${itemId}`} className={styles.card_title}>
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

      <div className={styles.buttons} >
      <button
          onClick={addToCartHandler}
          className={styles.add_to_cart_button}
        >
          {isClicked ? "Added to Cart" : "Add to cart"}
        </button>
        {user && (
          <button
          onClick={toggleFavoritesHandler} 
          className={isFavorited ? styles.favorited_button : styles.heart_icon_button}>
        <img src={isFavorited ? "img/icons/red-heart.svg" : "img/icons/heart-icon.svg"} alt="Heart Icon" />
      </button>
        )}
      </div>
    </div>
  );
};
