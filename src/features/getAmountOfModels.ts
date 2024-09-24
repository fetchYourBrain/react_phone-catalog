import { Product } from "../types/products";

export const amountOfCategory = (products: Product[], category: string) => {
  return products.filter((item) => item.category === category.toLowerCase())
    .length;
};
