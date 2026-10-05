export interface AchievementItem {
  id: string;
  year: string;
  category: "Competition" | "Seminar" | "Workshop" | "Academic Milestone" | "Scholarship";
  title: string;
  organization: string;
  description: string;
  isPlaceholder?: boolean;
}

export const achievementsData: AchievementItem[] = [
  {
    id: "achievement-1",
    year: "2025",
    category: "Competition",
    title: "Inter-College Mathematics Symposium & Problem Challenge",
    organization: "Regional Mathematics Olympiad Society",
    description:
      "Participated in rigorous mathematical problem-solving challenge focused on higher algebra, real calculus, and combinatorial structures.",
  },
  {
    id: "achievement-2",
    year: "2024",
    category: "Seminar",
    title: "Departmental Student Seminar Presentation",
    organization: "University Department of Mathematics",
    description:
      "Delivered an academic presentation on eigenvalues, geometrical transformations, and real-world matrix models.",
  },
  {
    id: "achievement-3",
    year: "2024",
    category: "Workshop",
    title: "Workshop on Analytical Methods & Scientific Typesetting",
    organization: "Inter-University Mathematical Society",
    description:
      "Attended hands-on technical workshop covering LaTeX documentation for mathematical theorems and scientific research articles.",
  },
  {
    id: "achievement-4",
    year: "2023",
    category: "Academic Milestone",
    title: "Commencement of Bachelor’s Degree in Mathematics",
    organization: "University Department of Mathematics",
    description:
      "Enrolled in the undergraduate Mathematics honors program, commencing rigorous higher mathematical training and analysis.",
  },
];
