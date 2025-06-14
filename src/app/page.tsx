import { siteConfig } from "@/config/site";
import "@/styles/landing.scss";

export default function Home() {
  return (
    <main className="landing">
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
          <div className="landing__social-proof">
            <div className="landing__avatars">
              {/* Dynamic avatars - replace with real data or images */}
              <img src="/avatars/avatar1.png" alt="User 1" />
              <img src="/avatars/avatar2.png" alt="User 2" />
              <img src="/avatars/avatar3.png" alt="User 3" />
              <img src="/avatars/avatar4.png" alt="User 4" />
              <img src="/avatars/avatar5.png" alt="User 5" />
            </div>
            <div className="landing__rating">
              <span className="landing__stars">★★★★★</span>
              <span className="landing__rating-text">
                Loved by 100k+ students worldwide
              </span>
            </div>
          </div>
          <a href="#get-started" className="landing__cta">
            Get Started Now →
          </a>
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
          <div className="landing__visual-card"></div>
        </div>
      </section>
    </main>
  );
}
