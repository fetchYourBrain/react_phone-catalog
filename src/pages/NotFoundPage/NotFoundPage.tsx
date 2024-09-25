import React from "react";
import styles from "./NotFoundPage.module.scss";
import { Link } from "react-router-dom";
import page_not_found from "../../../public/img/page-not-found.png";
import { RoutesLink } from "../../types/routes";

export const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.not_found}>
      <div className={styles.img_container}>
        <img
          src={page_not_found}
          alt="Page Not Found"
          className={styles.image}
        />
      </div>
      <h2 className={styles.title}>Oops! Page Not Found</h2>
      <p className={styles.description}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link to={RoutesLink.HomePage} className={styles.go_back}>
        Go Back Home
      </Link>
    </div>
  );
};
