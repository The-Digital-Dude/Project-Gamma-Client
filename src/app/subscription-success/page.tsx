"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import styles from "./subscriptionSuccess.module.scss";

const SubscriptionSuccessContent: React.FC = () => {
  const searchParams = useSearchParams();
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    const sessionId = searchParams.get("session_id");
    if (sessionId) {
      setSessionId(sessionId);
    }
  }, [searchParams]);

  return (
    <div className={styles.subscriptionSuccess}>
      <div className={styles.successContainer}>
        <div className={styles.successIcon}>
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" fill="#10b981" />
            <path
              d="M8 12l2 2 4-4"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h1>Welcome to RentalEase!</h1>

        <p className={styles.successMessage}>
          🎉 Your subscription has been successfully activated! Your 14-day free
          trial has started.
        </p>

        <div className={styles.nextSteps}>
          <h2>What happens next?</h2>
          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepIcon}>📧</div>
              <h3>Check Your Email</h3>
              <p>
                We've sent your login credentials and welcome information to
                your email address.
              </p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepIcon}>🔐</div>
              <h3>Access Your CRM</h3>
              <p>
                Use the credentials we've sent to log into your new RentalEase
                CRM dashboard.
              </p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepIcon}>🏢</div>
              <h3>Set Up Properties</h3>
              <p>
                Start adding your properties and begin managing your portfolio
                efficiently.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.trialInfo}>
          <div className={styles.trialBadge}>
            <span>14-Day Free Trial</span>
          </div>
          <p>
            Your trial includes full access to all features. You won't be
            charged until your trial ends. You can cancel anytime from your
            billing settings.
          </p>
        </div>

        <div className={styles.actionButtons}>
          <Link
            href="http://localhost:5173/login"
            className={styles.primaryButton}
          >
            Access Your CRM Dashboard
          </Link>
          <Link href="/contact" className={styles.secondaryButton}>
            Need Help? Contact Support
          </Link>
        </div>

        <div className={styles.additionalInfo}>
          <h3>Getting Started Resources</h3>
          <ul>
            <li>
              <a href="/documentation" target="_blank">
                📖 Read our Getting Started Guide
              </a>
            </li>
            <li>
              <a href="/contact" target="_blank">
                💬 Contact our support team
              </a>
            </li>
            <li>
              <a href="/pricing" target="_blank">
                💳 Manage your subscription
              </a>
            </li>
          </ul>
        </div>

        {sessionId && (
          <div className={styles.sessionInfo}>
            <small>Session ID: {sessionId}</small>
          </div>
        )}
      </div>
    </div>
  );
};

const SubscriptionSuccessPage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SubscriptionSuccessContent />
    </Suspense>
  );
};

export default SubscriptionSuccessPage;
