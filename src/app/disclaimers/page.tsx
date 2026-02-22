export const metadata = {
  title: "Disclaimers",
  description:
    "Personal project, no sponsorship, no malice. How Saints Food Diary works.",
};

export default function DisclaimersPage() {
  return (
    <article className="mx-auto max-w-prose px-4 py-8">
      <header className="mb-6 border-border border-b-2 pb-4">
        <h1 className="font-bold font-poppins text-3xl tracking-tight">
          Disclaimers
        </h1>
      </header>
      <div className="space-y-6 font-ibm text-foreground text-sm leading-relaxed">
        <p>A few things to be clear about when reading these reviews:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-foreground">Personal project.</strong> This
            site is run by one person. It&apos;s a hobby, not a business. Purely
            for fun and to share my love for kebabs.
          </li>
          <li>
            <strong className="text-foreground">No sponsorship.</strong> No one
            pays for reviews or placement (I wish 😔). All opinions are
            independent.
          </li>
          <li>
            <strong className="text-foreground">No hate.</strong> I don&apos;t
            set out to trash any restaurant. Reviews are honest first
            impressions and experiences — good or bad — not personal attacks.
          </li>
          <li>
            <strong className="text-foreground">Opinions only.</strong> Taste is
            subjective. What I like might not be your thing, and vice versa. I
            don&apos;t really have a fine taste. I&apos;d eat just about any
            kebab.
          </li>
        </ul>
        <p>
          If you have a correction, want to get in touch, want me to remove a
          review, or even want to sponsor me for free kebab reviews 👀,{" "}
          <a
            className="font-bold text-primary underline decoration-2 underline-offset-4 hover:text-primary-hover"
            href="/contact"
          >
            contact me
          </a>
          .
        </p>
      </div>
    </article>
  );
}
