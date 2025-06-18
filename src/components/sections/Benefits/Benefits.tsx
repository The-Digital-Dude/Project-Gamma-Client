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
      title: "Medical, dental, and vision",
      description:
        "WorkOS pays 90% of premiums for employees and dependents to help keep your family healthy.",
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
      title: "Retirement & 401k",
      description:
        "WorkOS provides a 3% match of your 401k contributions to help you save for retirement. Isn't that great?",
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
      title: "Vacation & leave",
      description:
        "Relax and recharge with 20 days of paid yearly vacation. We also offer 12 weeks of parental leave for new parents.",
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
      title: "Fitness",
      description:
        "Monthly stipend for gyms, yoga classes, race registrations, or whatever keeps you active.",
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
      title: "Wellness",
      description:
        "Monthly stipend for a massage, meditation class, therapy, or activities that enhance your mental well-being.",
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
      title: "Home office",
      description:
        "Outfit your working space with a stipend for equipment that will keep you comfortable and productive.",
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
