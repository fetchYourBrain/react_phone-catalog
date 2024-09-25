import { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./VariantDetails.module.scss";
import { Devices, MergedDevice } from "../../types/devices";
import { useAuth } from "../../context/AuthContext";
import { useAppDispatch, useAppSelector } from "../../hooks/helperToolkit";
import { addItemToCart } from "../../slices/cartSlice";
import { addItemToFavorites, removeItemFromFavorites } from "../../slices/favoritesSlice";

interface Props {
  currentDevice: MergedDevice;
  deviceById: Devices;
  mainImage: string;
  selectedCapacity: string;
  selectedColor: string;
  handleColorChange: (newColor: string) => void;
  handleCapacityChange: (newCapacity: string) => void;
  handleImageClick: (image: string) => void;
}

export const VariantDetails: React.FC<Props> = ({
  currentDevice,
  deviceById,
  mainImage,
  selectedCapacity,
  selectedColor,
  handleColorChange,
  handleCapacityChange,
  handleImageClick,
}) => {
  const {user} = useAuth();
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const favorites = useAppSelector((state) => state.favorites.items);
  const isFavorited = favorites.some(item => item.id === currentDevice.id);
  const cartItems = useAppSelector((state) => state.cart.items);
  const isInCart = cartItems.some((item) => item.id === currentDevice.id);
  const dispatch = useAppDispatch();

  const isValidCssColor = (color: string) => {
    const styleColor = new Option().style;
    styleColor.color = color;
    return styleColor.color !== "";
  };


  useEffect(() => {
    setIsClicked(isInCart);
  }, [isInCart]);

  const addToCartHandler = () => {
    const product = {
      id: currentDevice.id,
      name: currentDevice.name,
      price: currentDevice.priceDiscount,
      image: currentDevice.images[0],
      itemId: currentDevice.itemId,
      category: currentDevice.category,
    };

    dispatch(addItemToCart({ item: product }));
    setIsClicked(true);
  }

  const toggleFavoritesHandler = () => {
    const product = {
      id: currentDevice.id,
      name: currentDevice.name,
      price: currentDevice.priceDiscount,
      image: currentDevice.images[0],
      itemId: currentDevice.itemId,
      category: currentDevice.category,
      ram: currentDevice.ram,
      screen: currentDevice.screen,
      capacity: currentDevice.capacity,
    };

    if (isFavorited) {
      dispatch(removeItemFromFavorites(currentDevice.id));
    } else {
      dispatch(addItemToFavorites({ item: product }));
    }
  }

  return (
    <>
      <div className={styles.container_image}>
        <img src={mainImage} alt={deviceById?.name} className={styles.image} />
      </div>

      <ul className={styles.collection}>
        {deviceById?.images.map((image) => (
          <li
            key={image}
            className={cn(styles.collection_item, {
              [styles.is_active]: image === mainImage,
            })}
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image}
              alt={deviceById?.name}
              className={styles.collection_image}
            />
          </li>
        ))}
      </ul>

      <div className={styles.colors_title_box}>
        <p className={styles.colors_title}>Available colors</p>
        <p className={styles.product_id}>
          ID: {currentDevice?.id?.toString().padStart(6, "0")}
        </p>
      </div>

      <div className={styles.variant}>
        <ul className={styles.color_list}>
          {deviceById?.colorsAvailable.map((colorOption) => (
            <li
              key={colorOption}
              className={cn(styles.color_wrapper, {
                [styles.active_color]: colorOption === selectedColor,
              })}
              onClick={() => handleColorChange(colorOption)}
            >
              <div
                className={styles.color_item}
                style={{
                  backgroundColor: isValidCssColor(colorOption)
                    ? colorOption
                    : "black",
                }}
              ></div>
            </li>
          ))}
        </ul>

        <p className={styles.capacity_title}>Select capacity</p>
        <ul className={styles.capacity_list}>
          {deviceById?.capacityAvailable.map((memory) => (
            <li
              key={memory}
              className={cn(styles.capacity_item, {
                [styles.active_capacity]: memory === selectedCapacity,
              })}
              onClick={() => handleCapacityChange(memory)}
            >
              {memory}
            </li>
          ))}
        </ul>

        <div className={styles.price}>
          <p className={styles.discount_price}>${deviceById?.priceDiscount}</p>
          <p className={styles.regular_price}>${deviceById?.priceRegular}</p>
        </div>
        <div className={styles.buttons}>
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

        <section className={styles.specs}>
          <div className={styles.specs_box}>
            <p className={styles.specs_title}>Screen:</p>
            <p className={styles.specs_desc}>{deviceById?.screen}</p>
          </div>
          <div className={styles.specs_box}>
            <p className={styles.specs_title}>Resolution:</p>
            <p className={styles.specs_desc}>{deviceById?.resolution}</p>
          </div>
          <div className={styles.specs_box}>
            <p className={styles.specs_title}>Processor:</p>
            <p className={styles.specs_desc}>{deviceById?.processor}</p>
          </div>
          <div className={styles.specs_box}>
            <p className={styles.specs_title}>RAM: </p>
            <p className={styles.specs_desc}>{deviceById?.ram}</p>
          </div>
        </section>
      </div>
    </>
  );
};
