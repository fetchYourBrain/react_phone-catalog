import { HashRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";
import { RoutesLink } from "./types/routes";
import { HomePage } from "./pages/HomePage/HomePage";
import { ProductDetails } from "./pages/ProductDetails/ProductDetails";
import { CartPage } from "./pages/CartPage/CartPage";
import { FavoritePage } from "./pages/FavoritePage/FavoritePage";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={RoutesLink.HomePage} element={<App />}>
          <Route index element={<HomePage />} />

          <Route path={RoutesLink.ProductPage} element={<ProductPage />}>
            <Route
              path={RoutesLink.ProductDetailsPage}
              element={<ProductDetails />}
            />
          </Route>

          <Route path={RoutesLink.CartPage} element={<CartPage />} />
          <Route path={RoutesLink.FavoritesPage} element={<FavoritePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
