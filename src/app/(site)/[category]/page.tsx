import { notFound } from "next/navigation";
import { CATEGORIES, getProjectBySlug, getAllProjects } from "@/data/projects";
import PageTemplate from "@/components/PageTemplate";
import ProjectDetail from "@/components/ProjectDetail";
import BackLink from "@/components/BackLink";
import type { Category } from "@/types/project";

type Params = { category: string; slug: string };

const cap = (s: string) => (s ? s[0].toUpperCase() + s.slice(1) : s);
const isCategory = (v: string): v is Category =>
  (CATEGORIES as readonly string[]).includes(v as Category);

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<Params>;   // Next 15: Promise-wrapped
}) {
  const { category, slug } = await params;

  const catLower = category.toLowerCase();
  if (!isCategory(catLower)) return notFound();
  const cat: Category = catLower;

  const project = getProjectBySlug(slug);
  if (!project || !project.categories.includes(cat)) return notFound();

  return (
    <PageTemplate title={project.name} intro={project.subCategory} inset="roomy">
      <ProjectDetail project={project} />

      <div className="mt-12">
        <BackLink category={cat} />
      </div>
    </PageTemplate>
  );
}


export function generateStaticParams() {
  return [
    { category: "all" },      // ← include this
    { category: "design" },
    { category: "business" },
    { category: "technical" },
  ];
}