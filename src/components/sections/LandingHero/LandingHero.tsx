import GlassyInput from "@/components/GlassyInput/GlassyInput";
import Headline from "@/components/Headline/Headline";
import HeroVisual from "@/components/HeroVisual/HeroVisual";
import Stats from "@/components/Stats/Stats";
import Subtext from "@/components/Subtext/Subtext";
import { Button } from "@/components/ui-elements/Button/Button";
import { siteConfig } from "@/config/site";
import React from "react";

const LandingHero = () => {
  const stats = [
    { value: "140+", label: "Property Managers" },
    { value: "2500+", label: "Registered Properties" },
    { value: "4x", label: "Faster CRM Compared to Other Companies" },
  ];

  const features = [
    {
      icon: "/icons/ai-tutor.svg",
      title: "AI-Powered Tutoring",
      description:
        "Get personalized help from our advanced AI tutor that adapts to your learning style.",
    },
    {
      icon: "/icons/practice.svg",
      title: "Smart Practice",
      description:
        "Practice with questions tailored to your strengths and weaknesses.",
    },
    {
      icon: "/icons/analytics.svg",
      title: "Progress Analytics",
      description:
        "Track your learning progress with detailed analytics and insights.",
    },
  ];

  const testimonials = [
    {
      quote:
        "This platform has completely transformed how I study. The AI tutor is incredibly helpful!",
      author: "Sarah Johnson",
      role: "Medical Student",
      avatar: "/avatars/sarah.jpg",
    },
    {
      quote:
        "I've seen a significant improvement in my grades since I started using this platform.",
      author: "Michael Chen",
      role: "Engineering Student",
      avatar: "/avatars/michael.jpg",
    },
    {
      quote:
        "The personalized learning experience is exactly what I needed to excel in my studies.",
      author: "Emma Rodriguez",
      role: "Law Student",
      avatar: "/avatars/emma.jpg",
    },
  ];

  return (
    <div className="landing__hero-wrapper">
      <section className="landing__hero">
        <div className="landing__content">
          <Headline
            mainText="Rental. Compliance."
            boldText=""
            highlightText="Simplified."
          />
          <Subtext text="Rentalease is Australia’s easiest way to manage rental compliance checks—fully automated, fully connected. Designed for property managers, powered by smart workflows." />
          <div>
            <Button href="/book-now" fullWidth={false}>
              Request Demo
            </Button>
          </div>
          <Stats stats={stats} />
        </div>
        <HeroVisual imageUrl="/img-1.webp" altText={siteConfig.name} />
      </section>
    </div>
  );
};

export default LandingHero;
