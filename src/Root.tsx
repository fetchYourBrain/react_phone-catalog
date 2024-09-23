import { HashRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";
import { RoutesLink } from "./types/routes";
import { HomePage } from "./pages/HomePage/HomePage";
import { ProductDetails } from "./pages/ProductDetails/ProductDetails";
import { CartPage } from "./pages/CartPage/CartPage";
import { FavoritePage } from "./pages/FavoritePage/FavoritePage";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { Login } from "./auth/pages/Login";
import { Signup } from "./auth/pages/Signup";

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={RoutesLink.HomePage} element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/:category" element={<ProductPage />} />
          <Route path="/:category/:id" element={<ProductDetails />} />
          <Route path={RoutesLink.CartPage} element={<CartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path={RoutesLink.FavoritesPage} element={<FavoritePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
