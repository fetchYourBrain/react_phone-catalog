import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./ProductDetails.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/helperToolkit";
import { GoBackButton } from "../../components/GoBackButton/GoBackButton";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { fetchDeviceById, fetchDevicesList } from "../../slices/deviceSlice";
import { Loader } from "../../components/Loader/Loader";
import { VariantDetails } from "../../components/VariantDetails/VariantDetails";

export const ProductDetails: React.FC = () => {
  const { id, category } = useParams<{ id: string; category: string }>();
  const dispatch = useAppDispatch();
  const { deviceById, devices } = useAppSelector((state) => state.device);
  const navigate = useNavigate();

  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedCapacity, setSelectedCapacity] = useState<string>("");
  const [mainImage, setMainImage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const currentDevice = devices.find(
    (device) => device.itemId === deviceById?.id
  );

  useEffect(() => {
    if (deviceById) {
      setSelectedColor(deviceById.color || "");
      setSelectedCapacity(deviceById.capacity || "");
      setMainImage(deviceById.images[0] || "");
      setLoading(false);
    }
  }, [deviceById]);

  useEffect(() => {
    if (category) {
      setLoading(true);
      dispatch(fetchDevicesList(category)).then(() => {
        dispatch(fetchDeviceById({ id, category })).finally(() => {
          setLoading(false);
        });
      });
    }
  }, [id, category, dispatch]);

  const handleProductChange = (newColor: string, newCapacity: string) => {
    if (newColor && newCapacity && deviceById?.namespaceId) {
      const newId = `${deviceById.namespaceId}-${newCapacity.toLowerCase()}-${newColor.split(' ').join('-')}`;
      navigate(`/${category}/${newId}`);
    }
  };

  const handleColorChange = (newColor: string) => {
    if (newColor !== selectedColor) {
      setSelectedColor(newColor);
      handleProductChange(newColor, selectedCapacity);
    }
  };

  const handleCapacityChange = (newCapacity: string) => {
    if (newCapacity !== selectedCapacity) {
      setSelectedCapacity(newCapacity);
      handleProductChange(selectedColor, newCapacity);
    }
  };

  const handleImageClick = (image: string) => {
    setMainImage(image);
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

        <VariantDetails 
          currentDevice={currentDevice}
          deviceById={deviceById}
          mainImage={mainImage}
          selectedCapacity={selectedCapacity}
          selectedColor={selectedColor}
          handleColorChange={handleColorChange}
          handleCapacityChange={handleCapacityChange}
          handleImageClick={handleImageClick}
        />
      </div>
    </>
  );
};
