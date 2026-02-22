import DisclaimersContent from "@/content/disclaimers.mdx";

export const metadata = {
  title: "Disclaimers",
  description:
    "Personal project, no sponsorship, no malice. How Saints Food Diary works.",
};

export default function DisclaimersPage() {
  return (
    <article className="mx-auto max-w-prose px-4 py-8">
      <DisclaimersContent />
    </article>
  );
}
