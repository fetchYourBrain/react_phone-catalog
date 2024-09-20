import { MergedDevice } from "../types/devices";
import { SortTypes } from "../types/sort";

export const getSortedProducts = (sort: SortTypes, products: MergedDevice[]) => {
  let sortedProducts = [...products];
  switch (sort) {
    case SortTypes.Newest:
      return sortedProducts.sort((a, b) => b.year - a.year);
    case SortTypes.Alphabetically:
      return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    case SortTypes.Cheapest:
      return sortedProducts.sort((a, b) => a.priceRegular - b.priceRegular);
    default:
      return sortedProducts;
  }
};
