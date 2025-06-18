import React from "react";
import styles from "./FeatureGrid.module.scss";

interface FeatureItem {
  image: string;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    image:
      "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/63e251327a19713a5ce17b54_icon-sso.png",
    title: "Auth for all SSO providers",
    description:
      "Support any SAML or OIDC identity provider with a single integration",
  },
  {
    image:
      "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/656545520bd5f04e20a3a6a7_um.png",
    title: "Complete User Management",
    description:
      "Manage users and organizations, set policies, and support all auth types",
  },
  {
    image:
      "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/6560b853025aee8784246561_social-icon.png",
    title: "Social authentication",
    description: "Sign in to your app with Microsoft, Google, and more",
  },
  {
    image:
      "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/65654341bfdb733f6715f944_authkit.png",
    title: "AuthKit",
    description: "Flexible authentication UI powered by WorkOS and Radix",
  },
  {
    image:
      "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/64cd1a29bcc1ade00cb6512a_icon-magic-link.png",
    title: "Magic Auth",
    description: "Passwordless auth with a six-digit code sent via email",
  },
  {
    image:
      "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/63e25132f3d2d0e80db83c38_icon-mfa.png",
    title: "Multi-Factor Auth",
    description:
      "Manage users and organizations, set policies, and support all auth types",
  },
];

const FeatureGrid: React.FC = () => {
  return (
    <div className={styles.featureGrid}>
      {features.map((feature, index) => (
        <div key={index} className={styles.featureCell}>
          <img
            src={feature.image}
            alt={feature.title}
            width={180}
            height={183}
            loading="lazy"
            className={styles.featureImage}
          />
          <div className={styles.featureContent}>
            <h4 className={styles.featureTitle}>{feature.title}</h4>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;
