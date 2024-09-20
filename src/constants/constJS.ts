import { RoutesLink } from "../types/routes";
import { SortTypes } from "../types/sort";

export const NAV_ITEMS = [
  {
    name: "home",
    path: RoutesLink.HomePage,
  },
  {
    name: "phones",
    path: RoutesLink.PhonesPage,
  },
  {
    name: "tablets",
    path: RoutesLink.TabletsPage,
  },
  {
    name: "accessories",
    path: RoutesLink.AccessoriesPage,
  },
];

export const CATEGORIES = [
  {
    name: "Phones",
    img: "/img/category-phones.webp",
    backgroundColor: "#6D6474",
  },
  {
    name: "Tablets",
    img: "/img/category-tablets.png",
    backgroundColor: "#8D8D92",
  },
  {
    name: "Accessories",
    img: "/img/category-accessories.png",
    backgroundColor: "#D53C51",
  },
];

export const SORT_OPTIONS = [
  {
    label: "Newest",
    value: SortTypes.Newest,
  },
  {
    label: "Alphabetically",
    value: SortTypes.Alphabetically,
  },
  {
    label: "Cheapest",
    value: SortTypes.Cheapest,
  },
];

export const ITEMS_PER_PAGE = [
  { label: "4", value: 4 },
  { label: "8", value: 8 },
  { label: "16", value: 16 },
  { label: "All", value: "All" },
];