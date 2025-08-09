import type { MDXComponents } from "mdx/types";
import Link from "next/link";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-10 mb-4 text-3xl font-bold tracking-tight text-gray-900">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-gray-900">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="mt-6 mb-3 text-xl font-bold tracking-tight text-gray-900">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="mb-4 leading-7 text-gray-700">{children}</p>
  ),
  a: ({ href, children }) => (
    <Link
      href={href || "#"}
      className="font-medium text-primary underline decoration-primary/30 hover:decoration-primary"
    >
      {children}
    </Link>
  ),
  ul: ({ children }) => (
    <ul className="mb-4 ml-6 list-disc text-gray-700">{children}</ul>
  ),
  li: ({ children }) => <li className="mt-2">{children}</li>,
  strong: ({ children }) => (
    <strong className="font-semibold text-gray-900">{children}</strong>
  ),
  em: ({ children }) => <em className="italic text-gray-800">{children}</em>,
  hr: () => <hr className="my-8 border-gray-200" />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
