"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ExpandingGallery.module.scss";

const cards = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199685/hairstyle1_k2mz5o.webp",
    title: "Ponytail",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199686/hairstyle2_q8qr8y.webp",
    title: "Waterfall",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199686/hairstyle3_iaebm5.webp",
    title: "Curls",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199686/hairstyle4_bcorjl.webp",
    title: "Rubber Band",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199687/hairstyle5_uuitxi.webp",
    title: "Messi",
  },
];

const ExpandingGallery = () => {
  const [activeIndex, setActiveIndex] = useState<number>(
    Math.floor(cards.length / 2)
  );

  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth <= 768) return;

    const container = containerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const mouseX = e.clientX - containerRect.left;
    const percentage = mouseX / containerRect.width;

    let index = Math.floor(percentage * cards.length);

    if (index < 0) index = 0;
    if (index >= cards.length) index = cards.length - 1;

    setActiveIndex(index);
  };

  useEffect(() => {
    const container = containerRef.current;
    const activeCard = cardsRef.current[activeIndex];

    if (container && activeCard && window.innerWidth <= 768) {
      const cardWidth = activeCard.offsetWidth;
      const cardLeft = activeCard.offsetLeft;
      const containerWidth = container.offsetWidth;

      const scrollPosition = cardLeft - containerWidth / 2 + cardWidth / 2;

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <section className={styles.gallerySection}>
      <div className={styles.inner}>
        <div className={styles.headingWrap}>
          <span className={styles.tag}>Hair Style Inspiration</span>
          <h2 className={styles.heading}>Trending Hair Style Looks</h2>
          <p className={styles.subtext}>
            Explore elegant and stylish hair inspirations crafted to enhance
            your beauty for weddings, parties, and special occasions.
          </p>
        </div>

        <div
          className={styles.expandingCardsContainer}
          ref={containerRef}
          onMouseMove={handleMouseMove}
        >
          <div className={styles.cardsWrapper}>
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`${styles.card} ${
                  activeIndex === index ? styles.active : ""
                }`}
                style={{ backgroundImage: `url(${card.image})` }}
                ref={(el: HTMLDivElement | null) => {
                  cardsRef.current[index] = el;
                }}
                onClick={() => setActiveIndex(index)}
              >
                <div className={styles.overlay} />
                <h3>{card.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpandingGallery;