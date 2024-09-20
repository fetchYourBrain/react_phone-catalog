import { useAppDispatch, useAppSelector } from "../../hooks/helperToolkit";
import { Card } from "../Card/Card";
import styles from "./ProductList.module.scss";
import { usePagination } from "../../hooks/usePagination";
import { Pagination } from "../Pagination/Pagination";
import { SortTypes } from "../../types/sort";
import { Sort } from "../Sort/Sort";
import {
  fetchDevicesList,
  setProductsPerPage,
  setSortType,
} from "../../slices/deviceSlice";
import { perPage } from "../../types/perpage";
import { ITEMS_PER_PAGE, SORT_OPTIONS } from "../../constants/constJS";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSortedProducts } from "../../features/getSortedProducts";

export const ProductList = () => {
  const { category } = useParams();
  const dispatch = useAppDispatch();
  const { devices, loading, productsPerPage, sort } = useAppSelector(
    (state) => state.device
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    if (category) {
      dispatch(fetchDevicesList(category));
    }
  }, [category, sort]);

  
  const sortedProducts = getSortedProducts(sort, devices);

  const {
    visibleProducts,
    nextPage,
    prevPage,
    numbers,
    changeCurrentPage,
    currentPage,
  } = usePagination(sortedProducts, +productsPerPage);


  const handleSortType = (sort: SortTypes) => {
    dispatch(setSortType(sort));
  };

  const handleProductsPerPage = (option: perPage) => {
    const value = option === "All" ? devices.length.toString() : option;
    dispatch(setProductsPerPage(value as perPage));
  };
  

  return (
    <>
      <div className={styles.options}>
        <Sort
          options={SORT_OPTIONS}
          onChange={handleSortType}
          title={"Sort by"}
          selectedValue={sort}
        />
        <Sort
          options={ITEMS_PER_PAGE}
          onChange={handleProductsPerPage}
          title={"Items on page"}
          selectedValue={productsPerPage}
        />
      </div>
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
              itemId={product.itemId}
              hasDiscount={true}
              category={product.category}
              id={product.id}
            />
          ))
        )}
      </div>
      {+productsPerPage !== devices.length ? (
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
