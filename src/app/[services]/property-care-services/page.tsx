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

export const metadata: Metadata = {
  title: "Property Care Services Melbourne | Maintenance & Repairs RentalEase",
  description: "Comprehensive property care services for Victorian rental properties. Maintenance, repairs, and property management solutions. Keep your investment properties in perfect condition.",
  keywords: ["property care services", "rental property maintenance", "property repairs Melbourne", "investment property care", "rental maintenance services"],
  alternates: {
    canonical: "https://www.rentalease.com.au/services/property-care-services"
  }
};

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
