import React from "react";
import styles from "./Heading.module.scss";

interface HeadingProps {
  title: string;
  subtitle?: string;
  size?: "sm" | "md" | "lg";
  heading?: "h1" | "h2" | "h3" | "h4";
}

const Heading = ({
  title,
  subtitle,
  size = "lg",
  heading = "h1",
}: HeadingProps) => {
  const headingClasses = [styles.heading, styles[size]].join(" ");

  return React.createElement(
    heading,
    { className: headingClasses },
    <>
      {title}
      <span className={styles.subHeading}>{subtitle}</span>
    </>
  );
};

export default Heading;
