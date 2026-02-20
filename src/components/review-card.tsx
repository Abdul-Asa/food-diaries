import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/mdx";
import type { ReviewMetadata } from "@/lib/types";

interface ReviewCardProps {
  slug: string;
  metadata: ReviewMetadata;
}

export function ReviewCard({ slug, metadata }: ReviewCardProps) {
  return (
    <Link
      href={`/reviews/${slug}`}
      className="group block overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
    >
      {metadata.image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={metadata.image}
            alt={metadata.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-2 right-2 rounded bg-amber-600 px-2 py-1 text-lg font-bold text-white">
            {metadata.score}
          </div>
        </div>
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900">{metadata.title}</h3>
        <p className="mt-1 text-sm text-gray-600">{formatDate(metadata.publishedAt, true)}</p>
        <p className="mt-2 text-gray-700">{metadata.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {metadata.info.map((item) => (
            <span
              key={item.label}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
            >
              {item.value}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
