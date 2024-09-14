import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.scss";
import { Page } from "../../types/pages";

export const ProductPage = () => {
  const { products } = useParams();
  const title =
    products === Page.Phones
      ? "Phones"
      : products === Page.Tablets
      ? "Tablets"
      : "Accessories";

  console.log(products);
  return (
    <div className={styles.block}>
      <h1>{title}</h1>
    </div>
  );
};
