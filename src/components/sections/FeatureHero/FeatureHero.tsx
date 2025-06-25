import Image from "next/image";
import styles from "./FeatureHero.module.scss";
import SectionContent from "../SectionContent/SectionContent";
import { CSSProperties } from "react";

interface FeatureHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
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
  heading?: "h1" | "h2" | "h3" | "h4";
  style?: CSSProperties;
  iconBG?: boolean;
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
  contentPosition = "right",
  buttonVariant = "default",
  heading,
  style,
  iconBG,
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
      heading={heading}
    />
  );

  const ImageComponent = (
    <div
      className={styles.imageWrapper}
      style={contentPosition === "left" ? { order: 13 } : undefined}
    >
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
      <div
        className={`${containerClasses} ${iconBG ? "icons-bg--1" : undefined}`}
        style={style}
      >
        {contentPosition === "left" ? (
          <>
            {ImageComponent}
            {Content}
          </>
        ) : (
          <>
            {ImageComponent}
            {Content}
          </>
        )}
      </div>
    </section>
  );
};

export default FeatureHero;
