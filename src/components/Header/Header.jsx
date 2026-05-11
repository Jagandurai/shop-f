"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useBookingContext } from "@/src/components/Booking/BookingContext";

const links = [
  { href: "/", label: "Home" },
  { href: "/service", label: "Service" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { openForm } = useBookingContext();

  const handleBookNowClick = () => {
    setOpen(false);
    openForm();
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
        <div
          className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-2 lg:px-10
          bg-[linear-gradient(90deg,#6d0fac_0%,#c2185b_58%,#f59e0b_100%)]
          text-white backdrop-blur-md"
        >
          <Link href="/" className="flex items-center">
            <Image
              src="/header-logo-12.png"
              alt="Lovely Looks"
              width={640}
              height={500}
              priority
              className="h-14 w-auto sm:h-12 lg:h-16"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-base font-semibold">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative tracking-[0.18em] transition-all duration-200
                  ${active ? "opacity-100" : "opacity-80 hover:opacity-100"}`}
                >
                  {label.toUpperCase()}
                  {active && (
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-white" />
                  )}
                </Link>
              );
            })}

            <button
              type="button"
              onClick={handleBookNowClick}
              className="ml-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold tracking-[0.14em]
              text-[#7b1fa2] shadow-md transition duration-200 hover:scale-[1.02] hover:bg-[#fff7fb]"
            >
              BOOK NOW
            </button>
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full
            border border-white/20 bg-white/10 text-[1.7rem] text-white backdrop-blur-md transition hover:bg-white/20 lg:hidden"
            aria-label="Open menu"
            type="button"
          >
            ☰
          </button>
        </div>
      </header>

      <div className="h-[76px] sm:h-[62px] lg:h-[78px]" />

      {open && (
        <div
          className="fixed inset-0 z-[99998] bg-[#14051c]/55 backdrop-blur-[3px] transition-opacity duration-300"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 right-0 z-[99999] h-full w-[82%] max-w-[320px]
        bg-[linear-gradient(180deg,#4a145f_0%,#7b1fa2_42%,#ad1457_100%)]
        text-white shadow-[-10px_0_30px_rgba(0,0,0,0.25)]
        flex flex-col px-6 py-5
        transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="mb-8 flex items-center justify-between">
          <Image
            src="/header-logo-12.png"
            alt="Lovely Looks Logo"
            width={180}
            height={40}
            className="h-11 w-auto object-contain"
          />

          <button
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full
            border border-white/20 bg-white/10 text-xl text-white transition hover:bg-white/20"
            aria-label="Close menu"
            type="button"
          >
            ✕
          </button>
        </div>

        <div className="mb-6 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
            Why Lovely Looks?
          </p>
          <p className="mt-2 text-sm leading-6 text-white/90">
            Exclusive makeup services for extraordinary looks that make every
            occasion unforgettable.
          </p>
        </div>

        <ul className="flex-1 space-y-3">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center rounded-xl px-4 py-3 text-base font-semibold tracking-wide
                  transition-all duration-200
                  ${
                    active
                      ? "bg-white text-[#7b1fa2] shadow-md"
                      : "bg-white/8 text-white hover:bg-white/15"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={handleBookNowClick}
          className="mt-6 inline-flex items-center justify-center rounded-xl
          bg-white px-5 py-3 text-sm font-bold tracking-[0.14em] text-[#7b1fa2]
          shadow-[0_10px_24px_rgba(255,255,255,0.18)]
          transition duration-200 hover:scale-[1.01] hover:bg-[#fff7fb]"
        >
          BOOK AN APPOINTMENT
        </button>
      </aside>
    </>
  );
}