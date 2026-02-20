import type { MDXComponents } from "mdx/types";
import { Counter } from "@/components/counter";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="font-bold text-3xl text-neutral-900 tracking-tight dark:text-white">
      {children}
    </h1>
  ),
  Counter,
};

export function useMDXComponents(
  componentsOverrides?: MDXComponents
): MDXComponents {
  return { ...components, ...componentsOverrides };
}
