// src/app/(site)/page.tsx
import PageTemplate from "@/components/PageTemplate";
import ProjectCard from "@/components/ProjectCard";
import { getProjectsByCategory } from "@/data/projects";
import type { Category } from "@/types/project";

export default function HomePage() {
  const projects = getProjectsByCategory("all");
  return (
    <PageTemplate
      title="All Projects"
      intro="Explore my work across design, business, and tech."
      contentWidth="wide"
      inset="roomy"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {projects.map((p) => (
          <ProjectCard
            key={p.slug}
            project={p}
            currentCategory={"all" as Category | "all"}
          />
        ))}
      </div>
    </PageTemplate>
  );
}
