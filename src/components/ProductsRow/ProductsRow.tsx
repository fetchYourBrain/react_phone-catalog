import { MergedDevice } from "../../types/devices";
import { Product } from "../../types/products";
import { Card } from "../Card/Card";
import { Carousel } from "../Slider/Carousel";
import styles from "./ProductsRow.module.scss";

interface Props {
  products: Product[] | MergedDevice[];
  hasDiscount: boolean;
  title: string,
}

export const ProductsRow: React.FC<Props> = ({ products, hasDiscount, title }) => {
  return (
    <div className={styles.block}>
      <div className={styles.top_block}></div>
      <div className={styles.row}>
          <Carousel title={title}>
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
      </div>
    </div>
  );
};
