import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/helperToolkit";
import styles from "./ProductDetails.module.scss";
import { ProductsRow } from "../../components/ProductsRow/ProductsRow";

export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const products = useAppSelector((state) => state.productList.products);
  const recommended = useAppSelector((state) => state.product.products);

  const visibleProduct = products.find((product) => product.id === id);

  return (
    <div className={styles.block}>
      <h2 className={styles.title}>{visibleProduct?.name}</h2>

      {/* <ProductsRow
        products={recommended}
        title="You may also like"
        hasDiscount={true}
      /> */}
    </div>
  );
};
