"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useBookingContext } from "@/src/components/Booking/BookingContext";
import styles from "./AdvertisementPopup.module.scss";

export default function AdvertisementPopup() {
  const pathname = usePathname();
  const { openForm } = useBookingContext();

  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
    setTimeout(() => dialogRef.current?.focus(), 0);
  };

  const handleBookNow = () => {
    closeModal();
    openForm();
  };

  useEffect(() => {
    let timeoutId;
    let intervalId;

    if (pathname === "/service" || pathname === "/gallery") {
      timeoutId = setTimeout(() => {
        openModal();

        intervalId = setInterval(() => {
          openModal();
        }, 300000);
      }, 30000);
    }

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
      document.body.style.overflow = "";
    };
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        closeModal();
      }

      if (e.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll(
          "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
        );

        if (!focusable || focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="ad-modal-title"
        tabIndex={-1}
        className={styles.modal}
      >
        <button
          type="button"
          aria-label="Close popup"
          onClick={closeModal}
          className={styles.closeButton}
        >
          ×
        </button>

        <div className={styles.iconWrap}>
          <span className={styles.icon}>💄</span>
        </div>

        <h3 id="ad-modal-title" className={styles.title}>
          Book a Free Trial Makeup Now!
        </h3>

        <p className={styles.description}>
          ✨ <strong>Enjoy a FREE makeup trial</strong> with our top stylists and
          feel like a star! Limited time offer — book your session today and let
          us bring out your natural beauty! 🌟
        </p>

        <div className={styles.actions}>
          <button
            type="button"
            onClick={handleBookNow}
            className={styles.primaryButton}
          >
            Book Now
          </button>

          {/* <button
            type="button"
            onClick={closeModal}
            className={styles.secondaryButton}
          >
            Close
          </button> */}
        </div>
      </div>
    </div>
  );
}