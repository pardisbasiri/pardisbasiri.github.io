import type { Project, Category } from "@/types/project";

export const PROJECTS: Project[] = [

// SAFE SPOT
  {
  slug: "safespot",
  name: "Safespot",
  categories: ["design"], 
  subCategory: "UX Research, Prototyping, Usability Testing, Interaction Design, User Personas, A/B Testing, Survey, Interview",
  image: {
  src: "/images/safespot.png", 
  alt: "Safespot app mockups showing safety heat map and route guidance",
  width: 3000,          
  height: 2000,          
  aspectRatio: "3/2",          
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

{
type: "image",
image: {
src: "/images/safespot-process-1.png", 
alt: "Affinity clusters from user interviews",
width: 1915,  
height: 1277,
},
caption: "The final prototype of community feature after mentioned actions",
},

{ type: "text", content: "Next to these we created a mood board to guide the visual tone, then moved into interactive wireframing and prototyping the main task of the platform." },

{ type: "text", content: "•  **Deliver**  \n We built low- and high-fidelity prototypes to integrate the main features: general safety information, a safety heat map with safe route navigation, and community-based safety feedback. \n We conducted multiple usability tests with target users, including **5-second testing** to evaluate first impressions and the clarity of key screens. We also used the **User Experience Questionnaire (UEQ)** to gather structured feedback on the overall experience and perception of the product. \n \n Here is one change we made based on the user testing: \n " }, 

{
type: "image",

image: {
src: "/images/safespot-process-2.png", 
alt: "Affinity clusters from user interviews",
width: 1915, 
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
src: "/images/safespot-outcome-1.png",  
alt: "Before/after completion chart",
width: 1700,   
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
    "Multisensory Interaction, Haptics & Visual Feeback, UX Research, Prototype Testing, Arduino",
  image: {
    src: "/images/danceemotion.jpg",
    alt: "Image of the hardware prototype",
    width: 3000,
    height: 2000,
    aspectRatio: "3/2"
  },
  overview:
    "Hardware prototype of a multisensory wearable system for real-time feedback on hand connection in partnered dance.",
  description:
    "In partnered dance, pressure between connection points is one of the main ways partners communicate and stay in sync. But feedback about whether that connection is right usually comes from an external source, and it’s often delayed, not always accurate, or sometimes missed entirely. I designed this project to fill that gap by creating a system that can sense connection pressure and give immediate feedback during the interaction itself. The goal was not just to build a prototype, but to explore how feedback can be designed in a way that actually supports people in the moment. I developed a wearable system that captures continuous pressure input and translates it into feedback through vibration and light. A key decision was to use a personalized baseline instead of fixed thresholds, so the system adapts to each pair rather than enforcing a single definition of “correct” interaction. I also did a deep literature review and tested the system through multiple iterations to understand how different feedback modalities behave. This helped me compare trade-offs—like how visual feedback can pull attention away, while vibrotactile feedback integrates more naturally into the interaction. Overall, the project focuses on designing feedback that works with how people already perceive and communicate, instead of interrupting it.",
  role: [
    "Led the project end-to-end: concept, literature review, system design, hardware prototyping, and implementation",
    "Planned and organized testing sessions, including participant recruitment",
    "Conducted user studies, data collection, and analysis, iterating on the system based on finding"
  ],
  process: [
    {
type: "text",
content:
"• Problem & Opportunity \n In partnered dance, hand connection pressure is a key communication channel, but feedback about it usually comes from an external source and is often delayed, inconsistent, or missed. This creates a gap in real-time awareness. \n The opportunity was to design a system that makes this implicit signal visible and actionable during the interaction itself.",
},

{
type: "text",
content:
"• Design Approach \n Instead of correcting movement, I focused on supporting interaction. The system is built around translating a continuous physical signal (pressure) into minimal, real-time feedback that helps users adjust without interrupting their flow.",
},

{
type: "text",
content:
"• Key Design Decisions \n – Personalized baseline: Adapt feedback to each pair instead of using fixed thresholds \n – Event-based feedback: Trigger only when connection drops, avoiding constant noise \n – Modality exploration: Compare vibration, visual, and combined feedback \n – Non-intrusive design: Keep feedback lightweight and aligned with existing sensory channels",
},

{
type: "text",
content:
"• Prototyping & System Build \n I designed and built a wearable glove-based system with embedded pressure sensors and wrist-mounted feedback (vibration + LEDs). \n The system processes data in real time (sensing → normalization → event detection → feedback), with logic implemented on Arduino and a lightweight interface for control and logging.",
},

{
type: "text",
content:
"• Iteration & Testing \n The system was refined through two stages of testing. Early pilot sessions helped adjust sensor placement, feedback patterns, and wearability. Based on these insights, I improved signal stability, feedback clarity, and overall usability before final testing.",
},

{
type: "text",
content:
"• Validation \n I ran a user study with beginner dancers to compare feedback conditions (none, visual, vibration, combined). Both behavioral data (connection stability) and user feedback were collected to evaluate effectiveness and usability across modalities.",
},

{
type: "text",
content:
"• Outcome Insight \n Vibrotactile feedback performed best because it integrates naturally into the interaction without demanding attention, while visual feedback often disrupted focus. This highlighted the importance of designing feedback that works with the context, not against it.",
},
  ],
  tool: [
    "Arduino",
    "Pure Data",
    "FSR sensors",
    "Vibrotactile actuators",
    "LEDs",
    "Google Forms",
  ],
  outcome: [
    {
type: "text",
content:
"A fully functional wearable prototype and evaluated interactive system for real-time feedback on hand connection in partnered dance. \n\nThe study showed that vibrotactile feedback significantly improves awareness and correction of connection loss while maintaining natural interaction flow. Visual feedback, although interpretable, introduced attentional disruption. \n\nThe project contributes a novel interaction design approach by treating hand connection as a measurable and actionable signal, shifting focus from movement observation to relational interaction.",
},
  ],
  lessons: [
    "Feedback effectiveness is highly context dependent, adding modalities can reduce performance if they compete for attention",
    "People often feel confident even when they’re not aware of errors, analyzing system logs alongside user feedback helped uncover mismatches and interpret behavior more accurately",
    "Iteration through real testing is critical, small changes like sensor placement and vibration patterns had a big impact on usability"
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
src: "/images/settlesupport-outcome.png",  
alt: "Before/after completion chart",
aspectRatio: "2/3",
width: 3000,   
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

export function getCanonicalCategory(p: Project): Category {
  return p.categories[0];
}

export function getProjectPath(project: Project, category?: Category | "all") {
  if (category === "all") {
    const canon = getCanonicalCategory(project);
    return `/${canon}/${project.slug}?from=all`; 
  }
  const cat = category ?? getCanonicalCategory(project);
  return `/${cat}/${project.slug}`;
}
