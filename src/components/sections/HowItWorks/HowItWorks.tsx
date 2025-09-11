import React from "react";
import styles from "./HowItWorks.module.scss";
import { FaPlug, FaCalendarCheck, FaClipboardCheck } from "react-icons/fa";
import Heading from "@/components/ui-elements/Heading/Heading";
import Headline from "@/components/Headline/Headline";
import PillText from "@/components/PillText/PillText";
import { Button } from "@/components/ui-elements/Button/Button";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaPlug />,
      title: "Connect Your Data",
      description:
        "We integrate seamlessly with your existing property management system via API.",
    },
    {
      icon: <FaCalendarCheck />,
      title: "Automated Scheduling",
      description:
        "We notify tenants, book appointments, and assign jobs to the right tradies.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Compliance Made Easy",
      description:
        "Tradies complete jobs, submit reports, and Rentalease generates the invoices—automatically.",
    },
  ];

  return (
    <section className="py-50">
      <div className="container text-center">
        <PillText text="The Gap We Fill" />
        <Headline
          heading="h3"
          mainText="Closing the Gap in"
          highlightText="Property Management"
          boldText=""
        />
        <p style={{ marginTop: "1rem" }}>
          Property compliance and services have always been fragmented—multiple
          contractors, scattered reports, endless admin. Rentalease fixes that
          by combining compliance, tradies, and services into one powerful,
          automated system.
        </p>
        <div className={styles.stepsGrid}>
          {steps.map((step, idx) => (
            <div className={`${styles.stepBox} accent-border--2`} key={idx}>
              <div className={styles.icon}>{step.icon}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "2rem" }}>
          <Button href="/book-now" fullWidth={false}>
            Request Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
