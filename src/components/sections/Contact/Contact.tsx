"use client";

import React, { useState, useRef } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { Button } from "@/components/ui-elements/Button/Button";
import "./contact.scss";
import {
  MdEmail,
  MdBusiness,
  MdHome,
  MdPhone,
  MdLocationOn,
  MdAccessTime,
} from "react-icons/md";

export default function Contact() {
  const [isTurnstileVerified, setIsTurnstileVerified] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const turnstileRef = useRef<any>(null);

  const handleTurnstileSuccess = (token: string) => {
    setIsTurnstileVerified(true);
  };

  const handleTurnstileError = () => {
    setIsTurnstileVerified(false);
  };

  const handleTurnstileExpire = () => {
    setIsTurnstileVerified(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isTurnstileVerified) {
      alert("Please complete the security verification.");
      return;
    }

    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);

    // For now, just show a success message
    alert("Thank you for your message! We'll get back to you soon.");

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsTurnstileVerified(false);
    turnstileRef.current?.reset();
  };

  return (
    <div
      className="contact-inner container"
      style={{ paddingLeft: "10px", paddingRight: "10px" }}
    >
      <div className="contact-grid">
        {/* Contact Information */}
        <section className="contact-info accent-background--4 accent-border--4">
          <h2 className="contact-info-title">Contact Information</h2>
          <div className="contact-info-list">
            <div className="contact-info-item">
              <MdEmail className="contact-info-icon" />
              <div>
                <span className="contact-info-label">General Enquiries:</span>
                <br />
                <a
                  href="mailto:hello@RentalEase.com.au"
                  className="contact-info-link"
                >
                  hello@RentalEase.com.au
                </a>
              </div>
            </div>
            <div className="contact-info-item">
              <MdPhone className="contact-info-icon" />
              <div>
                <span className="contact-info-label">Phone:</span>
                <br />
                <a href="tel:1300736853" className="contact-info-link">
                  1300 RENTLEASE (1300 736 853)
                </a>
              </div>
            </div>
            <div className="contact-info-item">
              <MdLocationOn className="contact-info-icon" />
              <div>
                <span className="contact-info-label">Office Address:</span>
                <br />
                <span className="contact-info-text">
                  Melbourne, VIC, Australia
                </span>
              </div>
            </div>
            <div className="contact-info-item">
              <MdAccessTime className="contact-info-icon" />
              <div>
                <span className="contact-info-label">Operating Hours:</span>
                <br />
                <span className="contact-info-text">
                  Monday - Friday: 9:00 AM - 5:00 PM (AEST)
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="contact-form accent-border--2 accent-background--2">
          <form className="contact-form-fields" onSubmit={handleSubmit}>
            <div className="contact-form-group">
              <label htmlFor="name" className="contact-form-label">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="contact-form-input"
                placeholder="Full name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="contact-form-row">
              <div className="contact-form-group">
                <label htmlFor="email" className="contact-form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="contact-form-input"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="phone" className="contact-form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="contact-form-input"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="contact-form-group">
              <label htmlFor="message" className="contact-form-label">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="contact-form-textarea"
                placeholder="I'd like to know more, please contact me."
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            {/* Cloudflare Turnstile */}
            <div className="contact-form-group turnstile-container">
              <Turnstile
                ref={turnstileRef}
                siteKey={
                  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ||
                  "1x00000000000000000000AA" // Test key for development
                }
                onSuccess={handleTurnstileSuccess}
                onError={handleTurnstileError}
                onExpire={handleTurnstileExpire}
                options={{
                  theme: "light",
                  size: "flexible",
                }}
              />
            </div>

            <Button type="submit" disabled={!isTurnstileVerified}>
              Submit Now
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
}
