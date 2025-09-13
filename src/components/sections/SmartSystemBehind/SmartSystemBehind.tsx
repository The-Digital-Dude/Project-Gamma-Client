import React, { useEffect, useRef } from "react";
import styles from "./SmartSystemBehind.module.scss";
import FadeInAnimation from "@/components/Animations/FadeInAnimation";

const SmartSystemBehind = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const chartFills =
              entry.target.querySelectorAll("[data-percentage]");
            chartFills.forEach((fill, index) => {
              const percentage = fill.getAttribute("data-percentage");
              if (percentage) {
                // Add a staggered delay for each chart
                setTimeout(() => {
                  (fill as HTMLElement).style.width = `${percentage}%`;
                }, index * 300); // 300ms delay between each chart
              }
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      title: "Automation engine reduces admin by 80%",
      icon: "⚙️",
    },
    {
      title: "Cloud CRM accessible anywhere, anytime",
      icon: "☁️",
    },
    {
      title: "Reports stored securely and audit-ready",
      icon: "🔒",
    },
    {
      title: "Designed to scale with your business",
      icon: "📈",
    },
  ];

  return (
    <section ref={sectionRef} className={styles.smartSystemBehind}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.features}>
            <div
              className={styles.header}
              style={{ textAlign: "left", marginBottom: "0" }}
            >
              <FadeInAnimation duration={0.8} delay={0.2} yindex={30}>
                <h2 className={styles.headline}>
                  The Smart System Behind the Service
                </h2>
              </FadeInAnimation>
            </div>
            {features.map((feature, index) => (
              <FadeInAnimation
                key={index}
                index={index}
                duration={0.6}
                delay={0.1}
                yindex={20}
              >
                <div className={styles.featureItem}>
                  <div className={styles.icon}>{feature.icon}</div>
                  <p className={styles.featureText}>{feature.title}</p>
                </div>
              </FadeInAnimation>
            ))}
          </div>

          <div className={styles.visualContainer}>
            <FadeInAnimation duration={1} delay={0.4} yindex={40}>
              <img
                src="/mobile-app.jpeg"
                alt="RentalEase Mobile App"
                className={styles.mobileAppImage}
              />
            </FadeInAnimation>

            {/* <div className={styles.cloudElements}>
              <div className={`${styles.cloud} ${styles.cloud1}`}>☁️</div>
              <div className={`${styles.cloud} ${styles.cloud2}`}>☁️</div>
              <div className={`${styles.cloud} ${styles.cloud3}`}>☁️</div>
              <div className={styles.server}>🖥️</div>
              <div className={`${styles.gear} ${styles.gear1}`}>⚙️</div>
              <div className={`${styles.gear} ${styles.gear2}`}>⚙️</div>
              <div className={`${styles.arrow} ${styles.arrow1}`}>→</div>
              <div className={`${styles.arrow} ${styles.arrow2}`}>→</div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartSystemBehind;
