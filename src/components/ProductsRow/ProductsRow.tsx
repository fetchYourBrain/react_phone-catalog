import { Product } from "../../types/products";
import { Card } from "../Card/Card";
import { Carousel } from "../Slider/Carousel";
import styles from "./ProductsRow.module.scss";

interface Props {
  products: Product[];
  hasDiscount: boolean;
}

export const ProductsRow: React.FC<Props> = ({ products, hasDiscount }) => {
  return (
    <div className={styles.block}>
      <div className={styles.top_block}></div>
      <div className={styles.row}>
        {!hasDiscount ? (
          <Carousel title="Brand new models">
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
                itemId={product.itemId}
                hasDiscount={hasDiscount}
                category={product.category}
                id={product.id}
              />
            ))}
          </Carousel>
        ) : (
          <Carousel title="Hot prices">
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
                itemId={product.itemId}
                hasDiscount={hasDiscount}
                category={product.category}
                id={product.id}
              />
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};
