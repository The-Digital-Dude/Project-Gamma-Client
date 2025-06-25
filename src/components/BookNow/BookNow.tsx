import { Button } from "@/components/ui-elements/Button/Button";
import "./BookNow.scss";

export default function BookNow() {
  return (
    <div className="contact-inner container">
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

          <Button type="submit">Submit Now</Button>
        </form>
      </section>
    </div>
  );
}
