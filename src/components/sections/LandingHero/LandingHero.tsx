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
    { value: "140+", label: "Property Managers" },
    { value: "2500+", label: "Registered Properties" },
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
          <Subtext text="Rentalease is Australia’s easiest way to manage rental compliance checks—fully automated, fully connected. Designed for property managers, powered by smart workflows." />
          <div>
            <Button href="/book-now" fullWidth={false}>
              Request Demo
            </Button>
          </div>
          <Stats stats={stats} />
        </div>
        {/* <Stats stats={stats} /> */}
        {/* <HeroVisual imageUrl="/img-14.jpg" altText={siteConfig.name} /> */}
      </section>
    </div>
  );
};

export default LandingHero;
