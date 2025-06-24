import React from "react";
import { siteConfig } from "../config/site";
import "@/styles/navbar.scss";
import Link from "next/link";

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
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
        </ul>
        {/* Action Buttons */}
        <div className="navbar__actions">
          <Link href="#login" className="navbar__login">
            Log in
          </Link>
          <Link href="#join" className="navbar__join">
            Request Demo
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
