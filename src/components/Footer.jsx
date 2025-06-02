import React from "react";
import "./Footer.scss";
import logoKasaFooter from "../assets/logo-kasa-footer.png";

function Footer() {
  return (
    <footer className="footer">
      <img src={logoKasaFooter} alt="Kasa Logo" className="footer-logo" />
      <p className="footer-text">© 2025 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
