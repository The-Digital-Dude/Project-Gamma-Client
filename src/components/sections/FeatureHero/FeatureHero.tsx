import Image from "next/image";
import styles from "./FeatureHero.module.scss";
import SectionContent from "../SectionContent/SectionContent";

const FeatureHero = () => {
  return (
    <section className={styles.featureHero}>
      <div className={styles.container}>
        <SectionContent
          eyebrow="The all-in-one solution"
          title="Enterprise SSO"
          subtitle="and a whole lot more"
          description="WorkOS is a set of building blocks for quickly adding enterprise features to your app. You'll be shipping quickly with a market-proven solution for your customers."
          ctaText="Add Single Sign-On to your app"
          ctaLink="/docs/sso/guide"
        />

        <div className={styles.imageWrapper}>
          <Image
            src="https://imagedelivery.net/LqiWLm-3MGbYHtFuUbcBtA/189d259c-f35e-4849-da0b-dc9a73374300/public"
            alt="Enterprise SSO Interface"
            className={styles.heroImage}
            priority
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureHero;
