export type Category = "design" | "business" | "technical";
export type SubCategory = string;

export type ProjectImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  aspectRatio?: string; // e.g. "16/9" | "3/2" | "1/1"
};

/** Outcome content building blocks */
export type OutcomeText = { type: "text"; content: string };
export type OutcomeImage = {
  type: "image";
  image: ProjectImage;
  caption?: string;
};
export type OutcomeGallery = {
  type: "gallery";
  images: ProjectImage[];
  caption?: string;
  columns?: 2 | 3; // default 2
};

export type OutcomeBlock = OutcomeText | OutcomeImage | OutcomeGallery;
export type ProcessText = { type: "text"; content: string };
export type ProcessImage = {
  type: "image";
  image: ProjectImage;   // give width & height for natural sizing
  caption?: string;
};
export type ProcessBlock = ProcessText | ProcessImage;


export type Project = {
  slug: string;
  name: string;
  categories: Category[]; // (multi-category from earlier)
  subCategory: SubCategory;
  image: ProjectImage;
  overview: string;
  description: string;
  role: string[];
  process: string | string[] | ProcessBlock[];
  tool: string[];
  /** Flexible outcome: keep backward-compat with string */
  outcome: string | OutcomeBlock[];
  lessons: string[];
};

