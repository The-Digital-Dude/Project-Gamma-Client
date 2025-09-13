import React from "react";
import Image from "next/image";
import styles from "./BuiltForEveryone.module.scss";
import FadeInAnimation from "@/components/Animations/FadeInAnimation";

const BuiltForEveryone = () => {
  const audiences = [
    {
      title: "Agencies & Property Managers",
      description: "Scale portfolios without scaling admin.",
      image: "/property-manager.jpeg",
    },
    {
      title: "Landlords",
      description: "Compliance and property care, fully managed.",
      image: "/landlords.png",
    },
    {
      title: "Tenants",
      description: "Safe homes, seamless communication, peace of mind.",
      image: "/tenant-1.png",
    },
  ];

  return (
    <section className={styles.builtForEveryone}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.headline}>
            Built for Everyone in Property Management
          </h2>
        </div>

        <div className={styles.audiences}>
          {audiences.map((audience, index) => (
            <FadeInAnimation
              key={index}
              index={index}
              duration={0.8}
              delay={0.2}
              yindex={30}
            >
              <div className={styles.audienceCard}>
                <div className={styles.imageContainer}>
                  <Image
                    src={audience.image}
                    alt={audience.title}
                    width={400}
                    height={250}
                    className={styles.image}
                  />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.title}>{audience.title}</h3>
                  <p className={styles.description}>{audience.description}</p>
                </div>
              </div>
            </FadeInAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuiltForEveryone;
