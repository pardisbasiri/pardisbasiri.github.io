// src/components/ProjectDetail.tsx
import clsx from "clsx";
import InlineText from "@/components/InlineText";
import ProjectImage from "@/components/ProjectImage";
import type { Project, ProcessBlock } from "@/types/project";


export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className="mx-auto">
      {/* Hero image */}
      <ProjectImage
        image={project.image}
        className="rounded-2xl overflow-hidden"
        imgClassName="transition-transform duration-300"
        sizes="(min-width:1536px) 3000px, 100vw"
        priority
      />

      {/* Description */}
      <section className="mt-6">
        <p className="text-base md:text-[1.05rem] leading-7 opacity-90 whitespace-pre-line">
    <InlineText text={project.description} />
  </p>
      </section>

      {/* Sections — cleaner headings, no dividers, consistent rhythm */}
      <div className="mt-10 space-y-10">
        <DetailSection title="Role">
          <ul className="list-disc ml-5 space-y-1.5 text-[0.98rem] leading-7">
            {project.role.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
        </DetailSection>

        <DetailSection title="Process">
  {renderProcessSingleColumn(project.process)}
</DetailSection>

        <DetailSection title="Tool">
          <ul className="flex flex-wrap gap-2.5">
            {project.tool.map((t, i) => (
              <li
                key={i}
                className="rounded-full border border-neutral-200/70 dark:border-neutral-800/60 px-3 py-1.5 text-sm text-neutral-700 dark:text-neutral-300"
              >
                {t}
              </li>
            ))}
          </ul>
        </DetailSection>

        {/* Flexible Outcome */}
        <section>
          <h2 className="text-lg md:text-xl font-semibold tracking-tight">Outcome</h2>
          <div className="mt-3 space-y-5">
            {renderOutcome(project.outcome)}
          </div>
        </section>

        <DetailSection title="Lessons">
          <ul className="list-disc ml-5 space-y-2 text-[0.98rem] leading-7">
            {project.lessons.map((l, i) => <li key={i}>{l}</li>)}
          </ul>
        </DetailSection>
      </div>
    </article>
  );
}

function DetailSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg md:text-xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-3 text-[0.98rem] leading-7">
        {children}
      </div>
    </section>
  );
}


/** Outcome renderer: supports string or blocks (text, image, gallery) */
function renderOutcome(outcome: Project["outcome"]) {
  // plain string → one paragraph (supports **bold**/*italic* if you use InlineText)
  if (typeof outcome === "string") {
    return (
      <p className="text-[0.98rem] leading-7 whitespace-pre-line">
        <InlineText text={outcome} />
      </p>
    );
  }

  return outcome.map((block, idx) => {
    switch (block.type) {
      case "text":
        return (
          <p key={idx} className="text-[0.98rem] leading-7 whitespace-pre-line">
            <InlineText text={block.content} />
          </p>
        );

      case "image":
        return (
          <figure key={idx}>
            <ProjectImage
              image={block.image}
              display="intrinsic"                          
              className="overflow-visible"
              imgClassName="w-auto h-auto max-w-full object-contain"
              sizes="(min-width:1024px) 896px, 100vw"
            />
            {block.caption && (
              <figcaption className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                {block.caption}
              </figcaption>
            )}
          </figure>
        );

      case "gallery": {
        const cols = block.columns ?? 2;
        return (
          <figure key={idx}>
            <div
              className={clsx(
                "grid gap-3",
                cols === 3
                  ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                  : "grid-cols-1 sm:grid-cols-2"
              )}
            >
              {block.images.map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden">
                  <ProjectImage
                    image={{ ...img, aspectRatio: img.aspectRatio ?? "3/2" }}
                    className="aspect-[3/2]"
                    imgClassName="object-cover"
                    sizes={
                      cols === 3
                        ? "(min-width:1024px) 280px, (min-width:640px) 45vw, 100vw"
                        : "(min-width:640px) 45vw, 100vw"
                    }
                  />
                </div>
              ))}
            </div>
            {block.caption && (
              <figcaption className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                {block.caption}
              </figcaption>
            )}
          </figure>
        );
      }

      default:
        return null;
    }
  });
}


//function normalizeProcess(p: Project["process"]) {
//return Array.isArray(p) ? p.join("\n\n") : p; // join array lines into paragraphs }


function renderProcessSingleColumn(process: Project["process"]) {
  // Legacy support: string or string[]
  if (typeof process === "string") {
    return (
      <div className="detail-content">
        <p className="text-base md:text-[1.05rem] leading-7 whitespace-pre-line">
          <InlineText text={process} />
        </p>
      </div>
    );
  }
  if (Array.isArray(process) && typeof process[0] === "string") {
    const joined = (process as string[]).join("\n\n");
    return (
      <div className="detail-content">
        <p className="text-base md:text-[1.05rem] leading-7 whitespace-pre-line">
          <InlineText text={joined} />
        </p>
      </div>
    );
  }

  // Blocks: text + images in a single column
  const blocks = process as ProcessBlock[];
  return (
    <div className="detail-content space-y-6">
      {blocks.map((b, i) => {
        if (b.type === "text") {
          return (
            <p
              key={i}
              className="text-base md:text-[1.05rem] leading-7 whitespace-pre-line"
            >
              <InlineText text={b.content} />
            </p>
          );
        }
        // image
        return (
          <figure key={i}>
            <ProjectImage
              image={b.image}
              display="intrinsic" // use provided width/height, no forced aspect ratio
              className="overflow-visible"
              imgClassName="w-auto h-auto max-w-full object-contain"
              sizes="(min-width:1024px) 896px, 100vw"
            />
            {b.caption && (
              <figcaption className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                {b.caption}
              </figcaption>
            )}
          </figure>
        );
      })}
    </div>
  );
}