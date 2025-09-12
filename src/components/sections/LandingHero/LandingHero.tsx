import Headline from "@/components/Headline/Headline";
import Stats from "@/components/Stats/Stats";
import Subtext from "@/components/Subtext/Subtext";
import { Button } from "@/components/ui-elements/Button/Button";
import { SecondaryButton } from "@/components/ui-elements/SecondaryButton";
import React, { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";

// Custom responsive Stats component for better mobile experience
const ResponsiveStats: React.FC<{
  stats: Array<{ value: string; label: string }>;
}> = ({ stats }) => {
  return (
    <div className="landing__stats">
      {stats.map((stat, index) => (
        <div key={index} className="landing__stat">
          <span className="landing__stat-value">{stat.value}</span>
          <span className="landing__stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

const LandingHero = () => {
  const [isCarouselReady, setIsCarouselReady] = useState(false);

  useEffect(() => {
    // Small delay to ensure carousel is properly initialized
    const timer = setTimeout(() => {
      setIsCarouselReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { value: "30+", label: "Agencies" },
    { value: "4000+", label: "Rentals" },
    { value: "4x", label: "Faster CRM Compared to Other Companies" },
  ];

  const slides = [
    {
      key: "default",
      bg: "/rentalease-banner.png",
      headline: {
        mainText: "The Future of Rental Compliance &",
        boldText: "",
        highlightText: "Property Services",
      },
      subtext:
        "One powerful CRM, our own licensed tradies, and complete automation—RentalEase is the all-in-one solution built for modern property management.",
      showStats: true,
    },
    {
      key: "compliance-services",
      bg: "/tradie-2.jpeg",
      headline: {
        mainText: "Compliance Services",
        boldText: "",
        highlightText: "Made Simple",
      },
      subtext:
        "Electrical, Gas, and Smoke Alarm checks handled end‑to‑end. Automated scheduling, instant reports, and audit‑ready records.",
      showStats: true,
    },
    {
      key: "beyond-compliance",
      bg: "/tradie-3-lg.jpg",
      headline: {
        mainText: "Beyond Compliance",
        boldText: "",
        highlightText: "Property Care",
      },
      subtext:
        "Proactive maintenance, happier tenants, and portfolio insights that drive NOI—powered by our modern CRM.",
      showStats: true,
    },
  ];

  return (
    <div className="landing__hero-wrapper">
      <Carousel
        autoPlay
        indicators={false}
        navButtonsAlwaysVisible={false}
        animation="fade"
        swipe
        duration={500}
        interval={6000}
        height={`calc(100dvh - 95px)`}
        sx={{
          opacity: isCarouselReady ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.key}
            className="hero-slide"
            style={{
              width: "100%",
              minHeight: "calc(100dvh - 95px)",
              backgroundImage: `url(${slide.bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "relative",
            }}
          >
            <section className="landing__hero">
              <div className="landing__content">
                <div className="fade-in fade-in-delay-1">
                  <Headline
                    mainText={slide.headline.mainText}
                    boldText={slide.headline.boldText}
                    highlightText={slide.headline.highlightText}
                  />
                </div>
                <div className="fade-in fade-in-delay-2">
                  <Subtext text={slide.subtext} />
                </div>
                <div
                  className="fade-in fade-in-delay-3"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    justifyContent: "center",
                  }}
                >
                  <Button href="/book-now" fullWidth={false}>
                    Book a Demo
                  </Button>
                  <SecondaryButton>Get Started Today</SecondaryButton>
                </div>
                {slide.showStats && (
                  <div className="fade-in fade-in-delay-4">
                    <ResponsiveStats stats={stats} />
                  </div>
                )}
              </div>
            </section>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default LandingHero;
