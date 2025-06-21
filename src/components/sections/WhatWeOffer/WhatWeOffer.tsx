"use client";
import React, { useState } from "react";
import styles from "./WhatWeOffer.module.scss";
import {
  MdHomeWork,
  MdFactCheck,
  MdEditDocument,
  MdAnalytics,
  MdAttachMoney,
  MdVerified,
  MdNoteAdd,
  MdNotifications,
  MdVisibility,
  MdMenuBook,
} from "react-icons/md";
import PillText from "@/components/PillText/PillText";
import { Button } from "@/components/ui-elements/Button/Button";

const forLandlords = {
  headline: "Partner with Rentalease and Maximize Your Investment",
  body: "Owning a rental property in 2025 is a significant investment. At Rentalease, our mission is to make it a profitable and stress-free one. We are more than just a listing site; we are your strategic partner in property management.",
  services: [
    {
      icon: MdHomeWork,
      iconColor: "#ff6b6b",
      title: "Premium Listings & Marketing",
      desc: "We showcase your property to a vast audience of qualified tenants across Australia. Our premium marketing tools, including professional photography and virtual tour options, make your listing stand out.",
    },
    {
      icon: MdFactCheck,
      iconColor: "#3b82f6",
      title: "Advanced Tenant Screening",
      desc: "Finding the right tenant is crucial. Our comprehensive screening process includes rental history checks, employment verification, and reference checks, giving you the confidence to make the right choice.",
    },
    {
      icon: MdEditDocument,
      iconColor: "#facc15",
      title: "Digital Lease Management",
      desc: "From drafting compliant lease agreements to managing digital signatures and bond lodgements, our platform handles the paperwork securely and efficiently.",
    },
    {
      icon: MdAttachMoney,
      iconColor: "#a855f7",
      title: "Secure Rent Collection",
      desc: "Simplify your cash flow with our automated rent collection and payment tracking system. We handle the reminders, so you don't have to.",
    },
    {
      icon: MdAnalytics,
      iconColor: "#fb923c",
      title: "Compliance & Insights",
      desc: "Stay ahead of the curve. Get access to the latest legislative updates, market rental appraisals, and data-driven insights to ensure your investment remains compliant and competitive in the current market.",
    },
  ],
};

const forTenants = {
  headline: "The Keys to Your Next Chapter",
  body: "Finding a place to call home should be an exciting journey, not a stressful one. Rentalease is designed to empower you. We connect you with quality, verified properties from trusted landlords and agents across Australia.",
  services: [
    {
      icon: MdVerified,
      iconColor: "#7b61ff",
      title: "Verified Properties Only",
      desc: "Say goodbye to fake listings. We verify every property and landlord on our platform, so you can search with absolute confidence.",
    },
    {
      icon: MdNoteAdd,
      iconColor: "#3b82f6",
      title: "One Form, Endless Opportunities",
      desc: "Tired of filling out endless applications? Our smart, reusable rental profile lets you apply for multiple properties with a single, secure form.",
    },
    {
      icon: MdNotifications,
      iconColor: "#facc15",
      title: "Instant Alerts",
      desc: "Be the first to know. Set up personalised alerts for your preferred suburbs, price range, and property types, and get notified the moment a match is listed.",
    },
    {
      icon: MdVisibility,
      iconColor: "#a855f7",
      title: "Transparent Process",
      desc: "We believe in clarity. From application status tracking to clear communication channels with property managers, you’ll always know where you stand.",
    },
    {
      icon: MdMenuBook,
      iconColor: "#fb923c",
      title: "Resources for Renters",
      desc: "Explore our blog for tips on everything from acing your application to understanding your rights as a tenant in 2025.",
    },
  ],
};

const WhatWeOffer = () => {
  const [active, setActive] = useState<"landlords" | "managers">("landlords");
  const client = active === "landlords" ? forLandlords : forTenants;

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
          For Managers
        </Button>
      </div>
      {/* <div>
        <div className="sub-heading">{client.headline}</div>
        <div>{client.body}</div>
      </div> */}
      <div className={styles.grid}>
        {client.services.map((service, i) => {
          const IconComponent = service.icon;
          return (
            <div className={`${styles.card}`} key={i}>
              <div
                className={styles.icon}
                style={{ background: service.iconColor + "20" }}
              >
                <IconComponent size={32} color={service.iconColor} />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhatWeOffer;
