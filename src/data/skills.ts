export interface SkillItem {
  id: string;
  name: string;
  categoryTag: string;
  focus: string;
  mathSymbol: string;
  proficiencyLevel: "Core Foundation" | "Advanced Focus" | "Proficient" | "Active Exploration";
  description: string;
  keyTopics: string[];
}

// Exported for backward compatibility
export interface SkillCategory {
  categoryName: string;
  categoryTag: string;
  description: string;
  skills: SkillItem[];
}

export const skillsData: SkillItem[] = [
  {
    id: "math-problem-solving",
    name: "Mathematics & Problem Solving",
    categoryTag: "01 / THEORETICAL FOUNDATION",
    mathSymbol: "∀ ⟹ ∃",
    proficiencyLevel: "Advanced Focus",
    focus: "Formal deductive reasoning, proof structures & mathematical logic.",
    description: "Formulating axiomatic arguments, analyzing logical invariants, and approaching complex problem sets with structured rigor.",
    keyTopics: [
      "Mathematical Proofs",
      "Analytical Logic",
      "Problem Solving",
      "Deductive Reasoning",
    ],
  },
  {
    id: "web-development",
    name: "Web Development",
    categoryTag: "02 / FRONTEND ESSENTIALS",
    mathSymbol: "</>",
    proficiencyLevel: "Proficient",
    focus: "Structured semantic markups, responsive styling & client-side interactivity.",
    description: "Building responsive, modern interfaces with HTML5, elegant styling and typography with CSS3, and interactive logic using JavaScript.",
    keyTopics: [
      "HTML5",
      "CSS3",
      "JavaScript (JS)",
      "Responsive Layouts",
    ],
  },
  {
    id: "academic-tech-tools",
    name: "Academic & Tech Tools",
    categoryTag: "03 / TOOLS & COMPUTING",
    mathSymbol: "\\LaTeX",
    proficiencyLevel: "Proficient",
    focus: "Mathematical typesetting, function plotting & modern digital workflows.",
    description: "Authoring publication-quality mathematical papers with LaTeX, visual exploration via GeoGebra and Desmos, and Git version control.",
    keyTopics: [
      "LaTeX Typesetting",
      "GeoGebra / Desmos",
      "Git & GitHub",
      "Spreadsheets",
    ],
  },
];
