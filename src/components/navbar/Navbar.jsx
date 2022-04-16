import React from "react";
import "./Navbar.css";
import classNames from "classnames";

const Navbar = () => {
  return (
    <header className={classNames("header")}>
      <nav className={classNames("navbar")}>
        <a className={classNames("logo")} href="/">
          <img
            src="https://uploads-ssl.webflow.com/5f47d61d9692937743bdd54b/6073ae277d7f7c1990ebb13c_floe_1.png"
            alt="Fleo logo"
          />
        </a>
        <div>ASSIGNMENT</div>
        <div>Dark</div>
      </nav>
    </header>
  );
};

export default Navbar;
