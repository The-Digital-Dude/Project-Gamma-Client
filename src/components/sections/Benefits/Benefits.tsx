import React from "react";
import styles from "./Benefits.module.scss";
import Heading from "@/components/ui-elements/Heading/Heading";

const Benefits = () => {
  const benefits = [
    {
      icon: (
        <div className={`${styles.icon} ${styles.medical}`}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4V20M4 12H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ),
      title: "Saves Hours of Admin Time",
      description:
        "Our automated workflows save property managers hours of admin time, allowing them to focus on what really matters: their tenants and properties.",
    },
    {
      icon: (
        <div className={`${styles.icon} ${styles.retirement}`}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 20L20 4M4 4L20 20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ),
      title: "Automated Compliance Scheduling",
      description:
        "Our automated compliance scheduling ensures that all checks are completed on time, reducing the risk of late payments and penalties.",
    },
    {
      icon: (
        <div className={`${styles.icon} ${styles.vacation}`}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="4"
              y="5"
              width="16"
              height="14"
              rx="2"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M16 3V7M8 3V7M4 11H20M8 15H10M14 15H16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ),
      title: "API Integration with Leading CRMs",
      description:
        "Our API integration with leading CRMs allows you to seamlessly sync your data and automate your workflows, saving you time and effort.",
    },
    {
      icon: (
        <div className={`${styles.icon} ${styles.fitness}`}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12H20M4 12L8 8M4 12L8 16M20 12L16 8M20 12L16 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ),
      title: "Instant Report & Invoice Generation",
      description:
        "Our instant report and invoice generation feature allows you to generate reports and invoices in seconds, saving you time and effort.",
    },
    {
      icon: (
        <div className={`${styles.icon} ${styles.wellness}`}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M12 7V12L15 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ),
      title: "Secure, Cloud-Based Platform",
      description:
        "Our secure, cloud-based platform ensures that your data is always safe and accessible, no matter where you are.",
    },
    {
      icon: (
        <div className={`${styles.icon} ${styles.homeOffice}`}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12L12 4L21 12M5 10V20H19V10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ),
      title: "Local Aussie Support",
      description:
        "Our local Aussie support team is always here to help you with any questions or issues you may have, ensuring you have the best experience possible.",
    },
  ];

  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Heading title="Our benefits" subtitle="For You" size="md" />
        </div>
        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.card}>
              {benefit.icon}
              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              <p className={styles.cardDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
