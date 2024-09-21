import { Link } from "react-router-dom";
import styles from './GoBackButton.module.scss';
import { RoutesLink } from "../../../types/routes";

export const GoBackButton = () => {
  return (
    <Link to={RoutesLink.HomePage} className={styles.go_back}>
      <div className={styles.svg_container}>
      <svg
        width="6"
        height="10"
        viewBox="0 0 6 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.47075 0.528606C5.2104 0.268256 4.78829 0.268256 4.52794 0.528606L0.527945 4.52861C0.267595 4.78896 0.267595 5.21107 0.527945 5.47141L4.52794 9.47141C4.78829 9.73176 5.2104 9.73176 5.47075 9.47141C5.7311 9.21107 5.7311 8.78896 5.47075 8.52861L1.94216 5.00001L5.47075 1.47141C5.7311 1.21107 5.7311 0.788955 5.47075 0.528606Z"
          fill="#F1F2F9"
        />
      </svg>
      </div>
      <span className={styles.text}>Back</span>
    </Link>
  );
};
