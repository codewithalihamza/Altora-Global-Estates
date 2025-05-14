import type { Metadata } from "next";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Altora Global Estates - Luxury Real Estate & Migration Services",
  description: "Experience unparalleled luxury real estate and migration services with Altora Global Estates. Find your dream property worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
