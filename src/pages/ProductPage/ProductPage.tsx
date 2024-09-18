import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.scss";
import { Page } from "../../types/pages";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import { ProductList } from "../../components/ProductList/ProductList";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/helperToolkit";
import {
  fetchProductList,
  setProductsPerPage,
  setSortType,
} from "../../slices/allProductSlice";
import { Sort } from "../../components/Sort/Sort";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { SORT_OPTIONS } from "../../constants/constJS";
import { SortTypes } from "../../types/sort";
import { perPage } from "../../types/perpage";

export const ProductPage = () => {
  const { products } = useParams();
  const dispatch = useAppDispatch();

  const {products: items, productsPerPage, sort } = useAppSelector((state) => state.productList);

  const isValidPage = Object.values(Page).includes(products as Page);

  const title =
    products === Page.Phones
      ? "Phones"
      : products === Page.Tablets
      ? "Tablets"
      : "Accessories";

  useEffect(() => {
    window.scrollTo(0, 0);
    if (products) {
      dispatch(fetchProductList(products));
    }
  }, [products, sort, productsPerPage]);

  if (!isValidPage) {
    return <NotFoundPage />;
  }

  const ITEMS_PER_PAGE = [
    { label: "4", value: 4 },
    { label: "8", value: 8 },
    { label: "16", value: 16 },
    { label: "All", value: items.length },
  ];

  const handleSortType = (sort: SortTypes) => {
    dispatch(setSortType(sort));
  };
  const handleProductsPerPage = (option: perPage) => {
    dispatch(setProductsPerPage(option));
  };

  return (
    <>
      <Breadcrumbs />
      <div className={styles.block}>
        <div className={styles.top_block}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.amount_models}>{items.length} models</p>
        </div>
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
        <ProductList />
      </div>
    </>
  );
};
