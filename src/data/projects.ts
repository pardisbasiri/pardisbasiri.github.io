import type { Project, Category } from "@/types/project";

export const PROJECTS: Project[] = [

// SAFE SPOT
  {
  slug: "safespot",
  name: "Safespot",
  categories: ["design"], // Design project
  subCategory: "UX Research, Prototyping, Usability Testing, Interaction Design, User Personas, A/B Testing, Survey, Interview",
  image: {
  src: "/images/safespot.png", // ← leading slash, maps to public/images/safespot.png
  alt: "Safespot app mockups showing safety heat map and route guidance",
  width: 3000,           // 👈 add this
  height: 2000,          // 👈 and this
  aspectRatio: "3/2",          // try "16/9" if you prefer a wider crop
},
  overview:
    "An application designed to help solo travelers, especially women, explore confidently through real-time insights, community feedback and safety based navigation map.",
  description:
    "Traveling alone in a new city can be exciting but also uncertain, especially at night. After moving abroad for our studies, we experienced firsthand how difficult it was to find reliable, up-to-date safety information. Many solo travelers, particularly women, face the same challenge. Existing solutions often lack clarity, trust, or relevance. \n \n To address this, we designed Safespot, a user-centered application developed through in-depth user research and iterative prototyping. We tested our designs with real users through usability testing and A/B testing to refine the experience. \n \n The result is a mobile app prototype that brings together real-time safety insights, community feedback, and safer navigation to help travelers explore with confidence.",
  role: [
    "Led the end-to-end design process in collaboration with a design partner.",
  ],
  process: [
{ type: "text", content: "We followed the Double Diamond framework because it helped us stay focused while still giving space to explore. It let us dive deep into understanding real user needs before narrowing down and building a solution that truly made sense for them. \n \n •  **Discover**  \n We began by identifying the core problem: the lack of reliable safety information for solo travelers, especially women. Through informal interviews and market research, we explored how this gap impacted travel experiences and decisions and we validated the problem. \n \n •  **Define**  \n In the Value Proposition phase, we brainstormed how to create meaningful value for users. This led us to develop a detailed Customer Profile based on our user needs. From there, we defined our core offering, an app that blends up-to-date safety information with community insights. \n We came up with different possible approaches to solve the problem, compared them with current solutions in the market, and again through user research, we chose the main features and core offering. As an example, we found out most of the users are always trying to get the safety information from a trusted person instead of relying on online data, because safety is a subjective feature. Mentally, they can evaluate if a place is considered safe to my friend based on her personality, it is very safe to me based on my definition of safety. These unconscious thinking processes were detected during user interviews and led us to deciding to have a community feedback feature. \n \n •  **Develop**  \n After that, using a Design Sprint approach, we explored multiple directions for developing and rapidly ideated on key features. As an example, after we detected we need to build a trustable community for users, because asking someone you know is not always an option, we proposed to let users write stories about their safety experience somewhere, label it with day/night or accessibility safety for clean categorization, and let users add pictures to their writing so it will have an evidence for their claim. Other people can give opinion on their claim, so more support will create more trust, and we considered to have a validation mechanism for users based on their activity in this community (activities of informing others). \n We also understood the safety situation of the place highly depends on the time. It can be different in one or two years, for example, so we decided to put a date for the information so up-to-date information will again add to that trustability factor." },

// 👇 inline image between paragraphs
{
type: "image",
image: {
src: "/images/safespot-process-1.png", // put the file under /public/images/
alt: "Affinity clusters from user interviews",
width: 1915,  // natural pixel size
height: 1277,
},
caption: "The final prototype of community feature after mentioned actions",
},

{ type: "text", content: "Next to these we created a mood board to guide the visual tone, then moved into interactive wireframing and prototyping the main task of the platform." },

{ type: "text", content: "•  **Deliver**  \n We built low- and high-fidelity prototypes to integrate the main features: general safety information, a safety heat map with safe route navigation, and community-based safety feedback. \n We conducted multiple usability tests with target users, including **5-second testing** to evaluate first impressions and the clarity of key screens. We also used the **User Experience Questionnaire (UEQ)** to gather structured feedback on the overall experience and perception of the product. \n \n Here is one change we made based on the user testing: \n " }, 

{
type: "image",

image: {
src: "/images/safespot-process-2.png", // put the file under /public/images/
alt: "Affinity clusters from user interviews",
width: 1915,  // natural pixel size
height: 1277,
},
caption: "Introducing new component",
},

{ type: "text", content: "We had introduced a new component that was unfamiliar to users. In this component, they could get an overview of the safety of a location using three icons, indicating safety during the day, safety during the night, and accessibility across the city. By clicking on the component, users could see more detailed information based on each factor. \n However, users weren’t able to recognize what the component was showing, or that it was even clickable. So in the second iteration, we added a label inside the component that said “Safety Info.” We also introduced a subtle animation: the component would briefly blur with a message saying “Click for more information,” which then disappeared after a delay. We finalized the delay timing using **A/B testing** with our target users." },

],


  tool: ["Figma", "Excel", "Lookback", "Miro"],
  outcome: [
    { type: "text", content: "The final result was a tested prototype of the main pages and core features." },

{
type: "image",
image: {
src: "/images/safespot-outcome-1.png",  // put the file under /public/images/
alt: "Before/after completion chart",
width: 1700,   // real pixel size
height: 1133
},
caption: "Sample Snapshots"
},
  ],
  lessons: [
    "We realized how important it is to be careful when introducing new components in a design. What seems obvious to us as designers isn’t always clear to users.",
    "Even small interactions sometimes need subtle guidance to help users understand how to engage with them without creating confusion.",
    "One of the key takeaways was the value of aligning the design with users’ mental models—when things work the way people expect, the whole experience feels smoother and more intuitive."
  ],
},

// DANCE EMOTION MAP
{
  slug: "dance-emotion-map",
  name: "Harmonic Motion",
  categories: ["technical"],
  subCategory:
    "Affective Computing, Multisensory Interaction, Motion Analysis, Haptics, UX Research, Prototyping, Data Analysis, Python, Arduino/Teensy",
  image: {
    src: "/images/danceemotion.png",
    alt: "Minimalist abstract cover showing two Latin dancers with flowing lines and data dots representing emotional connection",
    width: 3000,
    height: 2000,
    aspectRatio: "3/2"
  },
  overview:
    "A Research Proposal and Under Development Prototype for Measuring Musical and Interpersonal Synchrony in Latin Dance.",
  description:
    "This study explores synchrony in Latin dance as a bridge between affective computing and embodied emotion research. The goal is to measure how synchronized two dancers are with the music and with each other using motion and touch data. By quantifying timing, energy, and connection patterns, we aim to understand whether physical synchrony can serve as a measurable indicator of emotional connection.",
  role: [
    "Designed research methodology and synchrony metrics framework",
    "Implementing data processing and feature extraction in Python",
    "Planned prototype setup for IMU and FSR-based sensing and visualization"
  ],
  process: [
    {
      type: "text",
      content:
        "•  **Research Goal**  \n To measure how synchronized two Latin dancers are with the music and with each other, by analyzing body movement timing and touch pressure as indicators of emotional and physical connection.",
    },
    {
      type: "text",
      content:
        "•  **Research Questions**  \n – How well do individual dancers align their movement features (e.g., energy, smoothness, rhythm) with the emotional features of Latin music?  \n – How well are two dancers synchronized with each other in timing, energy, and connection pressure?  \n – Can physical synchrony (in motion and touch) serve as a measurable indicator of emotional connection between partners?",
    },
    {
      type: "text",
      content:
        "•  **Methodology – Step 1: Measuring Individual Synchrony with Music**  \n **Data:** IMU/accelerometer data from each dancer; audio features from the music.  \n **Music Features (via Librosa):** tempo, energy (RMS), spectral flux, and mode (valence).  \n **Movement Features (via IMU):**  \n – RMS of acceleration → movement energy  \n – Variance → smoothness  \n – Jerk → expressivity  \n – Autocorrelation → rhythmic stability (beat-following accuracy)  \n **Analysis:** Cross-correlate motion features with the beat and energy profile of the song to assess alignment. Higher correlation indicates stronger individual synchrony with music.",
    },
  
    {
      type: "text",
      content:
        "•  **Methodology – Step 2: Measuring Interpersonal Synchrony**  \n **Data:** Motion features from both dancers + touch data from FSR sensors (hands/elbows).  \n **Features:**  \n – Cross-correlation of acceleration signals → movement synchrony between partners  \n – Pressure variance and rhythm in FSR readings → consistency and timing of touch connection  \n – Combined movement-touch synchrony index (weighted average or PCA-derived composite).  \n **Analysis:** Check if higher synchrony with music (from Step 1) predicts higher interpersonal synchrony, and correlate synchrony metrics with perceived emotional connection (optional subjective rating).",
    },
    {
      type: "text",
      content:
        "•  **Tools and Techniques**  \n **Music Analysis:** Librosa – extract tempo, energy, valence/arousal  \n **Motion Analysis:** numpy, scipy.signal – compute RMS, jerk, autocorrelation, cross-correlation  \n **Touch Analysis:** FSR sensors – measure hand/elbow pressure and consistency  \n **Modeling:** Correlation, Regression – quantify relationships between synchrony and emotion  \n **Visualization:** Heatmaps, time-aligned plots, synchrony scatterplots – show patterns of alignment and connection.",
    },
  ],
  tool: [
    "Python librosa",
    "numpy",
    "scipy",
    "pandas",
    "matplotlib",
    "Arduino",
    "Teensy 3.6",
    "Figma"
  ],
  outcome: [
    {
      type: "text",
      content:
        "Currently Research Proposal \n Expecting: A linked audio–movement–touch dataset, quantitative analysis showing relationships between music arousal and movement energy and synchrony, and a functional haptic prototype that communicates musical emotion through touch."
    },
  ],
  lessons: [
    "Operational definitions matter. Clear feature choices make emotion–movement links interpretable.",
    "Simple models with good features can reveal strong patterns before jumping to complex architectures.",
    "Haptic mappings benefit from tight coupling to musical structure. Rhythm-aligned pulses improved perceived meaning."
  ]
},


// SETTLE SUPPORT
{
  slug: "settles-support",
  name: "Settles Support",
  categories: ["design", "business"],
  subCategory: "Business Modeling, User & Market Research, Product Strategy & Roadmapping",
  image: {
    src: "/images/settlesupport.png", 
    alt: "Settles Support placeholder",
    aspectRatio: "3/4",
    width: 1400, height: 800, 
  },
  overview: "An award-winning venture design project aimed at reducing misinformation and errors in migration and asylum procedures through a digital assistant platform.",
  description: "Migrants and asylum seekers face overwhelming complexity, unclear processes, and high rejection risks due to administrative errors. In 2024, Spain rejected 81% of the asylum applications and many were linked to avoidable mistakes. Our work analyzed the problem space, validated the need, mapped market opportunities, and designed a sustainable business model and a sample prototype for a multilingual digital assistant.",
  role: ["In a team with domain experts, technical experts, and another designer, my focus was on ideation, market research, business modeling, and prototyping."],
  process: "We followed the **Value Proposition Design (VPD)** framework, starting from the problem space and moving toward a clear business model and roadmap. \n \n •  **Identify the Problem & Proof of Need**  \n We began by analyzing the complexity of Spain’s asylum procedures through desk research and NGO reports. We quantified the issue: over 30% of rejections stem from administrative mistakes, and more than 65% of applicants don’t fully understand the process. These findings confirmed both the urgency and scale of the problem. \n \n •  **Define Personas**  \n We created user personas to represent typical migrant profiles, focusing on pain points such as language barriers, unclear deadlines, and reliance on informal support networks. These profiles grounded our business assumptions in real user needs. \n \n •  **Analyze Market Trends & Opportunities**  \n We studied industry reports and official statistics to size the market (TAM/SAM/SOM). Spain received 167,000+ asylum applications in 2024, with rising demand for guidance tools. We also identified high mobile adoption (85%) among migrants, signaling feasibility for a digital solution. \n \n •  **Design Business Model & Value Proposition**  \n Using Strategyzer’s Value Proposition Canvas and Business Model Canvas, we mapped user pains, gains, and jobs-to-be-done against features and revenue models. We framed the value in behavioral economics terms (loss aversion, cognitive overload) and defined a freemium model with pay-per-service add-ons. \n \n •  **Generate & Test Solutions**  \n Through ideation workshops in Miro, we explored different solution paths. We then developed a prototype in Figma of a digital assistant that provides step-by-step legal roadmaps and urgent service guidance. This helped visualize how the product could address both emotional stress and practical errors. \n \n •  **Roadmap**  \n We outlined a phased rollout roadmap with milestones for B2C adoption and B2B/B2G partnerships.",       
  tool: ["Value Proposition Canvas", "Business Model Canvas", "Market Sizing Models", "Miro", "Canva", "Figma"],
  outcome: [{ type: "text", content:"We produced a validated value proposition, business model, pitch deck and Figma prototype. Pitched the idea and got awarded Business Scalability Award at OdiselA4Good Hackathon and advanced through the first two rounds of the UPM Business Creation Competition."},
    {
type: "image",
image: {
src: "/images/settlesupport-outcome.png",  // put the file under /public/images/
alt: "Before/after completion chart",
aspectRatio: "2/3",
width: 3000,   // real pixel size
height: 2000

},
caption: "Sample Snapshots"
},
  ],

  lessons: ["Learned how to translate complex social challenges into viable business opportunities and use empathy to create value.", 
    "Experienced collaborating in a very diverse team with different expertise, not just similar backgrounds.",
    "Figured out how to validate ideas when enough direct user interviews are not possible and how to rely on alternative methods.",
    "Explored how to design a profitable business model when helping a group with limited ability to pay.",
  ],
},

// GRADING ASSIST
{
  slug: "grading-assist",
  name: "Grading Assist",
  categories: ["design", "technical"],
  subCategory: "Front End Developing, Qualitative Research, Prototyping, Usability Testing, Accessibility Design",
  image: {
    src: "/images/gradingassist.png", 
    alt: "Grading Assist placeholder",
    aspectRatio: "3/2",
    width: 3000, height: 2000, 
  },
  overview: "A web-based tool to help educators evaluate group work more fairly and efficiently through flexible grading, quick feedback, and clear overviews of student performance.",
  description: "We designed Grading Assist using a user-centered method to make group activities easier to manage and evaluate. Starting with contextual inquiries and interviews, we observed how students and teachers approached group work and grading in real situations. These insights revealed a gap not only in fairness but also in workflow and communication. We then defined the requirements for a system that supports flexible grading, quick feedback, and clear overviews of each student’s performance. \n During first iteration we had two low-fidelity prototypes to test mental models and task flows using the thinking-aloud method, focusing on efficiency, effectiveness, and user satisfaction. After selecting the stronger approach, we built a high-fidelity prototype and oversaw its implementation using Next.js and Tailwind CSS, with a strong emphasis on UX and accessibility over UI polish. Finally, we tested the high-fidelity prototype with real users, measuring performance, satisfaction (using the SUS questionnaire), and user experience (using the UEQ questionnaire) to validate and refine the design.",
  role: ["Contributed to all stages of the project, from research and design to front-end development with two teammates."],
  process: "We followed a User-Centered Design (UCD) process to explore the problem space, understand real user needs, and iteratively design and test a solution with a strong focus on usability and accessibility. \n \n •  **Understand the Context of Use**  \n  Methods used: Contextual Inquiry, Semi-structured Interviews \n \n We began with the initial assumption that students were receiving unfair grades in group activities. Our first round of research targeted students using contextual inquiry embedded in interviews. We engaged participants in open conversations and asked them to demonstrate how they approached group work and grading. Student insights revealed that fairness wasn't always a concern, some contributed little and didn’t care about grades, while others didn’t mind unequal contributions as long as the workflow wasn’t disrupted. \n We also interviewed teachers, which revealed a more critical problem: the need to evaluate individual student contributions fairly, despite being limited by rigid grading rubrics. Teachers often resorted to time-consuming written feedback to compensate. \n \n •  **Specify User Requirements**  \n  Methods used: Problem Reframing, Affinity Mapping, Task Definition \n \n Based on the teacher interviews, we pivoted our focus from student-side fairness to improving the grading workflow for educators. By reframing the problem as the need for a flexible and efficient system for individual grading and feedback, we brainstormed key features and defined system requirements, including: A dashboard showing attendance, grades, and activity data per student. A direct communication channels with students An editable, adaptive rubrics based on real-time needs. \n After that we identified four main user tasks and mapped out the system navigation accordingly. \n \n •  **Produce Design Solutions**  \n  Methods used: Paper Prototyping, Comparative Evaluation, Thinking-Aloud Protocol \n \n To explore how different approaches might fit teachers’ mental models, we developed two distinct low-fidelity paper prototypes. These early prototypes helped us focus purely on task flow and functionality, without the distraction of visual design. We tested both using the thinking-aloud method, where users verbalize their thoughts while completing tasks. This allowed us to evaluate efficiency, effectiveness, and user satisfaction. After analyzing the results, we selected the more intuitive version for further development. \n \n •  **Evaluate the Design**  \n  Methods used: Usability Testing, A/B Testing, SUS & UEQ Questionnaires \n \n We translated the selected prototype into a high-fidelity version using Figma, and then implemented the interface using Next.js and Tailwind CSS. Our development phase maintained a strong focus on UX and accessibility, keeping the UI minimal to avoid unnecessary complexity. All of the components were designed according to accessibility standards and had keyboard shortcuts based on the target users'prefrence from interviews. \n In the final evaluation phase, we conducted usability testing to assess task performance and used both the System Usability Scale (SUS) and the User Experience Questionnaire (UEQ) to measure user satisfaction and perception.",       
  tool: ["Figma", "Excel", "Next.js 15", "Tailwind CSS"],
  outcome: "Validated interface of the main tasks of the system coded with Next.js and Tailwind CSS.",       // accepts string or blocks; left empty for now
  lessons: ["Learned how to design structured interview and testing templates that made note-taking more efficient and insights easier to extract and share.", 
    "Recognized the value of setting the right tone in usability sessions—clear framing and a relaxed atmosphere led to more authentic and useful feedback.",
  "Found paper prototyping especially effective in early stages, as it kept the focus on core interactions without visual distractions.",
"Refined our approach to using think-aloud protocols, applying them selectively based on whether we needed to understand user reasoning or observe natural behavior."],
},


];

export const CATEGORIES: Category[] = ["design", "business", "technical"];

export function getCategories(): Category[] {
  return CATEGORIES;
}

export function getAllProjects(): Project[] {
  return PROJECTS;
}

export function getProjectsByCategory(category: Category | "all"): Project[] {
  return category === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.categories.includes(category));
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

/** Use the first category as the canonical path segment */
export function getCanonicalCategory(p: Project): Category {
  return p.categories[0];
}

/** Convenience: build the detail URL for a project */
export function getProjectPath(project: Project, category?: Category | "all") {
  if (category === "all") {
    const canon = getCanonicalCategory(project);
    return `/${canon}/${project.slug}?from=all`; // 👈 remember we came from All
  }
  const cat = category ?? getCanonicalCategory(project);
  return `/${cat}/${project.slug}`;
}
