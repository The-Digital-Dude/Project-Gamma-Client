"use client";

import type { Metadata } from "next";
import Headline from "@/components/Headline/Headline";
import ServicesHero from "@/components/ServicesHero";
import { TestimonialSlider } from "@/components/Testimonials";
import BeyondCompliance from "@/components/sections/BeyondCompliance";
import { ComplianceCovered } from "@/components/sections/ComplianceCovered";
import FinalCTA from "@/components/sections/FinalCTA";
import HowServicesWork from "@/components/sections/HowServicesWork";
import { WhyRentalease } from "@/components/sections/WhyRentalease";

type Props = {};

export const metadata: Metadata = {
  title: "Rental Compliance Services Melbourne | Property Management Solutions",
  description: "Complete rental compliance services for Victorian landlords and property managers. Automated compliance checks, licensed tradie network, and regulatory adherence solutions.",
  keywords: ["rental compliance services", "property compliance Melbourne", "landlord compliance solutions", "rental regulation compliance", "property management compliance"],
  alternates: {
    canonical: "https://www.rentalease.com.au/services/compliance-services"
  }
};

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
      <HowServicesWork />
      <WhyRentalease />
      <FinalCTA />
    </div>
  );
}
