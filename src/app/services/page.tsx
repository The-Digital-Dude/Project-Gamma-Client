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
      <section className="services">
        <section className="services__hero">
          <p className="services__eyebrow">Our Services</p>
          <h1 className="services__title">High-impact marketing services</h1>
        </section>

        <section className="services__grid-section">
          <div className="services__grid">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`services__card-small services__card-small--${
                  index + 1
                }`}
              >
                <div
                  className="services__card-icon-wrapper"
                  style={{ background: service.color + "20" }}
                >
                  {(() => {
                    const IconComponent = service.icon;
                    return <IconComponent size={32} color={service.color} />;
                  })()}
                </div>
                <h3 className="services__card-small-title">{service.title}</h3>
                <p className="services__card-small-description">
                  {service.description}
                </p>
                <ul className="services__card-features">
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <BsCheckCircleFill
                        style={{ color: "#7b61ff" }}
                        className="services__check-icon"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <CTA
          title="Ready to boost your growth?"
          subtitle="Get in touch with our experts and start scaling your business today."
          buttonLabel="Get in Touch"
          highlightText="today"
          onButtonClick={() => {
            console.log("cta click");
          }}
        />
      </section>
    </main>
  );
};

export default ServicesPage;
