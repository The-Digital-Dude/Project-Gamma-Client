import styles from "./SectionContent.module.scss";
import { Button } from "@/components/ui-elements/Button/Button";
import Heading from "@/components/ui-elements/Heading/Heading";

interface SectionContentProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  heading?: "h1" | "h2" | "h3" | "h4";
  buttonVariant?: "default" | "outline";
}

const SectionContent = ({
  eyebrow,
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  buttonVariant = "default",
  heading,
}: SectionContentProps) => {
  return (
    <div className={styles.content}>
      <p className={styles.eyebrow} style={{}}>
        {eyebrow}
      </p>
      <Heading title={title} subtitle={subtitle} heading={heading} />
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
