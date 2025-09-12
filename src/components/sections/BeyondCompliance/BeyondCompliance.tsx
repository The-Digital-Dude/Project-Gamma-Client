import React from "react";
import styles from "./BeyondCompliance.module.scss";
import FadeInAnimation from "@/components/Animations/FadeInAnimation";
import {
  FaBroom,
  FaTint,
  FaFire,
  FaBolt,
  FaTree,
  FaBug,
  FaSprayCan,
  FaTruck,
  FaTools,
  FaPaintBrush,
  FaCog,
} from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui-elements/Button/Button";

const BeyondCompliance = () => {
  const services = [
    {
      icon: FaBroom,
      title: "Vacant Property Cleaning",
    },
    {
      icon: FaTint,
      title: "Water Connection",
    },
    {
      icon: FaFire,
      title: "Gas Connection",
    },
    {
      icon: FaBolt,
      title: "Electricity Connection",
    },
    {
      icon: FaTree,
      title: "Landscaping & Outdoor Maintenance",
    },
    {
      icon: FaBug,
      title: "Pest Control",
    },
    {
      icon: FaSprayCan,
      title: "Grout Cleaning",
    },
    {
      icon: FaTruck,
      title: "Removalists",
    },
    {
      icon: FaTools,
      title: "Handyman Services",
    },
    {
      icon: FaPaintBrush,
      title: "Painters",
    },
  ];

  return (
    <section className={styles.beyondCompliance}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.headline}>Beyond Compliance</h2>
          <p className={styles.body}>
            Through the RentalEase CRM, you can also access:
          </p>
        </div>

        <div className={styles.services}>
          {services.map((service, index) => (
            // <FadeInAnimation
            //   key={index}
            //   index={index}
            //   duration={0.8}
            //   delay={0.2}
            //   yindex={40}
            // >
            <Link href="/contact" key={index}>
              <div className={styles.serviceCard}>
                <div className={styles.iconWrapper}>
                  <service.icon className={styles.serviceIcon} />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                </div>
              </div>
            </Link>
            // </FadeInAnimation>
          ))}
        </div>
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <Button href="/contact" fullWidth={false}>
            Let's Talk
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BeyondCompliance;
