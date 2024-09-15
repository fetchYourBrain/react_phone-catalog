import "./App.scss";
import "./reset.scss";
import { Header } from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { Container } from "./components/Container/Container";
import { CartPage } from "./pages/CartPage/CartPage";
export const App = () => {
  return (
    <>
      <Header />
      {/* TO DELETE! */}
      <CartPage />
      {/* <Container>
        <Outlet />
      </Container> */}
    </>
  );
};
