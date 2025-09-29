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
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    profession: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
      const response = await fetch(`${apiUrl}/api/v1/website-leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          profession: formData.profession,
          message: formData.message,
          source: "website_contact_form",
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        alert("Thank you for your message! We'll get back to you soon.");
        
        // Reset form
        setFormData({ firstName: "", lastName: "", email: "", phone: "", profession: "", message: "" });
        setIsTurnstileVerified(false);
        turnstileRef.current?.reset();
      } else {
        const errorData = await response.json();
        console.error('Form submission error:', errorData);
        setSubmitStatus('error');
        alert("There was an error submitting your message. Please try again.");
      }
    } catch (error) {
      console.error('Network error:', error);
      setSubmitStatus('error');
      alert("There was a network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
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
            <div className="contact-form-row">
              <div className="contact-form-group">
                <label htmlFor="firstName" className="contact-form-label">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="contact-form-input"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="lastName" className="contact-form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="contact-form-input"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
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
              <label htmlFor="profession" className="contact-form-label">
                Profession
              </label>
              <select
                id="profession"
                className="contact-form-input"
                value={formData.profession}
                onChange={handleInputChange}
              >
                <option value="">Select your profession</option>
                <option value="Property Manager">Property Manager</option>
                <option value="Landlord">Landlord</option>
                <option value="Tenant">Tenant</option>
                <option value="Real Estate Agent">Real Estate Agent</option>
                <option value="Property Developer">Property Developer</option>
                <option value="Property Investor">Property Investor</option>
                <option value="Strata Manager">Strata Manager</option>
                <option value="Building Manager">Building Manager</option>
                <option value="Facility Manager">Facility Manager</option>
                <option value="Other">Other</option>
              </select>
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

            <Button type="submit" disabled={!isTurnstileVerified || isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Now"}
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
}
