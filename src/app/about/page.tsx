import CTA from "@/components/CTA/CTA";
import Headline from "@/components/Headline/Headline";
import Subtext from "@/components/Subtext/Subtext";
import { siteConfig } from "@/config/site";
import "@/styles/about.scss";

export default function AboutPage() {
  const values = [
    "Innovation & Creativity",
    "User-First Mindset",
    "Technical Excellence",
    "Transparency & Trust",
    "Lifelong Learning",
  ];

  return (
    <main className="about">
      {/* Hero */}
      <section className="about__hero">
        <div className="about__content">
          <Headline
            mainText="About"
            boldText=""
            highlightText={siteConfig.name}
          />
          <Subtext text="Crafting digital solutions that are simple, smart, and human-centered." />
        </div>
      </section>

      {/* Sections */}
      <section className="about__section">
        <div className="about__grid">
          {/* Who We Are */}
          <div className="about__card about__card--accent1">
            <h2>Who We Are</h2>
            <p>
              We’re a team of developers, designers, and strategists passionate
              about solving real-world problems with elegant code and thoughtful
              design. At {siteConfig.name}, technology meets creativity to build
              impactful experiences.
            </p>
          </div>

          {/* What We Do */}
          <div className="about__card about__card--accent2">
            <h2>What We Do</h2>
            <p>
              From custom web platforms to scalable APIs and intuitive
              interfaces — we build products that are secure, fast, and
              delightful to use. Our process is collaborative, agile, and
              focused on results.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="about__card about__card--accent3">
            <h2>Why Choose Us</h2>
            <p>
              We don’t just write code — we solve problems. With deep technical
              know-how and a human-first approach, we translate your vision into
              digital experiences that truly resonate.
            </p>
          </div>

          {/* Our Values */}
          <div className="about__card about__card--accent4 about__card--values">
            <h2>Our Core Values</h2>
            <ul>
              {values.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>

          {/* Our Mission */}
          <div className="about__card about__card--accent5">
            <h2>Our Mission</h2>
            <p>
              To empower businesses and individuals through technology that is
              accessible, purposeful, and future-ready.
            </p>
          </div>

          {/* Our Story */}
          <div className="about__card about__card--accent6">
            <h2>Our Story</h2>
            <p>
              {siteConfig.name} began with a simple idea: to build digital
              experiences that feel effortless. What started as a freelance
              project has grown into a trusted studio collaborating with
              startups and enterprises globally.
            </p>
          </div>
        </div>
      </section>

      <CTA
        title="Ready To Build Something"
        highlightText="Extraordinary?"
        subtitle="Let’s collaborate and bring your ideas to life — from vision to deployment and beyond."
        buttonLabel="Contact Us"
        onButtonClick={() => {}}
      />
    </main>
  );
}
