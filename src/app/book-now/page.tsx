import Script from "next/script";

export default function BookNowPage() {
  return (
    <div className="common-section icons-bg--1 contact-container">
      <div className="container ">
        <div className="contact-intro">
          <h1 className="contact-headline">Booking Portal</h1>
          <p className="contact-subtext">
            Book now to get support regarding your property. Our team is ready
            to assist.
          </p>
          {/* Calendly inline widget begin */}
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/projectmanager-rokoautomations/30min?hide_gdpr_banner=1"
            style={{ minWidth: "320px", height: "700px" }}
          ></div>
          <Script
            type="text/javascript"
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="afterInteractive"
          />
          {/* Calendly inline widget end */}
        </div>
      </div>
    </div>
  );
}
