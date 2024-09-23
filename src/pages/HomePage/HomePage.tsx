import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/helperToolkit";
import styles from "./HomePage.module.scss";
import { fetchProducts } from "../../slices/productSlice";
import { ProductsRow } from "../../components/ProductsRow/ProductsRow";
import { Categories } from "../../components/Categories/Categories";
import { getHotPrices, getNewModels } from "../../features/getPromoProducts";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { Banner } from "../../components/Banner/Banner";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product.products);

  const getProducts = async () => {
    await dispatch(fetchProducts());
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("uid", uid);
      } else {
        console.log("user is logged out");
      }
    });
  }, [onAuthStateChanged]);

  const hotPrices = getHotPrices(products);
  const newProducts = getNewModels(products);

  return (
    <div className={styles.block}>
      <h1 className={styles.title}>Welcome to Nice Gadgets store!</h1>
      <Banner />
      <ProductsRow  products={newProducts} hasDiscount={false}/>
      <Categories />
      <ProductsRow products={hotPrices} hasDiscount={true}/>
    </div>
  );
};
