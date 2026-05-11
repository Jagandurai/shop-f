"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.scss";

const fadeIn = (delay = 0.08, duration = 0.75) => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

const smoothRise = (delay = 0.15, duration = 1) => ({
  initial: { opacity: 0, y: 16, scale: 0.985 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay,
      duration,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

const Hero = () => {
  return (
    <div className={styles.container}>
      <img
        src="https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/homeheroflower_l0owlr.webp"
        alt=""
        className={`${styles.flower} ${styles.topLeft}`}
      />
      <img
        src="https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/homeheroflower_l0owlr.webp"
        alt=""
        className={`${styles.flower} ${styles.topRight}`}
      />
      <img
        src="https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/homeheroflower_l0owlr.webp"
        alt=""
        className={`${styles.flower} ${styles.bottomLeft}`}
      />
      <img
        src="https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/homeheroflower_l0owlr.webp"
        alt=""
        className={`${styles.flower} ${styles.bottomRight}`}
      />

      <motion.div
        className={styles.person}
        initial="initial"
        animate="animate"
        variants={fadeIn(0.02, 0.35)}
      >
        <motion.img
          initial="initial"
          animate="animate"
          variants={smoothRise(0.06, 0.7)}
          src="https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199689/person_isbwyu.webp"
          alt="Person"
        />
      </motion.div>
    </div>
  );
};

export default Hero;