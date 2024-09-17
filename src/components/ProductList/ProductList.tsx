import { useAppSelector } from "../../hooks/helperToolkit";
import { Card } from "../Card/Card";
import styles from "./ProductList.module.scss";
import { usePagination } from "../../hooks/usePagination";
import { Pagination } from "../Pagination/Pagination";

export const ProductList = () => {
  const { products, loading } = useAppSelector((state) => state.productList);
  const {
    visibleProducts,
    nextPage,
    prevPage,
    numbers,
    changeCurrentPage,
    currentPage,
  } = usePagination(products, 8);
  return (
    <>
      <div className={styles.list}>
        {loading ? (
          <>loading</>
        ) : (
          visibleProducts.map((product) => (
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
      <Pagination
        nextPage={nextPage}
        prevPage={prevPage}
        numbers={numbers}
        changeCurrentPage={changeCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};
