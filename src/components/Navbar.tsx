"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { siteConfig } from "../config/site";
import "@/styles/navbar.scss";
import Link from "next/link";

const serviceLinks = [
  { href: "/services/smoke-alarm", label: "Smoke Alarm" },
  { href: "/services/electrical-safety", label: "Electrical Safety" },
  { href: "/services/gas-safety", label: "Gas Safety" },
];

const Navbar: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Detect outside click
  useEffect(() => {
    if (!isServicesOpen) return;
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setIsServicesOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isServicesOpen]);

  // Detect touch device
  useEffect(() => {
    function handleTouch() {
      setIsTouch(true);
      window.removeEventListener("touchstart", handleTouch);
    }
    window.addEventListener("touchstart", handleTouch);
    return () => window.removeEventListener("touchstart", handleTouch);
  }, []);

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Open/close handlers with delay
  const openDropdown = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsServicesOpen(true);
  }, []);

  const closeDropdown = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150); // 150ms delay to allow clicking
  }, []);

  const toggleDropdown = useCallback(() => setIsServicesOpen((v) => !v), []);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
      e.preventDefault();
      openDropdown();
      // Focus first link
      setTimeout(() => {
        const firstLink = dropdownRef.current?.querySelector(
          ".navbar__dropdown-menu a"
        ) as HTMLElement;
        firstLink?.focus();
      }, 0);
    } else if (e.key === "Escape") {
      setIsServicesOpen(false);
      buttonRef.current?.focus();
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <a href="/">
          <img style={{ width: "80px" }} src="/rentalease-logo.png" alt="" />
        </a>
        {/* Navigation Links */}
        <ul className="navbar__links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/crm">CRM</Link>
          </li>
          <li
            className="navbar__dropdown"
            ref={dropdownRef}
            aria-haspopup="true"
            aria-expanded={!!isServicesOpen}
            onMouseEnter={!isTouch ? openDropdown : undefined}
            onMouseLeave={!isTouch ? closeDropdown : undefined}
          >
            <p
              aria-haspopup="true"
              aria-expanded={!!isServicesOpen}
              onKeyDown={handleKeyDown}
              onClick={isTouch ? toggleDropdown : undefined}
            >
              Safety Check
            </p>
            {isServicesOpen && (
              <ul
                className="navbar__dropdown-menu"
                role="menu"
                aria-label="Service sub-menu"
                onMouseEnter={!isTouch ? openDropdown : undefined}
                onMouseLeave={!isTouch ? closeDropdown : undefined}
              >
                {serviceLinks.map((link) => (
                  <li key={link.href} role="none">
                    <Link href={link.href} role="menuitem" tabIndex={-1}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
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
