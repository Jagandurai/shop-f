"use client";

import { useBookingContext } from "@/src/components/Booking/BookingContext";

export default function TrailService() {
  const { openForm } = useBookingContext();

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffefe_0%,#fff7fb_45%,#fff3f8_100%)] px-4 py-12 sm:px-5 sm:py-14 md:px-6 md:py-16 lg:px-8">
      <div className="absolute left-0 top-10 h-[220px] w-[220px] rounded-full bg-[#f8d8ea]/35 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-[260px] w-[260px] rounded-full bg-[#efd7ff]/30 blur-3xl" />

      <div
        className="relative mx-auto flex max-w-[1180px] flex-col-reverse items-center gap-8 overflow-hidden rounded-[30px]
        border border-white/70 bg-[linear-gradient(135deg,rgba(255,234,242,0.95),rgba(255,214,227,0.92),rgba(255,235,245,0.95))]
        px-5 py-6 shadow-[0_20px_48px_rgba(123,31,162,0.10)] backdrop-blur-sm sm:px-6 sm:py-7 md:flex-row md:gap-10 md:px-8 md:py-10 lg:px-10"
      >
        <div className="w-full text-center md:w-[55%] md:text-left">
          <span className="mb-3 inline-flex rounded-full border border-white/70 bg-white/75 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8b2398] shadow-[0_8px_24px_rgba(123,31,162,0.06)]">
            Exclusive Offer
          </span>

          <h2 className="mb-3 text-[2rem] font-extrabold leading-tight text-[#4f235d] sm:text-[2.25rem] md:text-[2.6rem] lg:text-[2.95rem]">
            Free Trial Makeup Sessions
          </h2>

          <p className="mb-5 text-sm leading-7 text-[#5f5866] sm:text-[0.98rem] md:text-base md:leading-8">
            We offer complimentary trial makeup sessions to help you discover
            the perfect look for your special day. Work with our experienced
            artists and enjoy a personalised beauty experience that enhances
            your natural glow with elegance, confidence, and expert care.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
            <button
              type="button"
              onClick={openForm}
              className="inline-flex mt-2 items-center justify-center rounded-full bg-[linear-gradient(90deg,#7b1fa2,#d81b60)] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(216,27,96,0.20)] transition duration-300 hover:-translate-y-[1px] hover:shadow-[0_18px_36px_rgba(216,27,96,0.26)] sm:text-base"
            >
              Book Now
            </button>

            <span className="text-sm font-medium text-[#7a4960]">
              *Limited-time complimentary bridal trial
            </span>
          </div>
        </div>

        <div className="flex w-full justify-center md:w-[45%] md:justify-end">
          <div className="relative rounded-[28px] border border-white/70 bg-white/45 p-2 shadow-[0_16px_34px_rgba(0,0,0,0.10)]">
            <img
              src="https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/home-trail_tqf8fz.webp"
              alt="Complimentary bridal makeup trial at Lovely Looks"
              className="h-auto w-[245px] rounded-[22px] object-cover sm:w-[270px] md:w-[300px] lg:w-[340px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}