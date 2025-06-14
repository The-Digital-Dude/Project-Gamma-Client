"use client";

import React from "react";
import "../styles/pricing.scss";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$9",
      period: "month",
      features: [
        "Basic analytics",
        "Up to 5 projects",
        "Basic support",
        "1GB storage",
      ],
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "month",
      features: [
        "Advanced analytics",
        "Unlimited projects",
        "Priority support",
        "10GB storage",
        "Custom integrations",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "month",
      features: [
        "Custom analytics",
        "Unlimited everything",
        "24/7 support",
        "Unlimited storage",
        "Custom integrations",
        "Dedicated account manager",
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-header">
          <h1>Simple, Transparent Pricing</h1>
          <p>Choose the plan that's right for you</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${
                plan.highlighted ? "highlighted" : ""
              }`}
            >
              <div className="card-header">
                <h2>{plan.name}</h2>
                <div className="price">
                  <span className="amount">{plan.price}</span>
                  <span className="period">/{plan.period}</span>
                </div>
              </div>

              <ul className="features-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"
                        fill="currentColor"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="cta-button">Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
