import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manuscript Formatting & Editorial Services",
  description:
    "Professional academic editorial services: APA/IEEE manuscript styling (₹99), reference verification (₹99), copy editing (₹299), and proofreading (₹199) with zero upfront charge.",
  alternates: {
    canonical: "/research-publishing/services",
  },
  openGraph: {
    title: "Manuscript Formatting & Editorial Services — Sushil Kumar",
    description:
      "APA/IEEE layout styling, citation cross-checking, and academic copy editing services for research authors.",
    url: "/research-publishing/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
