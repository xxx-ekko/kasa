import React from "react";
import "./Header.scss";
import logoKasa from "../assets/logo-kasa.png";

function Header() {
  return (
    <header className="Header">
      <img src={logoKasa} alt="Kasa Logo" className="header-logo" />
      <nav className="header-nav">
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/about">À Propos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
