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
import { useParams, useSearchParams } from "react-router-dom";
import { getSortedProducts } from "../../features/getSortedProducts";
import { CardSkeleton } from "../CardSkeleton/CardSkeleton";

export const ProductList = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams()
  const dispatch = useAppDispatch();
  const { devices, loading, productsPerPage, sort } = useAppSelector(
    (state) => state.device
  );

  const [searchParams, setSearchParams] = useSearchParams();

  const sortedProducts = getSortedProducts(sort, devices);
  const pageFromQuery = searchParams.get('page') || 1
        
  const finalSort = searchParams.get('sort') as SortTypes || sort;
  const finalProductsPerPage = searchParams.get('perPage') || productsPerPage.toString();

  const sortedProducts = getSortedProducts(finalSort, devices);

  const {
    visibleProducts,
    nextPage,
    prevPage,
    numbers,
    changeCurrentPage,
    currentPage,
  } = usePagination(sortedProducts, +productsPerPage, +pageFromQuery);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (category) {
      dispatch(fetchDevicesList(category));
    }
  }, [category, sort]);

  const handleSortType = (sort: SortTypes) => {
    dispatch(setSortType(sort));

    searchParams.set('sort', sort);
    setSearchParams(searchParams)
  };

  const handleProductsPerPage = (option: perPage) => {
    const value = option === "All" ? devices.length.toString() : option;
    dispatch(setProductsPerPage(value as perPage));

    searchParams.set('perPage', value.toString());
    setSearchParams(searchParams)
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.options}>
          <Sort
            options={SORT_OPTIONS}
            onChange={handleSortType}
            title={"Sort by"}
            selectedValue={finalSort}
          />
          <Sort
            options={ITEMS_PER_PAGE}
            onChange={handleProductsPerPage}
            title={"Items on page"}
            selectedValue={finalProductsPerPage}
          />
        </div>
      </div>

      <div className={styles.list}>
        {loading
          ? Array.from({ length: +productsPerPage }).map((_, index) => (
              <CardSkeleton key={index} />
            ))
          : visibleProducts.map((product) => (
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
            ))}
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
