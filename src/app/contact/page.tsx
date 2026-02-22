import type { Metadata } from "next";
import ContactContent from "@/content/contact.mdx";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch! Suggestions, spot tips, or say hello.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-prose px-4 py-8">
      <ContactContent />
    </article>
  );
}
