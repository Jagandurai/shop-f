"use client";

import { comments } from "@/src/utils/data";
import { motion } from "framer-motion";
import { footerVariants, staggerChildren } from "@/src/utils/motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Feedback.module.scss";

const People = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.01 }}
      className={styles.section}
    >
      <a className="block" id="people" />

      <motion.div variants={footerVariants} className={styles.container}>
        <div className={styles.heading}>
          <span>What Our Clients Say</span>

          <p>
            Our clients love Lovely Looks Beauty Salon for our dedication,
            professionalism, and beautiful results across bridal makeup, skin
            treatments, hair styling, and personalised beauty services.
          </p>

          <p>
            Every visit is designed to leave you feeling confident, radiant,
            and truly cared for with a premium beauty experience.
          </p>
        </div>

        <div className={styles.sliderWrap}>
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            speed={1200}
            centeredSlides={false}
            watchSlidesProgress={true}
            autoplay={{
              delay: 4200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: false,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
                centeredSlides: true,
              },
            }}
            className={styles.peopleSwiper}
          >
            {comments.map((comment, i) => (
              <SwiperSlide key={i} className={styles.swiperSlide}>
                <div className={styles.card}>
                  <img
                    src={comment.img}
                    alt={comment.name}
                    className={styles.avatar}
                  />

                  <p className={styles.commentText}>{comment.comment}</p>

                  <div className={styles.divider} />

                  <div className={styles.bio}>
                    <span className={styles.name}>{comment.name}</span>
                    <span className={styles.post}>{comment.post}</span>

                    <div className={styles.stars}>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <span key={index} className={styles.star}>
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default People;