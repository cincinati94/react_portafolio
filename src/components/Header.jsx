import React from "react";

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
      </ul>
    </nav>
  );
};

export default Header;
