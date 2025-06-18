import Link from "next/link";
import styles from "./SectionContent.module.scss";

interface SectionContentProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const SectionContent = ({
  eyebrow,
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
}: SectionContentProps) => {
  return (
    <div className={styles.content}>
      <h2 className={styles.eyebrow}>{eyebrow}</h2>
      <h1 className={styles.heading}>
        {title}
        <br />
        <span className={styles.subHeading}>{subtitle}</span>
      </h1>
      <p className={styles.description}>{description}</p>
      <div className={styles.ctaWrapper}>
        <Link href={ctaLink} className={styles.button}>
          {ctaText}
        </Link>
      </div>
    </div>
  );
};

export default SectionContent;
