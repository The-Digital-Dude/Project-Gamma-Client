import Headline from "@/components/Headline/Headline";
import Link from "next/link";
import "@/styles/privacy-policy.scss";

export default function PrivacyPolicyPage() {
  return (
    <section className="privacy-policy">
      <section className="privacy-policy__hero common-section">
        <div className="container">
          <div className="privacy-policy__content">
            <h1 className="privacy-policy__title">Privacy Policy</h1>

            <div className="privacy-policy__description">
              <p>
                This Privacy Policy governs the manner in which RentalEase Pty
                Ltd ("RentalEase", "we", "our", or "us") collects, uses,
                maintains and discloses information collected from users (each,
                a "User") of the{" "}
                <a
                  href="https://www.rentalease.com.au"
                  className="privacy-policy__contact-website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.rentalease.com.au
                </a>{" "}
                website ("Site"). This privacy policy applies to the Site and
                all products and services offered by RentalEase.
              </p>
            </div>

            <div className="privacy-policy__section">
              <h3 className="privacy-policy__section-title">
                Where We Store Data
              </h3>
              <p className="privacy-policy__section-content">
                We store data in MongoDB Atlas (database) and Cloudinary (images). These providers may process data in multiple regions, including outside your home country, and we protect transfers with encryption in transit/at rest, access controls, and data processing agreements or standard contractual clauses.
              </p>
            </div>

            <div className="privacy-policy__section">
              <h3 className="privacy-policy__section-title">
                Personal identification information
              </h3>
              <p className="privacy-policy__section-content">
                We may collect personal identification information from Users in
                a variety of ways, including, but notlimited to, when Users
                visit our site, fill out a form, and in connection with other
                activities, services,features or resources we make available on
                our Site. Users may be asked for, as appropriate, name,email
                address, mailing address, phone number. Users may, however,
                visit our Site anonymously. Wewill collect personal
                identification information from Users only if they voluntarily
                submit such information to us. Users can always refuse to supply
                personally identification information, except thatit may prevent
                them from engaging in certain Site related activities.
              </p>
            </div>
            <div className="privacy-policy__section">
              <h3 className="privacy-policy__section-title">
                Non-personal identification information
              </h3>
              <p className="privacy-policy__section-content">
                We may collect non-personal identification information about
                Users whenever they interact with our Site. Non-personal
                identification information may include the browser name, the
                type of computer and technical information about Users means of
                connection to our Site, such as the operating system and the
                Internet service providers utilized and other similar
                information.
              </p>
            </div>
            <div className="privacy-policy__section">
              <h3 className="privacy-policy__section-title">
                Web browser cookies
              </h3>
              <p className="privacy-policy__section-content">
                Our Site may use essential cookies to enhance User experience.
                We do not use third-party analytics or tracking cookies. User
                may choose to set their web browser to refuse cookies, or to
                alert you when cookies are being sent. If they do so, note that
                some parts of the Site may not function properly.
              </p>
            </div>

            <div className="privacy-policy__section">
              <h3 className="privacy-policy__section-title">
                How we use collected information
              </h3>
              <p className="privacy-policy__section-content">
                RentalEase may collect and use Users personal information for
                the following purposes:
              </p>

              <div className="privacy-policy__sub-sections">
                <div className="privacy-policy__sub-section">
                  <h4 className="privacy-policy__sub-title">
                    To improve customer service
                  </h4>
                  <p className="privacy-policy__sub-content">
                    Information you provide helps us respond to your customer
                    service requests and support needs more efficiently.
                  </p>
                </div>

                <div className="privacy-policy__sub-section">
                  <h4 className="privacy-policy__sub-title">
                    To personalize user experience
                  </h4>
                  <p className="privacy-policy__sub-content">
                    We may use information in the aggregate to understand how
                    our Users as a group use the services and resources provided
                    on our Site.
                  </p>
                </div>

                <div className="privacy-policy__sub-section">
                  <h4 className="privacy-policy__sub-title">
                    To improve our Site
                  </h4>
                  <p className="privacy-policy__sub-content">
                    We may use feedback you provide to improve our products and
                    services.
                  </p>
                </div>

                <div className="privacy-policy__sub-section">
                  <h4 className="privacy-policy__sub-title">
                    To send service updates
                  </h4>
                  <p className="privacy-policy__sub-content">
                    We may use the email address to send User information and
                    updates related to service usage and to respond to their
                    inquiries, questions, and/or other requests. We do not
                    process online payments through the Site and do not collect
                    or store payment card numbers or CVV.
                  </p>
                </div>
              </div>
            </div>

            <div className="privacy-policy__section">
              <h3 className="privacy-policy__section-title">
                How We Protect Your Information
              </h3>
              <p className="privacy-policy__section-content">
                We adopt appropriate data collection, storage, and processing
                practices, along with security measures, to protect your
                personal information against unauthorized access, alteration,
                disclosure, or destruction. This includes protection of your
                username, password, transaction data, and other personal details
                stored on our Site.
              </p>
            </div>
            <div className="privacy-policy__section">
              <h3 className="privacy-policy__section-title">
                Sharing Your Personal Information
              </h3>
              <p className="privacy-policy__section-content">
                We do not sell, trade, or rent Users’ personal identification
                information to third parties. We may share general, aggregated
                demographic information not linked to any personally
                identifiable details with our trusted partners, affiliates, or
                service providers for the purposes outlined in this policy.
              </p>
            </div>
            <div className="privacy-policy__section">
              <h3 className="privacy-policy__section-title">
                Changes to This Privacy Policy
              </h3>
              <p className="privacy-policy__section-content">
                RentalEase reserves the right to update this privacy policy at
                any time. When changes are made, the updated date will be
                reflected at the bottom of this page. We encourage Users to
                periodically review this page to stay informed on how we are
                protecting the personal information we collect. You acknowledge
                and agree that it is your responsibility to review this privacy
                policy regularly and become aware of any updates or
                modifications.
              </p>
            </div>
            <div className="privacy-policy__section">
              <h3 className="privacy-policy__section-title">
                Your Acceptance of These Terms
              </h3>
              <p className="privacy-policy__section-content">
                By using this Site, you signify your acceptance of this Privacy
                Policy. If you do not agree to this policy, please do not use
                our Site. Your continued use of the Site following the posting
                of any changes will be deemed as your acceptance of those
                changes.
              </p>
            </div>
            <div className="privacy-policy__section">
              <h3 className="privacy-policy__section-title">Contacting Us</h3>
              <div className="privacy-policy__section-content">
                <p>
                  If you have any questions about this Privacy Policy, the
                  practices of this Site, or your dealings with RentalEase,
                  please feel free to contact us:
                </p>
                <p>
                  For access, deletion, or portability requests, email{" "}
                  <a
                    href="mailto:info@rentalease.com.au"
                    className="privacy-policy__contact-email"
                  >
                    info@rentalease.com.au
                  </a>
                  . We aim to respond within 30 days.
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "1.5rem 0 0 0",
                  }}
                >
                  <li>
                    <strong>rentalease</strong>
                  </li>
                  <li>
                    <strong>General Enquiries:</strong>{" "}
                    <a
                      href="mailto:hello@rentalease.com.au"
                      className="privacy-policy__contact-email"
                    >
                      hello@rentalease.com.au
                    </a>
                  </li>
                  <li>
                    <strong>Landlord Support:</strong>{" "}
                    <a
                      href="mailto:landlords@rentalease.com.au"
                      className="privacy-policy__contact-email"
                    >
                      landlords@rentalease.com.au
                    </a>
                  </li>
                  <li>
                    <strong>Tenant Support:</strong>{" "}
                    <a
                      href="mailto:tenants@rentalease.com.au"
                      className="privacy-policy__contact-email"
                    >
                      tenants@rentalease.com.au
                    </a>
                  </li>
                  <li>
                    <strong>Phone:</strong>{" "}
                    <span className="privacy-policy__contact-phone">
                      1300 RENTLEASE (1300 736 853)
                    </span>
                  </li>
                  <li>
                    <strong>Office Address:</strong> Melbourne, VIC, Australia
                  </li>
                  <li>
                    <strong>Operating Hours:</strong> Monday – Friday: 9:00 AM –
                    5:00 PM (AEST)
                  </li>
                  <li>
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://www.rentalease.com.au"
                      className="privacy-policy__contact-website"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.rentalease.com.au
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 48, textAlign: "center" }}>
            <nav aria-label="breadcrumb">
              <Link
                href="/"
                style={{
                  color: "#1a237e",
                  textDecoration: "underline",
                  fontWeight: 500,
                }}
              >
                Home
              </Link>
              <span style={{ margin: "0 8px", color: "#888" }}>&gt;</span>
              <span style={{ color: "#333", fontWeight: 500 }}>
                Privacy Policy
              </span>
            </nav>
          </div>
        </div>
      </section>
    </section>
  );
}
