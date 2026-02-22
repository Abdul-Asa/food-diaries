import type { Metadata } from "next";
import DisclaimersContent from "@/content/disclaimers.mdx";

export const metadata: Metadata = {
  title: "Disclaimers",
  description: "How Saints Food Diary works.",
  alternates: { canonical: "/disclaimers" },
};

export default function DisclaimersPage() {
  return (
    <article className="mx-auto max-w-prose px-4 py-8">
      <DisclaimersContent />
    </article>
  );
}
