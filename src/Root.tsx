import { HashRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";
import { RoutesLink } from "./types/routes";
import { HomePage } from "./pages/HomePage/HomePage";
import { ProductDetails } from "./pages/ProductDetails/ProductDetails";
import { CartPage } from "./pages/CartPage/CartPage";
import { FavoritePage } from "./pages/FavoritePage/FavoritePage";
import { TabletsPage } from "./pages/TabletsPage/TabletsPage";
import { PhonesPage } from "./pages/PhonesPage/PhonesPage";
import { AccessoriesPage } from "./pages/AccessoriesPage/AccessoriesPage";

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={RoutesLink.HomePage} element={<App />}>
          <Route index element={<HomePage />} />

          <Route path={RoutesLink.TabletsPage} element={<TabletsPage />}>
            <Route
              path={RoutesLink.ProductDetailsPage}
              element={<ProductDetails />}
            />
          </Route>

          <Route path={RoutesLink.PhonesPage} element={<PhonesPage />}>
            <Route
              path={RoutesLink.ProductDetailsPage}
              element={<ProductDetails />}
            />
          </Route>

          <Route
            path={RoutesLink.AccessoriesPage}
            element={<AccessoriesPage />}
          >
            <Route
              path={RoutesLink.ProductDetailsPage}
              element={<ProductDetails />}
            />
          </Route>

          <Route path={RoutesLink.CartPage} element={<CartPage />} />
          <Route path={RoutesLink.FavoritesPage} element={<FavoritePage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
