"use client";
import React, { useState } from "react";
import styles from "./WhatWeOffer.module.scss";
import { BsCheckCircleFill } from "react-icons/bs";
import {
  MdEmail,
  MdCampaign,
  MdSearch,
  MdTimeline,
  MdArticle,
  MdGroups,
  MdPerson,
  MdDashboard,
  MdAttachMoney,
  MdReceipt,
  MdBuild,
  MdAssessment,
} from "react-icons/md";
import PillText from "@/components/PillText/PillText";
import { Button } from "@/components/ui-elements/Button/Button";

const landlordFeatures = [
  {
    icon: MdEmail,
    colorClass: "accent-background--1 accent-border--1",
    iconColor: "#ff6b6b",
    title: "Email Marketing",
    desc: "Lorem ipsum consectetur amet sit ome comerer lirens dolce isimiloli.",
    features: [
      "Email Newsletter Setup",
      "Email Sequences",
      "Email Monetization",
    ],
  },
  {
    icon: MdCampaign,
    colorClass: "accent-background--2 accent-border--2",
    iconColor: "#3b82f6",
    title: "Paid Advertising",
    desc: "Lorem ipsum consectetur amet sit ome comerer lirens dolce isimilol.",
    features: ["Google Ads", "Facebook Ads", "LinkedIn & Twitter Ads"],
  },
  {
    icon: MdSearch,
    colorClass: "accent-background--3 accent-border--3",
    iconColor: "#facc15",
    title: "SEO",
    desc: "Lorem ipsum consectetur amet sit ome comerer lirens dolce isimilol olme.",
    features: ["SEO Audits", "On-Page SEO", "Off-Page SEO"],
  },
  {
    icon: MdTimeline,
    colorClass: "accent-background--4 accent-border--4",
    iconColor: "#a855f7",
    title: "Funnel Optimization",
    desc: "Lorem ipsum consectetur amet sit ome comerer lirens dolce isimilol olme.",
    features: ["Analytics Analysis", "A/B Testing", "Conversion Optimization"],
  },
  {
    icon: MdArticle,
    colorClass: "accent-background--1 accent-border--1",
    iconColor: "#fb923c",
    title: "Content Marketing",
    desc: "Lorem ipsum consectetur amet sit ome comerer lirens dolce isimilol olme.",
    features: ["Articles & Written Content", "Video Content", "Infographics"],
  },
  {
    icon: MdGroups,
    colorClass: "accent-background--2 accent-border--2",
    iconColor: "#0ea5e9",
    title: "Social Media Marketing",
    desc: "Lorem ipsum consectetur amet sit ome comerer lirens dolce isimilol olme.",
    features: [
      "Content Creation",
      "Community Management",
      "Social Media Growth",
    ],
  },
];

const managerFeatures = [
  {
    icon: MdPerson,
    colorClass: "accent-background--1 accent-border--1",
    iconColor: "#7b61ff",
    title: "Dedicated Account Manager",
    desc: "Property managers get a dedicated account manager for streamlined communication and support.",
    features: ["Personal Support", "Direct Contact", "Faster Response"],
  },
  {
    icon: MdDashboard,
    colorClass: "accent-background--2 accent-border--2",
    iconColor: "#3b82f6",
    title: "Portfolio Dashboard",
    desc: "Easily manage all your properties and compliance checks from a single dashboard.",
    features: ["All Properties", "Compliance Overview", "Easy Navigation"],
  },
  {
    icon: MdAttachMoney,
    colorClass: "accent-background--3 accent-border--3",
    iconColor: "#facc15",
    title: "Bulk Pricing",
    desc: "Enjoy special rates and bulk pricing for managing multiple properties.",
    features: ["Discounted Rates", "Flexible Packages", "Transparent Pricing"],
  },
  {
    icon: MdReceipt,
    colorClass: "accent-background--4 accent-border--4",
    iconColor: "#a855f7",
    title: "Flexible Billing",
    desc: "Choose from flexible billing options tailored for agencies and property managers.",
    features: ["Monthly Billing", "Annual Billing", "Custom Invoices"],
  },
  {
    icon: MdBuild,
    colorClass: "accent-background--1 accent-border--1",
    iconColor: "#fb923c",
    title: "Priority Repairs",
    desc: "Get priority access to repairs and maintenance services for your managed properties.",
    features: ["Fast Repairs", "Trusted Tradespeople", "Guaranteed Work"],
  },
  {
    icon: MdAssessment,
    colorClass: "accent-background--2 accent-border--2",
    iconColor: "#0ea5e9",
    title: "Custom Reporting",
    desc: "Generate custom compliance and maintenance reports for your portfolio.",
    features: ["Downloadable Reports", "Custom Filters", "Portfolio Insights"],
  },
];

const WhatWeOffer = () => {
  const [active, setActive] = useState<"landlords" | "managers">("landlords");
  const features = active === "landlords" ? landlordFeatures : managerFeatures;

  return (
    <section className={styles.whatWeOfferSection}>
      <PillText text="Our Services" />
      <h2 className={styles.title}>What we offer</h2>
      <p className={styles.subtitle}>
        At CheckHero we offer our clients a fully compliant, thorough, friendly,
        and affordable service.
      </p>
      <div className={styles.toggleWrapper}>
        <Button
          variant={active === "landlords" ? "default" : "outline"}
          onClick={() => setActive("landlords")}
        >
          For Landlords
        </Button>
        <Button
          variant={active === "managers" ? "default" : "outline"}
          onClick={() => setActive("managers")}
        >
          For Landlords
        </Button>
      </div>
      <div className={styles.grid}>
        {features.map((f, i) => {
          const IconComponent = f.icon;
          return (
            <div className={`${styles.card} ${f.colorClass}`} key={i}>
              <div
                className={styles.icon}
                style={{ background: f.iconColor + "20" }}
              >
                <IconComponent size={32} color={f.iconColor} />
              </div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
              <ul className={styles.cardFeatures}>
                {f.features.map((feature) => (
                  <li key={feature} className={styles.cardFeatureItem}>
                    <BsCheckCircleFill
                      style={{ color: "#7b61ff", marginRight: 8 }}
                      size={18}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhatWeOffer;
