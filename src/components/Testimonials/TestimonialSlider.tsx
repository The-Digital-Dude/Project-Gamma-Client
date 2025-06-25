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
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
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
