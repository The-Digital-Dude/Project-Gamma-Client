"use client";

import React, { useState } from "react";
import SignupForm, { SignupFormData } from "./SignupForm";
import subscriptionService from "../services/subscriptionService";
import "../styles/pricing.scss";

const Pricing = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'starter' | 'pro' | 'enterprise'>('starter');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const plans = [
    {
      id: "starter" as const,
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
      id: "pro" as const,
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
      id: "enterprise" as const,
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

  const handleGetStarted = (planType: 'starter' | 'pro' | 'enterprise') => {
    if (planType === 'enterprise') {
      // Handle enterprise plans differently - redirect to contact
      window.location.href = '/contact?plan=enterprise';
      return;
    }

    setSelectedPlan(planType);
    setShowSignupModal(true);
    setError(null);
  };

  const handleSignupSubmit = async (formData: SignupFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await subscriptionService.registerWithSubscription(formData);
      
      // Redirect to Stripe Checkout
      if (response.data.checkout.url) {
        subscriptionService.redirectToCheckout(response.data.checkout.url);
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      console.error('Subscription signup error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    if (!isLoading) {
      setShowSignupModal(false);
      setError(null);
    }
  };

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

              <button 
                className="cta-button"
                onClick={() => handleGetStarted(plan.id)}
                disabled={isLoading}
              >
                {plan.id === 'enterprise' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {error && (
        <div className="error-notification">
          <p>{error}</p>
          <button onClick={() => setError(null)}>×</button>
        </div>
      )}

      {showSignupModal && (
        <SignupForm
          planType={selectedPlan}
          onSubmit={handleSignupSubmit}
          isLoading={isLoading}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default Pricing;
