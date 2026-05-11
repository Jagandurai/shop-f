// "use client";

// import { useEffect } from "react";

// export default function useOutsideAlerter({ menuRef, setMenuOpened }) {
//   useEffect(() => {
//     // On the server there is no document/window
//     if (typeof window === "undefined") return;

//     function handleClickOutside(event) {
//       const el = menuRef?.current;
//       if (!el) return;

//       // Click outside + only close on mobile
//       if (!el.contains(event.target) && window.innerWidth <= 640) {
//         setMenuOpened(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     document.addEventListener("touchstart", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.removeEventListener("touchstart", handleClickOutside);
//     };
//   }, [menuRef, setMenuOpened]);
// }