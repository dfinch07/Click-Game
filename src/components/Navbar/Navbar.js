import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li className="brand">
        <a href="/">Clicky Game</a>
      </li>
      <li className="">You guessed correctly!</li>
      <li>Score: 0 | Top Score: 0</li></ul>
  </nav>

);

export default Navbar;
