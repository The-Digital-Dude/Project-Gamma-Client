import React from "react";
import styles from "./BeyondCompliance.module.scss";
import FadeInAnimation from "@/components/Animations/FadeInAnimation";

const BeyondCompliance = () => {
  const services = [
    {
      image: "/img-1.webp",
      title: "Vacant Property Cleaning",
    },
    {
      image: "/img-2.jpg",
      title: "Water, Gas & Electricity Connections",
    },
    {
      image: "/img-3.jpg",
      title: "Landscaping & Outdoor Maintenance",
    },
    {
      image: "/img-4.jpg",
      title: "Other Essential Property Services",
    },
  ];

  return (
    <section className={styles.beyondCompliance}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.headline}>Beyond Compliance</h2>
          <p className={styles.body}>
            Through the Rentalease CRM, you can also access:
          </p>
        </div>

        <div className={styles.services}>
          {services.map((service, index) => (
            <FadeInAnimation
              key={index}
              index={index}
              duration={0.8}
              delay={0.2}
              yindex={40}
            >
              <div className={styles.serviceCard}>
                <div className={styles.content}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                </div>
                <div className={styles.imageWrapper}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className={styles.serviceImage}
                  />
                  <div className={styles.imageOverlay}></div>
                </div>
              </div>
            </FadeInAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeyondCompliance;
