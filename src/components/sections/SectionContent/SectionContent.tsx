import styles from "./SectionContent.module.scss";
import { Button } from "@/components/ui-elements/Button/Button";
import Heading from "@/components/ui-elements/Heading/Heading";

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
      <Heading title={title} subtitle={subtitle} />
      <p className={styles.description}>{description}</p>
      <div className={styles.ctaWrapper}>
        <Button href={ctaLink}>{ctaText}</Button>
      </div>
    </div>
  );
};

export default SectionContent;
