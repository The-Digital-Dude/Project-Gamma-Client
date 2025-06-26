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

export default function AboutPage() {
  return (
    <section className="about">
      <section className="about__hero common-section">
        <div className="about__content container">
          <div className="img-box">
            <img src="/img-2.jpg" alt={siteConfig.name} />
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
                At Rentalease, we're on a mission to transform how rental
                compliance is managed in Australia. What began as a response to
                the everyday frustrations of property managers has evolved into
                a powerful, intuitive platform built to simplify the complex.
              </p>
              <p style={{ marginBottom: "15px" }}>
                Our team saw the hours lost to repetitive admin, outdated
                systems, and fragmented processes. So, we designed a
                compliance-focused CRM that replaces that chaos with clarity.
                From automated reminders to seamless safety check coordination,
                Rentalease empowers real estate professionals to focus on what
                truly matters — building relationships, not chasing paperwork.
              </p>
            </div>
            <Button variant="outline" href="/book-now">
              Request Demo
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
              We’re a team shaped by real rental experiences — as tenants and
              landlords. Frustrated by outdated systems, we built Rentalease to
              make renting simpler, fairer, and more human for everyone
              involved.
            </p>
          </div>

          {/* What We Do */}
          <div className="about__card accent-background--3 accent-border--3">
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
          <div className="about__card accent-background--3 accent-border--3">
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
          <div className="about__card accent-background--3 accent-border--3 about__card--values">
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
          <div className="about__card accent-background--3 accent-border--3">
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
          <div className="about__card accent-background--3 accent-border--3">
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

      <div className="common-section">
        <BrandCarousel />
      </div>

      {/* <div className="common-section accent-background--4">
        <div className="container">
          <CTA
            title="Ready to Build Something"
            highlightText="Extraordinary with Rentalease?"
            subtitle="Let’s create something amazing together — from strategy and setup to compliance, marketing, and results."
            buttonLabel="Contact Us"
            onButtonClick={() => {}}
            className=" accent-border--2"
          />
        </div>
      </div> */}
    </section>
  );
}
