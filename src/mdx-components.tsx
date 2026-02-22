import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="font-bold text-3xl text-neutral-900 tracking-tight dark:text-white">
      {children}
    </h1>
  ),
  // Inline MDX images: use native img so arbitrary markdown image props work; Next Image requires known dimensions
  img: (props) => (
    // biome-ignore lint/performance/noImgElement: MDX inline images use dynamic src; Next/Image requires known dimensions at build time
    <img
      {...props}
      alt={props.alt ?? ""}
      className="h-auto max-w-full rounded-sm"
      height={props.height ?? 600}
      width={props.width ?? 800}
    />
  ),
};

export function useMDXComponents(
  componentsOverrides?: MDXComponents
): MDXComponents {
  return { ...components, ...componentsOverrides };
}
