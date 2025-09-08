import React from "react";
import styles from "./ComplianceCovered.module.scss";
import FadeInAnimation from "@/components/Animations/FadeInAnimation";

const ComplianceCovered = () => {
  const services = [
    {
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.smokeAlarm}
        >
          <path d="M18 8l-.8 3a1.25 1.25 0 0 1 -1.2 1h-8a1.25 1.25 0 0 1 -1.2 -1l-.8 -3"></path>
          <path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z"></path>
          <path d="M12 16c.643 .288 1.017 .756 1 1.25c.017 .494 -.357 .962 -1 1.25s-1.017 .756 -1 1.25c-.017 .494 .357 .962 1 1.25"></path>
          <path d="M7 16c.643 .288 1.017 .756 1 1.25c.017 .494 -.357 .962 -1 1.25s-1.017 .756 -1 1.25c-.017 .494 .357 .962 1 1.25"></path>
          <path d="M17 16c.643 .288 1.017 .756 1 1.25c.017 .494 -.357 .962 -1 1.25s-1.017 .756 -1 1.25c-.017 .494 .357 .962 1 1.25"></path>
        </svg>
      ),
      title: "Smoke Alarm Testing",
      description:
        "Regular testing and maintenance of smoke alarms to ensure tenant safety and compliance.",
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
            className={styles.electricBolt}
          />
        </svg>
      ),
      title: "Electrical Safety Inspections",
      description:
        "Comprehensive electrical safety checks to meet all regulatory requirements.",
    },
    {
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.fireIcon}
        >
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M112 320c0-93 124-165 96-272 66 0 192 96 192 272a144 144 0 0 1-288 0z"
          ></path>
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M320 368c0 57.71-32 80-64 80s-64-22.29-64-80 40-86 32-128c42 0 96 70.29 96 128z"
          ></path>
        </svg>
      ),
      title: "Gas Appliance Safety Checks",
      description:
        "Professional gas safety inspections to ensure all appliances are safe and compliant.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.houseOutline}
          />
          <path
            d="M9 22V12H15V22"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Minimum Rental Standards",
      description:
        "Comprehensive checks to ensure properties meet all minimum rental standards.",
    },
  ];

  return (
    <section className={`${styles.complianceCovered} icons-bg--1`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.headline}>Compliance Covered, Always</h2>
          <p className={styles.body}>
            Stay fully compliant with automated scheduling, reminders, and
            professional service.
          </p>
        </div>

        <div className={styles.services}>
          {services.map((service, index) => (
            <FadeInAnimation
              key={index}
              index={index}
              duration={0.8}
              delay={0.2}
              yindex={30}
            >
              <div
                className={styles.serviceCard}
                style={{ transition: "transform 0.3s ease-out" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-12px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <div className={styles.iconWrapper}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>
              </div>
            </FadeInAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceCovered;
