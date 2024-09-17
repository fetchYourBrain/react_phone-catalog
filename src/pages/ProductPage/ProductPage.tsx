import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.scss";
import { Page } from "../../types/pages";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import { ProductList } from "../../components/ProductList/ProductList";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/helperToolkit";
import { fetchProductList } from "../../slices/allProductSlice";

export const ProductPage = () => {
  const { products } = useParams();
  const dispatch = useAppDispatch();

  const items = useAppSelector((state) => state.productList.products);

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
  }, [products]);

  if (!isValidPage) {
    return <NotFoundPage />;
  }

  return (
    <div className={styles.block}>
      <div className={styles.top_block}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.amount_models}>{items.length} models</p>
      </div>
      <ProductList />
    </div>
  );
};
