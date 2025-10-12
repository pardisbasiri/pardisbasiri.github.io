import React from "react";

export default function SubcategoryChips({ subCategory }: { subCategory: string }) {
  // split "A, B, C" → ["A","B","C"], trimming empty items
  const items = subCategory
    .split(",")
    .map(s => s.trim())
    .filter(Boolean);

  if (items.length === 0) return null;

  return (
    <ul className="mt-3 flex flex-wrap gap-2.5">
      {items.map((label, i) => (
        <li
          key={i}
          className="rounded-full border border-neutral-200/70 dark:border-neutral-800/60 px-3 py-1.5 text-sm text-neutral-700 dark:text-neutral-300"
        >
          {label}
        </li>
      ))}
    </ul>
  );
}
