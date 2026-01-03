"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Headline from "@/components/Headline/Headline";
import { MdEmail, MdPhone, MdQuestionAnswer, MdBuild, MdSecurity, MdInfo } from "react-icons/md";
import "@/styles/support.scss";

export default function SupportPage() {
  return (
    <div className="support-page">
      {/* Hero Section */}
      <section className="support-page__hero common-section icons-bg--1">
        <div className="container">
          <div className="support-page__hero-content">
            <Headline
              mainText="We&apos;re Here to"
              boldText="Support You"
              highlightText=""
              heading="h1"
            />
            <p className="support-page__hero-subtitle">
              Get help with the RentalEase Technician app. Our support team is ready to assist you with any questions or technical issues.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="support-page__contact-section">
        <div className="container">
          <div className="support-page__contact-grid">
            <a
              href="mailto:support@rentalease.com.au"
              className="support-page__contact-card"
            >
              <div className="support-page__icon-wrapper support-page__icon-wrapper--email">
                <MdEmail size={28} />
              </div>
              <h3 className="support-page__contact-title">Email Support</h3>
              <p className="support-page__contact-text">support@rentalease.com.au</p>
              <p className="support-page__contact-meta">Response within 24 hours</p>
            </a>

            <a
              href="tel:1300736853"
              className="support-page__contact-card"
            >
              <div className="support-page__icon-wrapper support-page__icon-wrapper--phone">
                <MdPhone size={28} />
              </div>
              <h3 className="support-page__contact-title">Call Us</h3>
              <p className="support-page__contact-text">1300 RENTLEASE</p>
              <p className="support-page__contact-meta">1300 736 853</p>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="support-page__faq-section common-section">
        <div className="container">
          <div className="support-page__section-header">
            <Headline
              mainText="Frequently Asked"
              boldText="Questions"
              highlightText=""
              heading="h2"
            />
          </div>

          <div className="support-page__faq-grid">
            {/* Getting Started */}
            <div className="support-page__faq-category">
              <div className="support-page__category-header">
                <div className="support-page__category-icon">
                  <MdQuestionAnswer size={24} />
                </div>
                <h3 className="support-page__category-title">Getting Started</h3>
              </div>

              <div className="support-page__faq-list">
                <div className="support-page__faq-item">
                  <h4 className="support-page__faq-question">How do I log in to the app?</h4>
                  <p className="support-page__faq-answer">
                    Use the email address and password provided by your property management company. If you haven&apos;t received credentials, please contact your agency administrator.
                  </p>
                </div>

                <div className="support-page__faq-item">
                  <h4 className="support-page__faq-question">How do I sync jobs to my calendar?</h4>
                  <p className="support-page__faq-answer">
                    When prompted, allow calendar access. Jobs will automatically sync to a &quot;RentalEase Work Schedule&quot; calendar on your device with reminders.
                  </p>
                </div>

                <div className="support-page__faq-item">
                  <h4 className="support-page__faq-question">How do I upload inspection photos?</h4>
                  <p className="support-page__faq-answer">
                    When prompted, allow camera and photo library access. You can then take photos directly or select from your photo library when completing job inspections.
                  </p>
                </div>
              </div>
            </div>

            {/* Troubleshooting */}
            <div className="support-page__faq-category">
              <div className="support-page__category-header">
                <div className="support-page__category-icon">
                  <MdBuild size={24} />
                </div>
                <h3 className="support-page__category-title">Troubleshooting</h3>
              </div>

              <div className="support-page__faq-list">
                <div className="support-page__faq-item">
                  <h4 className="support-page__faq-question">I&apos;m not receiving job notifications</h4>
                  <p className="support-page__faq-answer">
                    Check that notifications are enabled for RentalEase Technician in your device settings. Go to Settings &gt; Notifications &gt; RentalEase Technician and ensure &quot;Allow Notifications&quot; is turned on.
                  </p>
                </div>

                <div className="support-page__faq-item">
                  <h4 className="support-page__faq-question">What device information do I need for support?</h4>
                  <p className="support-page__faq-answer">
                    Please provide your device model (e.g., iPhone 14 Pro), iOS version (Settings &gt; General &gt; About), app version (More &gt; About), and a description of the issue with screenshots if applicable.
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy & Security */}
            <div className="support-page__faq-category">
              <div className="support-page__category-header">
                <div className="support-page__category-icon">
                  <MdSecurity size={24} />
                </div>
                <h3 className="support-page__category-title">Privacy &amp; Security</h3>
              </div>

              <div className="support-page__faq-list">
                <div className="support-page__faq-item">
                  <h4 className="support-page__faq-question">How is my data protected?</h4>
                  <p className="support-page__faq-answer">
                    Your privacy and security are important to us. We use industry-standard encryption and security practices to protect your data.
                  </p>
                </div>

                <div className="support-page__faq-item">
                  <Link href="/app-privacy-policy" className="support-page__privacy-link">
                    View Complete Privacy Policy →
                  </Link>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="support-page__faq-category">
              <div className="support-page__category-header">
                <div className="support-page__category-icon">
                  <MdInfo size={24} />
                </div>
                <h3 className="support-page__category-title">About RentalEase</h3>
              </div>

              <div className="support-page__faq-list">
                <div className="support-page__faq-item">
                  <p className="support-page__faq-answer">
                    RentalEase is Australia&apos;s leading property management platform, trusted by agencies to manage thousands of rental properties.
                  </p>
                  <p className="support-page__faq-answer" style={{ marginTop: '0.5rem' }}>
                    <strong>Office:</strong> Melbourne, VIC, Australia
                  </p>
                  <a
                    href="https://www.rentalease.com.au"
                    className="support-page__website-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit www.rentalease.com.au →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="support-page__cta-section">
        <div className="container">
          <div className="support-page__cta-box">
            <h2 className="support-page__cta-title">Still Need Help?</h2>
            <p className="support-page__cta-text">
              Our support team is available Monday to Friday, 9am - 5pm AEST
            </p>
            <div className="support-page__cta-buttons">
              <a href="mailto:support@rentalease.com.au" className="support-page__cta-btn support-page__cta-btn--primary">
                Contact Support
              </a>
              <Link href="/" className="support-page__cta-btn support-page__cta-btn--secondary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
