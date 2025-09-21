import BookNow from "@/components/BookNow/BookNow";
import Script from "next/script";

export default function BookNowPage() {
  return (
    <div className="icons-bg--1 contact-container py-45">
      <div className="container ">
        <div style={{ textAlign: "center" }}>
          <h1 className="contact-headline">
            ⚡You’re Just 1 Step Away From Total Control: Compliance & Beyond ⚡
          </h1>
          <p className="contact-subtext">
            Book your free demo and discover how Rentalease not only keeps every
            property 100% compliant, but also helps you save time, reduce admin,
            and deliver more value to your landlords & tenants.
          </p>

          <BookNow />
          {/* Calendly inline widget begin */}
          {/* <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/projectmanager-rokoautomations/30min?hide_gdpr_banner=1"
            style={{ minWidth: "320px", height: "700px" }}
          ></div>
          <Script
            type="text/javascript"
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="afterInteractive"
          /> */}
          {/* Calendly inline widget end */}
        </div>
      </div>
    </div>
  );
}
