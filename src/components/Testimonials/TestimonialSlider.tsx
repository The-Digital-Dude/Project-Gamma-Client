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
    author: "Jack Thompson",
    quote:
      "I’ve tried a few compliance services before, but nothing matches the simplicity and reliability of Rentalease. From gas checks to electrical inspections, everything was handled professionally. I got all my certificates online without chasing anyone.",
    role: "landlord",
  },
  {
    author: "Sophie Williams",
    quote:
      "Their platform made it super easy to stay compliant across multiple properties. I could track every service, view reports, and even arrange repairs when something failed inspection. It’s a complete game-changer for landlords like me.",
    role: "landlord",
  },
  {
    author: "Liam Anderson",
    quote:
      "I manage properties remotely and Rentalease has made it so much easier to stay on top of compliance. Everything is online—certificates, reports. Zero stress and great service",
    role: "landlord",
  },
  {
    author: "Emily Nguyen",
    quote:
      "They offer great value and peace of mind. I used to worry about gas checks and smoke alarm deadlines, but now it's all handled automatically. Highly recommended for anyone managing rentals",
    role: "landlord",
  },
  {
    author: "Daniel Smith",
    quote:
      "The portal is so user-friendly. I log in and see the status of every job across my three rental properties. I’ve also had nothing but positive feedback from my tenants about the tradespeople",
    role: "landlord",
  },
  {
    author: "Olivia Brown",
    quote:
      "Appreciate their transparency and attention to detail. If something fails an inspection, they don’t just tell you—they help you fix it quickly. That’s real service",
    role: "landlord",
  },
  {
    author: "Matthew Taylor",
    quote:
      "The pricing is fair, the communication is excellent, and the turnaround is fast. I’ve already referred two of my friends to use Rentalease",
    role: "landlord",
  },
  {
    author: "Chloe Harris",
    quote:
      "Very professional service. They arrived on time, wore uniforms, and explained what they were checking. I’ve never had a compliance visit go this smoothly before.",
    role: "tenant",
  },
  {
    author: "Ryan Martin",
    quote:
      "Super easy process. Got a text reminder the day before and they were done in under 30 minutes. The technician was polite and explained the smoke alarm testing clearly",
    role: "tenant",
  },
  {
    author: "Jessica White",
    quote:
      "It’s good to see my landlord actually keeping up with safety checks. The gas guy even spotted a leak that we didn’t know about and arranged a fix right away",
    role: "tenant",
  },
  {
    author: "Benjamin Lee",
    quote:
      "They were friendly, fast, and left no mess. Definitely better than other tradies we’ve dealt with.",
    role: "tenant",
  },
  {
    author: "Grace Hall",
    quote:
      "I appreciated the heads-up and the clear communication. It was all done quickly and gave me confidence the place is safe",
    role: "tenant",
  },
  {
    author: "Harry King",
    quote:
      "We had our smoke alarms and gas checked. Everything was explained clearly, and I got a digital certificate by email. It’s nice to know they take safety seriously",
    role: "tenant",
  },
];

const TestimonialSlider: React.FC = () => {
  return (
    <>
      <Swiper
        modules={[A11y, Autoplay, Navigation]}
        spaceBetween={15}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        loopAdditionalSlides={2}
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
            slidesPerView: 1,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className={styles.swiperWrapper}
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx} className={styles.slide}>
            <div className={styles.card}>
              <blockquote className={styles.quote}>{t.quote}</blockquote>
              <div className={styles.authorWrap}>
                <div className={styles.authorName}>- {t.author}</div>
                <div className={styles.authorRole}>{t.role}</div>
              </div>
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
