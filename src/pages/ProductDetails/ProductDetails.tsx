import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/helperToolkit";
import styles from "./ProductDetails.module.scss";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { useEffect } from "react";
import { fetchDeviceById } from "../../slices/deviceSlice";

export const ProductDetails = () => {
  const { id, category } = useParams<{ id: string; category: string }>();
  const dispatch = useAppDispatch();
  const device = useAppSelector((state) => state.device.deviceById);

  useEffect(() => {
    if (id && category) {
      dispatch(fetchDeviceById({ id, category }));
    }
  }, [id, category, dispatch]);

  return (
    <div className={styles.block}>
      <Breadcrumbs name={device?.name} />
      <h2 className={styles.title}>{device?.name}</h2>

      {/* <ProductsRow
        products={recommended}
        title="You may also like"
        hasDiscount={true}
      /> */}
    </div>
  );
};
