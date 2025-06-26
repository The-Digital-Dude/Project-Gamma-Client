import ServiceHero from "@/components/ServiceHero/ServiceHero";
import "@/styles/safety-compliance.scss";
import AccordionSection from "@/components/AccordionSection";
import FeatureHero from "@/components/sections/FeatureHero/FeatureHero";
import Heading from "@/components/ui-elements/Heading/Heading";
import ServiceOfferings from "@/components/sections/ServiceOfferings/ServiceOfferings";
import ComparisonTable from "@/components/sections/ComparisonTable/ComparisonTable";
import CTA from "@/components/CTA/CTA";

type Props = {};

export default function GasSafety({}: Props) {
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
            After the inspection, you’ll receive a full report and required compliance documentation directly in your Rentalease portal for record-keeping and peace of mind.
          `,
    },
  ];

  const faqArray = [
    {
      title: "What happens if an appliance is deemed unsafe?",
      content:
        "If a gas appliance fails the safety check, our technician will immediately advise on the necessary steps. We will provide you with a detailed report and a no-obligation quote for repair or replacement through your Rentalease portal.",
    },
    {
      title: "What documentation do I receive after the check?",
      content:
        "You will receive a detailed record of the gas safety check, outlining all tests performed and their results. This documentation is stored in your Rentalease portal and serves as your proof of compliance.",
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
        <div className="container icons-bg--1">
          <ServiceHero
            mainText="Rentalease Gas Safety Checks in"
            highlightText="Victoria"
            description="Use our network of friendly, accredited, and insured gas fitters to ensure your home is safe and fully compliant with all Victorian regulations."
          />
        </div>
      </section>
      <FeatureHero
        eyebrow=""
        title="How We Can Help"
        description="Our Integrated Gas Compliance Service New Victorian regulations require rental providers to conduct gas safety checks every two years. To simplify this for our landlords, Rentalease offers a specialised, standalone gas check service. We provide a thorough, friendly, and accredited solution to meet your compliance needs at an unbeatable rate, backed by our price beat guarantee.
Safety and trust are our priorities. We offer full insurance on every job for complete peace of mind. All compliance documentation, including the record of the check and any certificates, is delivered directly to your Rentalease portal for easy access. Should your property require any repairs to become compliant, we will facilitate quotes from our extensive network of professionals, delivered straight to your dashboard for one-click approval.
"
        ctaText="Learn More"
        ctaLink="/docs/directory-sync"
        imageSrc="/img-8.jpg"
        imageAlt="Directory Sync Dashboard"
        contentPosition="left"
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
        eyebrow="Legislation Update"
        title="Understanding New Landlord Regulations"
        subtitle="Stay Compliant with Annual Gas Safety Checks"
        description="Gas safety checks are a mandatory requirement for all Victorian rental properties and must be conducted every two years by a qualified professional. The legislation requires gas fitters to submit a revised safety checklist and log the check via a separate VBA portal. Rental providers will receive copies of both for their records.
This check can only be performed by a specialised class of plumbers/gas fitters holding the Type A Servicing qualification. The Rentalease network consists exclusively of these qualified professionals, ensuring your legal obligations are always met."
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
            highlightText="Extraordinary with Rentalease?"
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
