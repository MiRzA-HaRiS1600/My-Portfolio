import type { Metadata } from "next";
import PortfolioPage from "~/components/portfolio-page";

export const metadata: Metadata = {
  title: "Services & Areas of Interest | Mirza Haris Amin",
  description:
    "Explore web development, design, SEO, and software quality assurance skills Mirza Haris Amin is learning and practicing."
};

export default function ServicesPage() {
  return <PortfolioPage page="services" />;
}
