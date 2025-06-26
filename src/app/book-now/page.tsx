import BookNow from "@/components/BookNow/BookNow";
import "@/components/BookNow/BookNow.scss";

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
          <BookNow />
        </div>
      </div>
    </div>
  );
}
