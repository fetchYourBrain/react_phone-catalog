import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.scss";
import { Page } from "../../types/pages";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import { ProductList } from "../../components/ProductList/ProductList";
import { useAppSelector } from "../../hooks/helperToolkit";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";

export const ProductPage = () => {
  const { category } = useParams();

  const { devices } = useAppSelector((state) => state.device);

  const isValidPage = Object.values(Page).includes(category as Page);

  const title =
    category === Page.Phones
      ? "Phones"
      : category === Page.Tablets
      ? "Tablets"
      : "Accessories";

  if (!isValidPage) {
    return <NotFoundPage />;
  }

  return (
    <>
      <Breadcrumbs />
      <div className={styles.block}>
        <div className={styles.top_block}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.amount_models}>{devices.length} models</p>
        </div>
        <ProductList />
      </div>
    </>
  );
};
