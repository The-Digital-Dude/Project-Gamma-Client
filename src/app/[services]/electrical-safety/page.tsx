import ServiceHero from "@/components/ServiceHero/ServiceHero";
import "@/styles/safety-compliance.scss";
import AccordionSection from "@/components/AccordionSection";
import FeatureHero from "@/components/sections/FeatureHero/FeatureHero";
import Heading from "@/components/ui-elements/Heading/Heading";
import ServiceOfferings from "@/components/sections/ServiceOfferings/ServiceOfferings";
import ComparisonTable from "@/components/sections/ComparisonTable/ComparisonTable";
import CTA from "@/components/CTA/CTA";

type Props = {};

export default function ElectricalSafety({}: Props) {
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
            After the inspection, you'll receive a detailed digital report and all compliance documentation directly in your Rentalease portal for easy record-keeping.
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
        "You will receive a detailed digital report in your Rentalease portal, which serves as your record of the electrical safety check. It will outline all tests performed, the results, and any recommendations or required repairs.",
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
        <div className="container icons-bg--1">
          <ServiceHero
            mainText="Rentalease Electrical Safety Checks in"
            highlightText="Melbourne"
            description="Use our network of friendly, A-Grade electricians to ensure your investment property is safe and fully compliant with all Victorian regulations."
          />
        </div>
      </section>
      <FeatureHero
        eyebrow=""
        title="How We Can Help"
        description="Our Integrated Electrical Compliance Service Recent Victorian regulations require landlords to complete electrical safety checks every two years. To make this obligation simple, Rentalease offers a specialised, standalone electrical check service. We provide a thorough, friendly, and accredited solution to meet your compliance needs at an unbeatable rate, backed by our price beat guarantee.
Safety and trust are our priorities. We offer full insurance on every job for complete peace of mind. All compliance documentation, including the record of the check and any certificates, is delivered directly to your Rentalease portal for easy access. Should your property require any repairs to become compliant, we will facilitate quotes from our extensive network of professionals, delivered straight to your dashboard for one-click approval.
"
        ctaText="Learn More"
        ctaLink="/docs/directory-sync"
        imageSrc="https://imagedelivery.net/LqiWLm-3MGbYHtFuUbcBtA/189d259c-f35e-4849-da0b-dc9a73374300/public"
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
              title="What's Included in the Package?"
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
        subtitle="Stay Compliant with Annual Smoke Alarm Checks"
        description="Victorian legislation now requires rental providers to conduct smoke alarm checks annually. Smoke alarms must be correctly installed, of the right type, and properly maintained.
Crucially, the legislation also defines smoke alarm non-compliance as an urgent repair. This means landlords must act immediately to rectify any faults reported by tenants. The Rentalease platform helps you manage these obligations effortlessly by providing reminders, professional servicing, and a clear audit trail."
        ctaText="Learn More"
        ctaLink="/docs/directory-sync"
        imageSrc="https://imagedelivery.net/LqiWLm-3MGbYHtFuUbcBtA/189d259c-f35e-4849-da0b-dc9a73374300/public"
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
    </div>
  );
}
