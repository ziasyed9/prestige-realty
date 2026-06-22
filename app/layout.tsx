import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Prestige Properties",
    default: "Prestige Properties — Vancouver Real Estate",
  },
  description: "Vancouver's boutique real estate agency.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          {children}
        </main>
      </body>
    </html>
  );
}