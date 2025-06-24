import React from "react";
import { MdApartment, MdChecklist, MdHome, MdStar } from "react-icons/md";

import "@/styles/landing.scss";

const personas = [
  {
    title: "Property Managers",
    icon: MdApartment,
    description:
      "Streamline property oversight, automate routine checks, and manage tasks efficiently with our intelligent workflow system.",
  },
  {
    title: "Checkers",
    icon: MdChecklist,
    description:
      "Access tasks instantly, update progress in real-time, and generate professional invoices with our streamlined process.",
  },
  {
    title: "Landlords",
    icon: MdHome,
    description:
      "Monitor property maintenance, track scheduled tasks, and handle billing seamlessly through our unified dashboard.",
  },
];

const backgroundIcons = [MdApartment, MdChecklist, MdHome, MdStar];

export default function PersonasSection() {
  return (
    <div className="landing__personas-wrapper">
      <div className="background-icons">
        {Array.from({ length: 256 }).map((_, index) => {
          const IconComponent = backgroundIcons[index % backgroundIcons.length];
          const rotation = Math.floor(Math.random() * 4) * 90;
          return (
            <IconComponent
              key={index}
              style={{ "--rotation": `${rotation}deg` } as React.CSSProperties}
            />
          );
        })}
      </div>
      <section className="landing__personas-section">
        <div className="landing__personas-header">
          <div className="landing__personas-pill">Who is it for?</div>
          <h2 className="landing__personas-title">
            Smart Solutions for{" "}
            <span className="landing__personas-title--highlight">
              You and Your Team
            </span>
          </h2>
          <p className="landing__personas-subtitle">
            Built for Property Managers, Checkers & Landlords.
          </p>
        </div>
        <div className="landing__personas-grid">
          {personas.map((persona, idx) => {
            const IconComponent = persona.icon;
            return (
              <div
                className={`landing__personas-card landing__personas-card--${
                  idx + 1
                }`}
                key={persona.title}
              >
                <div className="landing__personas-icon">
                  <IconComponent />
                </div>
                <h3 className="landing__personas-card-title">
                  {persona.title}
                </h3>
                <p className="landing__personas-card-description">
                  {persona.description}
                </p>
              </div>
            );
          })}
          <div className="landing__personas-card landing__personas-card--4 landing__personas-card--highlighted">
            <div className="landing__personas-icon">
              <MdStar />
            </div>
            <h3 className="landing__personas-card-title">
              For Modern Property Managers
            </h3>

            <a href="#get-started" className="landing__personas-cta">
              Get Started Now →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
