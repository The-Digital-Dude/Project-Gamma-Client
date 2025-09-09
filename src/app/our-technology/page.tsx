"use client";

import React from "react";
import TechnologyHero from "@/components/sections/TechnologyHero/TechnologyHero";
import CoreFeatures from "@/components/sections/CoreFeatures/CoreFeatures";
import SmartSystemBehind from "@/components/sections/SmartSystemBehind";
import Benefits from "@/components/sections/Benefits/Benefits";
import FinalCTA from "@/components/sections/FinalCTA";

export default function TechnologyPage() {
  return (
    <>
      <TechnologyHero />
      <CoreFeatures />
      <SmartSystemBehind />
      <Benefits />
      <FinalCTA />
    </>
  );
}
