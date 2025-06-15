import { siteConfig } from "@/config/site";
import GlassyInput from "@/components/GlassyInput/GlassyInput";
import Headline from "@/components/Headline/Headline";
import Subtext from "@/components/Subtext/Subtext";
import Stats from "@/components/Stats/Stats";
import HeroVisual from "@/components/HeroVisual/HeroVisual";
import Features from "@/components/Features/Features";
import Testimonials from "@/components/Testimonials/Testimonials";
import CTA from "@/components/CTA/CTA";
import "@/styles/landing.scss";

export default function Home() {
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
    <main className="landing">
      <div className="landing__hero-wrapper">
        <section className="landing__hero">
          <div className="landing__content">
            <Headline
              mainText="The"
              boldText="all-in-one"
              highlightText="in your studies."
            />
            <Subtext text="Unlock a smarter way to study with our AI-driven suite of powerful learning tools designed to enhance your academic journey." />

            <GlassyInput
              type="email"
              placeholder="Enter your email address"
              buttonLabel="Request Demo"
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

      <Features
        title="Powerful Features for Better Learning"
        subtitle="Discover how our AI-powered tools can help you achieve academic excellence"
        features={features}
      />

      <Testimonials
        title="What Our Users Say"
        subtitle="Join thousands of successful students who have transformed their learning experience"
        testimonials={testimonials}
      />
    </main>
  );
}
