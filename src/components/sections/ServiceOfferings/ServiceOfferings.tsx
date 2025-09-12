"use client";
import React from "react";
import styles from "../WhatWeOffer/WhatWeOffer.module.scss";
import {
  MdAutorenew,
  MdVerifiedUser,
  MdAttachMoney,
  MdGavel,
  MdBuild,
  MdVideoCall,
} from "react-icons/md";
import PillText from "@/components/PillText/PillText";

const services = [
  {
    icon: MdAutorenew,
    iconColor: "#3b82f6",
    title: "Compliance On Autopilot",
    desc: "Our platform is a comprehensive service for your compliance needs. We’ll handle everything from coordinating with your tenants for inspection times to providing annual reminders so you never miss a due date.",
  },
  {
    icon: MdVerifiedUser,
    iconColor: "#10b981",
    title: "Vetted, Certified, and Insured",
    desc: "We work with the best, certified tradespeople to complete all our checks thoroughly and professionally. For your peace of mind, all jobs are fully insured.",
  },
  {
    icon: MdAttachMoney,
    iconColor: "#f59e0b",
    title: "Competitive Pricing",
    desc: "We offer a market-leading price, backed by a price beat guarantee. As a RentalEase user, you can also conveniently pay post-job via your secure portal.",
  },
  {
    icon: MdGavel,
    iconColor: "#6366f1",
    title: "No Lock-In Contracts",
    desc: "Access our competitively priced service without a contract. This is an individual service you can book as needed.",
  },
  {
    icon: MdBuild,
    iconColor: "#ef4444",
    title: "Seamless Repairs",
    desc: "If an alarm is found to be faulty or expired, we will provide you with a quote for replacement from a rentalease-approved tradesperson, backed by our best price guarantee.",
  },
  {
    icon: MdVideoCall,
    iconColor: "#8b5cf6",
    title: "Free Digital Call-Outs",
    desc: "All landlords using this service can use our free digital call-out feature to get a video walkthrough from a professional for any minor issue.",
  },
];

const ServiceOfferings = () => {
  return (
    <div className="py-50 icons-bg--1 accent-background--2">
      <div className="container">
        <section className={styles.whatWeOfferSection}>
          <h2 className={styles.title}>
            What the RentalEase Service Offers You
          </h2>
          <p className={styles.subtitle}>
            We simplify compliance management so you can focus on what matters
            most. No hassle, just full-service coverage at the best price.
          </p>
          <div className={styles.grid}>
            {services.map((service, i) => {
              const IconComponent = service.icon;
              return (
                <div className={styles.card} key={i}>
                  <div
                    className={styles.icon}
                    style={{ background: service.iconColor + "20" }}
                  >
                    <IconComponent size={32} color={service.iconColor} />
                  </div>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.desc}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceOfferings;
