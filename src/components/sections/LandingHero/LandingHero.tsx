import GlassyInput from "@/components/GlassyInput/GlassyInput";
import Headline from "@/components/Headline/Headline";
import HeroVisual from "@/components/HeroVisual/HeroVisual";
import Stats from "@/components/Stats/Stats";
import Subtext from "@/components/Subtext/Subtext";
import { Button } from "@/components/ui-elements/Button/Button";
import { SecondaryButton } from "@/components/ui-elements/SecondaryButton";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import React from "react";

const LandingHero = () => {
  const stats = [
    { value: "30+", label: "Agencies" },
    { value: "4000+", label: "Rentals" },
    { value: "4x", label: "Faster CRM Compared to Other Companies" },
  ];

  return (
    <div className="landing__hero-wrapper">
      <section className="landing__hero">
        <div className="landing__content">
          <div className="fade-in">
            <Headline
              mainText="The Future of Rental Compliance &"
              boldText=""
              highlightText="Property Services"
            />
          </div>
          <div className="fade-in fade-in-delay-1">
            <Subtext
              text="One powerful CRM, our own licensed tradies, and complete automation—Rentalease is
the all-in-one solution built for modern property management."
            />
          </div>
          <div className="fade-in fade-in-delay-2">
            <Button href="/book-now" fullWidth={false}>
              Book a Demo
            </Button>
            <SecondaryButton style={{ marginLeft: "1rem" }}>
              Get Started Today
            </SecondaryButton>
          </div>
          <div className="fade-in fade-in-delay-3">
            <Stats stats={stats} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingHero;
