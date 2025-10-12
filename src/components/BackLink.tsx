"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function BackLink({ category }: { category: string }) {
  const sp = useSearchParams();
  const fromAll = sp.get("from") === "all";

  // GH Pages-friendly hrefs
  const href = fromAll ? "/" : `/${category}/`;
  const label = fromAll
    ? "All"
    : category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-200 underline underline-offset-4 hover:opacity-80"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M15 18l-6-6 6-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>Back to {label}</span>
    </Link>
  );
}
