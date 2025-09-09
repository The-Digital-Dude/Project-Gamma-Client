"use client";

import React from "react";
import styles from "./CoreFeatures.module.scss";
import FadeInAnimation from "@/components/Animations/FadeInAnimation";
import { motion } from "framer-motion";

const features = [
  {
    title: "Automated Scheduling",
    description: "Jobs booked, reminders sent automatically.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="3"
          y="4"
          width="18"
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M16 2v4M8 2v4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M3 10h18" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 14h4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    iconClass: styles.iconCalendar,
  },
  {
    title: "Tradie Management",
    description: "Assign, track, and complete tasks in real-time.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="10" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
        <path
          d="M20 8l-2 2m0-2l2 2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    iconClass: styles.iconUser,
  },
  {
    title: "Report & Invoice Generation",
    description: "Instinctly stored, audit-ready.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-4-6z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M14 2v6h6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M9 13h6M9 17h6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    iconClass: styles.iconDoc,
  },
  {
    title: "Cloud CRM",
    description: "Access anywhere, anytime.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8 17h10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    iconClass: styles.iconCloud,
  },
  {
    title: "Security & Compliance",
    description: "Encrypted storage, safe record-keeping.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-4z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M10 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    iconClass: styles.iconShield,
  },
];

const CoreFeatures = () => {
  return (
    <section className={`common-section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Smarter Systems. Seamless Services.</h2>
        </div>

        <div className={styles.grid}>
          {features.map((f, idx) => (
            <FadeInAnimation
              key={idx}
              index={idx}
              duration={0.6}
              delay={0.15}
              yindex={24}
            >
              <motion.div
                className={styles.card}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
              >
                <div className={`${styles.icon} ${f.iconClass}`}>{f.icon}</div>
                <h3 className={styles.cardTitle}>{f.title}</h3>
                <p className={styles.cardDesc}>{f.description}</p>
              </motion.div>
            </FadeInAnimation>
          ))}
        </div>

        {/* <div className={styles.mockupsRow}>
          <FadeInAnimation index={0} duration={0.6} delay={0.2} yindex={20}>
            <div className={styles.mockupScheduling}>Scheduling Screenshot</div>
          </FadeInAnimation>
          <FadeInAnimation index={1} duration={0.6} delay={0.3} yindex={20}>
            <div className={styles.mockupReporting}>Reporting Screenshot</div>
          </FadeInAnimation>
        </div> */}
      </div>
    </section>
  );
};

export default CoreFeatures;
