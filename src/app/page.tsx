import LandingHero from "@/components/sections/LandingHero/LandingHero";
import HowItWorks from "@/components/sections/HowItWorks/HowItWorks";
import PersonasSection from "@/components/sections/PersonasSection";
import Benefits from "@/components/sections/Benefits/Benefits";
import FeatureHero from "@/components/sections/FeatureHero/FeatureHero";
import "@/styles/landing.scss";

export default function Home() {
  return (
    <main className="landing">
      <LandingHero />
      <PersonasSection />
      <HowItWorks />
      <Benefits />
      <FeatureHero
        eyebrow="Enterprise-Ready Authentication"
        title="Single Sign-On"
        subtitle="Seamless & Secure Access"
        description="Implement enterprise-grade SSO in minutes, not months. Support all major identity providers and give your enterprise customers the security they demand."
        ctaText="Explore SSO Integration"
        ctaLink="/docs/sso/guide"
        imageSrc="https://imagedelivery.net/LqiWLm-3MGbYHtFuUbcBtA/189d259c-f35e-4849-da0b-dc9a73374300/public"
        imageAlt="Enterprise SSO Interface"
        contentPosition="right"
        buttonVariant="outline"
        eyebrowColor="var(--text-tertiary)"
        titleColor="var(--brand-purple)"
        subtitleColor="var(--black-dark)"
      />
      <FeatureHero
        eyebrow="Powerful Directory Sync"
        title="Directory Sync"
        subtitle="Automated User Management"
        description="Automatically sync user accounts and groups from any identity provider. Keep your user directory up-to-date without manual intervention."
        ctaText="Learn About Directory Sync"
        ctaLink="/docs/directory-sync"
        imageSrc="https://imagedelivery.net/LqiWLm-3MGbYHtFuUbcBtA/189d259c-f35e-4849-da0b-dc9a73374300/public"
        imageAlt="Directory Sync Dashboard"
        contentPosition="left"
        buttonVariant="default"
        eyebrowColor="var(--text-tertiary)"
        titleColor="var(--black-dark)"
        subtitleColor="var(--brand-purple)"
      />
    </main>
  );
}
