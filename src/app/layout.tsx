import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "RIT ENERGY LIMITED | Multi-Division Infrastructure Group",
  description:
    "RIT ENERGY LIMITED is a multi-division operations company delivering energy solutions, software systems, event experiences, and brand development services across Nigeria.",
  keywords:
    "RIT Energy, LPG Nigeria, software company Nigeria, event management Lagos, brand consulting Africa",
  authors: [{ name: "RIT ENERGY LIMITED" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}