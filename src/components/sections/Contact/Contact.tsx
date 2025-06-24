import { Button } from "@/components/ui-elements/Button/Button";
import { siteConfig } from "@/config/site";
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
  return (
    <section className="contact-container common-section">
      <div className="contact-inner container icons-bg--1">
        <div className="contact-intro">
          <h1 className="contact-headline">Get in Touch</h1>
          <p className="contact-subtext">
            We're here to help. Whether you're a landlord with a question, a
            tenant needing support, or have a media enquiry, our team is ready
            to assist.
          </p>
        </div>
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
                    href="mailto:hello@rentalease.com.au"
                    className="contact-info-link"
                  >
                    hello@rentalease.com.au
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <MdBusiness className="contact-info-icon" />
                <div>
                  <span className="contact-info-label">Landlord Support:</span>
                  <br />
                  <a
                    href="mailto:landlords@rentalease.com.au"
                    className="contact-info-link"
                  >
                    landlords@rentalease.com.au
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <MdHome className="contact-info-icon" />
                <div>
                  <span className="contact-info-label">Tenant Support:</span>
                  <br />
                  <a
                    href="mailto:tenants@rentalease.com.au"
                    className="contact-info-link"
                  >
                    tenants@rentalease.com.au
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
                    Level 10, 123 Property Lane
                    <br />
                    Sydney, NSW 2000 Australia
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
            <form className="contact-form-fields">
              <div className="contact-form-group">
                <label htmlFor="name" className="contact-form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="contact-form-input"
                  placeholder="Full name"
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
                ></textarea>
              </div>

              <Button type="submit">Submit Now</Button>
            </form>
          </section>
        </div>
      </div>
    </section>
  );
}
