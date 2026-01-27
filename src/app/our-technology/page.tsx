"use client";

import type { Metadata } from "next";
import React from "react";
import TechnologyHero from "@/components/sections/TechnologyHero/TechnologyHero";
import CoreFeatures from "@/components/sections/CoreFeatures/CoreFeatures";
import SmartSystemBehind from "@/components/sections/SmartSystemBehind";
import Benefits from "@/components/sections/Benefits/Benefits";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Property Management Technology | RentalEase Smart Solutions",
  description: "Discover RentalEase's advanced property management technology. Smart compliance automation, tradie network integration, and innovative rental software solutions for Australian landlords.",
  keywords: ["property management technology", "rental software technology", "smart property compliance", "landlord technology solutions", "Australian rental tech"],
  alternates: {
    canonical: "https://www.rentalease.com.au/our-technology"
  }
};

export default function TechnologyPage() {
  return (
    <>
      <TechnologyHero />
      <CoreFeatures />
      <SmartSystemBehind />
      {/* <Benefits /> */}
      <FinalCTA />
    </>
  );
}
