import GlassyInput from "@/components/GlassyInput/GlassyInput";
import Headline from "@/components/Headline/Headline";
import HeroVisual from "@/components/HeroVisual/HeroVisual";
import Stats from "@/components/Stats/Stats";
import Subtext from "@/components/Subtext/Subtext";
import { Button } from "@/components/ui-elements/Button/Button";
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
          <Headline
            mainText="Rental. Compliance."
            boldText=""
            highlightText="Simplified."
          />
          <Subtext text="Proudly servicing VIC, NSW, QLD, WA, SA, and TAS. Simplifying compliance for property managers nationwide." />
          <div>
            <Button href="/book-now" fullWidth={false}>
              Request Demo
            </Button>
          </div>
          <Stats stats={stats} />
        </div>
      </section>
    </div>
  );
};

export default LandingHero;
