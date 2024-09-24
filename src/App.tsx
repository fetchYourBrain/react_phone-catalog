import "./App.scss";
import { Header } from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { Container } from "./components/Container/Container";
import { Footer } from "./components/Footer/Footer";
import { useAuth } from "./context/AuthContext";
import { useState } from "react";
import './Themes.scss';

export const App = () => {
  const [theme, setTheme] = useState(false);
  const themeHandler = () => {
    setTheme(!theme)
  }

  return (
    <div className={`app ${theme ? 'light' : 'dark'}`}>
      <Header themeHandler={themeHandler}/>
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};
