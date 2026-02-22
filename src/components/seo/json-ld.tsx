interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  const safeJson = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires script content; </ is escaped to prevent XSS
      dangerouslySetInnerHTML={{ __html: safeJson }}
      type="application/ld+json"
    />
  );
}
