import type { Metadata } from "next";
import PortfolioPage from "~/components/portfolio-page";

export const metadata: Metadata = {
  title: "Contact | Mirza Haris Amin",
  description:
    "Contact BSCS student Mirza Haris Amin by email or through the message form."
};

export default function ContactPage() {
  return <PortfolioPage page="contact" />;
}
