export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <article className="prose prose-quoteless prose-neutral lg:prose-lg">{children}</article>
    </div>
  );
}
