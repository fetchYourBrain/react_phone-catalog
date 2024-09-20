import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/helperToolkit";
import styles from "./ProductDetails.module.scss";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";

export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const products = useAppSelector((state) => state.device.devices);

  const visibleProduct = products.find((product) => product.itemId === id);

  return (
    <div className={styles.block}>
      <Breadcrumbs name={visibleProduct?.name} />
      <h2 className={styles.title}>{visibleProduct?.name}</h2>

      {/* <ProductsRow
        products={recommended}
        title="You may also like"
        hasDiscount={true}
      /> */}
    </div>
  );
};
