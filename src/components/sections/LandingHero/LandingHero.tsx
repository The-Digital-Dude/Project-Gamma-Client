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
            mainText="Rental. Compliance. Simplified."
            boldText=""
            highlightText=""
          />
          <Subtext text="Rentalease is Australia’s easiest way to manage rental compliance checks—fully automated, fully connected. Designed for property managers, powered by smart workflows." />
          <div>
            <Link href="/book-now">
              <button type="submit" className="subscribeButton">
                Request Demo
              </button>
            </Link>
          </div>
          <Stats stats={stats} />
        </div>
        <HeroVisual imageUrl="/img-1.webp" altText={siteConfig.name} />
      </section>
    </div>
  );
};

export default LandingHero;
