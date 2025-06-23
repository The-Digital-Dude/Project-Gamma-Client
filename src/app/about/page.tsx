import CTA from "@/components/CTA/CTA";
import Headline from "@/components/Headline/Headline";
import HeroVisual from "@/components/HeroVisual/HeroVisual";
import { Button } from "@/components/ui-elements/Button/Button";
import { siteConfig } from "@/config/site";
import "@/styles/about.scss";
import {
  MdPeople,
  MdBuild,
  MdFavorite,
  MdLightbulb,
  MdFlag,
  MdHistory,
} from "react-icons/md";

export default function AboutPage() {
  return (
    <section className="about">
      <section className="about__hero common-section">
        <div className="about__content container">
          <div className="img-box">
            <img
              src="https://imagedelivery.net/LqiWLm-3MGbYHtFuUbcBtA/189d259c-f35e-4849-da0b-dc9a73374300/public"
              alt={siteConfig.name}
            />
          </div>
          <div className="about__content-text">
            <p className="sub-heading">The Future of Australian Renting</p>
            <Headline
              mainText="About"
              boldText=""
              highlightText={siteConfig.name}
            />
            <div className="description">
              <p>
                Rentalease was founded in Sydney by a team of property experts
                and tech innovators who saw a need for change. We were tired of
                the clunky, impersonal, and often stressful process that both
                landlords and tenants had to endure.
              </p>
              <p>
                Our mission is simple: to create a transparent, efficient, and
                human-centric rental ecosystem. We leverage state-of-the-art
                technology to simplify the complexities of the rental market,
                but we never lose sight of the fact that we're dealing with
                people's homes and their most valuable investments.
              </p>
              <p style={{ marginBottom: "15px" }}>
                Here in mid-2025, we are proud to be one of Australia's
                fastest-growing rental platforms, committed to building a
                community based on trust, respect, and a shared goal of making
                renting better for everyone.
              </p>
            </div>
            <Button variant="outline" href="/contact">
              Reach Out To Us
            </Button>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="about__section common-section icons-bg--1 accent-background--4">
        <div className="container about__grid">
          {/* Who We Are */}
          <div className="about__card accent-background--3 accent-border--3">
            <div className="about__card-icon">
              <MdPeople size={40} />
            </div>
            <h2>Who We Are</h2>
            <p>
              We're a team of developers, designers, and strategists passionate
              about solving real-world problems with elegant code and thoughtful
              design. At {siteConfig.name}, technology meets creativity to build
              impactful experiences.
            </p>
          </div>

          {/* What We Do */}
          <div className="about__card accent-background--3 accent-border--3">
            <div className="about__card-icon">
              <MdBuild size={40} />
            </div>
            <h2>What We Do</h2>
            <p>
              From custom web platforms to scalable APIs and intuitive
              interfaces — we build products that are secure, fast, and
              delightful to use. Our process is collaborative, agile, and
              focused on results.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="about__card accent-background--3 accent-border--3">
            <div className="about__card-icon">
              <MdFavorite size={40} />
            </div>
            <h2>Why Choose Us</h2>
            <p>
              We don't just write code — we solve problems. With deep technical
              know-how and a human-first approach, we translate your vision into
              digital experiences that truly resonate.
            </p>
          </div>

          {/* Our Values */}
          {/* Our Values */}
          <div className="about__card accent-background--3 accent-border--3 about__card--values">
            <div className="about__card-icon">
              <MdLightbulb size={40} />
            </div>
            <h2>Our Core Values</h2>
            <p>
              Innovation & Creativity, User-First Mindset, Technical Excellence,
              Transparency & Trust, and Lifelong Learning.
            </p>
          </div>

          {/* Our Mission */}
          <div className="about__card accent-background--3 accent-border--3">
            <div className="about__card-icon">
              <MdFlag size={40} />
            </div>
            <h2>Our Mission</h2>
            <p>
              To empower businesses and individuals through technology that is
              accessible, purposeful, and future-ready.
            </p>
          </div>

          {/* Our Story */}
          <div className="about__card accent-background--3 accent-border--3">
            <div className="about__card-icon">
              <MdHistory size={40} />
            </div>
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

      <div className="common-section">
        <div className="container">
          <CTA
            title="Ready To Build Something"
            highlightText="Extraordinary?"
            subtitle="Let's collaborate and bring your ideas to life — from vision to deployment and beyond."
            buttonLabel="Contact Us"
            onButtonClick={() => {}}
            className="accent-background--2 accent-border--2"
          />
        </div>
      </div>
    </section>
  );
}
