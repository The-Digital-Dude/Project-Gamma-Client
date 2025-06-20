import React from "react";
import "@/styles/services.scss";
import "@/styles/landing.scss";
import { BsCheckCircleFill } from "react-icons/bs";
import CTA from "@/components/CTA/CTA";
import LandingHero from "@/components/sections/LandingHero/LandingHero";
import {
  MdEmail,
  MdCampaign,
  MdSearch,
  MdTimeline,
  MdArticle,
  MdGroups,
} from "react-icons/md";
import { IconType } from "react-icons";
import PillText from "@/components/PillText/PillText";
import WhatWeOffer from "@/components/sections/WhatWeOffer/WhatWeOffer";

const ServicesPage: React.FC = () => {
  interface Service {
    id: number;
    title: string;
    description: string;
    icon: IconType;
    color: string;
    features: string[];
  }

  const services: Service[] = [
    {
      id: 1,
      title: "Email Marketing",
      description:
        "Lorem ipsum consectetur amet sit ome comerer lirens dolce isimiloli.",
      icon: MdEmail,
      color: "#ff6b6b",
      features: [
        "Email Newsletter Setup",
        "Email Sequences",
        "Email Monetization",
      ],
    },
    {
      id: 2,
      title: "Paid Advertising",
      description:
        "Lorem ipsum consectetur amet sit ome comerer lirens dolce isimilol.",
      icon: MdCampaign,
      color: "#3b82f6",
      features: ["Google Ads", "Facebook Ads", "LinkedIn & Twitter Ads"],
    },
    {
      id: 3,
      title: "SEO",
      description:
        "Lorem ipsum consectetur amet sit ome comerer lirens dolce isimilol olme.",
      icon: MdSearch,
      color: "#facc15",
      features: ["SEO Audits", "On-Page SEO", "Off-Page SEO"],
    },
    {
      id: 4,
      title: "Funnel Optimization",
      description:
        "Lorem ipsum consectetur amet sit ome comerer lirens dolce isimilol olme.",
      icon: MdTimeline,
      color: "#a855f7",
      features: [
        "Analytics Analysis",
        "A/B Testing",
        "Conversion Optimization",
      ],
    },
    {
      id: 5,
      title: "Content Marketing",
      description:
        "Lorem ipsum consectetur amet sit ome comerer lirens dolce isimilol olme.",
      icon: MdArticle,
      color: "#fb923c",
      features: ["Articles & Written Content", "Video Content", "Infographics"],
    },
    {
      id: 6,
      title: "Social Media Marketing",
      description:
        "Lorem ipsum consectetur amet sit ome comerer lirens dolce isimilol olme.",
      icon: MdGroups,
      color: "#0ea5e9",
      features: [
        "Content Creation",
        "Community Management",
        "Social Media Growth",
      ],
    },
  ];

  return (
    <main>
      <div className="landing">
        <LandingHero />
      </div>
      <section>
        <div className="accent-background--4">
          <WhatWeOffer />
        </div>
        <CTA
          title="Ready To Boost Your Growth"
          subtitle="Get in touch with our experts and start scaling your business today."
          buttonLabel="Get in Touch"
          highlightText="Today?"
          onButtonClick={() => {
            console.log("cta click");
          }}
          className="bg-white"
        />
      </section>
    </main>
  );
};

export default ServicesPage;
