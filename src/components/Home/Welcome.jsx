"use client";

import Link from "next/link";

const Welcome = () => {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffefe_0%,#fff9fc_38%,#fff4f9_100%)] px-4 py-14 sm:px-5 sm:py-16 md:px-6 md:py-20 lg:px-8">
      <div className="absolute left-1/2 top-0 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[#f4d5f5]/40 blur-3xl sm:h-[420px] sm:w-[420px]" />
      <div className="absolute -left-16 top-20 h-[180px] w-[180px] rounded-full bg-[#f9d7e8]/40 blur-3xl" />
      <div className="absolute -right-16 bottom-10 h-[220px] w-[220px] rounded-full bg-[#e9d5ff]/35 blur-3xl" />

      <div className="relative mx-auto max-w-[1180px]">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex mb-3 rounded-full border border-[#eed8f4] bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a1ca1] shadow-[0_8px_24px_rgba(123,31,162,0.08)] backdrop-blur-sm sm:text-sm">
            Welcome to Lovely Looks
          </span>

          <h2 className="mt-5 text-[2rem] pb-2 font-extrabold leading-[1.15] text-[#1e1423] sm:text-[2.5rem] md:text-[3.1rem] lg:text-[3.9rem]">
            Where Beauty{" "}
            <span className="bg-[linear-gradient(90deg,#7b1fa2,#d81b60,#ff8a00)] bg-clip-text text-transparent">
              Meets Indulgence
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-[0.96rem] leading-7 text-[#5d5664] sm:text-[1rem] md:text-[1.05rem] md:leading-8">
            Step into a refined beauty experience crafted around you. From
            bridal makeup, party makeup, hair styling, skin treatments,
            hydrafacial, nail care, and complete salon services, we bring
            elegance, confidence, and expert attention to every visit.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-[0.93rem] leading-7 text-[#6a6270] sm:text-[0.98rem] md:text-base md:leading-8">
            At Lovely Looks, every service is thoughtfully designed to enhance
            your natural beauty with premium care, personalised attention, and
            a touch of luxury for every special moment and everyday glow.
          </p>

          <div className="mt-8 flex flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/service"
              className="inline-flex w-full max-w-[170px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#7b1fa2,#d81b60)] px-4 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(216,27,96,0.22)] transition duration-300 hover:-translate-y-[1px] hover:shadow-[0_18px_36px_rgba(216,27,96,0.28)] sm:min-w-[180px] sm:px-6 sm:text-base"
            >
              Explore Services
            </Link>

            <Link
              href="/gallery"
              className="inline-flex w-full max-w-[170px] items-center justify-center rounded-full border border-[#ead3f1] bg-white/90 px-4 py-3 text-sm font-semibold text-[#6d227f] shadow-[0_10px_24px_rgba(123,31,162,0.08)] transition duration-300 hover:-translate-y-[1px] hover:border-[#dcb5ea] hover:bg-white sm:min-w-[180px] sm:px-6 sm:text-base"
            >
              Explore Gallery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;