import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "./luxury.css";

export const metadata: Metadata = {
  title: "Mirza Haris Amin — Computer Science Student",
  description:
    "The personal portfolio of Mirza Haris Amin, a BS Computer Science student exploring web development, technology, and thoughtful digital experiences.",
  openGraph: {
    title: "Mirza Haris Amin — Computer Science Student",
    description:
      "A BS Computer Science student learning, building, and exploring the web.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
