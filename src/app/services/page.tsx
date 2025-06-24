import React from "react";
import "@/styles/services.scss";
import "@/styles/landing.scss";
import PillText from "@/components/PillText/PillText";
import WhatWeOffer from "@/components/sections/WhatWeOffer/WhatWeOffer";
import { TestimonialSlider } from "@/components/Testimonials";
import FeatureHero from "@/components/sections/FeatureHero/FeatureHero";
import Contact from "@/components/sections/Contact/Contact";
import Headline from "@/components/Headline/Headline";
import Pricing from "@/components/Pricing";
import AccordionSection from "@/components/AccordionSection";

const ServicesPage: React.FC = () => {
  const faqArray = [
    {
      title: "What is Rentalease?",
      content:
        "Rentalease is a CRM platform designed for Australian property managers to automate and manage rental compliance checks. From tenant scheduling to tradie coordination and invoice generation, it streamlines the entire process.",
    },
    {
      title:
        "How does Rentalease integrate with my existing property management system?",
      content:
        "We connect via secure API integrations with most major property management CRMs. Our onboarding team will guide you through the setup to ensure a seamless data flow.",
    },
    {
      title: "What types of compliance checks does Rentalease support?",
      content:
        "Our platform supports checks including smoke alarms, electrical safety, gas fitting, pool safety, and other region-specific rental compliance requirements.",
    },
    {
      title: "Can I use my existing electricians or plumbers (tradies)?",
      content:
        "Yes, you can invite and manage your preferred tradies within the Rentalease platform. They’ll receive job notifications and can upload reports directly into the system.",
    },
    {
      title:
        "Is Rentalease suitable for small property managers or only large agencies?",
      content:
        "Rentalease is scalable — whether you manage 20 properties or 2,000. Our pricing and features suit individual managers, boutique agencies, and large-scale operations.",
    },
    {
      title: "What happens after a tenant confirms a compliance appointment?",
      content:
        "Once a tenant confirms, our system automatically notifies the assigned tradie. After job completion, the tradie uploads the report, and the system generates the invoice.",
    },
    {
      title: "Can I access Rentalease on mobile devices?",
      content:
        "Yes, Rentalease is cloud-based and mobile-responsive. A dedicated app is also in development for easier on-the-go access and real-time updates.",
    },
    {
      title: "Is my data secure with Rentalease?",
      content:
        "Absolutely. We use encrypted connections and secure Australian-based cloud storage to ensure compliance with all local data protection regulations.",
    },
    {
      title: "Do I need to train my staff to use the platform?",
      content:
        "Not at all. Rentalease is designed to be user-friendly. We also provide onboarding assistance, training materials, and ongoing customer support.",
    },
    {
      title: "How do I get started?",
      content:
        "You can request a free demo or contact our team. Once subscribed, we’ll set up your account, connect your CRM, and you’ll be ready to automate your compliance in no time.",
    },
  ];

  return (
    <section>
      <div className="common-section">
        <FeatureHero
          eyebrow="Stay Compliant. Stay Protected."
          title="Making Rental Compliance Effortless for Victorian Property Managers"
          subtitle="Stay Ahead of Legal Requirements in Victoria"
          description="Under Victoria’s rental laws, landlords and property managers must meet strict safety standards to legally lease their properties. This includes regular inspections of smoke alarms, electrical and gas systems, and pool barriers (where applicable). Safety documentation must also be disclosed to tenants.
Neglecting these obligations can lead to government fines, legal issues, broken leases, and serious reputation damage. Don’t risk it—stay ahead with complete rental compliance."
          ctaText="Learn More"
          ctaLink="/docs/directory-sync"
          imageSrc="https://imagedelivery.net/LqiWLm-3MGbYHtFuUbcBtA/189d259c-f35e-4849-da0b-dc9a73374300/public"
          imageAlt="Directory Sync Dashboard"
          contentPosition="left"
          buttonVariant="default"
          eyebrowColor="$text-tertiary)"
          heading="h1"
          style={{ padding: 0 }}
          iconBG={true}
        />
      </div>
      <section>
        <div className="py-50">
          <div className="container">
            <WhatWeOffer />
          </div>
        </div>
        <div>
          <Pricing />
        </div>
        <div className="common-section">
          <div className="container">
            <TestimonialSlider />
          </div>
        </div>
        <div className="common-section accent-background--4">
          <div className="container">
            <div className="text-center" style={{ marginBottom: "30px" }}>
              <Headline
                heading="h3"
                mainText="Frequently Asked"
                highlightText="Questions"
                boldText=""
              />
            </div>
            <AccordionSection items={faqArray} />
          </div>
        </div>
        <div className="py-50">
          <div className="container text-center">
            <PillText text="Contact us" />
            <div style={{ marginBottom: "30px" }}>
              <Headline
                heading="h3"
                mainText="Feel Free to"
                highlightText="Reach Out"
                boldText=""
              />
            </div>
          </div>
          <Contact />
        </div>
      </section>
    </section>
  );
};

export default ServicesPage;
