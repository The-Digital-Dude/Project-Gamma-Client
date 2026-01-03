/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import "@/styles/app-privacy-policy.scss";

export const metadata: Metadata = {
  title: "Privacy Policy - RentalEase Technician",
  description: "Privacy policy for the RentalEase Technician mobile app",
};

export default function AppPrivacyPolicyPage() {
  return (
    <section className="app-privacy-policy">
      <section className="app-privacy-policy__hero common-section">
        <div className="container">
          <div className="app-privacy-policy__content">
            <h1 className="app-privacy-policy__title">
              Privacy Policy for RentalEase Technician
            </h1>
            <p className="app-privacy-policy__updated">
              Last Updated: January 3, 2026
            </p>

            <div className="app-privacy-policy__section">
              <h2 className="app-privacy-policy__section-title">Introduction</h2>
              <p className="app-privacy-policy__text">
                RentalEase Technician ("we," "our," or "us") is committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                use our mobile application (the "App"). Please read this privacy
                policy carefully. If you do not agree with the terms of this
                privacy policy, please do not access the App.
              </p>
            </div>

            <div className="app-privacy-policy__section">
              <h2 className="app-privacy-policy__section-title">
                Information We Collect
              </h2>
              <div>
                <h3 className="app-privacy-policy__sub-title">
                  Personal Information You Provide
                </h3>
                <p className="app-privacy-policy__text">
                  When you register and use the RentalEase Technician app, we
                  collect the following personal information:
                </p>
                <ul className="app-privacy-policy__list">
                  <li>
                    Account Information: Full name, email address, phone number
                  </li>
                  <li>
                    Professional Information: Technician license number, license
                    expiry date, years of experience, professional background
                  </li>
                  <li>
                    Location Information: Street address, suburb, state, postcode
                  </li>
                  <li>Profile Information: Profile photo (optional)</li>
                </ul>
              </div>

              <div>
                <h3 className="app-privacy-policy__sub-title">
                  Information Automatically Collected
                </h3>
                <p className="app-privacy-policy__text">
                  When you use the App, we may automatically collect certain
                  information:
                </p>
                <ul className="app-privacy-policy__list">
                  <li>
                    Device Information: Device type, operating system version,
                    unique device identifiers
                  </li>
                  <li>
                    Usage Information: App features accessed, time spent in the
                    app, interaction patterns
                  </li>
                  <li>
                    Technical Information: IP address, app version, crash
                    reports, performance data
                  </li>
                </ul>
              </div>
            </div>

            <div className="app-privacy-policy__section">
              <h2 className="app-privacy-policy__section-title">
                Permissions We Request
              </h2>
              <p className="app-privacy-policy__text">
                The App requests the following permissions to provide its core
                functionality:
              </p>
              <ul className="app-privacy-policy__list">
                <li>
                  Calendar Access: To sync your assigned job schedules to your
                  device calendar and set appointment reminders. You can view,
                  modify, or delete these synced events at any time.
                </li>
                <li>
                  Camera Access: To take photos during property inspections and
                  job documentation.
                </li>
                <li>
                  Photo Library Access: To attach existing photos from your
                  device to inspection reports and job records.
                </li>
              </ul>
              <p className="app-privacy-policy__text app-privacy-policy__highlight">
                Important: You can deny or revoke these permissions at any time
                through your device settings. Denying permissions may limit
                certain app functionality.
              </p>
              <p className="app-privacy-policy__text">
                The App does not request Location, Contacts, Microphone, Push
                Notifications, or Background Activity permissions.
              </p>
            </div>

            <div className="app-privacy-policy__section">
              <h2 className="app-privacy-policy__section-title">
                Where We Store Data & International Transfers
              </h2>
              <p className="app-privacy-policy__text">
                Your information is stored in MongoDB Atlas (database) and Cloudinary (images). These providers may process data in multiple regions, which can include locations outside your home country. We protect international transfers through encryption in transit and at rest, strict access controls, and data processing agreements or standard contractual clauses with our service providers.
              </p>
            </div>

            <div className="app-privacy-policy__section">
              <h2 className="app-privacy-policy__section-title">
                How We Use Your Information
              </h2>
              <p className="app-privacy-policy__text">
                We use the information we collect for the following purposes:
              </p>
              <ul className="app-privacy-policy__list">
                <li>
                  Service Delivery: To create and manage your technician
                  account, assign jobs, and facilitate property maintenance
                  services
                </li>
                <li>
                  Communication: To send you job notifications, updates, and
                  important service announcements
                </li>
                <li>
                  Calendar Integration: To sync your work schedule with your
                  device calendar and send timely reminders for upcoming jobs
                </li>
                <li>
                  Documentation: To store inspection photos and job completion
                  records
                </li>
                <li>
                  Payment Records: To note when manual payments for completed
                  jobs have been received; no payment card numbers or CVV are
                  collected in the App
                </li>
                <li>
                  App Improvement: To analyze app usage, fix bugs, and improve
                  user experience
                </li>
                <li>
                  Legal Compliance: To comply with legal obligations and protect
                  our legal rights
                </li>
              </ul>
            </div>

            <div className="app-privacy-policy__section">
              <h2 className="app-privacy-policy__section-title">
                How We Share Your Information
              </h2>
              <p className="app-privacy-policy__text">
                We do not sell your personal information. We may share your
                information in the following circumstances:
              </p>

              <div>
                <h3 className="app-privacy-policy__sub-title">
                  With Service Providers
                </h3>
                <p className="app-privacy-policy__text">
                  We use trusted third-party service providers to support our
                  operations:
                </p>
                <ul className="app-privacy-policy__list">
                  <li>
                    Cloudinary: For secure storage of profile photos and
                    inspection images
                  </li>
                  <li>Database Hosting: MongoDB Atlas for encrypted data storage</li>
                  <li>Cloud Infrastructure: For app hosting and backend services</li>
                </ul>
                <p className="app-privacy-policy__text">
                  All service providers are contractually obligated to keep your
                  information confidential and secure.
                </p>
              </div>

              <div>
                <h3 className="app-privacy-policy__sub-title">
                  With Property Managers and Agencies
                </h3>
                <p className="app-privacy-policy__text">
                  As a technician platform, certain information is shared to
                  facilitate job assignments:
                </p>
                <ul className="app-privacy-policy__list">
                  <li>
                    Your name, contact information, and professional credentials
                    are shared with property managers and agencies who assign
                    you jobs
                  </li>
                  <li>
                    Inspection photos and job completion reports are shared with
                    the property managers who requested the service
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="app-privacy-policy__sub-title">
                  Legal Requirements
                </h3>
                <p className="app-privacy-policy__text">
                  We may disclose your information if required by law, court
                  order, or government regulation, or if we believe disclosure
                  is necessary to:
                </p>
                <ul className="app-privacy-policy__list">
                  <li>Comply with legal process</li>
                  <li>Protect our rights, property, or safety</li>
                  <li>Prevent fraud or security issues</li>
                  <li>Protect the rights and safety of our users</li>
                </ul>
              </div>
            </div>

            <div className="app-privacy-policy__section">
              <h2 className="app-privacy-policy__section-title">
                Payment Processing
              </h2>
              <p className="app-privacy-policy__text">
                Payments to technicians are handled manually by RentalEase. We do not use a third-party payment processor in the App, and we do not collect or store full payment card numbers or CVV. Any payment details exchanged outside the App should be handled through secure, PCI DSS-compliant channels.
              </p>
            </div>

            <div className="app-privacy-policy__section">
              <h2 className="app-privacy-policy__section-title">
                Data Storage and Security
              </h2>
              <h3 className="app-privacy-policy__sub-title">
                How We Protect Your Data
              </h3>
              <p className="app-privacy-policy__text">
                We implement industry-standard security measures to protect your
                information:
              </p>
              <ul className="app-privacy-policy__list">
                <li>
                  Encryption in Transit: All data transmitted between your
                  device and our servers uses HTTPS/TLS encryption
                </li>
                <li>Encryption at Rest: Sensitive data stored on our servers is encrypted</li>
                <li>
                  Secure Token Storage: Authentication credentials are stored
                  using platform-native secure storage (iOS Keychain/Android
                  Keystore)
                </li>
                <li>
                  Access Controls: Strict access controls limit who can view your
                  personal information
                </li>
                <li>Regular Security Audits: We regularly review our security practices</li>
              </ul>
            </div>

            <div className="app-privacy-policy__section">
              <h2 className="app-privacy-policy__section-title">
                Data Retention
              </h2>
              <p className="app-privacy-policy__text">
                We retain your personal information for as long as necessary to
                provide our services and fulfill the purposes outlined in this
                Privacy Policy:
              </p>
              <ul className="app-privacy-policy__list">
                <li>Active Accounts: Your information is retained while your account is active</li>
                <li>
                  Completed Jobs: Job records and inspection photos are retained
                  for 7 years for legal and compliance purposes
                </li>
                <li>
                  Deleted Accounts: If you request account deletion, we will
                  delete or anonymize personal data tied to the account within
                  30 days, except where retention is required by law
                </li>
              </ul>
            </div>

            <div className="app-privacy-policy__section">
              <h2 className="app-privacy-policy__section-title">
                Your Privacy Rights
              </h2>
              <p className="app-privacy-policy__text">
                You have the following rights regarding your personal
                information:
              </p>
              <ul className="app-privacy-policy__list">
                <li>
                  Access and Correction: You can access and update your personal
                  information at any time through the App's profile settings
                </li>
                <li>
                  Data Portability: You can request a copy of your personal data
                  in a portable format by contacting us at
                  <span> </span>
                  <a
                    href="mailto:info@rentalease.com.au"
                    className="app-privacy-policy__contact-link"
                  >
                    info@rentalease.com.au
                  </a>
                </li>
                <li>
                  Account Deletion: You can request deletion of your account and
                  personal information by contacting us. We will process your
                  request within 30 days
                </li>
                <li>
                  Withdraw Consent: You can withdraw consent for specific data
                  processing activities, such as calendar sync, at any time
                  through the App settings or device settings
                </li>
                <li>
                  Opt-Out of Communications: You can opt out of non-essential
                  communications through the App's notification settings
                </li>
              </ul>
              <p className="app-privacy-policy__text">
                You can submit access, deletion, or portability requests by
                emailing{" "}
                <a
                  href="mailto:info@rentalease.com.au"
                  className="app-privacy-policy__contact-link"
                >
                  info@rentalease.com.au
                </a>
                . We aim to respond within 30 days. Where available in the App,
                you may also view or update certain information via the profile
                or settings pages.
              </p>
            </div>

            <div className="app-privacy-policy__section">
              <h2 className="app-privacy-policy__section-title">
                Children's Privacy
              </h2>
              <p className="app-privacy-policy__text">
                The RentalEase Technician app is intended for professional use
                by adults only. We do not knowingly collect personal information
                from children under 18. If we discover that we have collected
                information from a child under 18, we will delete it
                immediately.
              </p>
            </div>

            <div className="app-privacy-policy__section">
              <h2 className="app-privacy-policy__section-title">
                California Privacy Rights (CCPA)
              </h2>
              <p className="app-privacy-policy__text">
                If you are a California resident, you have additional rights
                under the California Consumer Privacy Act:
              </p>
              <ul className="app-privacy-policy__list">
                <li>Right to know what personal information is collected</li>
                <li>
                  Right to know whether personal information is sold or disclosed
                </li>
                <li>
                  Right to say no to the sale of personal information (we do not
                  sell personal information)
                </li>
                <li>Right to access your personal information</li>
                <li>
                  Right to request deletion of personal information
                </li>
                <li>Right to equal service and price</li>
              </ul>
              <p className="app-privacy-policy__text">
                To exercise these rights, contact us at
                <span> </span>
                <a
                  href="mailto:info@rentalease.com.au"
                  className="app-privacy-policy__contact-link"
                >
                  info@rentalease.com.au
                </a>
                .
              </p>
            </div>

            <div className="app-privacy-policy__section">
              <h2 className="app-privacy-policy__section-title">
                European Privacy Rights (GDPR)
              </h2>
              <p className="app-privacy-policy__text">
                If you are located in the European Economic Area (EEA), you have
                additional rights under the General Data Protection Regulation:
              </p>
              <ul className="app-privacy-policy__list">
                <li>Right to access your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Right to withdraw consent</li>
              </ul>
              <p className="app-privacy-policy__text">
                To exercise these rights, contact us at
                <span> </span>
                <a
                  href="mailto:info@rentalease.com.au"
                  className="app-privacy-policy__contact-link"
                >
                  info@rentalease.com.au
                </a>
                .
              </p>
            </div>

            <div className="app-privacy-policy__section">
              <h2 className="app-privacy-policy__section-title">
                Analytics and Tracking
              </h2>
              <p className="app-privacy-policy__text">
                No third-party analytics or tracking SDKs are used, and we do
                not track your activity across other apps or websites.
              </p>
              <p className="app-privacy-policy__text">
                If we implement analytics in the future, we will update this
                Privacy Policy and obtain your consent where required.
              </p>
            </div>

            <div className="app-privacy-policy__section">
              <h2 className="app-privacy-policy__section-title">
                Changes to This Privacy Policy
              </h2>
              <p className="app-privacy-policy__text">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or for legal, operational, or
                regulatory reasons. We will notify you of any material changes
                by:
              </p>
              <ul className="app-privacy-policy__list">
                <li>Posting the new Privacy Policy in the App</li>
                <li>Updating the "Last Updated" date</li>
                <li>Sending you a notification through the App or email</li>
              </ul>
              <p className="app-privacy-policy__text">
                Your continued use of the App after changes are posted
                constitutes acceptance of the updated Privacy Policy.
              </p>
            </div>

            <div className="app-privacy-policy__section">
              <h2 className="app-privacy-policy__section-title">Contact Us</h2>
              <p className="app-privacy-policy__text">
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or our data practices, please contact us:
              </p>
              <ul className="app-privacy-policy__list">
                <li>RentalEase Privacy Team</li>
                <li>
                  Email:
                  <span> </span>
                  <a
                    href="mailto:info@rentalease.com.au"
                    className="app-privacy-policy__contact-link"
                  >
                    info@rentalease.com.au
                  </a>
                </li>
                <li>Response Time: Up to 30 days</li>
              </ul>
            </div>

            <div className="app-privacy-policy__section">
              <h2 className="app-privacy-policy__section-title">Consent</h2>
              <p className="app-privacy-policy__text">
                By using the RentalEase Technician app, you consent to this
                Privacy Policy and our collection, use, and sharing of your
                information as described herein.
              </p>
            </div>

            <div className="app-privacy-policy__section">
              <h2 className="app-privacy-policy__section-title">
                This Privacy Policy complies with:
              </h2>
              <ul className="app-privacy-policy__compliance-list">
                <li className="app-privacy-policy__compliance-item">
                  Australian Privacy Principles (APPs)
                </li>
                <li className="app-privacy-policy__compliance-item">
                  Apple App Store Review Guidelines 5.1
                </li>
                <li className="app-privacy-policy__compliance-item">
                  California Consumer Privacy Act (CCPA)
                </li>
                <li className="app-privacy-policy__compliance-item">
                  General Data Protection Regulation (GDPR)
                </li>
              </ul>
            </div>

            <div style={{ marginTop: 40, textAlign: "center" }}>
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
                  App Privacy Policy
                </span>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
