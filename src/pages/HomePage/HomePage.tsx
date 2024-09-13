import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/helperToolkit";
import styles from "./HomePage.module.scss";
import { fetchProducts } from "../../slices/productSlice";
import { ProductsRow } from "../../components/ProductsRow/ProductsRow";
import { Categories } from "../../components/Categories/Categories";

export const HomePage = () => {
  const dispatch = useAppDispatch();

  const getProducts = async () => {
    await dispatch(fetchProducts());
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className={styles.block}>
      <h1 className={styles.title}>Welcome to Nice Gadgets store!</h1>
      <ProductsRow />
      <Categories />
    </div>
  );
};
