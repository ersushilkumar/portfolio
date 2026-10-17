import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Projects & Prototypes",
  description:
    "Explore platform engineering projects, prototypes, and technical architectures built with Flutter, Next.js, TypeScript, and Firebase by Sushil Kumar.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Engineering Projects & Prototypes — Sushil Kumar",
    description:
      "Platform engineering projects, prototypes, and technical architectures built with Flutter, Next.js, TypeScript, and Firebase by Sushil Kumar.",
    url: "/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
