"use client";

import { Suspense } from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname, useSearchParams } from "next/navigation";

const ITEMS = ["all", "design", "business", "technical"] as const;
const capitalize = (s: string) => (s ? s[0].toUpperCase() + s.slice(1) : s);

// Export a shell that provides the Suspense boundary
export default function Header() {
  return (
    <Suspense fallback={<HeaderFallback />}>
      <HeaderInner />
    </Suspense>
  );
}

// Fallback shown during SSR/streaming before hooks resolve (simple, non-active state)
function HeaderFallback() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-950/70">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <nav aria-label="Primary" className="flex justify-center">
          <div className="max-w-full rounded-full border border-neutral-200/80 dark:border-neutral-800/70 px-2 py-1">
            <ul className="flex items-center gap-4 sm:gap-6 md:gap-8 list-none flex-nowrap overflow-x-auto scrollbar-none -mx-2 px-2 sm:mx-0 sm:px-0">
              {ITEMS.map((key) => {
                const href = key === "all" ? "/all" : `/${key}`;
                return (
                  <li key={key} className="shrink-0">
                    <Link
                      href={href}
                      className={clsx(
                        "inline-flex items-center justify-center rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-sm font-medium no-underline transition-colors",
                        "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                      )}
                    >
                      {capitalize(key)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
      <div className="border-b border-neutral-200/70 dark:border-neutral-800/70" />
    </header>
  );
}

// The real header that uses hooks; wrapped in Suspense above
function HeaderInner() {
  const pathname = usePathname() || "/";
  const search = useSearchParams();
  const fromAll = search.get("from") === "all";

  // If from=all, ONLY "All" is active; otherwise match by pathname.
  const isActive = (href: string) => {
    if (fromAll) return href === "/all";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-950/70">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <nav aria-label="Primary" className="flex justify-center">
          <div className="max-w-full rounded-full border border-neutral-200/80 dark:border-neutral-800/70 px-2 py-1">
            <ul className="flex items-center gap-4 sm:gap-6 md:gap-8 list-none flex-nowrap overflow-x-auto scrollbar-none -mx-2 px-2 sm:mx-0 sm:px-0">
              {ITEMS.map((key) => {
                const href = key === "all" ? "/all" : `/${key}`;
                const active = isActive(href);
                return (
                  <li key={key} className="shrink-0">
                    <Link
                      href={href}
                      className={clsx(
                        "inline-flex items-center justify-center rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-sm font-medium no-underline transition-colors",
                        active
                          ? "bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100"
                          : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {capitalize(key)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
      <div className="border-b border-neutral-200/70 dark:border-neutral-800/70" />
    </header>
  );
}

