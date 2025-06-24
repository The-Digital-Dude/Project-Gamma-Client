"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./AccordionSection.module.scss";

export interface AccordionItem {
  title: React.ReactNode;
  content: React.ReactNode;
}

interface AccordionSectionProps {
  items: AccordionItem[];
}

const AccordionSection: React.FC<AccordionSectionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleToggle = (idx: number) => {
    setOpenIndex((prevIndex) => (prevIndex === idx ? null : idx));
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, idx) => {
      if (!ref) return;
      if (openIndex === idx) {
        const scrollHeight = ref.scrollHeight;
        ref.style.maxHeight = scrollHeight + "px";
        ref.style.opacity = "1";
      } else {
        ref.style.maxHeight = "0px";
        ref.style.opacity = "0";
      }
    });
  }, [openIndex]);

  return (
    <div className={styles.accordionSection}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className={styles.accordionItem}>
            <button
              className={styles.accordionSummary}
              onClick={() => handleToggle(idx)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${idx}`}
              id={`accordion-summary-${idx}`}
              type="button"
            >
              <span className={styles.summaryText}>{item.title}</span>
              <span className={styles.iconChevron} aria-hidden>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.4s",
                  }}
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="#222"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <div
              id={`accordion-content-${idx}`}
              role="region"
              aria-labelledby={`accordion-summary-${idx}`}
              className={styles.accordionContentWrapper}
              ref={(el) => {
                contentRefs.current[idx] = el;
              }}
            >
              <div className={styles.accordionContent}>{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AccordionSection;
