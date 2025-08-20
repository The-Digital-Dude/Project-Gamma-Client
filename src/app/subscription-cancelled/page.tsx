"use client";

import React from 'react';
import Link from 'next/link';
import './subscriptionCancelled.module.scss';

const SubscriptionCancelledPage: React.FC = () => {
  return (
    <div className="subscription-cancelled">
      <div className="cancelled-container">
        <div className="cancelled-icon">
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" fill="#f59e0b"/>
            <path
              d="M8 12h8"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h1>Subscription Cancelled</h1>
        
        <p className="cancelled-message">
          Your subscription process was cancelled. Don't worry - no payment was processed.
        </p>

        <div className="what-happened">
          <h2>What happened?</h2>
          <p>
            You cancelled the payment process before completion. This is completely normal and happens sometimes.
            Your information has not been saved and no charges were made.
          </p>
        </div>

        <div className="options">
          <h2>What would you like to do next?</h2>
          
          <div className="options-grid">
            <div className="option-card">
              <div className="option-icon">🔄</div>
              <h3>Try Again</h3>
              <p>Ready to subscribe? You can restart the process anytime.</p>
              <Link href="/pricing" className="option-button primary">
                View Pricing Plans
              </Link>
            </div>
            
            <div className="option-card">
              <div className="option-icon">❓</div>
              <h3>Have Questions?</h3>
              <p>Our support team is here to help with any concerns or questions.</p>
              <Link href="/contact" className="option-button secondary">
                Contact Support
              </Link>
            </div>
            
            <div className="option-card">
              <div className="option-icon">📖</div>
              <h3>Learn More</h3>
              <p>Explore our features and see how RentalEase can help your business.</p>
              <Link href="/about" className="option-button secondary">
                About RentalEase
              </Link>
            </div>
          </div>
        </div>

        <div className="reassurance">
          <h3>Still interested? We're here to help!</h3>
          <div className="benefits">
            <div className="benefit">
              <span className="benefit-icon">✨</span>
              <span>14-day free trial - no commitment</span>
            </div>
            <div className="benefit">
              <span className="benefit-icon">💳</span>
              <span>Cancel anytime during trial</span>
            </div>
            <div className="benefit">
              <span className="benefit-icon">🛡️</span>
              <span>Secure payment processing</span>
            </div>
            <div className="benefit">
              <span className="benefit-icon">📞</span>
              <span>Dedicated customer support</span>
            </div>
          </div>
        </div>

        <div className="final-cta">
          <p>Ready to transform your property management?</p>
          <div className="cta-buttons">
            <Link href="/pricing" className="cta-primary">
              Choose Your Plan
            </Link>
            <Link href="/" className="cta-secondary">
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCancelledPage;