"use client";

import Contact from "@/components/sections/Contact/Contact";
import "@/components/sections/Contact/contact.scss";

export default function ContactPage() {
  return (
    <div
      className="common-section icons-bg--1 contact-container"
      style={{ marginTop: "-60px" }}
    >
      <div className="container" style={{ paddingBottom: "50px" }}>
        <div className="contact-intro" style={{ textAlign: "center" }}>
          <h1 className="contact-headline">Let’s Talk</h1>
          <p
            className="contact-subtext"
            style={{ maxWidth: 720, margin: "0 auto" }}
          >
            Have questions about compliance, services, or technology? Our team
            is here to help you streamline property management with RentalEase.
          </p>
        </div>

        <div className="contact-options">
          <a
            href="tel:+61123456789"
            style={{
              textDecoration: "none",
              background: "#fff",
              border: "1px solid #e8eaed",
              borderRadius: "12px",
              padding: "1.5rem",
              boxShadow: "0 6px 24px rgba(2,73,116,0.06)",
              color: "inherit",
              transition: "transform .2s ease, box-shadow .2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(-4px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 12px 28px rgba(2,73,116,0.12)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 6px 24px rgba(2,73,116,0.06)";
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: ".75rem",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "rgba(2,73,116,0.08)",
                  color: "#024974",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                >
                  <path
                    d="M22 16.92v2a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.92 4.18 2 2 0 0 1 4.86 2h2a2 2 0 0 1 2 1.72c.12.9.31 1.78.57 2.63a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.45-1.45a2 2 0 0 1 2.11-.45c.85.26 1.73.45 2.63.57A2 2 0 0 1 22 16.92z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div style={{ textAlign: "center" }}>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#1e293b",
                  }}
                >
                  Call Us
                </h3>
                <p style={{ margin: ".25rem 0 0", color: "#475569" }}>
                  Direct line to our support & sales team.
                </p>
              </div>
            </div>
          </a>

          <a
            href="mailto:hello@RentalEase.com"
            style={{
              textDecoration: "none",
              background: "#fff",
              border: "1px solid #e8eaed",
              borderRadius: "12px",
              padding: "1.5rem",
              boxShadow: "0 6px 24px rgba(2,73,116,0.06)",
              color: "inherit",
              transition: "transform .2s ease, box-shadow .2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(-4px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 12px 28px rgba(2,73,116,0.12)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 6px 24px rgba(2,73,116,0.06)";
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: ".75rem",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "rgba(2,73,116,0.08)",
                  color: "#024974",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                >
                  <path
                    d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M22 6l-10 7L2 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div style={{ textAlign: "center" }}>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#1e293b",
                  }}
                >
                  Email Us
                </h3>
                <p style={{ margin: ".25rem 0 0", color: "#475569" }}>
                  Quick responses to all enquiries.
                </p>
              </div>
            </div>
          </a>

          <a
            href="/book-now"
            style={{
              textDecoration: "none",
              background: "#fff",
              border: "1px solid #e8eaed",
              borderRadius: "12px",
              padding: "1.5rem",
              boxShadow: "0 6px 24px rgba(2,73,116,0.06)",
              color: "inherit",
              transition: "transform .2s ease, box-shadow .2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(-4px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 12px 28px rgba(2,73,116,0.12)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 6px 24px rgba(2,73,116,0.06)";
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: ".75rem",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "rgba(2,73,116,0.08)",
                  color: "#024974",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                >
                  <path
                    d="M8 7h8M8 11h8M8 15h5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="16"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div style={{ textAlign: "center" }}>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#1e293b",
                  }}
                >
                  Request a Demo
                </h3>
                <p style={{ margin: ".25rem 0 0", color: "#475569" }}>
                  See RentalEase in action with a personalised walkthrough
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <Contact />
    </div>
  );
}
