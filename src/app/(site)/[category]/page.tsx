// src/app/(site)/[category]/page.tsx
import { notFound } from "next/navigation";
import { CATEGORIES, getProjectsByCategory } from "@/data/projects";
import PageTemplate from "@/components/PageTemplate";
import ProjectCard from "@/components/ProjectCard";
import type { Category } from "@/types/project";

type Params = { category: string };
const cap = (s: string) => (s ? s[0].toUpperCase() + s.slice(1) : s);
const isCategory = (v: string): v is Category =>
  (CATEGORIES as readonly string[]).includes(v as Category);

export default async function CategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category } = await params;
  const catLower = category.toLowerCase();

  // If you use "/" for All, we shouldn't be here for "all".
  // If you still have /all as a page, allow it:
  const valid =
    catLower === "all" || isCategory(catLower);
  if (!valid) return notFound();

  const current: Category | "all" =
    catLower === "all" ? "all" : (catLower as Category);

  const projects = getProjectsByCategory(current);

  return (
    <PageTemplate
      title={`${cap(catLower)} Projects`}
      intro={
        catLower === "all"
          ? "Explore my work across design, business, and tech."
          : `Explore my work focused on ${cap(catLower)}.`
      }
      contentWidth="wide"
      inset="roomy"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} currentCategory={current} />
        ))}
      </div>

      {projects.length === 0 && (
        <p className="mt-6 italic opacity-70">No projects yet.</p>
      )}
    </PageTemplate>
  );
}

export function generateStaticParams() {
  // If your Header uses "/" for All (recommended), DON'T include { category: "all" } here.
  return [
    { category: "design" },
    { category: "business" },
    { category: "technical" },
    // { category: "all" }, // include only if you want /all to exist as a separate page
  ];
}
