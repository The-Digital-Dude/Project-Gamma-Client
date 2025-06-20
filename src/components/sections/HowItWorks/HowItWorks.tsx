import React from "react";
import styles from "./HowItWorks.module.scss";
import SectionContent from "../SectionContent/SectionContent";
import FeatureGrid from "../FeatureGrid/FeatureGrid";
import {
  FaMicrochip,
  FaUsers,
  FaMagic,
  FaShieldAlt,
  FaTerminal,
  FaEllipsisH,
  FaMicrosoft,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const HowItWorks = () => {
  const features = [
    {
      icon: <FaMicrochip />,
      title: "Auth for all SSO providers",
      description:
        "Support any SAML or OIDC identity provider with a single integration",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      icon: <FaUsers />,
      title: "Complete User Management",
      description:
        "Manage users and organizations, set policies, and support all auth types",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      icon: (
        <div className={styles.socialIcons}>
          <FaMicrosoft />
          <FcGoogle />
        </div>
      ),
      title: "Social authentication",
      description: "Sign in to your app with Microsoft, Google, and more",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      icon: <FaTerminal />,
      title: "AuthKit",
      description: "Flexible authentication UI powered by WorkOS and Radix",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
    {
      icon: <FaMagic />,
      title: "Magic Auth",
      description: "Passwordless auth with a six-digit code sent via email",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    },
    {
      icon: <FaEllipsisH />,
      title: "Multi-Factor Auth",
      description:
        "Manage users and organizations, set policies, and support all auth types",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    },
  ];

  return (
    <section className={styles.howItWorks}>
      <div className={styles.container}>
        <div className={styles.content}>
          <SectionContent
            eyebrow="The all-in-one solution"
            title="Enterprise SSO"
            subtitle="(and a whole lot more)"
            description="WorkOS is a set of building blocks for quickly adding enterprise features to your app. You'll be shipping quickly with a market-proven solution for your customers."
            ctaText="Add Single Sign-On to your app"
            ctaLink="/docs/sso/guide"
          />
          <div className={styles.visualSection}>
            <div className={styles.ssoMockup}>
              <div className={styles.mockupHeader}>
                <div className={styles.mockupTitle}>Sign in to Super-App</div>
                <div className={styles.mockupLogo}>
                  <div className={styles.logoIcon}></div>
                </div>
              </div>
              <div className={styles.mockupContent}>
                <div className={styles.inputField}>
                  <label htmlFor="email-input">Email</label>
                  <input
                    id="email-input"
                    type="text"
                    value="Your email address"
                    disabled
                    title="Email input field (disabled for demo)"
                  />
                </div>
                <div className={styles.inputField}>
                  <label htmlFor="signup-input">Don't have an account?</label>
                  <input
                    id="signup-input"
                    type="text"
                    value="Get started"
                    disabled
                    title="Sign up input field (disabled for demo)"
                  />
                </div>
                <button className={styles.mockupButton} disabled>
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
        <FeatureGrid />
      </div>
    </section>
  );
};

export default HowItWorks;
