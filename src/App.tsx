import "./App.scss";
import "./reset.scss";
import { Header } from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { Container } from "./components/Container/Container";
import { CartItem } from "./components/Cart/CartItem";
export const App = () => {
  return (
    <>
      <Header />
      <CartItem />
      {/* <Container>
        <Outlet />
      </Container> */}
    </>
  );
};
