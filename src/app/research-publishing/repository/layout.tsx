import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Repository — Open Access & Free Deposit",
  description:
    "Deposit preprints, working papers, theses, and research monographs with open-access Creative Commons licenses and zero fees on the Sushil Kumar academic repository.",
  alternates: {
    canonical: "/research-publishing/repository",
  },
  openGraph: {
    title: "Academic Repository — Open Access & Free Deposit",
    description:
      "Deposit preprints, working papers, and theses under Creative Commons licenses with zero deposit fees.",
    url: "/research-publishing/repository",
  },
};

export default function RepositoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
