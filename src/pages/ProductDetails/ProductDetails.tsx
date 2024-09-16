import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/helperToolkit";
import styles from "./ProductDetails.module.scss";

export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const products = useAppSelector((state) => state.productList.products);

  const visibleProduct = products.find((product) => product.id === id);

  return <div className={styles.block}>{visibleProduct?.name}</div>;
};
