"use client";

import BrandCarousel from "@/components/BrandCarousel/BrandCarousel";
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
import { MdApartment, MdPerson, MdHome, MdHandyman } from "react-icons/md";
import Typewriter from "@/components/Typewriter/Typewriter";
import FadeInAnimation from "@/components/Animations/FadeInAnimation";
import Heading from "@/components/ui-elements/Heading/Heading";
import FinalCTA from "@/components/sections/FinalCTA";
import { TestimonialSlider } from "@/components/Testimonials";

export default function AboutPage() {
  return (
    <section className="about about__born">
      <section className="about__hero common-section">
        <div className="about__content container">
          <div className="img-box">
            <img src="/img-2.jpg" alt={siteConfig.name} />
          </div>
          <div className="about__born-text">
            <p className="sub-heading fadeInLeft">
              From Pain Points to Progress—The Rentalease Way
            </p>
            <h2 className="fadeInLeft" style={{ marginTop: "6px" }}>
              Born from Experience. Built for the Future.
            </h2>
            <p className="slideUp">
              Founded in 2022, Rentalease set out to fix the pain points of
              property management:
            </p>
            <ul className="slideUp">
              <li>Managers drowning in admin.</li>
              <li>Landlords facing rising risks.</li>
              <li>Tenants unsure about safety.</li>
              <li>Tradies stuck with messy systems.</li>
            </ul>
            <p className="slideUp" style={{ marginBottom: "20px" }}>
              We built a smarter platform—powered by CRM, licensed tradies, and
              automation—to make renting faster, safer, and easier for everyone.
            </p>
            <Button variant="outline" href="/book-now">
              Request Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Born from Experience Section */}
      {/* <section className="about__born common-section">
        <div className="container about__born-grid">
          <div className="about__born-text">
            <p className="sub-heading fadeInLeft">
              From Pain Points to Progress—The Rentalease Way
            </p>
            <h2 className="fadeInLeft" style={{ marginTop: "6px" }}>
              Born from Experience. Built for the Future.
            </h2>
            <p className="slideUp">
              Founded in 2022, Rentalease set out to fix the pain points of
              property management:
            </p>
            <ul className="slideUp">
              <li>Managers drowning in admin.</li>
              <li>Landlords facing rising risks.</li>
              <li>Tenants unsure about safety.</li>
              <li>Tradies stuck with messy systems.</li>
            </ul>
            <p className="slideUp">
              We built a smarter platform—powered by CRM, licensed tradies, and
              automation—to make renting faster, safer, and easier for everyone.
            </p>
          </div>
          <div className="about__born-visual">
            <div className="split-visual">
              <img src="/img-9.jpg" alt="Paperwork chaos" />
              <img src="/hero-bg.jpg" alt="Clean digital dashboard" />
            </div>
            <div className="orbit">
              <div className="orbit__center">
                <img src="/rentalease-logo.svg" alt="Rentalease" />
              </div>
              <div className="orbit__ring">
                <div
                  className="orbit__item orbit__item--pm"
                  aria-label="Property Manager"
                >
                  <div className="orbit__icon">
                    <MdApartment size={22} />
                  </div>
                </div>
                <div
                  className="orbit__item orbit__item--landlord"
                  aria-label="Landlord"
                >
                  <div className="orbit__icon">
                    <MdHome size={22} />
                  </div>
                </div>
                <div
                  className="orbit__item orbit__item--tenant"
                  aria-label="Tenant"
                >
                  <div className="orbit__icon">
                    <MdPerson size={22} />
                  </div>
                </div>
                <div
                  className="orbit__item orbit__item--tradie"
                  aria-label="Tradie"
                >
                  <div className="orbit__icon">
                    <MdHandyman size={22} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Mission & Vision */}
      <section className="about__mv common-section icons-bg--1 ">
        <div className="container">
          <FadeInAnimation duration={0.6} delay={0.05}>
            <div style={{ textAlign: "center" }}>
              <div className="about__mv-text">
                <div className="about__mv-tagline">
                  <Typewriter
                    phrases={[
                      "Empowering agencies",
                      "Protecting landlords",
                      "Supporting tenants",
                      "Enabling tradies",
                    ]}
                    typingSpeedMs={42}
                    deletingSpeedMs={28}
                    pauseBetweenPhrasesMs={900}
                  />
                </div>
              </div>
              <Heading title="Mission & Vision" heading="h3" />
            </div>
          </FadeInAnimation>
          <div className="about__mv-cards">
            <FadeInAnimation duration={0.6} delay={0.05} index={0}>
              <div className="about__mv-card">
                <div className="about__mv-icon">
                  <MdLightbulb size={28} />
                </div>
                <h3>Our Mission</h3>
                <p>
                  To simplify rental compliance and property services through
                  the smartest technology and the most reliable tradie network —
                  giving agencies, landlords, and tenants a system they can
                  truly depend on.
                </p>
              </div>
            </FadeInAnimation>
            <FadeInAnimation duration={0.6} delay={0.05} index={1}>
              <div className="about__mv-card">
                <div className="about__mv-icon">
                  <MdFlag size={28} />
                </div>
                <h3>Our Vision</h3>
                <p>
                  To become the trusted standard for property compliance and
                  services — where every property is safe, every process is
                  automated, and every stakeholder has peace of mind.
                </p>
              </div>
            </FadeInAnimation>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="about__section common-section">
        <div className="container">
          <Headline
            mainText="Get to Know"
            boldText=""
            highlightText="Rentalease"
          />
        </div>
        <div className="container about__grid">
          {/* Who We Are */}
          <div className="about__card accent-background--2 accent-border--2">
            <div className="about__card-icon">
              <MdPeople size={40} />
            </div>
            <h2>Who We Are</h2>
            <p>
              We’re a team shaped by real rental experiences — as tenants and
              landlords. Frustrated by outdated systems, we built Rentalease to
              make renting simpler, fairer, and more human for everyone
              involved.
            </p>
          </div>

          {/* What We Do */}
          <div className="about__card accent-background--2 accent-border--2">
            <div className="about__card-icon">
              <MdBuild size={40} />
            </div>
            <h2>What We Do</h2>
            <p>
              Rentalease streamlines the rental process with tools for
              applications, communication, and compliance — helping tenants and
              landlords manage everything with ease, from anywhere.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="about__card accent-background--2 accent-border--2">
            <div className="about__card-icon">
              <MdFavorite size={40} />
            </div>
            <h2>Why Choose Us</h2>
            <p>
              We’ve lived the pain points. That’s why we built a platform that
              prioritizes clarity, trust, and efficiency — making renting less
              stressful for everyone involved.
            </p>
          </div>

          {/* Our Core Values */}
          <div className="about__card accent-background--2 accent-border--2 about__card--values">
            <div className="about__card-icon">
              <MdLightbulb size={40} />
            </div>
            <h2>Our Core Values</h2>
            <p>
              Simplicity, empathy, transparency, and innovation guide everything
              we do — from design to support. We focus on creating tools people
              can trust and enjoy using.
            </p>
          </div>

          {/* Our Mission */}
          <div className="about__card accent-background--2 accent-border--2">
            <div className="about__card-icon">
              <MdFlag size={40} />
            </div>
            <h2>Our Mission</h2>
            <p>
              To bring trust and transparency to the rental market through
              easy-to-use tools that connect tenants and landlords in a fair,
              respectful way.
            </p>
          </div>

          {/* Our Story */}
          <div className="about__card accent-background--2 accent-border--2">
            <div className="about__card-icon">
              <MdHistory size={40} />
            </div>
            <h2>Our Story</h2>
            <p>
              Founded in Victoria in 2022, Rentalease began with a small team
              and a big vision: to reimagine renting with technology that puts
              people first.
            </p>
          </div>
        </div>
      </section>

      <div className="common-section icons-bg--1">
        <div className="container text-center">
          <div style={{ marginBottom: "2rem" }}>
            <Headline
              mainText=""
              boldText="Client Testimonials"
              highlightText=""
              heading="h2"
            />
          </div>
          <TestimonialSlider />
        </div>
      </div>

      <FinalCTA />
      <div className="common-section">
        <BrandCarousel />
      </div>
    </section>
  );
}
