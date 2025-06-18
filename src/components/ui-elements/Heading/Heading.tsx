import styles from "./Heading.module.scss";

type HeadingSize = "lg" | "md" | "sm";

interface HeadingProps {
  title: string;
  subtitle: string;
  size?: HeadingSize;
  className?: string;
}

const Heading = ({ title, subtitle, size = "lg", className }: HeadingProps) => {
  return (
    <h1 className={`${styles.heading} ${styles[size]} ${className}`}>
      {title}
      <br />
      <span className={styles.subHeading}>{subtitle}</span>
    </h1>
  );
};

export default Heading;
