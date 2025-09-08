import React from "react";
import styles from "./WhyRentalease.module.scss";
import PillText from "@/components/PillText/PillText";
import FadeInAnimation from "@/components/Animations/FadeInAnimation";

const WhyRentalease = () => {
  const highlights = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "All-in-One CRM",
      description: "Track every compliance job and service.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Licensed Tradies",
      description: "Our in-house workforce delivers on time.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Automation That Works",
      description: "Scheduling, notifications, and reporting on autopilot.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 22S8 18 8 12V5L12 3L16 5V12C16 18 12 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Secure & Scalable",
      description: "Built with the latest technology to grow with you.",
    },
  ];

  return (
    <section className={styles.whyRentalease}>
      <div className={styles.container}>
        <div style={{ textAlign: "center" }}>
          <PillText text="Why Rentalease" />
        </div>
        <div className={styles.header} style={{ marginBottom: 0 }}>
          <h2 className={styles.headline}>Why Agencies Choose Rentalease</h2>
        </div>

        <div className={styles.highlights}>
          {highlights.map((highlight, index) => (
            <FadeInAnimation
              key={index}
              index={index}
              duration={0.6}
              delay={0.2}
              yindex={30}
            >
              <div className={styles.card}>
                <div className={styles.iconWrapper}>{highlight.icon}</div>
                <h3 className={styles.cardTitle}>{highlight.title}</h3>
                <p className={styles.cardDescription}>
                  {highlight.description}
                </p>
              </div>
            </FadeInAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRentalease;
