import React, { useEffect, useState } from "react";
import cn from "classnames";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./ProductDetails.module.scss";
import { useAppSelector } from "../../hooks/helperToolkit";
import { GoBackButton } from "../../components/Buttons/GoBackButton/GoBackButton";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const products = useAppSelector((state) => state.device.devices);
  const navigate = useNavigate();
  // const products = useAppSelector((state) => state.productList.products);

  const visibleProduct = products.find((product) => product.itemId === id);
  // const visibleProduct = products.find((product) => product.id === id);
  
    const {
      name,
      images,
      priceRegular,
      priceDiscount,
      color,
      colorsAvailable,
      capacity,
      capacityAvailable,
      screen,
      resolution,
      processor,
      ram,
    } = visibleProduct;

  // Стан для вибраного кольору, ємності та головного зображення
  const [selectedColor, setSelectedColor] = useState(color);
  const [selectedCapacity, setSelectedCapacity] = useState(capacity);
  const [mainImage, setMainImage] = useState(images[0]);

  // Функція для пошуку продукту за новим кольором та ємністю
  const findProductByAttributes = (newColor: string, newCapacity: string) => {
    return products.find(
      (product) => product.color === newColor && product.capacity === newCapacity
    );
  };

  // Встановлюємо перше зображення як головне
  useEffect(() => {
    if (visibleProduct) {
      setMainImage(visibleProduct.images[0]);
    }
  }, [visibleProduct]);


  // Функція для обробки зміни кольору або ємності і перенаправлення на нову сторінку
  const handleProductChange = (newColor: string, newCapacity: string) => {
    const newProduct = findProductByAttributes(newColor, newCapacity);
    if (newProduct) {
      navigate(`/product/${newProduct.id}`);
      // Після навігації React автоматично перезавантажить компонент з новим продуктом
    }
  };

  // Обробка зміни кольору
  const handleColorChange = (newColor: string) => {
    setSelectedColor(newColor);
    handleProductChange(newColor, selectedCapacity); // Перенаправлення при зміні кольору
  };

  // Обробка зміни ємності
  const handleCapacityChange = (newCapacity: string) => {
    setSelectedCapacity(newCapacity);
    handleProductChange(selectedColor, newCapacity); // Перенаправлення при зміні ємності
  };

  // Обробка кліку по мініатюрі зображення
  const handleImageClick = (image: string) => {
    setMainImage(image);
  };

  return (
    <div className={styles.block}>
      <Breadcrumbs name={visibleProduct?.name} />
      <GoBackButton />
      {/* <h2 className={styles.title}>{visibleProduct?.name}</h2> */}
      <h2 className={styles.title}>
        {name}
      </h2>

      <ul className={styles.wrapper}>
        <li className={styles.container_image}>
          <img
            src={mainImage}
            alt={name}
            className={styles.image}
          />
        </li>
        <li>
          <ul className={styles.collection}>
            {images.map((image) => (
              <li
                key={image}
                className={cn(styles.collection_item,
                  { [styles.is_active]: image === mainImage })}
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={image}
                  alt={name}
                  className={styles.image}
                />
              </li>
            ))}
          </ul>
        </li>
        <li>
          <div className={styles.colors_title_box}>
            <p className={styles.colors_title}>Available colors</p>
            <p className={styles.product_id}>ID: {id}</p>
          </div>
          <ul className={styles.color_list}>
            {colorsAvailable.map(colorOption => (
              <li
                key={colorOption} 
                className={cn(styles.color_wrapper,
                  { [styles.active_color]: colorOption === selectedColor })}
                onClick={() => handleColorChange(colorOption)}
              >
                <div 
                  className={styles.color_item}
                  style={{ backgroundColor: colorOption }}
                >
                </div>
              </li>
            ))}
          </ul>

          <p className={styles.capacity_title}>Select capacity</p>
          <ul className={styles.capacity_list}>
            {capacityAvailable.map(memory => (
              <li
                key={memory}
                className={cn(styles.capacity_item,
                  { [styles.active_capacity]: memory === selectedCapacity })}
                onClick={() => handleCapacityChange(memory)}
              >
                {memory}
              </li>
            ))}
          </ul>

          {/* Ціна та кнопка */}
            <div className={styles.price}>
              <p className={styles.discount_price}>${priceDiscount}</p>
              <p className={styles.regular_price}>${priceRegular}</p>
            </div>
            <div className={styles.buttons}>
              <a href="#" className={styles.add_to_cart_button}>
                Add to cart
              </a>
              <a href="#" className={styles.heart_icon_button}>
                <img src="/img/icons/heart-icon.svg" alt="Heart Icon" />
              </a>
            </div>

          {/* Характеристики телефону */}
          <section className={styles.specs}>
            <div className={styles.specs_box}>
              <p className={styles.specs_title}>Screen:</p>
              <p className={styles.specs_desc}>{screen}</p>
            </div>
            <div className={styles.specs_box}>
              <p className={styles.specs_title}>Resolution:</p>
              <p className={styles.specs_desc}>{resolution}</p>
            </div>
            <div className={styles.specs_box}>
              <p className={styles.specs_title}>Processor:</p>
              <p className={styles.specs_desc}>{processor}</p>
            </div>
            <div className={styles.specs_box}>
              <p className={styles.specs_title}>RAM: </p>
              <p className={styles.specs_desc}>{ram}</p>
            </div>
          </section>
        </li>
      </ul>
    </div>
  );
};

      {/* <ProductsRow
        products={recommended}
        title="You may also like"
        hasDiscount={true}
      /> */}
