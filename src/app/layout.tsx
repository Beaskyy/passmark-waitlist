import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Local Font (Open Runde)
// const openRunde = localFont({
//   src: [
//     {
//       path: "../public/fonts/OpenRunde-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//   ],
//   variable: "--font-open-runde", // set as CSS variable
// });

export const metadata: Metadata = {
  title: "Passmark",
  description: "AI-assisted script marking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
