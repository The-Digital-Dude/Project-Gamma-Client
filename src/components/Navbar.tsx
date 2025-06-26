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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Element;
      if (!target.closest(".navbar") && !target.closest(".hamburger")) {
        setIsMobileMenuOpen(false);
      }
    }

    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

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

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
    // Close services dropdown when mobile menu opens
    if (isServicesOpen) {
      setIsServicesOpen(false);
    }
  }, [isServicesOpen]);

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
    <>
      <nav className="navbar">
        <div className="navbar__container">
          {/* Logo */}
          <a href="/">
            <img style={{ width: "80px" }} src="/rentalease-logo.png" alt="" />
          </a>

          {/* Hamburger Menu Button */}
          <button
            className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigation Links */}
          <ul
            className={`navbar__links ${isMobileMenuOpen ? "mobile-open" : ""}`}
          >
            <li>
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/crm" onClick={() => setIsMobileMenuOpen(false)}>
                CRM
              </Link>
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
                      <Link
                        href={link.href}
                        role="menuitem"
                        tabIndex={-1}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)}>
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)}>
                Blog
              </Link>
            </li>
          </ul>

          {/* Action Buttons */}
          <div
            className={`navbar__actions ${
              isMobileMenuOpen ? "mobile-open" : ""
            }`}
          >
            <Link
              href="#login"
              className="navbar__login"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Log in
            </Link>
            <Link
              href="#join"
              className="navbar__join"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Request Demo
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
