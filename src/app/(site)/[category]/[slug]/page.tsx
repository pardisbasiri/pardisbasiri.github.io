import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CATEGORIES, getProjectBySlug, getAllProjects } from "@/data/projects";
import PageTemplate from "@/components/PageTemplate";
import ProjectDetail from "@/components/ProjectDetail";
import BackLink from "@/components/BackLink";
import type { Category } from "@/types/project";

type Params = { category: string; slug: string };
const isCategory = (v: string): v is Category =>
  (CATEGORIES as readonly string[]).includes(v as Category);

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<Params>;
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
        {/* BackLink uses useSearchParams → wrap in Suspense */}
        <Suspense fallback={null}>
          <BackLink category={cat} />
        </Suspense>
      </div>
    </PageTemplate>
  );
}

export function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];
  for (const p of getAllProjects()) {
    for (const c of p.categories) params.push({ category: c, slug: p.slug });
  }
  return params;
}




