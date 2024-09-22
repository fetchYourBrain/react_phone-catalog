import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MergedDevice } from "../types/devices";

export const usePagination = (products: MergedDevice[], productPerPage: number, initialPage: number) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalPages = Math.ceil(products.length / productPerPage);

  const firstIndex = (currentPage - 1) * productPerPage;
  const lastIndex = currentPage * productPerPage;
  const visibleProducts = products.slice(firstIndex, lastIndex);

  const numbers = [...Array(totalPages + 1).keys()].slice(1);

  useEffect(() => {
    // If initial page was set bigger than total pages, then we should not take it into account
    if (totalPages && initialPage > totalPages) {
      setCurrentPage(1)
    }
  }, [initialPage, totalPages])

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      searchParams.set('page', String(currentPage + 1))
      setSearchParams(searchParams)
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      searchParams.set('page', String(currentPage - 1))
      setSearchParams(searchParams)
    }
  };

  const changeCurrentPage = (id: number) => {
    if (id >= 1 && id <= totalPages) {
      setCurrentPage(id);
      searchParams.set('page', String(id))
      setSearchParams(searchParams)
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
