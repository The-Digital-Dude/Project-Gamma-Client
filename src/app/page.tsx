"use client";

import LandingHero from "@/components/sections/LandingHero/LandingHero";
import HowItWorks from "@/components/sections/HowItWorks/HowItWorks";
import { WhyRentalease } from "@/components/sections/WhyRentalease";
import { ComplianceCovered } from "@/components/sections/ComplianceCovered";
import BeyondCompliance from "@/components/sections/BeyondCompliance";
import HowRentaleaseWorks from "@/components/sections/HowRentaleaseWorks";
import BuiltForEveryone from "@/components/sections/BuiltForEveryone";
import SmartSystemBehind from "@/components/sections/SmartSystemBehind";
import Benefits from "@/components/sections/Benefits/Benefits";
import AiSupportPopup from "@/components/AiSupportPopup";
import "@/styles/landing.scss";
import CTA from "@/components/CTA/CTA";
import { TestimonialSlider } from "@/components/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";
import AdminSection from "@/components/sections/AdminSection";
import Headline from "@/components/Headline/Headline";
import MarqueeCards from "@/components/MarqueeCards";
import Image from "next/image";
import Heading from "@/components/ui-elements/Heading/Heading";
export default function Home() {
  return (
    <main className="landing">
      <LandingHero />
      <HowItWorks />
      <WhyRentalease />
      <ComplianceCovered />
      <BeyondCompliance />
      <HowRentaleaseWorks />
      <BuiltForEveryone />
      <SmartSystemBehind />
      <Benefits />
      {/* <MarqueeCards /> */}
      <div className="common-section icons-bg--1">
        <div className="container text-center">
          <div style={{ marginBottom: "2rem" }}>
            <Headline
              mainText=""
              boldText="Client Testimonials"
              highlightText=""
              heading="h2"
            />
          </div>
          <TestimonialSlider />
        </div>
      </div>

      <div className="accent-background--2">
        <AdminSection />
      </div>
      <FinalCTA />
      <div className="compliance-logo-section common-section">
        <div className="container">
          <Heading
            title="Committed to Australian Compliance & Safety"
            heading="h3"
            size="sm"
            style={{ marginBottom: "0" }}
          />
          <Image
            src="/logos-horizontal-img.webp"
            alt="Hero Background Pattern"
            width={596}
            height={85}
            style={{
              width: "100%",
              height: "auto",
            }}
            className="responsive-logo-image"
          />
        </div>
      </div>
    </main>
  );
}
