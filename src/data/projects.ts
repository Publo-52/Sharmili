export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: "Academic Assignment" | "Mathematics Project" | "Seminar Presentation" | "Data Analysis" | "Research Study";
  year: string;
  shortDescription: string;
  fullDescription: string;
  toolsAndConcepts: string[];
  equationVisual: string;
  mathTopic: string;
  visualType: "geometric-spiral" | "fourier-wave" | "vector-field" | "normal-curve";
  accentFormula: string;
  featured?: boolean;
  linkText?: string;
  isPlaceholder?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "project-real-analysis",
    number: "01",
    featured: true,
    title: "Exploration of Sequences, Metric Spaces & Convergence",
    category: "Mathematics Project",
    year: "2025",
    shortDescription:
      "A structured investigation into Cauchy sequences, completeness of ℝⁿ, and topological open coverings, accompanied by analytical proofs.",
    fullDescription:
      "This academic study delves into the core tenets of Real Analysis. It examines the Bolzano-Weierstrass theorem, metric space completeness, and uniform continuity. Prepared as an in-depth undergraduate project, it emphasizes rigorous epsilon-delta formulations and counter-examples that illuminate pathological mathematical cases.",
    toolsAndConcepts: [
      "Real Analysis",
      "Metric Spaces",
      "Epsilon-Delta Proofs",
      "LaTeX Typesetting",
      "Topology Basics",
    ],
    mathTopic: "Analysis & Metric Topology",
    equationVisual: "d(x, z) ≤ d(x, y) + d(y, z)",
    visualType: "geometric-spiral",
    accentFormula: "lim_{n → ∞} a_n = L ⟺ ∀ε > 0, ∃N : |a_n - L| < ε",
    linkText: "View Project Details →",
  },
  {
    id: "project-ode-numerical",
    number: "02",
    featured: false,
    title: "Comparative Study of First-Order Differential Equations",
    category: "Academic Assignment",
    year: "2024",
    shortDescription:
      "Analytical solutions vs. numerical approximations for non-linear first-order differential equations modeling rate-of-change systems.",
    fullDescription:
      "A coursework assignment exploring exact, separable, and integrating factor methods for first-order ODEs. Examines directional fields, slope geometry, and local stability around equilibrium points with comparative approximation methods.",
    toolsAndConcepts: [
      "Differential Equations",
      "Direction Fields",
      "Euler's Approximation",
      "Mathematical Modeling",
    ],
    mathTopic: "Ordinary Differential Equations",
    equationVisual: "dy/dx + P(x)y = Q(x)",
    visualType: "vector-field",
    accentFormula: "I(x) = exp(∫ P(x) dx)",
    linkText: "View Project Details →",
  },
  {
    id: "project-discrete-probability",
    number: "03",
    featured: false,
    title: "Statistical Modeling & Discrete Probability Distributions",
    category: "Data Analysis",
    year: "2024",
    shortDescription:
      "Empirical analysis evaluating Poisson, Binomial, and Normal approximations with variance estimation and hypothesis checks.",
    fullDescription:
      "An analytical assignment focused on the Law of Large Numbers and Central Limit Theorem. Evaluates sample distributions against theoretical limits, demonstrating how discrete trials converge toward Gaussian geometry as sample size increases.",
    toolsAndConcepts: [
      "Probability Theory",
      "Poisson Distribution",
      "Central Limit Theorem",
      "Hypothesis Testing",
    ],
    mathTopic: "Probability & Inferential Statistics",
    equationVisual: "P(X = k) = (λ^k e^{-λ}) / k!",
    visualType: "normal-curve",
    accentFormula: "Z = (X̄ - μ) / (σ / √n) ~ N(0, 1)",
    linkText: "View Project Details →",
  },
  {
    id: "project-matrix-eigenvalues",
    number: "04",
    featured: false,
    title: "Linear Transformations & Spectral Decompositions",
    category: "Seminar Presentation",
    year: "2025",
    shortDescription:
      "A classroom seminar presentation demonstrating geometric interpretations of eigenvalues, eigenspaces, and matrix diagonalizability.",
    fullDescription:
      "Delivered as an interactive departmental seminar presentation. Showcased how linear transformations deform Euclidean space, the invariant lines defined by eigenvectors, and real-world applications in Markov chains and vibrational modes.",
    toolsAndConcepts: [
      "Linear Algebra",
      "Characteristic Polynomials",
      "Eigenvalue Decomposition",
      "Academic Presentation",
    ],
    mathTopic: "Linear Algebra & Spectral Theory",
    equationVisual: "det(A - λI) = 0",
    visualType: "fourier-wave",
    accentFormula: "A v = λ v",
    linkText: "View Project Details →",
  },
];
