"use client";

import React, { useState, useEffect } from "react";
import { projectExperience } from "@/src/utils/data";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/src/utils/motion";

const cardStyles = [
  {
    cardBg: "bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(255,244,248,0.96)_100%)]",
    titleColor: "text-[#7a1f5c]",
    reviewColor: "text-[#8a6b7d]",
    shadow: "shadow-[0_16px_38px_rgba(216,27,96,0.10)]",
    hoverShadow: "hover:shadow-[0_22px_45px_rgba(216,27,96,0.16)]",
  },
  {
    cardBg: "bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(255,249,235,0.96)_100%)]",
    titleColor: "text-[#7a5a12]",
    reviewColor: "text-[#8b7756]",
    shadow: "shadow-[0_16px_38px_rgba(234,179,8,0.10)]",
    hoverShadow: "hover:shadow-[0_22px_45px_rgba(234,179,8,0.16)]",
  },
  {
    cardBg: "bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(255,245,240,0.96)_100%)]",
    titleColor: "text-[#8a3d1f]",
    reviewColor: "text-[#8d7468]",
    shadow: "shadow-[0_16px_38px_rgba(249,115,22,0.10)]",
    hoverShadow: "hover:shadow-[0_22px_45px_rgba(249,115,22,0.16)]",
  },
];

const Experties = () => {
  const [makeupCompleted, setMakeupCompleted] = useState(0);
  const [happyClients, setHappyClients] = useState(0);

  const targetMakeups = 1100;
  const targetClients = 1500;

  useEffect(() => {
    const makeupInterval = setInterval(() => {
      setMakeupCompleted((prev) => {
        if (prev < targetMakeups) return prev + 10;
        clearInterval(makeupInterval);
        return targetMakeups;
      });
    }, 20);

    const clientInterval = setInterval(() => {
      setHappyClients((prev) => {
        if (prev < targetClients) return prev + 10;
        clearInterval(clientInterval);
        return targetClients;
      });
    }, 20);

    return () => {
      clearInterval(makeupInterval);
      clearInterval(clientInterval);
    };
  }, []);

  const experienceCards = (
    <div className="flex w-full min-w-0 flex-1 flex-col gap-4 sm:gap-5">
      {projectExperience.map((exp, i) => {
        const style = cardStyles[i % cardStyles.length];

        return (
          <motion.div
            key={i}
            variants={fadeIn("right", "tween", (i + 1) * 0.08, 0.45)}
            className={`group flex w-full min-w-0 items-center gap-3 rounded-[20px] border border-white/70 ${style.cardBg} p-4 ${style.shadow} backdrop-blur-sm transition duration-300 hover:-translate-y-[2px] ${style.hoverShadow} sm:gap-5 sm:rounded-[24px] sm:p-6`}
          >
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full shadow-inner sm:h-16 sm:w-16"
              style={{ background: exp.bg }}
            >
              <img
                src={exp.icon}
                alt={exp.name}
                className="h-[28px] w-[28px] sm:h-[38px] sm:w-[38px]"
              />
            </div>

            <div className="flex min-w-0 flex-col gap-1 text-left">
              <span
                className={`break-words text-base font-bold leading-snug sm:text-xl ${style.titleColor}`}
              >
                {exp.name}
              </span>
              <span
                className={`text-sm font-medium sm:text-base ${style.reviewColor}`}
              >
                {exp.projects} Reviews
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(180deg,#fffafc_0%,#fff6fa_50%,#ffffff_100%)]">
      <a className="block" id="experties" />

      <div className="absolute left-0 top-10 h-[220px] w-[220px] rounded-full bg-[#f7dcef]/45 blur-3xl" />
      <div className="absolute right-0 bottom-10 h-[260px] w-[260px] rounded-full bg-[#edd8ff]/35 blur-3xl" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-14 sm:px-5 md:px-6 md:py-16 lg:flex-row lg:items-start lg:justify-center lg:px-8 lg:py-20"
      >
        {/* Left Side - Desktop Only */}
        <div className="hidden lg:flex lg:w-full lg:min-w-0 lg:flex-1 lg:flex-col lg:gap-5">
          {experienceCards}
        </div>

        {/* Right Side */}
        <motion.div
          variants={textVariant(0.2)}
          className="flex w-full min-w-0 flex-1 p-1 flex-col gap-6 sm:text-left"
        >
          <div className="flex flex-col gap-3">
            <span className="inline-flex w-fit self-center rounded-full bg-[#f8eafb] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8d249d] sm:self-start sm:text-sm">
              Why Choose Lovely Looks
            </span>

            <h2 className="text-[1.65rem] font-extrabold leading-tight text-[#4e245e] sm:text-[2.2rem] md:text-[2.7rem]">
              What Makes Our Beauty Services Unique?
            </h2>
          </div>

          {/* Left Side - Mobile / Tablet Only */}
          <div className="flex lg:hidden">{experienceCards}</div>

          <p className="text-sm leading-7 text-[#5f5866] sm:text-[0.98rem] md:text-base md:leading-8">
            At Lovely Looks Beauty Salon, we combine experience, creativity,
            and personalised care to deliver beauty services that truly stand
            out. Whether you are preparing for your wedding day, a special
            celebration, or simply want to refresh your everyday look, our team
            is dedicated to helping you feel confident, radiant, and beautiful.
          </p>

          <p className="text-sm leading-7 text-[#5f5866] sm:text-[0.98rem] md:text-base md:leading-8">
            We use premium-quality products, maintain high hygiene standards,
            and focus on every detail to ensure flawless results. From bridal
            makeup and hydrafacial treatments to haircare and complete salon
            services, every experience is thoughtfully designed to enhance your
            natural beauty with professionalism, comfort, and care.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-2 sm:gap-5">
            <div className="rounded-[18px] border border-white/70 px-3 py-4 text-center backdrop-blur-sm sm:rounded-[22px] sm:px-5 sm:py-5 sm:text-left">
              <span className="block text-[2rem] font-extrabold text-[#7b1fa2] sm:text-[1.8rem] md:text-[2.3rem]">
                {makeupCompleted}+
              </span>
              <span className="mt-1 block text-[12px] font-medium leading-5 text-[#665f6d] sm:text-sm md:text-base">
                Makeup Services Completed
              </span>
            </div>

            <div className="rounded-[18px] border border-white/70 px-3 py-4 text-center backdrop-blur-sm sm:rounded-[22px] sm:px-5 sm:py-5 sm:text-left">
              <span className="block text-[2rem] font-extrabold text-[#7b1fa2] sm:text-[1.8rem] md:text-[2.3rem]">
                {happyClients}+
              </span>
              <span className="mt-1 block text-[12px] font-medium leading-5 text-[#665f6d] sm:text-sm md:text-base">
                Happy Clients
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experties;