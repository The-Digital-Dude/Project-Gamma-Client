import Image from "next/image";
import styles from "./FeatureHero.module.scss";
import SectionContent from "../SectionContent/SectionContent";

interface FeatureHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  imageAlt: string;
  contentPosition?: "left" | "right";
  buttonVariant?: "default" | "outline";
  eyebrowColor?: string;
  titleColor?: string;
  subtitleColor?: string;
}

const FeatureHero = ({
  eyebrow,
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  imageSrc,
  imageAlt,
  contentPosition = "left",
  buttonVariant = "default",
  eyebrowColor = "var(--text-secondary)",
  titleColor = "var(--brand-purple)",
  subtitleColor = "var(--text-primary)",
}: FeatureHeroProps) => {
  const containerClasses = [
    styles.container,
    contentPosition === "right" && styles.contentRight,
  ]
    .filter(Boolean)
    .join(" ");

  const Content = (
    <SectionContent
      eyebrow={eyebrow}
      title={title}
      subtitle={subtitle}
      description={description}
      ctaText={ctaText}
      ctaLink={ctaLink}
      buttonVariant={buttonVariant}
      eyebrowColor={eyebrowColor}
      titleColor={titleColor}
      subtitleColor={subtitleColor}
    />
  );

  const ImageComponent = (
    <div className={styles.imageWrapper}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        className={styles.heroImage}
        priority
        width={1000}
        height={1000}
      />
    </div>
  );

  return (
    <section className={styles.featureHero}>
      <div className={containerClasses}>
        {contentPosition === "left" ? (
          <>
            {Content}
            {ImageComponent}
          </>
        ) : (
          <>
            {Content}
            {ImageComponent}
          </>
        )}
      </div>
    </section>
  );
};

export default FeatureHero;
