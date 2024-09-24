import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../../constants/constJS';
import styles from './Categories.module.scss';
import { getCategoryRoute } from '../../features/getCategoryRoute';

export const Categories = () => {
  return (
    <section className={styles.block}>
      <div className={styles.top_block}>
        <h2 className={styles.title}>Shop by category</h2>
      </div>
      <ul className={styles.list}>
        {CATEGORIES.map((category) => (
          <li key={category.name} className={styles.category_item}>
            <Link
              to={getCategoryRoute(category.name)}
              className={styles.category_link}
            >
              <div
                className={styles.img_container}
                style={{ backgroundColor: category.backgroundColor }}
              >
                <img src={category.img} alt={`${category.name} category`} className={styles.category_image} />
              </div>
              <h3 className={styles.name}>{category.name}</h3>
              <div className={styles.amount}>95 models</div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};