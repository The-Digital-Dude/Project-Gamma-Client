import React from "react";
import styles from "./HowServicesWork.module.scss";
import FadeInAnimation from "@/components/Animations/FadeInAnimation";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Add service request into CRM.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M8 8H16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8 12H14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Automation assigns licensed tradie + notifies tenant.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2L2 7L12 12L22 7L12 2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 17L12 22L22 17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 12L12 17L22 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Job completed professionally.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 6L9 17L4 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Report & invoice stored automatically.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14 2H6C5.44772 2 5 2.44772 5 3V21C5 21.5523 5.44772 22 6 22H18C18.5523 22 19 21.5523 19 21V7L14 2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 2V7H19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 13H15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M9 17H15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const HowServicesWork = () => {
  return (
    <section className={styles.howServicesWork}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>How Services Work Through RentalEase</h2>
        </div>

        <div className={styles.timelineWrapper}>
          <motion.div
            className={styles.connector}
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
          />

          <div className={styles.steps}>
            {steps.map((step, index) => (
              <FadeInAnimation
                key={index}
                index={index}
                duration={0.6}
                delay={0.2}
                yindex={30}
              >
                <div className={styles.step}>
                  <div className={styles.iconWrapper}>
                    <motion.div
                      className={styles.icon}
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.1 * index,
                      }}
                    >
                      {step.icon}
                    </motion.div>
                  </div>
                  <p className={styles.stepText}>{step.title}</p>
                </div>
              </FadeInAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowServicesWork;
