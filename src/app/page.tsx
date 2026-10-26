import type { Metadata } from "next";
import PortfolioPage from "~/components/portfolio-page";

export const metadata: Metadata = {
  title: "Mirza Haris Amin | BSCS Student & Aspiring Web Developer",
  description:
    "The portfolio of Mirza Haris Amin, a BSCS student passionate about technology, programming, and web development."
};

export default function HomePage() {
  return <PortfolioPage page="home" />;
}
