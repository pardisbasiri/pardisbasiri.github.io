import Image from "next/image";
import clsx from "clsx";
import type { ProjectImage as ProjectImageType } from "@/types/project";

type Props = {
  image: ProjectImageType;
  className?: string;     // wrapper
  imgClassName?: string;  // <Image />
  priority?: boolean;
  sizes?: string;
  /** NEW: choose rendering mode */
  display?: "responsive" | "intrinsic"; // ← add this
};

export default function ProjectImage({
  image,
  className,
  imgClassName,
  priority = false,
  sizes = "(min-width:1536px) 3000px, 100vw",
  display = "responsive",               // ← default
}: Props) {
  const { src, alt, aspectRatio = "16/9", width, height } = image;

  if (display === "intrinsic" && width && height) {
    // Use natural dimensions
    return (
      <figure className={clsx("overflow-hidden", className)}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={clsx("h-auto w-full object-cover", imgClassName)}
          sizes={sizes}
          priority={priority}
        />
      </figure>
    );
  }

  // Responsive aspect wrapper (fallback)
  return (
    <figure className={clsx("overflow-hidden", className)}>
      <div className={clsx("relative w-full", getAspectClass(aspectRatio))}>
        <Image
          src={src}
          alt={alt}
          fill
          className={clsx("object-cover", imgClassName)}
          sizes={sizes}
          priority={priority}
        />
      </div>
    </figure>
  );
}

function getAspectClass(ratio: string) {
  switch (ratio) {
    case "1/1":
    case "1:1": return "aspect-[1/1]";
    case "4/3":
    case "4:3": return "aspect-[4/3]";
    case "3/2":
    case "3:2": return "aspect-[3/2]";
    case "2/3":
    case "2:3": return "aspect-[2/3]";
    case "16/9":
    case "16:9":
    default:    return "aspect-[16/9]";
  }
}
