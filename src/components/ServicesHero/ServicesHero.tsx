import React from "react";
import { motion } from "framer-motion";
import Headline from "../Headline/Headline";
import { Button } from "../ui-elements/Button/Button";
import FadeInAnimation from "../Animations/FadeInAnimation";
import styles from "./ServicesHero.module.scss";
import { SecondaryButton } from "../ui-elements/SecondaryButton";

const ServicesHero = () => {
  return (
    <section className={styles.servicesHero}>
      <div className={styles.servicesHeroBackground}>
        <div className={styles.servicesHeroOverlay}></div>
      </div>

      <div className={styles.servicesHeroContainer}>
        <div className={styles.servicesHeroContent}>
          <FadeInAnimation index={0} duration={0.8} delay={0.2} yindex={30}>
            <h1>All Your Property Services. One Platform.</h1>
          </FadeInAnimation>

          <FadeInAnimation index={1} duration={0.8} delay={0.4} yindex={30}>
            <p className={styles.servicesHeroSubheadline}>
              From compliance to property care, RentalEase connects powerful CRM
              automation with licensed tradies—giving you a complete solution in
              one place.
            </p>
          </FadeInAnimation>

          <FadeInAnimation index={2} duration={0.8} delay={0.6} yindex={30}>
            <motion.div
              className={styles.servicesHeroCta}
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <SecondaryButton href="/book-now">Book a Demo</SecondaryButton>
            </motion.div>
          </FadeInAnimation>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
