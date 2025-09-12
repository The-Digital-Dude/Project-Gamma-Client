"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { siteConfig } from "../config/site";
import "@/styles/navbar.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const serviceLinks = [
  { href: "/services/smoke-alarm", label: "Smoke Alarm" },
  { href: "/services/electrical-safety", label: "Electrical Safety" },
  { href: "/services/gas-safety", label: "Gas Safety" },
];

const rentalComplianceLinks = [
  { href: "/services/smoke-alarm", label: "Smoke Alarm Safety" },
  { href: "/services/electrical-safety", label: "Electrical Safety" },
  { href: "/services/gas-safety", label: "Gas Safety" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isRentalComplianceOpen, setIsRentalComplianceOpen] = useState(false);
  const [isMobileRentalComplianceOpen, setIsMobileRentalComplianceOpen] =
    useState(true);
  const submenuCloseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
      if (submenuCloseTimeoutRef.current) {
        clearTimeout(submenuCloseTimeoutRef.current);
      }
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Element;
      if (
        !target.closest(".mobile-navbar") &&
        !target.closest(".hamburger") &&
        !target.closest(".mobile-menu")
      ) {
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
    }, 800);
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

  // Keyboard navigation for Rental Compliance submenu
  const handleRentalComplianceKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
      e.preventDefault();
      setIsRentalComplianceOpen(true);
      setTimeout(() => {
        const firstLink = document.querySelector(
          ".navbar__dropdown-menu .navbar__submenu a"
        ) as HTMLElement;
        firstLink?.focus();
      }, 800);
    } else if (e.key === "Escape") {
      setIsRentalComplianceOpen(false);
    }
  };

  const openSubmenu = useCallback(() => {
    if (submenuCloseTimeoutRef.current) {
      clearTimeout(submenuCloseTimeoutRef.current);
      submenuCloseTimeoutRef.current = null;
    }
    setIsRentalComplianceOpen(true);
  }, []);

  const closeSubmenu = useCallback(() => {
    if (submenuCloseTimeoutRef.current) {
      clearTimeout(submenuCloseTimeoutRef.current);
    }
    submenuCloseTimeoutRef.current = setTimeout(() => {
      setIsRentalComplianceOpen(false);
    }, 1200); // Increased from 800ms to 1200ms for better UX
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="navbar desktop-navbar">
        <div className="navbar__container">
          {/* Logo */}
          <Link href="/">
            <img style={{ width: "250px" }} src="/rentalease-logo.png" alt="" />
          </Link>

          {/* Navigation Links */}
          <ul className="navbar__links">
            <li>
              <Link
                href="/"
                className={pathname === "/" ? "active" : undefined}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={pathname.startsWith("/about") ? "active" : undefined}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/our-technology"
                className={
                  pathname.startsWith("/our-technology") ? "active" : undefined
                }
              >
                Our Technology
              </Link>
            </li>
            <li
              className="navbar__dropdown"
              ref={dropdownRef}
              onMouseEnter={!isTouch ? openDropdown : undefined}
              onMouseLeave={!isTouch ? closeDropdown : undefined}
            >
              <p
                onKeyDown={handleKeyDown}
                onClick={isTouch ? toggleDropdown : undefined}
                tabIndex={0}
                style={{ cursor: "pointer" }}
              >
                <Link
                  href="#"
                  className={
                    pathname.startsWith("/services") ? "active" : undefined
                  }
                >
                  Services
                </Link>
              </p>
              {isServicesOpen && (
                <ul
                  className="navbar__dropdown-menu"
                  onMouseEnter={!isTouch ? openDropdown : undefined}
                  onMouseLeave={!isTouch ? closeDropdown : undefined}
                >
                  <li>
                    <Link href="/services/compliance-services">
                      Compliance Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/property-care-services">
                      Property Care Services
                    </Link>
                  </li>
                  {/* <li
                    className="navbar__submenu-parent"
                    style={{ position: "relative" }}
                    onMouseEnter={!isTouch ? openSubmenu : undefined}
                    onMouseLeave={!isTouch ? closeSubmenu : undefined}
                  >
                    <button
                      className="navbar__submenu-toggle"
                      tabIndex={0}
                      onKeyDown={handleRentalComplianceKeyDown}
                      onClick={() => setIsRentalComplianceOpen((v) => !v)}
                    >
                      Rental Compliance Check
                      <svg
                        width="16"
                        height="16"
                        style={{
                          marginLeft: 6,
                          transform: isRentalComplianceOpen
                            ? "rotate(90deg)"
                            : "rotate(0deg)",
                          transition: "transform 0.2s",
                        }}
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M7 7l3 3 3-3"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <ul
                      className={`navbar__dropdown-menu navbar__submenu${
                        isRentalComplianceOpen ? " active" : ""
                      }`}
                      style={{
                        left: "100%",
                        top: 0,
                        position: "absolute",
                        minWidth: 200,
                        display: isRentalComplianceOpen ? "block" : "none",
                        background: "rgba(255,255,255,0.98)",
                        boxShadow: "0 8px 32px 0 rgba(31,38,135,0.18)",
                        borderRadius: 8,
                        zIndex: 1001,
                      }}
                      onMouseEnter={!isTouch ? openSubmenu : undefined}
                      onMouseLeave={!isTouch ? closeSubmenu : undefined}
                    >
                      {rentalComplianceLinks.map((link) => (
                        <li key={link.href}>
                          <Link href={link.href}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </li> */}
                </ul>
              )}
            </li>
            {/* <li>
              <Link
                href="/pricing"
                className={
                  pathname.startsWith("/pricing") ? "active" : undefined
                }
              >
                Pricing
              </Link>
            </li> */}
            {/* <li>
              <Link
                href="/blog"
                className={pathname.startsWith("/blog") ? "active" : undefined}
              >
                Blog
              </Link>
            </li> */}
            <li>
              <Link
                href="/contact"
                className={
                  pathname.startsWith("/contact") ? "active" : undefined
                }
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Action Buttons */}
          <div className="navbar__actions">
            <Link href="#login" className="navbar__login">
              Log in
            </Link>
            <Link href="/book-now" className="navbar__join">
              Request Demo
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={`mobile-navbar${
          isMobileMenuOpen ? " mobile-navbar--hidden" : ""
        }`}
      >
        <div className="mobile-navbar__container">
          {/* Logo */}
          <a href="/" className="mobile-navbar__logo">
            <img src="/rentalease-logo.png" alt="RentalEase" />
          </a>

          {/* Hamburger Menu Button */}
          <button
            className={`mobile-hamburger ${isMobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Content */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu__header">
          <div className="mobile-menu__logo">
            <img src="/rentalease-logo.png" alt="RentalEase" />
          </div>
          <button
            className="mobile-menu__close"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="mobile-menu__content">
          <ul className="mobile-menu__links">
            <li>
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 22V12H15V22"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="7"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                About
              </Link>
            </li>
            <li>
              <Link
                href="/our-technology"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "currentColor" }}
                >
                  <path
                    d="M12 3L13.8 7.2L18 9L13.8 10.8L12 15L10.2 10.8L6 9L10.2 7.2L12 3Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 19H20M7 16H17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Our Technology
              </Link>
            </li>
            {/* <li>
              <span onClick={() => setIsMobileMenuOpen(false)}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "currentColor" }}
                >
                  <path
                    d="M19.43 12.98c.04-.32.07-.65.07-.98s-.03-.66-.07-.98l2.11-1.65a.5.5 0 00.12-.64l-2-3.46a.5.5 0 00-.6-.22l-2.49 1a7.03 7.03 0 00-1.69-.98l-.38-2.65A.488.488 0 0014 2h-4a.488.488 0 00-.5.42l-.38 2.65c-.63.24-1.22.56-1.77.94l-2.49-1a.5.5 0 00-.6.22l-2 3.46a.5.5 0 00.12.64l2.11 1.65c-.05.32-.08.65-.08.99s.03.67.08.99l-2.11 1.65a.5.5 0 00-.12.64l2 3.46c.14.24.44.32.68.22l2.49-1c.53.38 1.11.7 1.74.94l.38 2.65c.05.28.27.48.5.48h4c.23 0 .45-.2.5-.48l.38-2.65c.63-.24 1.22-.56 1.77-.94l2.49 1c.24.1.54.02.68-.22l2-3.46a.5.5 0 00-.12-.64l-2.11-1.65zM12 15.5A3.5 3.5 0 1112 8.5a3.5 3.5 0 010 7z"
                    fill="currentColor"
                  />
                </svg>
                Services
              </span>
            </li> */}
            <li className="mobile-menu__dropdown">
              <button
                className={`mobile-menu__dropdown-toggle${
                  isMobileServicesOpen ? " active" : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileServicesOpen((open) => !open);
                }}
                type="button"
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    color: "#024974",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: "currentColor" }}
                  >
                    <path
                      d="M19.43 12.98c.04-.32.07-.65.07-.98s-.03-.66-.07-.98l2.11-1.65a.5.5 0 00.12-.64l-2-3.46a.5.5 0 00-.6-.22l-2.49 1a7.03 7.03 0 00-1.69-.98l-.38-2.65A.488.488 0 0014 2h-4a.488.488 0 00-.5.42l-.38 2.65c-.63.24-1.22.56-1.77.94l-2.49-1a.5.5 0 00-.6.22l-2 3.46a.5.5 0 00.12.64l2.11 1.65c-.05.32-.08.65-.08.99s.03.67.08.99l-2.11 1.65a.5.5 0 00-.12.64l2 3.46c.14.24.44.32.68.22l2.49-1c.53.38 1.11.7 1.74.94l.38 2.65c.05.28.27.48.5.48h4c.23 0 .45-.2.5-.48l.38-2.65c.63-.24 1.22-.56 1.77-.94l2.49 1c.24.1.54.02.68-.22l2-3.46a.5.5 0 00-.12-.64l-2.11-1.65zM12 15.5A3.5 3.5 0 1112 8.5a3.5 3.5 0 010 7z"
                      fill="currentColor"
                    />
                  </svg>
                  Services
                </span>
                <svg
                  className="mobile-menu__dropdown-arrow"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    marginLeft: 8,
                    transition: "transform 0.3s",
                    transform: isMobileServicesOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    color: "currentColor",
                  }}
                >
                  <path
                    d="M6 8l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <ul
                id="mobile-services-dropdown"
                className={`mobile-menu__dropdown-content${
                  isMobileServicesOpen ? " active" : ""
                }`}
                style={{
                  maxHeight: isMobileServicesOpen ? 400 : 0,
                  transition: "max-height 0.3s ease",
                }}
              >
                <li>
                  <Link
                    href="/services/compliance-services"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileServicesOpen(false);
                    }}
                  >
                    Compliance Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/property-care-services"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileServicesOpen(false);
                    }}
                  >
                    Property Care Services
                  </Link>
                </li>
              </ul>
            </li>
            {/* <li>
              <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 1V23"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Pricing
              </Link>
            </li> */}
            {/* <li>
              <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 2V8H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 13H8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 17H8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 9H9H8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Blog
              </Link>
            </li> */}
            <li>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 10.5V6.5C21 5.11929 19.8807 4 18.5 4H5.5C4.11929 4 3 5.11929 3 6.5V17.5C3 18.8807 4.11929 20 5.5 20H18.5C19.8807 20 21 18.8807 21 17.5V13.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 10.5L12 16L3 10.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Contact
              </Link>
            </li>
          </ul>

          <div className="mobile-menu__actions">
            <Link
              href="#login"
              className="mobile-menu__login"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 17L15 12L10 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 12H3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Log in
            </Link>
            <Link
              href="#join"
              className="mobile-menu__join"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5V19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 12H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
