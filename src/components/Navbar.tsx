import React from "react";
import { siteConfig } from "../config/site";
import "@/styles/navbar.scss";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <div className="navbar__logo">
          <a href="/">{siteConfig.name}</a>
        </div>
        {/* Navigation Links */}
        <ul className="navbar__links">
          <li>
            <a href="#chrome-extension">Home</a>
          </li>
          <li>
            <a href="#notebook">About</a>
          </li>
          <li>
            <a href="#help-center">Features</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
        </ul>
        {/* Action Buttons */}
        <div className="navbar__actions">
          <a href="#login" className="navbar__login">
            Log in
          </a>
          <a href="#join" className="navbar__join">
            Request Demo
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
