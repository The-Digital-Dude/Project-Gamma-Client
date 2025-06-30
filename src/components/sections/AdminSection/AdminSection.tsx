import React from "react";
import styles from "./AdminSection.module.scss";
import PillText from "@/components/PillText/PillText";
import { Button } from "@/components/ui-elements/Button/Button";
import { FaPlay } from "react-icons/fa";

const AdminSection = () => {
  return (
    <section className={styles.adminSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <PillText text="Easy Setup" />
          <h2 className={styles.title}>The Property Manager's Assistant</h2>
          <p className={styles.description}>
            Free your team from the hassle of managing compliance checks for
            rental properties. The{" "}
            <a href="/crm" className={styles.inlineLink}>
              Admin Portal
            </a>{" "}
            is a user-friendly interface for property managers to streamline
            their compliance workflow.
          </p>
          <div className={styles.ctaGroup}>
            <Button href="/book-now">Try a live demo</Button>
            <a href="https://youtu.be/demo" className={styles.textLink}>
              <span className={styles.playIcon}>
                <FaPlay size={12} />
              </span>
              Watch the demo video
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminSection;
