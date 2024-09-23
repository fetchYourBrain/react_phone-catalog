import React, { useEffect, useState } from "react";
import cn from "classnames";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./ProductDetails.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/helperToolkit";
import { GoBackButton } from "../../components/Buttons/GoBackButton/GoBackButton";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { fetchDeviceById, fetchDevicesList } from "../../slices/deviceSlice";
import { Loader } from "../../components/Loader/Loader";

export const ProductDetails: React.FC = () => {
  const { id, category } = useParams<{ id: string; category: string }>();
  const dispatch = useAppDispatch();
  const { deviceById, devices } = useAppSelector((state) => state.device);
  const navigate = useNavigate();

  console.log(devices);

  // Стан для вибраного кольору, ємності та головного зображення
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedCapacity, setSelectedCapacity] = useState<string>("");
  const [mainImage, setMainImage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const currentDevice = devices.find(
    (device) => device.itemId === deviceById?.id
  );

  // Встановлюємо значення для кольору, ємності та головного зображення при зміні deviceById
  useEffect(() => {
    if (deviceById) {
      setSelectedColor(deviceById.color || "");
      setSelectedCapacity(deviceById.capacity || "");
      setMainImage(deviceById.images[0] || "");
      setLoading(false);
    }
  }, [deviceById]);

  // Завантаження пристроїв при зміні id або категорії
  useEffect(() => {
    if (category) {
      setLoading(true);
      dispatch(fetchDevicesList(category));
    }
    dispatch(fetchDeviceById({ id, category }));
  }, [id, category, dispatch]);

  // Функція для обробки зміни кольору або ємності і перенаправлення на нову сторінку
  const handleProductChange = (newColor: string, newCapacity: string) => {
    if (newColor && newCapacity && deviceById?.namespaceId) {
      const newId = `${deviceById.namespaceId}-${newCapacity.toLowerCase()}-${newColor.split(' ').join('-')}`;
      navigate(`/${category}/${newId}`);
    }
  };

  // Обробка зміни кольору
  const handleColorChange = (newColor: string) => {
    if (newColor !== selectedColor) {
      setSelectedColor(newColor);
      handleProductChange(newColor, selectedCapacity);
    }
  };

  // Обробка зміни ємності
  const handleCapacityChange = (newCapacity: string) => {
    if (newCapacity !== selectedCapacity) {
      setSelectedCapacity(newCapacity);
      handleProductChange(selectedColor, newCapacity);
    }
  };

  // Обробка кліку по мініатюрі зображення
  const handleImageClick = (image: string) => {
    setMainImage(image);
  };

  // Функція для перевірки дійсності кольору
  const isValidCssColor = (color: string) => {
    const s = new Option().style;
    s.color = color;
    return s.color !== '';
  };

  if (loading) {
    return <Loader />;
  }


  return (
    <>
      <Breadcrumbs name={deviceById?.name} />
      <GoBackButton />
      <div className={styles.block}>
        <h2 className={styles.title}>{deviceById?.name}</h2>

        <div className={styles.container_image}>
          <img
            src={mainImage}
            alt={deviceById?.name}
            className={styles.image}
          />
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
                className={styles.image}
              />
            </li>
          ))}
        </ul>
        
        <div className={styles.variant}>
          <div className={styles.colors_title_box}>
            <p className={styles.colors_title}>Available colors</p>
            <p className={styles.product_id}>
              ID: {currentDevice?.id?.toString().padStart(6, "0")}
            </p>
          </div>
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
                >
                </div>
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

          {/* Ціна та кнопка */}
          <div className={styles.price}>
            <p className={styles.discount_price}>
              ${deviceById?.priceDiscount}
            </p>
            <p className={styles.regular_price}>${deviceById?.priceRegular}</p>
          </div>
          <div className={styles.buttons}>
            <button className={styles.add_to_cart_button}>
              Add to cart
            </button>
            <button className={styles.heart_icon_button}>
              <img src="public\img\icons\heart-icon.svg" alt="Heart Icon" />
            </button>
          </div>

          {/* Характеристики телефону */}
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
      </div>
    </>
  );
};
