import React from "react";
import styles from "./HowItWorks.module.scss";
import { FaPlug, FaCalendarCheck, FaClipboardCheck } from "react-icons/fa";
import Heading from "@/components/ui-elements/Heading/Heading";
import Headline from "@/components/Headline/Headline";
import PillText from "@/components/PillText/PillText";

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
        <PillText text="How it works" />
        <Headline
          heading="h3"
          mainText="Simplifying Compliance,"
          highlightText="One Step at a Time"
          boldText=""
        />
        <div className={styles.stepsGrid}>
          {steps.map((step, idx) => (
            <div className={`${styles.stepBox} accent-border--4`} key={idx}>
              <div className={styles.icon}>{step.icon}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
