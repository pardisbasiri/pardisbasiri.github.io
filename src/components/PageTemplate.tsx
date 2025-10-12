// src/components/PageTemplate.tsx
import Link from "next/link";
import { ReactNode } from "react";

type PageTemplateProps = {
  title: string;
  intro?: string;
  children: ReactNode;
  back?: { href: string; label?: string };
  contentWidth?: "narrow" | "wide"; // existing
  /** NEW: horizontal padding preset */
  inset?: "default" | "roomy";      // default keeps current spacing
};

export default function PageTemplate({
  title,
  intro,
  children,
  back,
  contentWidth = "narrow",
  inset = "default",
}: PageTemplateProps) {
  const insetClasses = inset === "roomy" ? "px-6 md:px-10" : "px-4";

  return (
    <main className={`mx-auto w-full max-w-6xl ${insetClasses} py-10 md:py-12`}>
      {back && (
        <div className="mb-4">
          <Link
            href={back.href}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200/80 dark:border-neutral-800/70 px-3.5 py-1.5 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" className="opacity-80">
              <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="leading-none">{back.label ?? "Back"}</span>
          </Link>
        </div>
      )}

      <header className="mb-8 md:mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h1>
        {intro && (
          <p className="mt-2 md:mt-3 text-base md:text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl leading-7">
            {intro}
          </p>
        )}
      </header>

      {/* narrow = max-w-3xl (detail pages), wide = max-w-5xl (grids) */}
      <div className={contentWidth === "wide" ? "mx-auto w-full max-w-5xl" : "max-w-3xl"}>
        {children}
      </div>
    </main>
  );
}



