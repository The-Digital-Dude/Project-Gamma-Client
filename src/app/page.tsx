import LandingHero from "@/components/sections/LandingHero/LandingHero";
import PersonasSection from "@/components/sections/PersonasSection";
import "@/styles/landing.scss";

export default function Home() {
  return (
    <main className="landing">
      <LandingHero />
      <PersonasSection />
    </main>
  );
}
