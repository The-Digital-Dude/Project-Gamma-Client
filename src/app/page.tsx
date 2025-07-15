"use client";

import LandingHero from "@/components/sections/LandingHero/LandingHero";
import HowItWorks from "@/components/sections/HowItWorks/HowItWorks";
import Benefits from "@/components/sections/Benefits/Benefits";
import AiSupportPopup from "@/components/AiSupportPopup";
import "@/styles/landing.scss";
import CTA from "@/components/CTA/CTA";
import { TestimonialSlider } from "@/components/Testimonials";
import AdminSection from "@/components/sections/AdminSection";
import Headline from "@/components/Headline/Headline";
import MarqueeCards from "@/components/MarqueeCards";
export default function Home() {
  const handleAiCallConfirm = () => {
    // Handle AI call confirmation
    console.log("Starting AI support call...");
    // Add your AI call logic here
  };
  return (
    <main className="landing">
      <LandingHero />
      <div className="accent-background--4">
        <HowItWorks />
      </div>
      <Benefits />
      <MarqueeCards />
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
      <AiSupportPopup />
    </main>
  );
}
