import LandingHero from "@/components/sections/LandingHero/LandingHero";
import HowItWorks from "@/components/sections/HowItWorks/HowItWorks";
import PersonasSection from "@/components/sections/PersonasSection";
import Benefits from "@/components/sections/Benefits/Benefits";
import "@/styles/landing.scss";

export default function Home() {
  return (
    <main className="landing">
      <LandingHero />
      <PersonasSection />
      <HowItWorks />
      <Benefits />
    </main>
  );
}
