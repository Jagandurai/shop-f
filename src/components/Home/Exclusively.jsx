"use client";
import Link from "next/link";

const Exclusive = () => {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/home-bg-4_thv3vl.webp')",
      }}
    >
     
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(155,128,202,0.90)_0%,rgba(255,243,549,0.88)_50%,rgba(200,247,251,0.92)_100%)]" />

      <div className="absolute left-0 top-10 h-[220px] w-[220px] rounded-full bg-[#f6d8eb]/35 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-[260px] w-[260px] rounded-full bg-[#ead7ff]/30 blur-3xl" />

      <div className="relative mx-auto flex max-w-[1220px] flex-col gap-8 px-4 pt-14 sm:px-5 sm:pt-16 md:min-h-[560px] md:flex-row md:items-stretch md:px-6 md:pt-0 lg:px-8">
        {/* Content */}
        <div className="flex w-full flex-col justify-center py-8 text-center md:w-1/2 md:py-16 md:text-left">
          <span className="inline-flex mb-2 w-fit self-center rounded-full border border-[#efd9f5] bg-white/75 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8b2398] shadow-[0_8px_24px_rgba(123,31,162,0.06)] backdrop-blur-sm sm:text-sm md:self-start">
            Exclusively for Bridal Makeup
          </span>

          <h2 className="mt-4 text-[2rem] font-extrabold leading-tight text-[#4f235d] sm:text-[2.35rem] md:text-[2.7rem] lg:text-[3rem]">
            Luxury Bridal Beauty for Your Most Special Day
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#5f5866] sm:text-[0.98rem] md:text-base md:leading-8">
            Make your wedding day unforgettable with our premium bridal makeup
            services. At Lovely Looks, we use high-quality products and follow
            the highest hygiene standards to create a flawless, radiant, and
            long-lasting bridal look.
          </p>

          <p className="mt-3 text-sm leading-7 text-[#5f5866] sm:text-[0.98rem] md:text-base md:leading-8">
            From elegant bridal styling to personalised beauty care, our expert
            team is dedicated to enhancing your natural glow with
            professionalism, luxury, and attention to every detail on your
            special day.
          </p>

          <div className="mt-7">
            <Link
              href="/service"
              className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#7b1fa2,#d81b60)] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(216,27,96,0.20)] transition duration-300 hover:-translate-y-[1px] hover:shadow-[0_18px_36px_rgba(216,27,96,0.26)] sm:text-base"
            >
              Explore Now
            </Link>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative flex w-full items-end justify-center md:w-[42%]">
          <div
            className="absolute inset-0 z-[1] bg-bottom bg-no-repeat opacity-70"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199687/exclus1ive-bg2_ujcrmn.webp')",
              backgroundSize: "contain",
            }}
          />

          <img
            src="https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199687/Exclusive_zsak4r.webp"
            alt="Luxury bridal makeup at Lovely Looks"
            className="relative z-[2] block h-auto w-[74%] max-w-[280px] self-end translate-y-[2px] drop-shadow-[0_18px_30px_rgba(0,0,0,0.14)] sm:w-[62%] sm:max-w-[320px] md:w-[88%] md:max-w-[480px] md:translate-y-[8px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Exclusive;