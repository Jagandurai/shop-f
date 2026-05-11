"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { href: "https://facebook.com",  src: "https://img.icons8.com/ios-filled/50/ffffff/facebook.png",      alt: "Facebook" },
    { href: "https://twitter.com",   src: "https://img.icons8.com/ios-filled/50/ffffff/twitter.png",       alt: "Twitter" },
    { href: "https://instagram.com", src: "https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png", alt: "Instagram" },
    { href: "https://pinterest.com", src: "https://img.icons8.com/ios-filled/50/ffffff/pinterest.png",     alt: "Pinterest" },
  ];

  const address = [
    { icon: "https://img.icons8.com/ios-filled/50/000000/phone.png",   alt: "Phone",   text: "+91-9087992990" },
    { icon: "https://img.icons8.com/ios-filled/50/000000/email.png",   alt: "Email",   text: "lovelylooksv@gmail.com" },
    { icon: "https://img.icons8.com/ios-filled/50/000000/address.png", alt: "Address", text: "36/1, Bairaki madam street, Near Congress Building, Sholingur-631102, Tamil Nadu, India" },
  ];

  const quickLinks = [
    { href: "/",        label: "Home" },
    { href: "/service", label: "Service" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact Us" },
  ];

  const conditions = ["Terms and Conditions", "Privacy Policy", "Cancellation Policy"];

  return (
    <footer className="bg-white">

      {/* Gradient top accent */}
      <div className="h-[5px] bg-[linear-gradient(90deg,rgb(109,15,172)_0%,rgba(253,29,29,1)_60%,rgba(252,176,69,1)_100%)]" />

      {/* Main body */}
      <div className="bg-[#faf8ff]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center text-center gap-4">
              <Image
                src="/footer-logo.png"
                alt="Lovely Looks"
                width={160}
                height={60}
                className="h-14 w-auto object-contain"
              />

              <p className="text-black text-base leading-6">
                At Lovely Looks, we are passionate about helping you look your best
                with high-quality beauty and styling services tailored just for you.
              </p>

              {/* Social icons */}
              <div className="flex gap-3 mt-2">
                {socials.map(function (social) {
                  return (
                    <a
                      key={social.alt}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center
                      bg-[linear-gradient(135deg,#7b1fa2,#d81b60)]
                      hover:scale-110 transition-transform duration-200 shadow-md"
                    >
                      <img
                        src={social.src}
                        alt={social.alt}
                        className="w-5 h-5"
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Address */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-6 h-[3px] bg-orange-400 rounded" />
                <h3 className="font-bold text-black text-lg tracking-widest uppercase">
                  Address
                </h3>
              </div>

              <ul className="space-y-4">
                {address.map(function (item) {
                  return (
                    <li key={item.alt} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-0.5">
                        <img src={item.icon} alt={item.alt} className="w-4 h-4" />
                      </div>
                      <p className="text-black text-base leading-6">{item.text}</p>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-6 h-[3px] bg-orange-400 rounded" />
                <h3 className="font-bold text-black text-lg tracking-widest uppercase">
                  Quick Links
                </h3>
              </div>

              <ul className="space-y-3">
                {quickLinks.map(function (link) {
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-black text-base flex items-center gap-2
                          hover:text-purple-700 transition-colors duration-200 group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400
                          group-hover:bg-purple-700 transition-colors duration-200" />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Conditions */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-6 h-[3px] bg-orange-400 rounded" />
                <h3 className="font-bold text-black text-lg tracking-widest uppercase">
                  Conditions
                </h3>
              </div>

              <ul className="space-y-3">
                {conditions.map(function (item) {
                  return (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-black text-base flex items-center gap-2
                          hover:text-purple-700 transition-colors duration-200 group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400
                          group-hover:bg-purple-700 transition-colors duration-200" />
                        {item}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      {/* Bottom bar */}
        <div className="bg-black py-2 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center gap-2">

            <div className="flex flex-col items-center ">
            
            {/* Copyright */}
            <p className="text-yellow-400 font-medium">
                Copyright © {currentYear}{" "}
                <span className="text-white font-semibold">
                ʟᴏᴠᴇʟʏ ʟᴏᴏᴋꜱ
                </span>
                . All Rights Reserved.
            </p>

            {/* Bottom line */}
            <p className="text-xs text-gray-300 flex items-center justify-center gap-1">
                Designed and developed by
                <span className="animate-blink text-red-500 text-sm">♥</span>
                Jagan
            </p>

            </div>

        </div>
        </div>

    </footer>
  );
};

export default Footer;