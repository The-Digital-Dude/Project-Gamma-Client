import { Button } from "../ui-elements/Button/Button";
import "./ContactMini.scss";

export default function ContactMini() {
  return (
    <div>
      {/* Best Price Guarantee Form Section */}
      <form className="best-price-form accent-border--3">
        <h4 className="form-title">How can we help?</h4>
        <input type="text" className="form-input" placeholder="Full name" />
        <input type="text" className="form-input" placeholder="Phone number" />
        <input
          type="email"
          className="form-input"
          placeholder="Email Address"
        />
        <Button variant="default" type="submit">
          Get in Touch
        </Button>
      </form>
    </div>
  );
}
