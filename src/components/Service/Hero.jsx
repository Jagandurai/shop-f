"use client";

import { useState } from "react";
import { useBookingContext } from "@/src/components/Booking/BookingContext";

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const { openForm } = useBookingContext();

  return (
    <section className="relative flex h-[72vh] items-center justify-center overflow-hidden text-center text-white md:h-[84vh]">
      <div className="absolute inset-0 z-[1]">
        <video
          className={`h-full w-full object-cover object-center transition-opacity duration-300 ease-out xl:object-[50%_20%] ${
            videoLoaded ? "opacity-100" : "opacity-100"
          }`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onCanPlay={() => setVideoLoaded(true)}
        >
          <source
            src="https://res.cloudinary.com/dtiaycw2o/video/upload/v1756199958/servicevideo_tmmdcb.webm"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,8,24,0.12)_0%,rgba(34,12,34,0.10)_45%,rgba(20,8,24,0.18)_100%)]" />
      </div>

      <div className="relative z-[2] mx-auto flex max-w-[760px] flex-col items-center px-4 py-5 sm:px-6">
        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/95 backdrop-blur-sm sm:text-sm">
          Lovely Looks Services
        </span>

        <h1 className="mt-4 text-[1.9rem] font-extrabold leading-tight text-white drop-shadow-[0_8px_22px_rgba(0,0,0,0.22)] sm:text-[2.4rem] md:text-[3.1rem]">
          Our Premium Beauty Services
        </h1>

        <p className="mt-3 max-w-[620px] text-sm leading-7 text-white/90 sm:text-base md:text-[1rem] md:leading-8">
          Explore expert makeup, skin, hair, and salon care tailored for every
          occasion.
        </p>

        <button
          type="button"
          onClick={openForm}
          className="mt-7 inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#7b1fa2,#d81b60)] px-7 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(216,27,96,0.24)] transition duration-300 hover:-translate-y-[1px] hover:shadow-[0_18px_36px_rgba(216,27,96,0.30)] sm:text-base"
        >
          Book Appointment
        </button>
      </div>
    </section>
  );
}