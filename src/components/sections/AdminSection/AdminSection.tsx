import React from "react";
import styles from "./AdminSection.module.scss";
import PillText from "@/components/PillText/PillText";
import { Button } from "@/components/ui-elements/Button/Button";
import { FaPlay } from "react-icons/fa";

const AdminSection = () => {
  return (
    <section className={styles.adminSection}>
      <div className={styles.container}>
        <div className={styles.gridLayout}>
          <div className={styles.content}>
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
            </div>
          </div>
          {/* <div className={styles.videoContainer}> */}
          {/* <div className={styles.videoWrapper}> */}
          {/* <iframe
                width="1097"
                height="617"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?list=RDdQw4w9WgXcQ"
                title="Rick Astley - Never Gonna Give You Up (Official Video) (4K Remaster)"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe> */}
          <div className={styles.videoContainer}>
            <div className={styles.videoWrapper}>
              <img src="/crm-ss.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminSection;
