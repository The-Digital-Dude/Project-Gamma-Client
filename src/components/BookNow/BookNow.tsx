"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui-elements/Button/Button";
import "./BookNow.scss";

export default function BookNow() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    service: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.service) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
      const response = await fetch(`${apiUrl}/api/v1/website-leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.name.split(" ")[0] || formData.name,
          lastName: formData.name.split(" ").slice(1).join(" ") || "",
          email: formData.email,
          phone: formData.phone,
          profession: formData.profession,
          message: formData.service,
          source: "website_bookNow_form",
        }),
      });

      if (response.ok) {
        toast.success(
          "Thank you for your booking request! We'll get back to you soon."
        );

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          profession: "",
          service: "",
        });
      } else {
        const errorData = await response.json();
        console.error("Form submission error:", errorData);
        toast.error(
          errorData.message ||
            "There was an error submitting your request. Please try again."
        );
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error(
        "There was a network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="contact-inner container">
      <section className="contact-form accent-border--2 accent-background--2">
        <form className="contact-form-fields" onSubmit={handleSubmit}>
          <div className="contact-form-group">
            <label htmlFor="name" className="contact-form-label">
              Let's personalise your demo
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
          {/* <div className="contact-form-row"> */}
          <div className="contact-form-group">
            <label htmlFor="email" className="contact-form-label">
              Where should we send your booking link?
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
              Quick confirmation (no spam, promise)
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
          {/* </div> */}

          <div className="contact-form-group">
            <label htmlFor="profession" className="contact-form-label">
              Are you a Landlord, Property Manager, or Agency?
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
            <label htmlFor="service" className="contact-form-label">
              What service do you need?
            </label>
            <textarea
              id="service"
              className="contact-form-input"
              placeholder="Please describe the service you need"
              rows={4}
              value={formData.service}
              onChange={handleInputChange}
              required
            />
          </div>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Now"}
          </Button>
        </form>
      </section>
    </div>
  );
}
