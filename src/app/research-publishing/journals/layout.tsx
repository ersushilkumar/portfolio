import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Journal Tracks & Peer Review",
  description:
    "Explore double-blind peer-reviewed journal tracks across Student Research, Management & Finance, Computer Science, and Multidisciplinary Studies with zero pre-acceptance fees.",
  alternates: {
    canonical: "/research-publishing/journals",
  },
  openGraph: {
    title: "Academic Journal Tracks & Peer Review — Sushil Kumar",
    description:
      "Double-blind peer-reviewed journal tracks across Management, Finance, Computer Science, and Multidisciplinary Studies.",
    url: "/research-publishing/journals",
  },
};

export default function JournalsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
