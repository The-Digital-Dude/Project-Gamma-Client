"use client";

import React from "react";
import "../styles/pricing.scss";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "mo",
      features: [
        "Up to 50 Properties",
        "Full CRM Access",
        "5 API Integrations",
      ],
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$199",
      period: "mo",
      features: [
        "Up to 150 Properties",
        "Priority Support",
        "Unlimited API Connections",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Unlimited Properties",
        "Custom Features",
        "Dedicated Account Manager",
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="pricing-section">
      <div className="pricing-container icons-bg--1">
        <div className="pricing-header">
          <h3>Simple Pricing. No Surprises.</h3>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card${
                plan.highlighted ? " highlighted" : ""
              }`}
            >
              {plan.highlighted && (
                <div className="popular-ribbon">Most Popular</div>
              )}

              <div className="card-header">
                <h2 className="plan-name">{plan.name}</h2>
                <div className="price-row">
                  <span className="amount">{plan.price}</span>
                  {plan.period && (
                    <span className="period">/{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="features-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <span className="feature-icon">
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
                    </span>
                    <span className="feature-text">{feature}</span>
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
