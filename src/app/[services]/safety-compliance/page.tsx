import ServiceHero from "@/components/ServiceHero/ServiceHero";
import "@/styles/safety-compliance.scss";
import AccordionSection from "@/components/AccordionSection";
import Headline from "@/components/Headline/Headline";

type Props = {};

export default function SafetyCompliance({}: Props) {
  const includedArray = [
    {
      title: "1 x Electrical Safety Check",
      content:
        "A comprehensive service of your property's entire electrical system by a certified and insured electrician.  We ensure all components are safe and compliant with current standards and provide a detailed digital report directly to your portal.",
    },
    {
      title: "1 x Gas Safety Check",
      content:
        "A full inspection and testing of all gas appliances and installations by a Type A licensed gas fitter, as required every two years under Victorian law. We handle the submission to the VBA portal and provide a copy for your records.",
    },
    {
      title: "1 x Smoke Alarm Check",
      content:
        "Our professionals will test, clean, and replace batteries in all smoke alarms. We also ensure their positioning meets all current legal requirements to keep your tenants safe and your property compliant.",
    },
  ];
  return (
    <div>
      <section className="common-section">
        <div className="container">
          <ServiceHero
            mainText="Complete Gas, Electrical & Smoke Alarm Compliance for"
            highlightText="Rentalease Landlords"
            description="Rentalease was founded in Sydney by a team of property experts and
            tech innovators who saw a need for change. We were tired of the
            clunky, impersonal, and often stressful process that both landlords
            and tenants had to endure."
          />
        </div>
      </section>
      <div className="common-section accent-background--4">
        <div className="container">
          <Headline
            mainText="What's Included in the Package?"
            boldText=""
            highlightText=""
          />
          <AccordionSection items={includedArray} />
        </div>
      </div>
    </div>
  );
}
