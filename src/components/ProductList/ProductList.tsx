import { useAppSelector } from "../../hooks/helperToolkit";
import { Card } from "../Card/Card";
import styles from "./ProductList.module.scss";
import { usePagination } from "../../hooks/usePagination";
import { Pagination } from "../Pagination/Pagination";

export const ProductList = () => {
  const { products, loading, productsPerPage } = useAppSelector(
    (state) => state.productList
  );
  const {
    visibleProducts,
    nextPage,
    prevPage,
    numbers,
    changeCurrentPage,
    currentPage,
  } = usePagination(products, +productsPerPage);

  // const sortProducts = (sort: SortTypes, products: Devices[]) => {
  //   let sortedProducts = [...products];
  //   switch (sort) {
  //     case SortTypes.Newest:
  //       return sortedProducts.sort((a, b) => a.year - b.year);
  //     case SortTypes.Alphabetically:
  //       return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  //     case SortTypes.Cheapest:
  //       return sortedProducts.sort((a, b) => b.price - a.price);
  //     default:
  //       return 0;
  //   }
  // };

  // sortProducts(sort, products);

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
      {+productsPerPage !== products.length ? (
        <Pagination
          nextPage={nextPage}
          prevPage={prevPage}
          numbers={numbers}
          changeCurrentPage={changeCurrentPage}
          currentPage={currentPage}
        />
      ) : (
        ""
      )}
    </>
  );
};
