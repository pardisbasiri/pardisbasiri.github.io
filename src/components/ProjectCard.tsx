import Link from "next/link";
import type { Project, Category } from "@/types/project";
import ProjectImage from "@/components/ProjectImage";
import { getProjectPath } from "@/data/projects";

export default function ProjectCard({
  project,
  currentCategory,
}: {
  project: Project;
  currentCategory: Category | "all";
}) {
  // Build the href using the current category context
  const href = getProjectPath(project, currentCategory);

  return (
    <Link
      href={href}
      className="group block"
      aria-label={`${project.name} — ${project.subCategory}`}
    >
      <article className="overflow-hidden rounded-2xl border border-neutral-200/70 dark:border-neutral-800/70 hover:shadow-md transition">
        <ProjectImage
          image={{ ...project.image, aspectRatio: project.image.aspectRatio ?? "16/9" }}
          className="aspect-[16/9]" 
          imgClassName="transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(min-width:1024px) 42vw, (min-width:768px) 48vw, 100vw"
        />
        <div className="p-6">
          <h3 className="text-lg font-semibold tracking-tight line-clamp-2">
            {project.name}
          </h3>

          <p
            className="mt-1 text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-400 truncate"
            title={project.subCategory}
          >
            {project.subCategory}
          </p>

          <p className="mt-4 text-base text-neutral-700 dark:text-neutral-300 line-clamp-4">
            {project.overview}
          </p>
        </div>
      </article>
    </Link>
  );
}
