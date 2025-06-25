"use client";
import React from "react";
import styles from "./BrandCarousel.module.scss";
import Image from "next/image";

const brands = ["/brand-1.jpg", "/brand-2.jpg", "/brand-3.jpg", "/brand-4.jpg"];

const BrandCarousel = () => {
  const infiniteBrands = [
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
  ]; // double for seamless loop

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carouselTrack}>
        {infiniteBrands.map((logo, index) => (
          <div className={styles.logo} key={index}>
            <Image
              src={logo}
              alt={`Brand ${index + 1}`}
              width={120}
              height={60}
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandCarousel;
