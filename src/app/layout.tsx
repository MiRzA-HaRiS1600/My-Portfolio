import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mirza Haris Amin | BSCS Student & Aspiring Web Developer",
  description:
    "The portfolio of Mirza Haris Amin, a BSCS student passionate about technology, programming, and web development.",
  openGraph: {
    title: "Mirza Haris Amin | BSCS Student & Aspiring Web Developer",
    description:
      "A BSCS student learning web development and building useful digital experiences.",
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
