import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/helperToolkit";
import styles from "./HomePage.module.scss";
import { fetchProducts } from "../../slices/productSlice";
import { ProductsRow } from "../../components/ProductsRow/ProductsRow";
import { Categories } from "../../components/Categories/Categories";
import { getHotPrices, getNewModels } from "../../features/getPromoProducts";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product.products);

  const getProducts = async () => {
    await dispatch(fetchProducts());
  };

  useEffect(() => {
    getProducts();
  }, []);

  const hotPrices = getHotPrices(products);
  const newProducts = getNewModels(products);

  return (
    <div className={styles.block}>
      <h1 className={styles.title}>Welcome to Nice Gadgets store!</h1>
      <ProductsRow title="Brand new models" products={newProducts} />
      <Categories />
      <ProductsRow title="Hot prices" products={hotPrices} />
    </div>
  );
};
