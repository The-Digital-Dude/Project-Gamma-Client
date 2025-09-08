import React from "react";
import styles from "./FinalCTA.module.scss";
import FadeInAnimation from "@/components/Animations/FadeInAnimation";

const FinalCTA = () => {
  return (
    <section className={styles.finalCTA}>
      <div className={styles.container}>
        <div className={styles.content}>
          <FadeInAnimation duration={0.8} delay={0.2} yindex={40}>
            <h2 className={styles.headline}>
              One Platform.
              <br />
              Endless Solutions.
            </h2>
          </FadeInAnimation>

          <FadeInAnimation duration={0.8} delay={0.4} yindex={30}>
            <p className={styles.subheadline}>
              From compliance to complete property services, Rentalease is the
              most powerful system for modern agencies.
            </p>
          </FadeInAnimation>

          <FadeInAnimation duration={0.8} delay={0.6} yindex={20}>
            <div className={styles.buttonContainer}>
              <button className={styles.ctaButton}>Book a Demo Today</button>
            </div>
          </FadeInAnimation>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
