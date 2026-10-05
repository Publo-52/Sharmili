export interface EducationEntry {
  period: string;
  mathMarker: string; // e.g. "t₀", "t₁", "t₂"
  degree: string;
  field: string;
  institution: string;
  status: string;
  expectedGraduation: string;
  highlights?: string[];
  keyCourses?: string[];
  notes?: string;
}

export const educationData: EducationEntry[] = [
  {
    period: "2024 — Present",
    mathMarker: "t₂",
    degree: "Bachelor of Science (B.Sc. Hons.)",
    field: "Mathematics (4-Year Undergraduate Degree Course)",
    institution: "Panskura Banamali College",
    status: "Undergraduate (4-Year Course)",
    expectedGraduation: "Expected: 2028",
    highlights: [
      "Enrolled in the 4-year undergraduate Honours degree program in Mathematics",
      "Rigorous study in pure and applied mathematics, analytical geometry, and calculus",
      "Focus on deductive mathematical proofs, logic, and analytical problem-solving",
    ],
    keyCourses: [
      "Real Analysis",
      "Classical & Abstract Algebra",
      "Calculus & Differential Equations",
      "Analytical Geometry & Vectors",
      "Linear Algebra",
    ],
    notes: "Currently pursuing 4-Year B.Sc. in Mathematics at Panskura Banamali College.",
  },
  {
    period: "2022 — 2024",
    mathMarker: "t₁",
    degree: "Higher Secondary Education (10+2)",
    field: "Science Stream with Mathematics",
    institution: "Bakcha V.J High School",
    status: "Completed (2024)",
    expectedGraduation: "Passing Year: 2024",
    highlights: [
      "Built a strong analytical foundation in Higher Secondary Science with Mathematics",
      "In-depth focus on Calculus, Trigonometry, Coordinate Geometry, and Mechanics",
    ],
    keyCourses: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Calculus & Geometry",
    ],
  },
  {
    period: "2020 — 2022",
    mathMarker: "t₀",
    degree: "Secondary Education (10th Standard / Madhyamik)",
    field: "General Academic Curriculum & Sciences",
    institution: "Bakcha V.J High School",
    status: "Completed (2022)",
    expectedGraduation: "Passing Year: 2022",
    highlights: [
      "Completed secondary education with strong fundamentals in Mathematics and Physical Sciences",
      "Developed early aptitude for logical reasoning and mathematical problem-solving",
    ],
    keyCourses: [
      "Mathematics",
      "Physical Science",
      "Life Science",
      "General Studies",
    ],
  },
];
