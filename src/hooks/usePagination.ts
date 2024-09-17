import { useState } from "react";
import { Phone } from "../types/phone";

export const usePagination = (products: Phone[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = itemsPerPage;
  const pagesAmount = Math.ceil(products.length / productPerPage);

  const firstIndex = (currentPage - 1) * productPerPage;
  const lastIndex = currentPage * productPerPage;
  const visibleProducts = products.slice(firstIndex, lastIndex);

  const numbers = [...Array(pagesAmount + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage < pagesAmount) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeCurrentPage = (id: number) => {
    if (id >= 1 && id <= pagesAmount) {
      setCurrentPage(id);
    }
  };

  return {
    nextPage,
    prevPage,
    currentPage,
    changeCurrentPage,
    numbers,
    visibleProducts,
  };
};
