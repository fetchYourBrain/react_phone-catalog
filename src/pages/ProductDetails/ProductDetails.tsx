import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/helperToolkit";
import styles from "./ProductDetails.module.scss";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { useEffect } from "react";
import { fetchDeviceById } from "../../slices/deviceSlice";
import { DescriptionDetails } from "../../components/DescriptionDetails/DescriptionDetails";

export const ProductDetails = () => {
  const { id, category } = useParams<{ id: string; category: string }>();
  const dispatch = useAppDispatch();
  const { deviceById } = useAppSelector((state) => state.device)

  useEffect(() => {
    if (id && category) {
      dispatch(fetchDeviceById({ id, category }));
    }

  }, [id, category, dispatch]);
  
  return (
    <div className={styles.block}>
      <Breadcrumbs name={deviceById?.name} />
      <h2 className={styles.title}>{deviceById?.name}</h2>

       <DescriptionDetails/>

      {/* <ProductsRow
        products={devices}
        title="You may also like"
        hasDiscount={true}
      />*/}
    </div>
  );
};
