import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Breadcrumbs.module.scss";
import { RoutesLink } from "../../types/routes";

interface Props {
  name?: string;
}

export const Breadcrumbs: React.FC<Props> = ({ name }) => {
  const location = useLocation();

  let currentLink = "";
  const pathParts = location.pathname.split("/").filter((crumb) => crumb !== "");
  
  const crumbs = pathParts.map((crumb, index) => {
    currentLink += `/${crumb}`;

    const isLast = index === pathParts.length - 1;
    const displayName = isLast && name ? name : crumb;

    return (
      <div className={styles.crumb_container} key={crumb}>
        <div className={`${styles.crumb} ${isLast ? styles.active : ''}`}>
          {isLast ? (
            displayName
          ) : (
            <Link to={currentLink}>{displayName}</Link>
          )}
        </div>
      </div>
    );
  });

  return (
    <div className={styles.breadcrumbs}>
      <Link to={RoutesLink.HomePage}>
      <div className={styles.icon_container}>
        <div className={styles.home_icon}></div>
      </div>
      </Link>
      {crumbs}
    </div>
  );
};