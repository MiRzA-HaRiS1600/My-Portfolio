import type { Metadata } from "next";
import PortfolioPage from "~/components/portfolio-page";

export const metadata: Metadata = {
  title: "FAQs | Mirza Haris Amin",
  description:
    "Answers about Mirza Haris Amin's computer science studies, learning projects, and contact details."
};

export default function FaqPage() {
  return <PortfolioPage page="faq" />;
}
