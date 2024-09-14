import { Link } from "react-router-dom";
import { CATEGORIES } from "../../constants/constJS";
import styles from "./Categories.module.scss";
import { getCategoryRoute } from "../../features/getCategoryRoute";

export const Categories = () => {
  return (
    <div className={styles.block}>
      <div className={styles.top_block}>
        <h2 className={styles.title}>Shop by category</h2>
      </div>
      <div className={styles.list}>
        {CATEGORIES.map((category) => (
          <Link
            to={getCategoryRoute(category.name)}
            key={category.name}
            className={styles.category}
          >
            <div
              className={styles.img_container}
              style={{ backgroundColor: category.backgroundColor }}
            >
              <img src={category.img} alt="" />
            </div>
            <h3 className={styles.name}>{category.name}</h3>
            <div className={styles.amount}>95 models</div>
          </Link>
        ))}
      </div>
    </div>
  );
};
