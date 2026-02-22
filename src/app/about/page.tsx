import type { Metadata } from "next";
import AboutContent from "@/content/about.mdx";

export const metadata: Metadata = {
  title: "About",
  description: "Everything you need to know about Saints Food Diary.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-prose px-4 py-8">
      <AboutContent />
    </article>
  );
}
