"use client";

import ServiceHero from "@/components/ServiceHero/ServiceHero";
import "@/styles/safety-compliance.scss";
import AccordionSection from "@/components/AccordionSection";
import FeatureHero from "@/components/sections/FeatureHero/FeatureHero";
import Heading from "@/components/ui-elements/Heading/Heading";
import ServiceOfferings from "@/components/sections/ServiceOfferings/ServiceOfferings";
import ComparisonTable from "@/components/sections/ComparisonTable/ComparisonTable";
import CTA from "@/components/CTA/CTA";
import { useState } from "react";
import {
  MdLocalGasStation,
  MdSecurity,
  MdAssignment,
  MdAttachMoney,
  MdCloudDownload,
  MdConstruction,
  MdDashboard,
  MdIntegrationInstructions,
  MdSchedule,
  MdFolder,
  MdGroup,
  MdHandyman,
} from "react-icons/md";

type Props = {};

export default function GasSafety({}: Props) {
  const [activeTab, setActiveTab] = useState<"landlords" | "managers">(
    "landlords"
  );

  const handleTabChange = (tab: "landlords" | "managers") => {
    setActiveTab(tab);
  };

  const includedArray = [
    {
      title: "Licensed Gas Safety Inspection",
      content: `
            Our licensed and insured gas fitter will carry out a complete inspection of your property's gas system to ensure full safety and legal compliance.
          `,
    },
    {
      title: "Appliance and Cylinder Checks",
      content: `
            We inspect all landlord-supplied gas appliances including heaters, cooktops, and hot water systems. If LPG cylinders are present, we check them and their associated components as well.
          `,
    },
    {
      title: "Isolation Valve and Carbon Monoxide Testing",
      content: `
            The inspection includes verifying that gas isolation valves are correctly installed and accessible. We also perform gas combustion spillage tests to prevent carbon monoxide hazards.
          `,
    },
    {
      title: "Detailed Compliance Report",
      content: `
            After the inspection, you’ll receive a full report and required compliance documentation directly in your RentalEase portal for record-keeping and peace of mind.
          `,
    },
  ];

  const faqArray = [
    {
      title: "What happens if an appliance is deemed unsafe?",
      content:
        "If a gas appliance fails the safety check, our technician will immediately advise on the necessary steps. We will provide you with a detailed report and a no-obligation quote for repair or replacement through your RentalEase portal.",
    },
    {
      title: "What documentation do I receive after the check?",
      content:
        "You will receive a detailed record of the gas safety check, outlining all tests performed and their results. This documentation is stored in your RentalEase portal and serves as your proof of compliance.",
    },
    {
      title: "Who is qualified to perform the gas safety check?",
      content:
        "All checks are performed by licensed or registered gas fitters who hold the specialised Type A Gas Appliance Servicing qualification, as required by Victorian law.",
    },
    {
      title: "What happens if a gas leak is detected?",
      content:
        "The safety of your tenants is the top priority. If a leak is detected, the technician will take immediate steps to make the situation safe, which typically involves isolating the gas supply. They will then inform you of the urgent repair requirements.",
    },
  ];

  return (
    <div>
      <section className="common-section">
        <FeatureHero
          eyebrow="RentalEase Residential"
          title="RentalEase Gas Safety Checks in Victoria"
          subtitle=""
          description="Use our network of friendly, accredited, and insured gas fitters to ensure your home is safe and fully compliant with all Victorian regulations."
          ctaText="Request Demo"
          ctaLink="/book-now"
          imageSrc="/img-10.jpg"
          imageAlt="Directory Sync Dashboard"
          contentPosition="left"
          buttonVariant="default"
          eyebrowColor="$text-tertiary)"
          heading="h1"
          style={{ padding: 0 }}
          iconBG={true}
        />
      </section>
      <FeatureHero
        eyebrow=""
        title="How We Can Help"
        description="Our Integrated Gas Compliance Service New Victorian regulations require rental providers to conduct gas safety checks every two years. To simplify this for our landlords, RentalEase offers a specialised, standalone gas check service. We provide a thorough, friendly, and accredited solution to meet your compliance needs at an unbeatable rate, backed by our price beat guarantee.
Safety and trust are our priorities. We offer full insurance on every job for complete peace of mind. All compliance documentation, including the record of the check and any certificates, is delivered directly to your RentalEase portal for easy access. Should your property require any repairs to become compliant, we will facilitate quotes from our extensive network of professionals, delivered straight to your dashboard for one-click approval.
"
        ctaText="Learn More"
        ctaLink="/docs/directory-sync"
        imageSrc="/img-8.jpg"
        imageAlt="Directory Sync Dashboard"
        contentPosition="right"
        buttonVariant="default"
        eyebrowColor="$text-tertiary)"
        heading="h3"
      />
      <div className="common-section accent-background--4">
        <div className="container">
          <div className="text-center">
            <Heading
              title="What's Included in Your Gas Safety Check?"
              heading="h3"
              size="md"
            />
          </div>
          <AccordionSection items={includedArray} />
        </div>
      </div>

      <FeatureHero
        eyebrow=""
        title="New regulations for landlords"
        description="Gas safety checks are required on all Victorian rental properties, and are required to be conducted every two years. The new requirement will require gas fitters to submit the June 2022 revised gas safety checklist as well as submit their check via a separate VBA portal, the rental providers will also receive both copies.

The safety checks can only be performed by a specialised class of plumbers/gas fitters holding the Type A Servicing qualification. The legislation also contains additional requirements to maintain records of inspections, including the inspector’s name and registration number, and a copy of the compliance report."
        ctaText="⬇ Download our comprehensive gas safety checklist (PDF 160KB)"
        ctaLink=""
        imageSrc="/gas-safety-checks.jpg"
        imageAlt="New regulations for landlords"
        contentPosition="left"
        buttonVariant="default"
        eyebrowColor="$text-tertiary)"
        heading="h3"
      />

      <div className="common-section accent-background--4">
        <div className="container">
          <div className="text-center">
            <Heading title="What we offer" heading="h3" size="md" />
            <p className="subtitle" style={{ marginBottom: "1rem" }}>
              RentalEase we offer our clients a fully compliant, thorough,
              friendly, and affordable service.
            </p>
          </div>

          {/* Radio Button Toggle */}
          <div className="radio-toggle-container text-center mb-5">
            <div className="toggle-wrapper">
              <label className="radio-option">
                <input
                  type="radio"
                  name="userType"
                  value="landlords"
                  checked={activeTab === "landlords"}
                  onChange={() => handleTabChange("landlords")}
                />
                <span
                  className={`toggle-button ${
                    activeTab === "landlords"
                      ? "active-toggle"
                      : "inactive-toggle"
                  }`}
                  onClick={() => handleTabChange("landlords")}
                >
                  For Landlords
                </span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="userType"
                  value="managers"
                  checked={activeTab === "managers"}
                  onChange={() => handleTabChange("managers")}
                />
                <span
                  className={`toggle-button ${
                    activeTab === "managers"
                      ? "active-toggle"
                      : "inactive-toggle"
                  }`}
                  onClick={() => handleTabChange("managers")}
                >
                  For Property Managers
                </span>
              </label>
            </div>
          </div>

          {/* Landlords Content */}
          <div
            className="content-section"
            style={{ display: activeTab === "landlords" ? "block" : "none" }}
          >
            <div className="cards-grid">
              <div className="feature-card">
                <div
                  className="feature-card-icon"
                  style={{ background: "#3b82f620" }}
                >
                  <MdLocalGasStation size={40} color="#3b82f6" />
                </div>
                <h5>Fully Compliant Gas Safety Inspections</h5>
                <p>
                  We conduct thorough, regulation-compliant checks to ensure
                  your property meets Victorian gas safety standards.
                </p>
              </div>
              <div className="feature-card">
                <div
                  className="feature-card-icon"
                  style={{ background: "#10b98120" }}
                >
                  <MdSecurity size={40} color="#10b981" />
                </div>
                <h5>Licensed & Insured Gas Fitters</h5>
                <p>
                  All checks are carried out by qualified professionals with
                  Type A Servicing qualification and double insurance coverage
                  for extra peace of mind.
                </p>
              </div>
              <div className="feature-card">
                <div
                  className="feature-card-icon"
                  style={{ background: "#f59e0b20" }}
                >
                  <MdAssignment size={40} color="#f59e0b" />
                </div>
                <h5>Clear Compliance Documentation</h5>
                <p>
                  Receive detailed inspection reports and compliance
                  certificates for your records or legal obligations.
                </p>
              </div>
              <div className="feature-card">
                <div
                  className="feature-card-icon"
                  style={{ background: "#6366f120" }}
                >
                  <MdAttachMoney size={40} color="#6366f1" />
                </div>
                <h5>Competitive Pricing</h5>
                <p>
                  Take advantage of our best price guarantee—affordable
                  compliance with no compromise on quality.
                </p>
              </div>
              <div className="feature-card">
                <div
                  className="feature-card-icon"
                  style={{ background: "#ef444420" }}
                >
                  <MdCloudDownload size={40} color="#ef4444" />
                </div>
                <h5>Online Access Anytime</h5>
                <p>
                  View and download your reports securely through our
                  user-friendly online portal, 24/7.
                </p>
              </div>
              <div className="feature-card">
                <div
                  className="feature-card-icon"
                  style={{ background: "#8b5cf620" }}
                >
                  <MdConstruction size={40} color="#8b5cf6" />
                </div>
                <h5>Quick Fixes When Needed</h5>
                <p>
                  Should issues arise, we can swiftly organise licensed gas
                  fitters from our network to complete repairs.
                </p>
              </div>
            </div>
          </div>

          {/* Property Managers Content */}
          <div
            className="content-section"
            style={{ display: activeTab === "managers" ? "block" : "none" }}
          >
            <div className="cards-grid">
              <div className="feature-card">
                <div
                  className="feature-card-icon"
                  style={{ background: "#3b82f620" }}
                >
                  <MdDashboard size={40} color="#3b82f6" />
                </div>
                <h5>Multi-Property Compliance Oversight</h5>
                <p>
                  Manage and monitor gas safety compliance across all properties
                  in your portfolio, from one central dashboard.
                </p>
              </div>
              <div className="feature-card">
                <div
                  className="feature-card-icon"
                  style={{ background: "#10b98120" }}
                >
                  <MdIntegrationInstructions size={40} color="#10b981" />
                </div>
                <h5>Seamless Software Integration</h5>
                <p>
                  Works with leading platforms like PropertyMe and Property Tree
                  to streamline your workflow.
                </p>
              </div>
              <div className="feature-card">
                <div
                  className="feature-card-icon"
                  style={{ background: "#f59e0b20" }}
                >
                  <MdSchedule size={40} color="#f59e0b" />
                </div>
                <h5>Automated Reminders & Scheduling</h5>
                <p>
                  Never miss a deadline—our system helps you schedule
                  inspections and sends timely alerts.
                </p>
              </div>
              <div className="feature-card">
                <div
                  className="feature-card-icon"
                  style={{ background: "#6366f120" }}
                >
                  <MdFolder size={40} color="#6366f1" />
                </div>
                <h5>Centralised Report Storage</h5>
                <p>
                  Easily access and download inspection reports and certificates
                  across multiple tenancies.
                </p>
              </div>
              <div className="feature-card">
                <div
                  className="feature-card-icon"
                  style={{ background: "#ef444420" }}
                >
                  <MdGroup size={40} color="#ef4444" />
                </div>
                <h5>Tenant-Friendly Service</h5>
                <p>
                  Our gas fitters are punctual, respectful, and experienced in
                  working within occupied properties.
                </p>
              </div>
              <div className="feature-card">
                <div
                  className="feature-card-icon"
                  style={{ background: "#8b5cf620" }}
                >
                  <MdHandyman size={40} color="#8b5cf6" />
                </div>
                <h5>End-to-End Repair Support</h5>
                <p>
                  We coordinate prompt repair work through our trusted network,
                  keeping your properties safe and compliant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FeatureHero
        eyebrow="Legislation Update"
        title="Understanding New Landlord Regulations"
        subtitle="Stay Compliant with Annual Gas Safety Checks"
        description="Gas safety checks are a mandatory requirement for all Victorian rental properties and must be conducted every two years by a qualified professional. The legislation requires gas fitters to submit a revised safety checklist and log the check via a separate VBA portal. Rental providers will receive copies of both for their records.
This check can only be performed by a specialised class of plumbers/gas fitters holding the Type A Servicing qualification. The RentalEase network consists exclusively of these qualified professionals, ensuring your legal obligations are always met."
        ctaText="Learn More"
        ctaLink="/docs/directory-sync"
        imageSrc="/img-9.jpg"
        imageAlt="Directory Sync Dashboard"
        contentPosition="right"
        buttonVariant="default"
        eyebrowColor="$text-tertiary)"
        heading="h3"
      />
      <ServiceOfferings />
      <div className="common-section">
        <div className="container">
          <ComparisonTable />
        </div>
      </div>
      <div className="common-section accent-background--4">
        <div className="container">
          <div className="text-center">
            <Heading
              title="Frequently Asked Questions"
              heading="h3"
              size="md"
            />
          </div>
          <AccordionSection items={faqArray} />
        </div>
      </div>
      {/* <div className="common-section">
        <div className="container">
          <CTA
            title="Ready to Build Something"
            highlightText="Extraordinary with RentalEase?"
            subtitle="Let’s create something amazing together — from strategy and setup to compliance, marketing, and results."
            buttonLabel="Contact Us"
            onButtonClick={() => {}}
            className="accent-background--2 accent-border--2"
          />
        </div>
      </div> */}
    </div>
  );
}
