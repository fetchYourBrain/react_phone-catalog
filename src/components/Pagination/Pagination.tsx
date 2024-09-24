import classNames from "classnames";
import styles from "./Pagination.module.scss";
import { getPageNumbers } from "../../features/getPageNumbers";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

interface Props {
  nextPage: () => void;
  prevPage: () => void;
  numbers: number[];
  changeCurrentPage: (id: number) => void;
  currentPage: number;
}

const PAGE_LIMIT = 2;

export const Pagination: React.FC<Props> = ({
  prevPage,
  changeCurrentPage,
  nextPage,
  numbers,
  currentPage,
}) => {
  const {category} = useParams();
  const totalPages = numbers.length;
  const pageNumbers = getPageNumbers(
    totalPages,
    numbers,
    currentPage,
    PAGE_LIMIT
  );

  useEffect(() => {
    changeCurrentPage(1);
  }, [category])

  return (
    <nav className={styles.block}>
      <ul className={styles.list}>
        <li className={styles.item} onClick={prevPage}>
          <img src="img/icons/arrow-left.svg" alt="Previous" />
        </li>
        {pageNumbers.map((n, index) =>
          typeof n === "number" ? (
            <li
              key={n}
              className={classNames(styles.item, {
                [styles.active]: currentPage === n,
              })}
              onClick={() => changeCurrentPage(n)}
            >
              <div className={styles.link}>{n}</div>
            </li>
          ) : (
            <li key={`dots-${index}`} className={styles.item}>
              <div className={styles.dots}>...</div>
            </li>
          )
        )}
        <li className={styles.item} onClick={nextPage}>
          <img src="img/icons/arrow-right.svg" alt="Next" />
        </li>
      </ul>
    </nav>
  );
};
