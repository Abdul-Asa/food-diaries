import type { MDXComponents } from "mdx/types";
import { Counter } from "@/components/counter";
import { ScoreCard } from "@/components/score-card";

const components: MDXComponents = {
  // ── Headings ────────────────────────────────────────────
  h1: ({ children }) => (
    <h1 className="mb-8 border-border border-b-2 pb-4 font-bold font-poppins text-3xl tracking-tight">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-10 mb-4 font-bold font-poppins text-xl tracking-tight">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-3 font-bold font-poppins text-lg tracking-tight">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="mt-6 mb-2 font-bold font-poppins text-base tracking-tight">
      {children}
    </h4>
  ),

  // ── Body text ───────────────────────────────────────────
  p: ({ children }) => (
    <p className="mb-4 font-ibm text-foreground text-sm leading-relaxed">
      {children}
    </p>
  ),

  // ── Lists ───────────────────────────────────────────────
  ul: ({ children }) => (
    <ul className="mb-4 list-disc space-y-2 pl-5 font-ibm text-foreground text-sm leading-relaxed">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 list-decimal space-y-2 pl-5 font-ibm text-foreground text-sm leading-relaxed">
      {children}
    </ol>
  ),

  // ── Inline elements ─────────────────────────────────────
  a: ({ href, children }) => (
    <a
      className="font-bold text-primary underline decoration-2 underline-offset-4 hover:text-primary-hover"
      href={href}
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="font-bold text-foreground">{children}</strong>
  ),
  em: ({ children }) => <em className="italic">{children}</em>,

  // ── Block elements ──────────────────────────────────────
  blockquote: ({ children }) => (
    <blockquote className="my-4 border-border border-l-2 pl-4 font-ibm text-muted-foreground text-sm italic leading-relaxed">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-8 border-border border-t-2" />,

  // ── Code ────────────────────────────────────────────────
  code: ({ children, className }) => {
    // Fenced code blocks (inside <pre>) get a language-* class from MDX
    if (className) {
      return <code className={className}>{children}</code>;
    }
    // Inline code
    return (
      <code className="rounded bg-muted px-1.5 py-0.5 font-ibm text-xs">
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="my-4 overflow-x-auto border-2 border-border bg-card p-4 font-ibm text-xs leading-relaxed">
      {children}
    </pre>
  ),

  // ── Media ───────────────────────────────────────────────
  img: (props) => (
    // biome-ignore lint/performance/noImgElement: MDX inline images use dynamic src; Next/Image requires known dimensions at build time
    <img
      {...props}
      alt={props.alt ?? ""}
      className="my-4 h-auto max-w-full border-2 border-border"
      height={props.height ?? 200}
      width={props.width ?? 200}
    />
  ),

  // ── Custom components ───────────────────────────────────
  Counter,
  ScoreCard,
};

export function useMDXComponents(
  componentsOverrides?: MDXComponents
): MDXComponents {
  return { ...components, ...componentsOverrides };
}
