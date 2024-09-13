import "./App.scss";
import "./reset.scss";
import { Header } from "./components/Header/Header";
import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Header />
      <p>fetchYourBrain</p>
      <Outlet />
    </>
  );
};
