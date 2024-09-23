export const getPageNumbers = (totalPages, numbers, currentPage, PAGE_LIMIT) => {
    const pages: (number | string)[] = [];

    if (totalPages <= 4) {
      return numbers;
    }
    pages.push(1);

    if (currentPage > PAGE_LIMIT + 1) {
      pages.push("...");
    }

    for (let i = Math.max(2, currentPage - PAGE_LIMIT); i <= Math.min(currentPage + PAGE_LIMIT, totalPages - 1); i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - PAGE_LIMIT - 1) {
      pages.push("...");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };