import React from "react";
import styles from "./Benefits.module.scss";
import Heading from "@/components/ui-elements/Heading/Heading";
import Image from "next/image";

const Benefits = () => {
  const benefits = [
    {
      image: "/save-time.png",
      title: "Saves Hours of Admin Time",
      description:
        "Our automated workflows save property managers hours of admin time, allowing them to focus on what really matters: their tenants and properties.",
    },
    {
      image: "/schedule.png",
      title: "Automated Compliance Scheduling",
      description:
        "Our automated compliance scheduling ensures that all checks are completed on time, reducing the risk of late payments and penalties.",
    },
    {
      image: "/api-integration.png",
      title: "API Integration with Leading CRMs",
      description:
        "Our API integration with leading CRMs allows you to seamlessly sync your data and automate your workflows, saving you time and effort.",
    },
    {
      image: "/invoice.png",
      title: "Instant Report & Invoice Generation",
      description:
        "Our instant report and invoice generation feature allows you to generate reports and invoices in seconds, saving you time and effort.",
    },
    {
      image: "/secure.png",
      title: "Secure, Cloud-Based Platform",
      description:
        "Our secure, cloud-based platform ensures that your data is always safe and accessible, no matter where you are.",
    },
    {
      image: "/support.png",
      title: "Local Aussie Support",
      description:
        "Our local Aussie support team is always here to help you with any questions or issues you may have, ensuring you have the best experience possible.",
    },
  ];

  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Heading
            title="Why Property Managers Choose Us"
            heading="h2"
            size="sm"
          />
        </div>
        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  width={300}
                  height={200}
                  className={styles.benefitImage}
                />
                <h3 className={styles.cardTitle}>{benefit.title}</h3>
              </div>
              <div className={styles.content}>
                <p className={styles.cardDescription}>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
