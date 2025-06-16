import GlassyInput from "@/components/GlassyInput/GlassyInput";
import Headline from "@/components/Headline/Headline";
import HeroVisual from "@/components/HeroVisual/HeroVisual";
import Stats from "@/components/Stats/Stats";
import Subtext from "@/components/Subtext/Subtext";
import { siteConfig } from "@/config/site";
import React from "react";

const LandingHero = () => {
  const stats = [
    { value: "98%", label: "accuracy rate" },
    { value: "50M+", label: "questions solved" },
    { value: "5x", label: "faster learning" },
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
            mainText="Smart Property Checker CRM for"
            boldText=""
            highlightText="Modern Managers"
          />
          <Subtext text="Unify landlords, checkers, and properties — all in one intelligent platform. Stay compliant, connected, and in control without the chaos." />
          <GlassyInput
            type="email"
            placeholder="Enter your email address"
            buttonLabel="Request a Demo"
            onButtonClick={() => {
              /* handle click */
            }}
          />
          <Stats stats={stats} />
        </div>
        <HeroVisual
          imageUrl="https://imagedelivery.net/LqiWLm-3MGbYHtFuUbcBtA/189d259c-f35e-4849-da0b-dc9a73374300/public"
          altText={siteConfig.name}
        />
      </section>
    </div>
  );
};

export default LandingHero;
