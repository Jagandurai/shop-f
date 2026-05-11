"use client";

import { useEffect, useState } from "react";

export default function FloatingActions() {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButtons(window.scrollY > 120);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const whatsappUrl = "https://wa.me/919087992990";

  return (
    <div
      className={`fixed bottom-5 right-4 z-[9999] flex flex-col items-center gap-3 transition-all duration-300 ${
        showButtons
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-[61px] w-[61px] sm:h-[50px] sm:w-[50px] items-center justify-center rounded-full border-2 border-[#25D366] bg-[#25D366]"
      >
        <img
          src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000"
          alt="WhatsApp"
          width="36"
          height="36"
          className="h-10 w-10 sm:h-8 sm:w-8"
        />
      </a>

      <button
        type="button"
        onClick={handleBackToTop}
        aria-label="Back to top"
        className="flex items-center justify-center"
      >
        <img
          src="https://img.icons8.com/?size=100&id=63247&format=png&color=000000"
          alt="Back to top"
          width="42"
          height="42"
          className="h-[46px] w-[46px] sm:h-[35px] sm:w-[35px]"
        />
      </button>
    </div>
  );
}