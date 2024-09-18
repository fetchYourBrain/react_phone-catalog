import { useState } from "react";
import { Devices } from "../types/devices";

export const usePagination = (products: Devices[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = itemsPerPage;
  const totalPages = Math.ceil(products.length / productPerPage);

  const firstIndex = (currentPage - 1) * productPerPage;
  const lastIndex = currentPage * productPerPage;
  const visibleProducts = products.slice(firstIndex, lastIndex);

  const numbers = [...Array(totalPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeCurrentPage = (id: number) => {
    if (id >= 1 && id <= totalPages) {
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
    totalPages,
  };
};
