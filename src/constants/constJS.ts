import { RoutesLink } from "../types/routes";

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
    value: "newest",
    label: "Newest",
  },
  {
    value: "alphabetically",
    label: "Alphabetically",
  },
  {
    value: "cheapest",
    label: "Cheapest",
  },
];
