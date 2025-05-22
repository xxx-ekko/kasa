import React from "react";
import './Header.css';

function Header() {
    return (
        <header className="Header">
            <img src="/logo.svg" alt="Kasa Logo" className="header-logo" />
            <nav>
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/about">À Propos</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;