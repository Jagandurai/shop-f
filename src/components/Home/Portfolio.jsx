"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.65, ease: "easeOut" },
  },
});

const showcaseImages = [
  "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199690/showCase1_x8bgyk.webp",
  "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199690/showCase2_rswno4.webp",
  "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199690/showCase3_sg0ylw.webp",
];

export default function Portfolio() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-white via-[#fffafc] to-[#fff6fa] px-4 py-10 sm:px-5 sm:py-12 md:px-6 md:py-14 lg:px-8">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-7 sm:gap-8 md:gap-10">
        
        {/* Top Content */}
        <motion.div
          variants={fadeUp(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-4 rounded-[24px] border border-[#f1ddea] bg-white/90 px-4 py-5 shadow-[0_14px_40px_rgba(123,31,162,0.07)] backdrop-blur-sm sm:px-5 sm:py-6 md:flex-row md:items-center md:justify-between md:px-7 md:py-7"
        >
          <div className="text-center md:text-left">
            <span className="inline-flex rounded-full bg-[#f7eafb] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#8b1c8f] sm:text-xs md:text-sm">
              Our Latest Blogs
            </span>

            <h2 className="mt-3 pt-2 text-[1.45rem] font-extrabold leading-[1.2] text-[#5e317e] sm:text-[1.7rem] md:mt-4 md:text-[2.2rem] lg:text-[2.5rem]">
              What about Beautician Courses?
            </h2>

            <p className="mt-2.5 max-w-[640px] text-[0.92rem] leading-6 text-[#5b5563] sm:text-[0.97rem] sm:leading-7 md:mt-3 md:text-base">
              Explore beauty learning inspiration, trending techniques, and
              valuable insights designed for aspiring professionals and beauty
              enthusiasts.
            </p>
          </div>

          <button
            type="button"
            className="mx-auto inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#7b1fa2] to-[#d81b60] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(216,27,96,0.18)] transition duration-300 hover:-translate-y-[1px] hover:opacity-95 hover:shadow-[0_14px_28px_rgba(216,27,96,0.22)] md:mx-0 md:px-5 md:py-3 md:text-[0.95rem]"
          >
            Explore More Courses
          </button>
        </motion.div>

        {/* Image Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {showcaseImages.map((src, i) => (
            <motion.div
              key={i}
              variants={fadeUp(0.25 + i * 0.12)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="group mx-auto max-w-[280px] overflow-hidden rounded-[18px]shadow-[0_8px_22px_rgba(123,31,162,0.06)] transition duration-300 hover:-translate-y-[2px] hover:shadow-[0_14px_28px_rgba(123,31,162,0.10)]">
                <Image
                  src={src}
                  alt={`showcase-${i + 1}`}
                  width={360}
                  height={270}
                  className="h-[130px] w-full rounded-[14px] object-contain transition duration-500 group-hover:scale-[1.03] sm:h-[145px] md:h-[160px] lg:h-[170px]"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}