import Contact from "@/components/sections/Contact/Contact";
import "@/components/sections/Contact/contact.scss";

export default function ContactPage() {
  return (
    <div className="common-section icons-bg--1 contact-container">
      <div className="container ">
        <div className="contact-intro">
          <h1 className="contact-headline">Get in Touch</h1>
          <p className="contact-subtext">
            We're here to help. Whether you're a landlord with a question, a
            tenant needing support, or have a media enquiry, our team is ready
            to assist.
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
}
