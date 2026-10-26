import type { Metadata } from "next";
import PortfolioPage from "~/components/portfolio-page";

export const metadata: Metadata = {
  title: "Mirza Haris Amin — Computer Science Student",
  description:
    "The portfolio of Mirza Haris Amin, a BS Computer Science student exploring web development, technology, and thoughtful digital experiences."
};

export default function HomePage() {
  return <PortfolioPage page="home" />;
}
