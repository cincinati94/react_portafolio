import React from "react";
import SwitchTheme from "./Switch";

const Header = () => {
  return (
    <nav className="header">
      <div className="logo">
        <h4>Portafolio CM</h4>
      </div>
      <ul>
        <li>
          <a href="#home-container">Home</a>
        </li>
        <li>
          <a href="#container-resume">Resume</a>
        </li>
        <li>Works</li>
        <li>Contact</li>
        <li>
        <SwitchTheme />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
