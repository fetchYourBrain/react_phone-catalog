import { Product } from "../../types/products";
import { Card } from "../Card/Card";
import styles from "./ProductsRow.module.scss";

interface Props {
  products: Product[];
  title: string;
  hasDiscount: boolean;
}

export const ProductsRow: React.FC<Props> = ({
  products,
  title,
  hasDiscount,
}) => {
  return (
    <div className={styles.block}>
      <div className={styles.top_block}>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.row}>
        {products.map((product) => (
          <Card
            key={product.id}
            name={product.name}
            image={product.image}
            capacity={product.capacity}
            price={product.price}
            fullPrice={product.fullPrice}
            screen={product.screen}
            ram={product.ram}
            id={product.id}
            itemId={product.itemId}
            hasDiscount={hasDiscount}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};
