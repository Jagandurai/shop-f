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

// Small human icon for logged-out users
const UserIcon = ({ size = 16 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
  </svg>
);

// Heart icon
const HeartIcon = ({ size = 16 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

// Get avatar letter from email.
// jagan@gmail.com -> J
// admin@lovelylooks.in -> A
const getAvatarLetter = (email) => {
  if (!email) return "";

  const value = String(email).trim();

  if (!value) return "";

  return value.charAt(0).toUpperCase();
};

/**
 * Navbar accepts optional auth props.
 *
 * Props:
 *   isLoggedIn       – boolean
 *   userEmail        – string
 *   onLoginClick     – () => void
 *   onLogoutClick    – () => void
 *   onLikedClick     – () => void
 */
export default function Navbar({
  isLoggedIn = false,
  userEmail = "",
  onLoginClick = () => {},
  onLogoutClick = () => {},
  onLikedClick = () => {},
}) {
  const [open, setOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const pathname = usePathname();
  const { openForm } = useBookingContext();

  const avatarLetter = getAvatarLetter(userEmail);

  const handleBookNowClick = () => {
    setOpen(false);
    openForm();
  };

  // Close account menu when clicking outside.
  useEffect(() => {
    if (!userMenuOpen) return;

    const handler = (e) => {
      if (!e.target.closest("[data-user-menu]")) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [userMenuOpen]);

  // Prevent background scrolling while mobile sidebar is open.
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

  const handleUserIconClick = () => {
    if (!isLoggedIn) {
      if (onLoginClick) {
        onLoginClick();
      }
    }
  };

  const handleLogout = () => {
    setUserMenuOpen(false);

    if (onLogoutClick) {
      onLogoutClick();
    }
  };

  const handleMobileLiked = () => {
    setOpen(false);

    if (onLikedClick) {
      onLikedClick();
    }
  };

  const handleMobileLogin = () => {
    setOpen(false);

    if (onLoginClick) {
      onLoginClick();
    }
  };

  const handleMobileLogout = () => {
    setOpen(false);

    if (onLogoutClick) {
      onLogoutClick();
    }
  };

  return (
    <>
      {/* =========================================================
          MAIN NAVBAR
      ========================================================== */}
      <header className="fixed top-0 left-0 z-50 w-full shadow-[0_6px_22px_rgba(0,0,0,0.12)]">
        <div
          className="
            flex items-center justify-between
            h-[64px]
            px-4
            sm:h-[64px] sm:px-6
            lg:h-[68px] lg:px-10
            bg-[linear-gradient(90deg,#6d0fac_0%,#c2185b_58%,#f59e0b_100%)]
            text-white
          "
        >
          {/* =====================================================
              LOGO
          ====================================================== */}
          <Link
            href="/"
            className="
              relative flex h-[52px] w-[230px] shrink-0 items-center
              overflow-hidden
              sm:h-[52px] sm:w-[240px]
              lg:h-[56px] lg:w-[270px]
            "
          >
            <Image
              src="/header-logo-12.png"
              alt="Lovely Looks"
              fill
              priority
              sizes="270px"
              className="object-contain object-left"
            />
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold">
            {links.map(({ href, label }) => {
              const active = pathname === href;

              return (
                <Link
                  key={href}
                  href={href}
                  className={`
                    relative tracking-[0.16em]
                    transition-all duration-200
                    ${active ? "opacity-100" : "opacity-80 hover:opacity-100"}
                  `}
                >
                  {label.toUpperCase()}

                  {active && (
                    <span
                      className="
                        absolute -bottom-1 left-0
                        h-0.5 w-full rounded-full bg-white
                      "
                    />
                  )}
                </Link>
              );
            })}

            {/* Book Now */}
            <button
              type="button"
              onClick={handleBookNowClick}
              className="
                ml-2 rounded-full bg-white px-5 py-2
                text-xs font-bold tracking-[0.14em]
                text-[#7b1fa2]
                shadow-md
                transition duration-200
                hover:scale-[1.02]
                hover:bg-[#fff7fb]
              "
            >
              BOOK NOW
            </button>

            {/* =================================================
                DESKTOP USER PROFILE
            ================================================== */}
            <div
              className="relative"
              data-user-menu
              onMouseEnter={() => {
                if (isLoggedIn) {
                  setUserMenuOpen(true);
                }
              }}
              onMouseLeave={() => {
                if (isLoggedIn) {
                  setUserMenuOpen(false);
                }
              }}
            >
              <button
                type="button"
                onClick={handleUserIconClick}
                aria-label={
                  isLoggedIn
                    ? `${userEmail || "Account"} account`
                    : "Sign in"
                }
                title={
                  isLoggedIn
                    ? userEmail || "Account"
                    : "Sign in with Google"
                }
                className="
                  inline-flex
                  h-9 w-9
                  items-center justify-center
                  rounded-full
                  border border-white/35
                  bg-white/15
                  text-white
                  backdrop-blur-md
                  shadow-sm
                  transition-all duration-200
                  hover:bg-white/25
                  hover:scale-[1.04]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-white/50
                "
              >
                {isLoggedIn ? (
                  <span
                    className="
                      flex h-7 w-7
                      items-center justify-center
                      rounded-full
                      bg-white
                      text-[11px]
                      font-bold
                      text-[#7b1fa2]
                      uppercase
                    "
                  >
                    {avatarLetter || <UserIcon size={15} />}
                  </span>
                ) : (
                  <UserIcon size={15} />
                )}
              </button>

              {/* =================================================
                  PROFESSIONAL HOVER DROPDOWN
              ================================================== */}
              {isLoggedIn && userMenuOpen && (
                <div
                  className="
                    absolute
                    right-0
                    top-[calc(100%+8px)]
                    w-[230px]
                    overflow-hidden
                    rounded-2xl
                    border border-black/[0.06]
                    bg-white
                    shadow-[0_18px_45px_rgba(0,0,0,0.18)]
                    ring-1 ring-black/[0.03]
                    z-[9999]
                  "
                >
                  {/* Small arrow */}
                  <span
                    className="
                      absolute
                      -top-1.5
                      right-3
                      h-3
                      w-3
                      rotate-45
                      border-l
                      border-t
                      border-black/[0.06]
                      bg-white
                    "
                  />

                  {/* Account information */}
                  <div className="relative flex items-center gap-3 px-4 py-4">
                    <div
                      className="
                        flex h-10 w-10 shrink-0
                        items-center justify-center
                        rounded-full
                        bg-gradient-to-br
                        from-[#7b1fa2]
                        to-[#c2185b]
                        text-sm
                        font-bold
                        text-white
                        shadow-sm
                      "
                    >
                      {avatarLetter || <UserIcon size={15} />}
                    </div>

                    <div className="min-w-0">
                      <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-gray-400">
                        Signed in as
                      </p>

                      <p
                        className="
                          mt-0.5
                          truncate
                          text-sm
                          font-semibold
                          text-gray-800
                        "
                        title={userEmail}
                      >
                        {userEmail || "Account"}
                      </p>
                    </div>
                  </div>

                  {/* Separator */}
                  <div className="h-px bg-gray-100" />

                  {/* Logout */}
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="
                      flex w-full
                      items-center
                      gap-3
                      px-4 py-3
                      text-left
                      text-sm
                      font-semibold
                      text-gray-700
                      transition-colors
                      duration-150
                      hover:bg-[#fff5fa]
                      hover:text-[#c2185b]
                    "
                  >
                    <span
                      className="
                        flex h-8 w-8
                        items-center justify-center
                        rounded-full
                        bg-gray-100
                        text-gray-500
                        text-xs
                        transition-colors
                        group-hover:bg-[#fce4ec]
                      "
                    >
                      ↩
                    </span>

                    Logout
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* =====================================================
              MOBILE HAMBURGER
          ====================================================== */}
          <button
            onClick={() => setOpen(true)}
            className="
              inline-flex
              h-10 w-10
              items-center justify-center
              rounded-full
              border border-white/20
              bg-white/10
              text-[1.35rem]
              text-white
              backdrop-blur-md
              transition
              hover:bg-white/20
              lg:hidden
            "
            aria-label="Open menu"
            type="button"
          >
            ☰
          </button>
        </div>
      </header>


      {/* =========================================================
          MOBILE OVERLAY
      ========================================================== */}
      {open && (
        <div
          className="
            fixed inset-0 z-[99998]
            bg-[#14051c]/55
            backdrop-blur-[3px]
          "
          onClick={() => setOpen(false)}
        />
      )}

      {/* =========================================================
          MOBILE SIDEBAR
      ========================================================== */}
      <aside
        className={`
          fixed top-0 right-0 z-[99999]
          h-full
          w-[82%]
          max-w-[320px]
          bg-[linear-gradient(180deg,#4a145f_0%,#7b1fa2_42%,#ad1457_100%)]
          text-white
          shadow-[-10px_0_30px_rgba(0,0,0,0.25)]
          flex flex-col
          px-6 py-5
          transition-transform
          duration-300
          ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Sidebar Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="relative h-10 w-[180px] shrink-0 overflow-hidden">
            <Image
              src="/header-logo-12.png"
              alt="Lovely Looks Logo"
              fill
              sizes="180px"
              className="object-contain object-left"
            />
          </div>

          <button
            onClick={() => setOpen(false)}
            className="
              inline-flex h-10 w-10
              items-center justify-center
              rounded-full
              border border-white/20
              bg-white/10
              text-xl
              text-white
              transition
              hover:bg-white/20
            "
            aria-label="Close menu"
            type="button"
          >
            ✕
          </button>
        </div>

        {/* Description */}
        <div
          className="
            mb-6
            rounded-2xl
            border border-white/10
            bg-white/10
            p-4
            backdrop-blur-md
          "
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
            Why Lovely Looks?
          </p>

          <p className="mt-2 text-sm leading-6 text-white/90">
            Exclusive makeup services for extraordinary looks that make every
            occasion unforgettable.
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col space-y-3">
          {links.map(({ href, label }) => {
            const active = pathname === href;

            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`
                    flex items-center
                    rounded-xl
                    px-4 py-3
                    text-base
                    font-semibold
                    tracking-wide
                    transition-all
                    duration-200
                    ${
                      active
                        ? "bg-white text-[#7b1fa2] shadow-md"
                        : "bg-white/8 text-white hover:bg-white/15"
                    }
                  `}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* =======================================================
            MOBILE AUTH SECTION
        ======================================================== */}
        <div className="mt-4 flex flex-col gap-3 border-t border-white/20 pt-4">
          {!isLoggedIn ? (
            /* Logged out */
            <button
              type="button"
              onClick={handleMobileLogin}
              className="
                flex items-center
                gap-3
                rounded-xl
                bg-white/10
                px-4 py-3
                font-semibold
                text-white
                transition-all
                duration-200
                hover:bg-white/20
              "
            >
              <span
                className="
                  flex h-8 w-8
                  items-center justify-center
                  rounded-full
                  bg-white/20
                "
              >
                <UserIcon size={15} />
              </span>

              Login / Sign In
            </button>
          ) : (
            <>
              {/* Logged-in account */}
              <div
                className="
                  flex items-center
                  gap-3
                  rounded-xl
                  bg-white/10
                  px-4 py-3
                "
              >
                <span
                  className="
                    flex h-8 w-8
                    shrink-0
                    items-center justify-center
                    rounded-full
                    bg-white
                    text-xs
                    font-bold
                    text-[#7b1fa2]
                  "
                >
                  {avatarLetter || <UserIcon size={14} />}
                </span>

                <span className="truncate text-sm font-semibold text-white/90">
                  {userEmail || "Account"}
                </span>
              </div>

              {/* Liked */}
              <button
                type="button"
                onClick={handleMobileLiked}
                className="
                  flex items-center
                  gap-3
                  rounded-xl
                  bg-white/10
                  px-4 py-3
                  font-semibold
                  text-white
                  transition-all
                  duration-200
                  hover:bg-white/20
                "
              >
                <span
                  className="
                    flex h-8 w-8
                    items-center justify-center
                    rounded-full
                    bg-white/20
                    text-[#f472b6]
                  "
                >
                  <HeartIcon size={15} />
                </span>

                Liked
              </button>

              {/* Logout */}
              <button
                type="button"
                onClick={handleMobileLogout}
                className="
                  flex items-center
                  gap-3
                  rounded-xl
                  bg-white/10
                  px-4 py-3
                  font-semibold
                  text-white
                  transition-all
                  duration-200
                  hover:bg-white/20
                "
              >
                <span
                  className="
                    flex h-8 w-8
                    items-center justify-center
                    rounded-full
                    bg-white/20
                    text-xs
                    font-bold
                    text-white/80
                  "
                >
                  ↩
                </span>

                Logout
              </button>
            </>
          )}
        </div>

        {/* Book Now */}
        <button
          type="button"
          onClick={handleBookNowClick}
          className="
            mt-auto pt-4
            inline-flex
            items-center
            justify-center
            rounded-xl
            bg-white
            px-5 py-3
            text-sm
            font-bold
            tracking-[0.14em]
            text-[#7b1fa2]
            shadow-[0_10px_24px_rgba(255,255,255,0.18)]
            transition
            duration-200
            hover:scale-[1.01]
            hover:bg-[#fff7fb]
          "
        >
          BOOK AN APPOINTMENT
        </button>
      </aside>
    </>
  );
}