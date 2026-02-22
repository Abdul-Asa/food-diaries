import ContactContent from "@/content/contact.mdx";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Saints Food Diary. Suggestions, spot tips, or say hello.",
};

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-prose px-4 py-8">
      <ContactContent />
    </article>
  );
}
