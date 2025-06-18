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
  buttonVariant?: "default" | "outline";
  eyebrowColor?: string;
  titleColor?: string;
  subtitleColor?: string;
}

const SectionContent = ({
  eyebrow,
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  buttonVariant = "default",
  eyebrowColor = "var(--text-secondary)",
  titleColor = "var(--brand-purple)",
  subtitleColor = "var(--text-primary)",
}: SectionContentProps) => {
  return (
    <div className={styles.content}>
      <h2 className={styles.eyebrow} style={{ color: eyebrowColor }}>
        {eyebrow}
      </h2>
      <Heading
        title={title}
        subtitle={subtitle}
        titleColor={titleColor}
        subtitleColor={subtitleColor}
      />
      <p className={styles.description}>{description}</p>
      <div className={styles.ctaWrapper}>
        <Button href={ctaLink} variant={buttonVariant}>
          {ctaText}
        </Button>
      </div>
    </div>
  );
};

export default SectionContent;
