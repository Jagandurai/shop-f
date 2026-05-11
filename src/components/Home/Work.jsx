"use client";

import React from "react";
import { workExp } from "@/src/utils/data";
import { motion } from "framer-motion";
import { staggerChildren, textVariant2 } from "@/src/utils/motion";

const Work = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.03 }}
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat px-4 py-14 sm:px-5 sm:py-16 md:px-6 md:py-20 lg:px-8"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199687/home-bg-2_mekdvx.webp')",
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,252,253,0.92)_0%,rgba(255,246,250,0.90)_45%,rgba(255,250,252,0.93)_100%)]" />

      <a className="block" id="work" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <span className="inline-flex rounded-full border border-[#efd9f5] bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8b2398] shadow-[0_8px_24px_rgba(123,31,162,0.06)] backdrop-blur-sm sm:text-sm">
            Our Premium Services
          </span>

          <h2 className="mt-4 text-[2rem] font-extrabold leading-tight text-[#4f235d] sm:text-[2.35rem] md:text-[2.8rem]">
            Beauty Services Crafted with Care, Luxury, and Expertise
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#625a68] sm:text-[0.98rem] md:text-base md:leading-8">
            Discover our signature beauty treatments designed to enhance your
            natural glow. From flawless makeup to advanced skincare and hair
            care, every service is tailored to deliver visible results with
            elegance and comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {workExp.map((exp, i) => (
            <motion.div
              key={i}
              variants={textVariant2}
              className="group rounded-[26px] border border-white/70 bg-white/85 p-5 shadow-[0_18px_42px_rgba(123,31,162,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-[4px] hover:border-[#efc9e6] hover:bg-[linear-gradient(180deg,#fff7fb_0%,#fff0f7_100%)] hover:shadow-[0_22px_48px_rgba(123,31,162,0.14)] active:-translate-y-[2px] active:border-[#efc9e6] active:bg-[linear-gradient(180deg,#fff7fb_0%,#fff0f7_100%)] active:shadow-[0_18px_38px_rgba(123,31,162,0.14)] sm:p-6"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="inline-flex rounded-full bg-[#fdeaf4] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#b11d72] transition-colors duration-300 group-hover:bg-[#f9d8ec] group-hover:text-[#95165f] group-active:bg-[#f9d8ec] group-active:text-[#95165f]">
                  Premium Service
                </span>

                <span className="inline-flex rounded-full bg-[#f6efff] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6c2a96] transition-colors duration-300 group-hover:bg-[#eadcff] group-hover:text-[#5f1f8d] group-active:bg-[#eadcff] group-active:text-[#5f1f8d]">
                  Lovely Looks
                </span>
              </div>

              <h3 className="text-[1.2rem] font-bold leading-snug text-[#4f235d] transition-colors duration-300 group-hover:text-[#7b1fa2] group-active:text-[#7b1fa2] sm:text-[1.35rem]">
                {exp.place}
              </h3>

              <p className="mt-2 text-sm font-medium text-[#b11d72] transition-colors duration-300 group-hover:text-[#d81b60] group-active:text-[#d81b60] sm:text-[0.98rem]">
                {exp.tenure}
              </p>

              <div className="my-4 h-px w-full bg-[linear-gradient(90deg,rgba(216,27,96,0.12),rgba(123,31,162,0.12))] transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100" />

              <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#7b1fa2] transition-colors duration-300 group-hover:text-[#5e178d] group-active:text-[#5e178d]">
                {exp.role}
              </h4>

              <p className="mt-3 text-sm leading-7 text-[#625a68] transition-colors duration-300 group-hover:text-[#4f4a55] group-active:text-[#4f4a55] sm:text-[0.97rem]">
                {exp.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Work;