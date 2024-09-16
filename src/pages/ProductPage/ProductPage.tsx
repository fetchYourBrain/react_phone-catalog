import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.scss";
import { Page } from "../../types/pages";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import { ProductList } from "../../components/ProductList/ProductList";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/helperToolkit";
import { fetchProductList } from "../../slices/allProductSlice";

export const ProductPage = () => {
  const { products } = useParams();
  const dispatch = useAppDispatch();

  const isValidPage = Object.values(Page).includes(products as Page);

  if (!isValidPage) {
    return <NotFoundPage />;
  }
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
  }, [products, title]);

  return (
    <div className={styles.block}>
      <h1>{title}</h1>
      <ProductList />
    </div>
  );
};
