import styles from "./Heading.module.scss";

interface HeadingProps {
  title: string;
  subtitle: string;
  size?: "sm" | "md" | "lg";
}

const Heading = ({ title, subtitle, size = "lg" }: HeadingProps) => {
  const headingClasses = [styles.heading, styles[size]].join(" ");

  return (
    <h1 className={headingClasses}>
      {title}
      <span className={styles.subHeading}>{subtitle}</span>
    </h1>
  );
};

export default Heading;
