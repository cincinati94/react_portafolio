import "./App.scss";
import Header from "./components/Header";
// import { BrowserRouter as Router, Outlet, Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Fragment, useContext } from "react";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import { ThemeContext } from "./ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <div className={theme}>
        <Home />
        <Resume />
        <Contact />
      </div>
    </Fragment>
  );
}

export default App;
