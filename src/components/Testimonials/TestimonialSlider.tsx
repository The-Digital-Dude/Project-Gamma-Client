"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  A11y,
  EffectCoverflow,
  Autoplay,
  Navigation,
} from "swiper/modules";
import styles from "./TestimonialSlider.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const testimonials = [
  {
    quote:
      "Rentalease has changed the game for us. We used to spend hours each week just scheduling compliance checks. Now it's all done for us.",
    author: "Sarah J.",
    role: "Property Manager",
    location: "Geelong",
  },
  {
    quote:
      "The integration was smooth, and our tradies love the automated job notifications. No more missed appointments!",
    author: "Dean W.",
    role: "Compliance Officer",
    location: "Victoria",
  },
  {
    quote:
      "Easy to use, clean interface, great support. Highly recommend to anyone managing rentals.",
    author: "Priya K.",
    role: "Portfolio Manager",
    location: "Victoria",
  },
  {
    quote:
      "Finally, a system that actually understands property management. The automated reminders have saved us from so many compliance headaches.",
    author: "Michael T.",
    role: "Property Director",
    location: "Melbourne",
  },
  {
    quote:
      "Our tenant satisfaction has improved significantly since we started using Rentalease. Everything is so much more organized now.",
    author: "Emma L.",
    role: "Property Manager",
    location: "Sydney",
  },
  {
    quote:
      "The reporting features are incredible. We can now track all our compliance requirements in real-time across our entire portfolio.",
    author: "James R.",
    role: "Operations Manager",
    location: "Brisbane",
  },
  {
    quote:
      "What used to take our team 3 days to organize now happens automatically. Rentalease has been a game-changer for our efficiency.",
    author: "Lisa M.",
    role: "Regional Manager",
    location: "Perth",
  },
  {
    quote:
      "The mobile app is fantastic. Our contractors can update job status on-site, which keeps everyone in the loop instantly.",
    author: "Robert K.",
    role: "Maintenance Coordinator",
    location: "Adelaide",
  },
  {
    quote:
      "Customer support is outstanding. They helped us migrate our entire system without any downtime. Highly professional team.",
    author: "Angela S.",
    role: "General Manager",
    location: "Gold Coast",
  },
  {
    quote:
      "The cost savings alone have paid for the system. But the peace of mind knowing all compliance is handled? Priceless.",
    author: "David P.",
    role: "Property Owner",
    location: "Canberra",
  },
];

const TestimonialSlider: React.FC = () => {
  return (
    <>
      <Swiper
        modules={[A11y, Autoplay, Navigation]}
        spaceBetween={-120}
        slidesPerView={1.5}
        centeredSlides
        loop
        loopAdditionalSlides={2}
        watchSlidesProgress
        speed={800}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.15,
            spaceBetween: -60,
          },
          480: {
            slidesPerView: 1.25,
            spaceBetween: -80,
          },
          640: {
            slidesPerView: 1.35,
            spaceBetween: -100,
          },
          768: {
            slidesPerView: 1.4,
            spaceBetween: -110,
          },
          1024: {
            slidesPerView: 1.5,
            spaceBetween: -120,
          },
        }}
        className={styles.swiperWrapper}
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx} className={styles.slide}>
            <div className={styles.card}>
              <div className={styles.authorTop}>{t.author}</div>
              <blockquote className={styles.quote}>{t.quote}</blockquote>
              <div className={styles.authorWrap}>
                <div className={styles.authorName}>{t.author}</div>
                <div className={styles.authorMeta}>
                  {t.role}, {t.location}
                </div>
              </div>
              <a href="#" className={styles.readMoreBtn}>
                Read more <span aria-hidden>→</span>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.navButtons}>
        <button className="swiper-button-prev">‹</button>
        <button className="swiper-button-next">›</button>
      </div>
    </>
  );
};

export default TestimonialSlider;
