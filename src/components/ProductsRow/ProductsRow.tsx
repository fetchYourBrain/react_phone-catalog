import { Product } from "../../types/products";
import { Card } from "../Card/Card";
import styles from "./ProductsRow.module.scss";

interface Props {
  products: Product[];
  title: string;
}

export const ProductsRow: React.FC<Props> = ({ products, title }) => {
  return (
    <div className={styles.block}>
      <div className={styles.top_block}>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.row}>
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
