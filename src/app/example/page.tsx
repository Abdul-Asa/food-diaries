import ExamplePost, { frontmatter } from "@/content/example.mdx";
import type { ExamplePostFrontmatter } from "@/lib/types";

const meta = frontmatter as unknown as ExamplePostFrontmatter;

export default function MdxDemoPage() {
  return (
    <article className="mx-auto max-w-prose px-4 py-8">
      <header className="mb-6 border-neutral-200 border-b pb-4 dark:border-neutral-700">
        <h1 className="font-semibold text-3xl">{meta.title}</h1>
        <p className="mt-1 text-neutral-500 text-sm dark:text-neutral-400">
          {meta.date} · {meta.author}
        </p>
      </header>
      <div className="prose dark:prose-invert">
        <ExamplePost />
      </div>
    </article>
  );
}
