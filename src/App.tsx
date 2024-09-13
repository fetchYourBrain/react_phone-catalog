import "./App.scss";
import "./reset.scss";
import { Header } from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { Container } from "./components/Container/Container";
export const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
