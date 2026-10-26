import type { Metadata } from "next";
import PortfolioPage from "~/components/portfolio-page";

export const metadata: Metadata = {
  title: "Portfolio & Sample Projects | Mirza Haris Amin",
  description:
    "Browse sample project concepts for Mirza Haris Amin's learning portfolio. Examples are clearly marked."
};

export default function ProjectsPage() {
  return <PortfolioPage page="portfolio" />;
}
