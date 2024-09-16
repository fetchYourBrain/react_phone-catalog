import "./App.scss";
import "./reset.scss";
import { Header } from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { Container } from "./components/Container/Container";
import { NotFound } from "./components/NotFound/NotFound";
export const App = () => {
  return (
    <>
    <NotFound />
      {/* <Header />
      <Container>
        <Outlet />
      </Container> */}
    </>
  );
};
