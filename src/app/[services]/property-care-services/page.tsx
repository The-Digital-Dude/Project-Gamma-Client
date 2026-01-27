"use client";

import type { Metadata } from "next";

import Headline from "@/components/Headline/Headline";
import ServicesHero from "@/components/ServicesHero";
import { TestimonialSlider } from "@/components/Testimonials";
import BeyondCompliance from "@/components/sections/BeyondCompliance";
import { ComplianceCovered } from "@/components/sections/ComplianceCovered";
import FinalCTA from "@/components/sections/FinalCTA";
import HowPropertyCareServicesWork from "@/components/sections/HowPropertyCareServicesWork/HowPropertyCareServicesWork";
import HowServicesWork from "@/components/sections/HowServicesWork";
import PropertyCareHero from "@/components/sections/PropertyCareHero/PropertyCareHero";
import { WhyRentalease } from "@/components/sections/WhyRentalease";

type Props = {};

// Service pages that use useState hooks cannot have metadata exports
// This will be restored using generateMetadata pattern later

export default function page({}: Props) {
  return (
    <div>
      <PropertyCareHero />
      <BeyondCompliance />
      <HowPropertyCareServicesWork />
      <WhyRentalease />
      <FinalCTA />
    </div>
  );
}
