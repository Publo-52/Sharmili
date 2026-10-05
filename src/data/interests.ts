export interface InterestArea {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  mathNotation: string;
  equationOrConcept: string;
  description: string;
  subfields: string[];
}

export const interestAreas: InterestArea[] = [
  {
    id: "pure-math",
    number: "01",
    title: "Pure Mathematics",
    subtitle: "Beauty in abstract truth and axioms",
    mathNotation: "∀x ∈ S, ∃! y",
    equationOrConcept: "e^{iπ} + 1 = 0",
    description:
      "Studying mathematical structures independently of any application outside mathematics. Exploring how axioms give rise to elegant internal symmetry and unyielding truth.",
    subfields: ["Abstract Algebra", "Topology", "Number Theory", "Set Theory"],
  },
  {
    id: "applied-math",
    number: "02",
    title: "Applied Mathematics",
    subtitle: "Mathematical modeling of the physical realm",
    mathNotation: "∇²u = 0",
    equationOrConcept: "dy/dx = f(x, y)",
    description:
      "Formulating mathematical models for dynamic phenomena in physics, engineering, and nature. Bridging pure theories with continuous real-world mechanisms.",
    subfields: ["Differential Equations", "Dynamical Systems", "Optimization", "Fluid Models"],
  },
  {
    id: "problem-solving",
    number: "03",
    title: "Problem Solving",
    subtitle: "Structured decomposition & clarity",
    mathNotation: "P ⇒ Q ≡ ¬Q ⇒ ¬P",
    equationOrConcept: "Decomposition: S = ⋃ Sᵢ",
    description:
      "Breaking complex problems into smaller, understandable steps. The joy of persisting through ambiguity until an elegant logical resolution emerges.",
    subfields: ["Invariant Principles", "Inductive Reasoning", "Algorithmic Logic", "Contradiction Proofs"],
  },
  {
    id: "mathematical-analysis",
    number: "04",
    title: "Mathematical Analysis",
    subtitle: "Limits, continuity, and infinite precision",
    mathNotation: "∀ε > 0, ∃δ > 0",
    equationOrConcept: "|x - c| < δ ⟹ |f(x) - L| < ε",
    description:
      "The rigorous study of limits, continuity, integration, and metric spaces. Understanding how infinity is tamed through meticulous epsilon-delta precision.",
    subfields: ["Real Analysis", "Metric Spaces", "Sequences & Series", "Measure Theory"],
  },
  {
    id: "statistics",
    number: "05",
    title: "Statistics",
    subtitle: "Reasoning under uncertainty",
    mathNotation: "E[X] = ∫ x f(x) dx",
    equationOrConcept: "P(A|B) = [P(B|A) · P(A)] / P(B)",
    description:
      "Quantifying likelihood and extracting meaningful inferences from empirical distributions. Understanding how random processes yield coherent aggregate laws.",
    subfields: ["Probability Theory", "Hypothesis Testing", "Estimation Theory", "Stochastic Variables"],
  },
  {
    id: "data-and-patterns",
    number: "06",
    title: "Data & Patterns",
    subtitle: "Finding order within multivariable complexity",
    mathNotation: "A = U Σ Vᵀ",
    equationOrConcept: "λ v = A v",
    description:
      "Uncovering geometric and algebraic patterns in high-dimensional datasets. Visualizing projections, eigen-decompositions, and underlying latent geometries.",
    subfields: ["Linear Projections", "Information Geometry", "Spectral Analysis", "Pattern Recognition"],
  },
];
