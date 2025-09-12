"use client";

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
