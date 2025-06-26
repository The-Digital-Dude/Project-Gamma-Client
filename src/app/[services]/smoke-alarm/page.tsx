import ServiceHero from "@/components/ServiceHero/ServiceHero";
import "@/styles/safety-compliance.scss";
import AccordionSection from "@/components/AccordionSection";
import FeatureHero from "@/components/sections/FeatureHero/FeatureHero";
import Heading from "@/components/ui-elements/Heading/Heading";
import ServiceOfferings from "@/components/sections/ServiceOfferings/ServiceOfferings";
import ComparisonTable from "@/components/sections/ComparisonTable/ComparisonTable";
import CTA from "@/components/CTA/CTA";

type Props = {};

export default function SmokeAlarm({}: Props) {
  const includedArray = [
    {
      title: "Comprehensive Smoke Alarm Testing",
      content: `
        Our qualified technician checks each alarm for correct placement, physical damage, and functionality. We also measure sound pressure levels to ensure the alarm is loud enough to wake sleeping occupants.
      `,
    },
    {
      title: "Free Battery Replacement",
      content: `
        As part of the inspection, we replace all smoke alarm batteries as required to ensure proper operation without any extra cost to you.
      `,
    },
    {
      title: "Detailed Compliance Report",
      content: `
        You'll receive a comprehensive audit report and compliance certificate in your Rentalease portal, outlining all work completed and confirming your property's legal compliance.
      `,
    },
  ];

  const faqArray = [
    {
      title: "How do I know when my smoke alarm inspections are due?",
      content:
        "The Rentalease platform automatically tracks your property's compliance dates. We will send you an email and a dashboard notification well in advance of your annual due date, so you never have to worry about missing it.",
    },
    {
      title: "Can I just check the smoke alarms myself?",
      content:
        "While you can press the test button, Victorian regulations require a comprehensive annual check to ensure compliance. Using a professional service like ours provides a detailed report and certificate, which serves as your legal proof that you have met your obligations as a landlord.",
    },
    {
      title: "Where must smoke alarms be installed?",
      content:
        "At a minimum, smoke alarms must be installed on each storey of a residential property, including in any hallway or area connected to bedrooms, to ensure they can wake sleeping occupants. Our technicians will verify that your alarms meet all location requirements.",
    },
    {
      title: "What services are included in the standard price?",
      content:
        "Our flat rate of $79 + GST includes the full inspection of all alarms, testing of sound levels, replacement of all batteries, and a comprehensive digital compliance report and certificate. If an alarm unit itself needs to be replaced (e.g., it is expired or faulty), we will provide a separate, no-obligation quote for the new unit.",
    },
  ];

  return (
    <div>
      <section className="common-section">
        <div className="container icons-bg--1">
          <ServiceHero
            mainText="Rentalease Smoke Alarm Inspections in"
            highlightText="Victoria"
            description="Ensure your property is safe and compliant with our network of friendly, accredited, and insured professionals."
          />
        </div>
      </section>
      <FeatureHero
        eyebrow=""
        title="How We Can Help"
        description="Our Integrated Smoke Alarm Compliance Service Annual smoke alarm checks are a critical and mandatory requirement for all Victorian rental properties. To make this simple, Rentalease offers a specialised, standalone smoke alarm inspection. We provide a thorough, friendly, and accredited service to meet all your compliance needs at an unbeatable rate, backed by our price beat guarantee.
Safety and trust are our priorities. We offer full insurance on every job for complete peace of mind. All compliance documentation, including a detailed audit report and compliance certificate, is delivered directly to your Rentalease portal for easy access at any time. Should an alarm need replacement, we facilitate the entire process through our network, with quotes delivered straight to your dashboard for approval.
"
        ctaText="Learn More"
        ctaLink="/docs/directory-sync"
        imageSrc="/img-5.jpg"
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
        imageSrc="/img-4.jpg"
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
