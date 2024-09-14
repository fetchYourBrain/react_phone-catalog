import React from 'react';
import styles from './NotFound.module.scss';
import page_not_found from '../../../public/img/page-not-found.png';

export const NotFound: React.FC  = () => {
  return (
    <div className={styles.not_found}>
      <img
        src={page_not_found}
        alt="Page Not Found"
        className={styles.image}
      />
      <h2 className={styles.title}>Oops! Page Not Found</h2>
      <p className={styles.description}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <a href="/" className={styles.go_back}>
        Go Back Home &#8594;
      </a>
    </div>
  );
} 