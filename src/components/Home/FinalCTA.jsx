"use client";

import Link from "next/link";
import { useBookingContext } from "@/src/components/Booking/BookingContext";

const FinalCTA = () => {
  const { openForm } = useBookingContext();

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fff7fb_0%,#fff2f8_100%)] px-4 py-6 sm:px-5 sm:py-14 md:px-6 md:py-16 lg:px-8">
      <div className="absolute left-0 top-8 h-[220px] w-[220px] rounded-full bg-[#f7dcef]/35 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-[240px] w-[240px] rounded-full bg-[#edd8ff]/30 blur-3xl" />

      <div className="relative mx-auto max-w-[1180px]">
        <div className="mx-auto flex max-w-[860px] flex-col items-center rounded-[30px] border border-white/70 bg-white/80 px-5 py-8 text-center shadow-[0_18px_42px_rgba(123,31,162,0.10)] backdrop-blur-sm sm:px-6 sm:py-10 md:px-10 md:py-12">
          <span className="inline-flex items-center justify-center rounded-full border border-[#efd9f5] bg-[#fbf2ff] px-4 py-1.5 mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8b2398] sm:text-sm">
            Book Your Beauty Experience
          </span>

          <h2 className="mt-4 max-w-[700px] text-[1.9rem] font-extrabold leading-tight text-[#4f235d] sm:text-[2.2rem] md:text-[2.6rem]">
            Ready to Experience Premium Beauty Care?
          </h2>

          <p className="mt-4 max-w-[640px] text-sm leading-7 text-[#5f5866] sm:text-[0.98rem] md:text-base md:leading-8">
            From flawless makeup and radiant skin treatments to luxurious hair
            care and personalised salon services, Lovely Looks is here to help
            you look and feel your absolute best.
          </p>

          <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <button
              type="button"
              onClick={openForm}
              className="inline-flex w-full min-w-[200px] max-w-[260px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#7b1fa2,#d81b60)] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(216,27,96,0.20)] transition duration-300 hover:-translate-y-[1px] hover:shadow-[0_18px_36px_rgba(216,27,96,0.26)] sm:w-auto sm:text-base"
            >
              Book Appointment
            </button>

            <Link
              href="/service"
              className="inline-flex w-full min-w-[200px] max-w-[260px] items-center justify-center rounded-full border border-[#ead3f1] bg-white px-6 py-3 text-sm font-semibold text-[#6d227f] shadow-[0_10px_24px_rgba(123,31,162,0.08)] transition duration-300 hover:-translate-y-[1px] hover:border-[#dcb5ea] hover:bg-white sm:w-auto sm:text-base"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;