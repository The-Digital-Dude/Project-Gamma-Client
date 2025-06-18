import styles from "./Heading.module.scss";

interface HeadingProps {
  title: string;
  subtitle: string;
  size?: "sm" | "md" | "lg";
  titleColor?: string;
  subtitleColor?: string;
}

const Heading = ({
  title,
  subtitle,
  size = "lg",
  titleColor = "var(--brand-purple)",
  subtitleColor = "var(--text-primary)",
}: HeadingProps) => {
  const headingClasses = [styles.heading, styles[size]].join(" ");

  return (
    <h1 className={headingClasses} style={{ color: titleColor }}>
      {title}
      <span className={styles.subHeading} style={{ color: subtitleColor }}>
        {subtitle}
      </span>
    </h1>
  );
};

export default Heading;
