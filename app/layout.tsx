import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Scriptdock Tech | Enterprise Software & Web Development",
  description: "Scriptdock Tech delivers enterprise-grade software solutions, scalable web applications, and stunning corporate websites designed to push your business forward.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-white text-gray-900 antialiased flex flex-col min-h-screen" suppressHydrationWarning>
        <CartProvider>
          <Header />
          <div className="grow">
            {children}
          </div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}