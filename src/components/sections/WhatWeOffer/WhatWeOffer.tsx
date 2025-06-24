"use client";
import React from "react";
import styles from "./WhatWeOffer.module.scss";
import {
  MdApi,
  MdEventAvailable,
  MdConstruction,
  MdDescription,
  MdReceiptLong,
  MdLock,
} from "react-icons/md";
import PillText from "@/components/PillText/PillText";

const services = [
  {
    icon: MdApi,
    iconColor: "#3b82f6",
    title: "CRM + API Integration",
    desc: "We securely connect your CRM (like PropertyMe, Console Cloud, etc.) to Rentalease via API. This allows real-time syncing of property details, tenant information, key dates, and job history — no more double entry or spreadsheet headaches.",
  },
  {
    icon: MdEventAvailable,
    iconColor: "#10b981",
    title: "Automated Tenant Scheduling",
    desc: "Our system identifies when a compliance check is due, sends SMS/email notifications to tenants, offers booking slots, and follows up with reminders — pushing confirmed jobs to your service provider automatically.",
  },
  {
    icon: MdConstruction,
    iconColor: "#f59e0b",
    title: "Tradie Job Allocation & Management",
    desc: "Invite your own tradies or use ours. They get job details, calendar invites, live updates if rescheduled, and can upload reports via mobile after completion.",
  },
  {
    icon: MdDescription,
    iconColor: "#6366f1",
    title: "Compliance Report Collection",
    desc: "Tradies upload compliance reports directly to the platform post-inspection. Reports are stored securely, shared with tenants, and accessible anytime by property managers.",
  },
  {
    icon: MdReceiptLong,
    iconColor: "#ef4444",
    title: "Auto-Invoicing",
    desc: "As soon as a job is marked complete, Rentalease auto-generates the invoice, sends it to the property manager, and syncs the status with your billing system — ensuring on-time payments.",
  },
  {
    icon: MdLock,
    iconColor: "#8b5cf6",
    title: "Secure Document Storage & Audit Trail",
    desc: "Every interaction is logged and timestamped. Export compliance history, retrieve records instantly, and stay legally protected with a full audit trail.",
  },
];

const WhatWeOffer = () => {
  return (
    <section className={styles.whatWeOfferSection}>
      <PillText text="Our Services" />
      <h2 className={styles.title}>What we offer</h2>
      <p className={styles.subtitle}>
        Rentalease automates, manages, and tracks all your compliance
        requirements from one dashboard — saving you hours of manual work,
        reducing risk, and keeping you fully compliant.
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
  );
};

export default WhatWeOffer;
