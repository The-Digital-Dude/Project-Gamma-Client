"use client";

import React from "react";
import Headline from "@/components/Headline/Headline";
import FadeInAnimation from "@/components/Animations/FadeInAnimation";
import { Button } from "@/components/ui-elements/Button/Button";
import { motion } from "framer-motion";
import styles from "./TechnologyHero.module.scss";

const TechnologyHero = () => {
  return (
    <section className={`icons-bg--1 ${styles.section} common-section`}>
      <div className={styles.bgDecor} />

      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          {/* Copy */}
          <div className={styles.copy}>
            <FadeInAnimation index={0} duration={0.7} delay={0.15} yindex={24}>
              <Headline
                heading="h1"
                mainText="Technology That Powers"
                boldText="Compliance & Property Services"
                highlightText=""
              />
            </FadeInAnimation>
            <FadeInAnimation index={1} duration={0.7} delay={0.25} yindex={20}>
              <p className={styles.subheadline}>
                RentalEase isn’t just a service—it’s an advanced technology
                platform with CRM, automation, and reporting built in.
              </p>
            </FadeInAnimation>
            <FadeInAnimation index={2} duration={0.7} delay={0.35} yindex={16}>
              <div className={styles.cta}>
                <motion.div
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Button href="/book-now" size="large">
                    Book a Demo
                  </Button>
                </motion.div>
              </div>
            </FadeInAnimation>
          </div>

          {/* CRM Screenshot */}
          <FadeInAnimation index={0} duration={0.8} delay={0.25} yindex={30}>
            <div className={styles.crmImage}>
              <motion.img
                src="/crm-ss.png"
                alt="RentalEase CRM Dashboard"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className={styles.crmScreenshot}
              />
            </div>
          </FadeInAnimation>
        </div>
      </div>
    </section>
  );
};

export default TechnologyHero;
