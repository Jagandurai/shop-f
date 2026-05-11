import type { ReactNode } from "react";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";
import { BookingProvider } from "@/src/components/Booking/BookingContext";
import Booking from "@/src/components/Booking/Booking";
import AdvertisementPopup from "@/src/components/Booking/AdvertisementPopup";
import FloatingActions from "@/src/components/FloatingActions/FloatingActions";

export const metadata = {
  title: "ʟᴏᴠᴇʟʏ ʟᴏᴏᴋꜱ",
  description: "Where Beauty Meets Indulgence",
  icons: {
    icon: "https://img.icons8.com/?size=100&id=6CHUeXwSVsul&format=png&color=000000",
    shortcut:
      "https://img.icons8.com/?size=100&id=6CHUeXwSVsul&format=png&color=000000",
    apple:
      "https://img.icons8.com/?size=100&id=6CHUeXwSVsul&format=png&color=000000",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white flex flex-col">
        <GoogleOAuthProvider
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}
        >
          <BookingProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <AdvertisementPopup />
            <Booking />
            <FloatingActions />
          </BookingProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}