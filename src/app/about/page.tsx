import AboutContent from "@/content/about.mdx";

export const metadata = {
  title: "About",
  description:
    "Who I am and how I review kebab spots in Southampton. No sponsorships, no fluff.",
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-prose px-4 py-8">
      <AboutContent />
    </article>
  );
}
