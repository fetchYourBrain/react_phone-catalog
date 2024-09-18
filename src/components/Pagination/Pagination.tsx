import classNames from "classnames";
import styles from "./Pagination.module.scss";

interface Props {
  nextPage: () => void;
  prevPage: () => void;
  numbers: number[] ;
  changeCurrentPage: (id: number) => void;
  currentPage: number;
}

export const Pagination: React.FC<Props> = ({
  prevPage,
  changeCurrentPage,
  nextPage,
  numbers,
  currentPage,
}) => {
  return (
    <nav className={styles.block}>
      <ul className={styles.list}>
        <li className={styles.item} onClick={prevPage}>
          <img src="/img/icons/arrow-left.svg" alt="" />
        </li>
        {numbers.map((n) => (
          <li
            key={n}
            className={classNames(styles.item, {
              [styles.active]: currentPage === n,
            })}
            onClick={() => changeCurrentPage(n)}
          >
            <div className={styles.link}>{n}</div>
          </li>
        ))}
        <li className={styles.item} onClick={nextPage}>
            <img src="/img/icons/arrow-right.svg" alt="" />
        </li>
      </ul>
    </nav>
  );
};
