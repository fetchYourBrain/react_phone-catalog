import { useAppSelector } from "../../hooks/helperToolkit";
import { Card } from "../Card/Card";
import styles from "./ProductsRow.module.scss";

export const ProductsRow = () => {
  const products = useAppSelector((state) => state.product.products);

  return (
    <div className={styles.block}>
      <div className={styles.top_block}>
        <h2 className={styles.title}>Brand new models</h2>
      </div>
      <div className={styles.row}>
        {products.slice(0, 20).map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
