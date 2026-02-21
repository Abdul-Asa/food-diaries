export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Saints Food Diary. Suggestions, spot tips, or say hello.",
};

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-prose px-4 py-8">
      <header className="mb-6 border-border border-b-2 pb-4">
        <h1 className="font-bold font-poppins text-3xl tracking-tight">
          Contact
        </h1>
      </header>
      <div className="space-y-6 font-ibm text-muted-foreground text-sm leading-relaxed">
        <p>
          Want to suggest a spot, send a tip, or just say hello? We’d love to
          hear from you.
        </p>
        <div>
          <span className="font-ibm text-[10px] text-muted-foreground uppercase tracking-[0.25em]">
            Email
          </span>
          <p className="mt-2">
            <a
              className="font-bold text-primary underline decoration-2 underline-offset-4 hover:text-primary-hover"
              href="mailto:hello@saintsfooddiary.co.uk"
            >
              hello@saintsfooddiary.co.uk
            </a>
          </p>
        </div>
        <div>
          <span className="font-ibm text-[10px] text-muted-foreground uppercase tracking-[0.25em]">
            Location
          </span>
          <p className="mt-2">
            Southampton
            <br />
            SO14 &ndash; SO17
          </p>
        </div>
      </div>
    </article>
  );
}
