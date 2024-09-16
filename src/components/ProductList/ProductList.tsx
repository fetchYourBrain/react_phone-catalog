import { useAppSelector } from "../../hooks/helperToolkit";
import { Card } from "../Card/Card";
import styles from "./ProductList.module.scss";

export const ProductList = () => {
  const { products, loading } = useAppSelector((state) => state.productList);
  return (
    <div className={styles.list}>
      {loading ? (
        <>loading</>
      ) : (
        products.map((product) => (
          <Card
            key={product.id}
            name={product.name}
            image={product.images[0]}
            capacity={product.capacity}
            price={product.priceDiscount}
            fullPrice={product.priceRegular}
            screen={product.screen}
            ram={product.ram}
            id={product.id}
            hasDiscount={true}
          />
        ))
      )}
    </div>
  );
};
