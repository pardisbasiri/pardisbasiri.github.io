"use client";

import { useEffect } from "react";

const CATEGORIES = new Set(["all", "design", "business", "technical"]);

export default function NotFound() {
  useEffect(() => {
    // If the URL is missing a trailing slash on a known category, add it.
    // Works on GitHub Pages where /category (no slash) can 404.
    const path = window.location.pathname.replace(/^\/+|\/+$/g, ""); // trim slashes
    const [first] = path.split("/");
    if (CATEGORIES.has(first) && !window.location.pathname.endsWith("/")) {
      window.location.replace(`${window.location.pathname}/`);
    }
  }, []);

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="text-2xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-300">
        The page you’re looking for doesn’t exist.
      </p>
    </main>
  );
}
