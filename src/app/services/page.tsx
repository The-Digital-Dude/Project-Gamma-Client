"use client";

import Headline from "@/components/Headline/Headline";
import ServicesHero from "@/components/ServicesHero";
import { TestimonialSlider } from "@/components/Testimonials";
import BeyondCompliance from "@/components/sections/BeyondCompliance";
import { ComplianceCovered } from "@/components/sections/ComplianceCovered";
import FinalCTA from "@/components/sections/FinalCTA";
import HowServicesWork from "@/components/sections/HowServicesWork";
import { WhyRentalease } from "@/components/sections/WhyRentalease";

type Props = {};
export default function page({}: Props) {
  return (
    <div>
      <ServicesHero />
      <ComplianceCovered
        style={{
          background: "linear-gradient(135deg, #e2e8f0f2 0%, #f1f5f9e6 100%)",
        }}
        headlineColor="#024974"
        bodyColor="#000000"
      />
      <BeyondCompliance />
      <HowServicesWork />
      <WhyRentalease />
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
      <FinalCTA />
    </div>
  );
}
