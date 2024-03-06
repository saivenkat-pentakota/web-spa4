import React, { useState } from "react";
import "./NavBar.css";
import menubar from "../images/menu-bar.png";

function NavBar() {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <nav className="navbar-container">
      <ul className={`nav-links ${isNavActive ? 'nav-active' : ''}`}>
        <li>
          <a href="home">HOME</a>
        </li>
        <li>
          <a href="aboutus">ABOUT US</a>
        </li>
        <li>
          <a href="ourservices">OUR SERVICES</a>
        </li>
        <li>
          <a href="ourportfolio">OUR PORTFOLIO</a>
        </li>
        <li>
          <a href="contactus">CONTACT US</a>
        </li>
      </ul>
      <div className="burger" onClick={toggleNav}>
        <img className="menu-burger-image" src={menubar} alt="menu-barimg" />
      </div>
    </nav>
  );
}

export default NavBar;
