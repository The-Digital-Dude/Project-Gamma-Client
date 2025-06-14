import React from "react";
import "@/styles/navbar.scss";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <div className="navbar__logo">
          <a href="/">Clever Class</a>
        </div>
        {/* Navigation Links */}
        <ul className="navbar__links">
          <li>
            <a href="#chrome-extension">Chrome Extension</a>
          </li>
          <li>
            <a href="#notebook">Notebook</a>
          </li>
          <li>
            <a href="#help-center">Help Center</a>
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
            Join for free
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
