import { siteConfig } from "@/config/site";
import GlassyInput from "@/components/GlassyInput/GlassyInput";
import "@/styles/landing.scss";

export default function Home() {
  return (
    <main className="landing">
      <div className="landing__hero-wrapper">
        <section className="landing__hero">
          <div className="landing__content">
            <h1 className="landing__headline">
              The <span className="landing__headline--bold">all-in-one</span>{" "}
              solution to excel <br />
              <span className="landing__headline--highlight">
                in your studies.
              </span>
            </h1>
            <p className="landing__subtext">
              Unlock a smarter way to study with our AI-driven suite of powerful
              learning tools designed to enhance your academic journey.
            </p>

            <GlassyInput
              type="email"
              placeholder="Enter your email address"
              buttonLabel="Request Demo"
              onButtonClick={() => {
                /* handle click */
              }}
            />
            <div className="landing__stats">
              <div className="landing__stat">
                <span className="landing__stat-value">98%</span>
                <span className="landing__stat-label">accuracy rate</span>
              </div>
              <div className="landing__stat">
                <span className="landing__stat-value">50M+</span>
                <span className="landing__stat-label">questions solved</span>
              </div>
              <div className="landing__stat">
                <span className="landing__stat-value">5x</span>
                <span className="landing__stat-label">faster learning</span>
              </div>
            </div>
          </div>
          <div className="landing__visual">
            {/* Placeholder for hero image/card */}
            <div className="landing__visual-card">
              <img
                src="https://imagedelivery.net/LqiWLm-3MGbYHtFuUbcBtA/189d259c-f35e-4849-da0b-dc9a73374300/public"
                alt={siteConfig.name}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
