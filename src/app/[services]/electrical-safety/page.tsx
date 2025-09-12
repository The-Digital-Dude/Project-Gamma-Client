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
  MdElectricBolt,
  MdShield,
  MdElectricalServices,
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

export default function ElectricalSafety({}: Props) {
  const [activeTab, setActiveTab] = useState<"landlords" | "managers">(
    "landlords"
  );

  const handleTabChange = (tab: "landlords" | "managers") => {
    setActiveTab(tab);
  };

  const includedArray = [
    {
      title: "Full Inspection by a Licensed Electrician",
      content: `
            Our licensed and insured A-Grade electrician will carry out a detailed inspection to ensure your property's electrical systems are safe and compliant with Victorian legislation.
          `,
    },
    {
      title: "Appliance and Switchboard Check",
      content: `
            The service includes a comprehensive check of all landlord-supplied electrical appliances and a thorough inspection of the switchboard. We ensure that safety switches (RCDs) are installed and operating correctly.
          `,
    },
    {
      title: "Trip Test of Safety Switches",
      content: `
            A trip test is conducted on all RCDs to verify their functionality and confirm they will protect your tenants in the event of an electrical fault.
          `,
    },
    {
      title: "Digital Compliance Report",
      content: `
            After the inspection, you'll receive a detailed digital report and all compliance documentation directly in your RentalEase portal for easy record-keeping.
          `,
    },
  ];

  const faqArray = [
    {
      title: "What is generally involved in an electrical safety check?",
      content:
        "An electrical safety check involves a thorough visual inspection and electronic testing of a property's electrical circuits, switchboards, appliances, and fittings to ensure they are safe and compliant with current standards. This includes testing safety switches (RCDs) to ensure they function correctly.",
    },
    {
      title: "What is required by the landlord if repairs are needed?",
      content:
        "If the check reveals that repairs are required to make the property safe, you as the landlord are obligated to have them completed by a licensed electrician. Our platform makes this easy by providing a no-obligation quote which you can approve directly from your dashboard.",
    },
    {
      title: "What do I receive once the test has been completed?",
      content:
        "You will receive a detailed digital report in your RentalEase portal, which serves as your record of the electrical safety check. It will outline all tests performed, the results, and any recommendations or required repairs.",
    },
    {
      title: "Do I require an electrical safety check? If so, when?",
      content:
        "Yes, under Victorian law, landlords must have an electrical safety check performed on their rental property at least once every two years. If a check has not been done within the last two years, you must arrange one as soon as practicable.",
    },
  ];

  return (
    <div>
      <section className="common-section">
        <FeatureHero
          eyebrow="RentalEase Residential"
          title="RentalEase Electrical Safety Checks in Victoria"
          subtitle=""
          description="Use our network of friendly, A-Grade electricians to ensure your investment property is safe and fully compliant with all Victorian regulations."
          ctaText="Request Demo"
          ctaLink="/book-now"
          imageSrc="/img-12.webp"
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
        description="Our Integrated Electrical Compliance Service Recent Victorian regulations require landlords to complete electrical safety checks every two years. To make this obligation simple, RentalEase offers a specialised, standalone electrical check service. We provide a thorough, friendly, and accredited solution to meet your compliance needs at an unbeatable rate, backed by our price beat guarantee.
Safety and trust are our priorities. We offer full insurance on every job for complete peace of mind. All compliance documentation, including the record of the check and any certificates, is delivered directly to your RentalEase portal for easy access. Should your property require any repairs to become compliant, we will facilitate quotes from our extensive network of professionals, delivered straight to your dashboard for one-click approval.
"
        ctaText="Learn More"
        ctaLink="/docs/directory-sync"
        imageSrc="/img-13.webp"
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
              title="What's Included in the Package?"
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
        description="Under new Victorian legislation, rental providers are periodically required to complete a variety of safety inspections, including in relation to gas and electrical services. In addition, rental providers are required to maintain a record of these inspections including, among other things, the name and registration number of the person doing the check, the date of the check and an associated compliance report. At RentalEase, you have peace of mind that all these compliance and regulatory requirements are fulfilled."
        ctaText="⬇ Download our comprehensive electrical safety checklist"
        ctaLink=""
        imageSrc="/img-6.jpg"
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
          <div className="content-section" id="landlords-content">
            <div className="cards-grid">
              <div className="feature-card">
                <div
                  className="feature-card-icon"
                  style={{ background: "#3b82f620" }}
                >
                  <MdElectricBolt size={40} color="#3b82f6" />
                </div>
                <h5>Fully Compliant Electrical Inspections</h5>
                <p>
                  We conduct thorough, regulation-compliant checks to ensure
                  your property meets Victorian electrical safety standards.
                </p>
              </div>
              <div className="feature-card">
                <div
                  className="feature-card-icon"
                  style={{ background: "#10b98120" }}
                >
                  <MdElectricalServices size={40} color="#10b981" />
                </div>
                <h5>Licensed & Insured Electricians</h5>
                <p>
                  All checks are carried out by qualified professionals, with
                  double insurance coverage for extra peace of mind.
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
                  Should issues arise, we can swiftly organise licensed
                  electricians from our network to complete repairs.
                </p>
              </div>
            </div>
          </div>

          {/* Property Managers Content */}
          <div
            className="content-section"
            id="managers-content"
            style={{ display: "none" }}
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
                  Manage and monitor electrical safety compliance across all
                  properties in your portfolio, from one central dashboard.
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
                  Our electricians are punctual, respectful, and experienced in
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

          <script
            dangerouslySetInnerHTML={{
              __html: `
              document.addEventListener('DOMContentLoaded', function() {
                const radioButtons = document.querySelectorAll('input[name="userType"]');
                const landlordsContent = document.getElementById('landlords-content');
                const managersContent = document.getElementById('managers-content');
                const toggleButtons = document.querySelectorAll('.toggle-button');
                const radioOptions = document.querySelectorAll('.radio-option');
                
                function updateContent(value) {
                  // Update content visibility
                  if (value === 'landlords') {
                    landlordsContent.style.display = 'block';
                    managersContent.style.display = 'none';
                  } else {
                    landlordsContent.style.display = 'none';
                    managersContent.style.display = 'block';
                  }
                  
                  // Update toggle button states
                  toggleButtons.forEach(btn => {
                    btn.classList.remove('active-toggle');
                    btn.classList.add('inactive-toggle');
                  });
                  
                  // Find and activate the correct button
                  const activeRadio = document.querySelector('input[name="userType"]:checked');
                  if (activeRadio) {
                    const activeButton = activeRadio.parentElement.querySelector('.toggle-button');
                    activeButton.classList.remove('inactive-toggle');
                    activeButton.classList.add('active-toggle');
                  }
                }
                
                // Handle radio button changes
                radioButtons.forEach(radio => {
                  radio.addEventListener('change', function() {
                    updateContent(this.value);
                  });
                });
                
                // Handle clicks on toggle buttons
                toggleButtons.forEach(button => {
                  button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const radio = this.parentElement.querySelector('input[type="radio"]');
                    radio.checked = true;
                    updateContent(radio.value);
                  });
                });
              });
            `,
            }}
          />
        </div>
      </div>

      <FeatureHero
        eyebrow="Legislation Update"
        title="Understanding New Landlord Regulations"
        subtitle="Stay Compliant with Annual Electrical Safety Checks"
        description="Under new Victorian legislation, rental providers must ensure an electrical safety check is completed for their property every two years by a licensed electrician. Furthermore, landlords are required to maintain a record of these inspections, including the name and registration number of the person who performed the check, the date of the check, and a copy of the compliance report.
When you book through RentalEase, you have peace of mind that all these compliance and regulatory requirements are fulfilled and documented for you automatically in your portal."
        ctaText="Learn More"
        ctaLink="/docs/directory-sync"
        imageSrc="/img-7.jpg"
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
