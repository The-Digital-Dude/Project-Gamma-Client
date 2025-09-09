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
                Rentalease isn’t just a service—it’s an advanced technology
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

          {/* Mockup */}
          <FadeInAnimation index={0} duration={0.8} delay={0.25} yindex={30}>
            <div className={styles.mockup}>
              <div className={styles.mockupHeader}>
                <div className={styles.traffic}>
                  <span className={`${styles.dot} ${styles.red}`} />
                  <span className={`${styles.dot} ${styles.amber}`} />
                  <span className={`${styles.dot} ${styles.green}`} />
                </div>
                <span className={styles.headerNote}>Dashboard</span>
              </div>

              <div className={styles.mockupBody}>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                  className={styles.graphCard}
                >
                  <div className={styles.graphTitle}>Compliance Graphs</div>
                  <div className={styles.bars}>
                    {[60, 95, 80, 45, 72].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: h }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.05 * i }}
                        style={{
                          width: 14,
                          borderRadius: 6,
                          background: i % 2 ? "#60a5fa" : "#38bdf8",
                        }}
                      />
                    ))}
                  </div>
                </motion.div>

                <div className={styles.stack}>
                  <motion.div
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                    className={styles.tile}
                  >
                    <span className={styles.tileTitle}>Job Scheduled</span>
                    <span className={styles.tileMeta}>12:30 PM</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
                    className={styles.tile}
                  >
                    <span className={styles.tileTitle}>Completed</span>
                    <span className={styles.tileOk}>✓</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
                    className={styles.tile}
                  >
                    <span className={styles.tileTitle}>Report Ready</span>
                    <span className={styles.tileMeta}>PDF</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </FadeInAnimation>
        </div>
      </div>
    </section>
  );
};

export default TechnologyHero;
