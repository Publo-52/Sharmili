export interface CertificateItem {
  id: string;
  title: string;
  issuingOrganization: string;
  issueDate: string;
  credentialId?: string;
  verificationUrl?: string;
  category: "Academic Workshop" | "Online Course" | "Symposium" | "Specialized Training";
  description: string;
  accentSymbol: string;
  isPlaceholder?: boolean;
}

export const certificatesData: CertificateItem[] = [
  {
    id: "cert-latex-scientific",
    title: "Scientific Documentation & LaTeX Typesetting",
    issuingOrganization: "Academic Typesetting & Mathematical Guild",
    issueDate: "November 2024",
    credentialId: "LATEX-MATH-2024-098",
    verificationUrl: "#",
    category: "Specialized Training",
    description:
      "Covering complex mathematical equations, theorem environments, bibliography compilation, and multi-page academic article layouts.",
    accentSymbol: "\\sum_{i=1}^n",
  },
  {
    id: "cert-math-modeling",
    title: "Introduction to Mathematical Modeling & Dynamics",
    issuingOrganization: "Inter-University Mathematical Society",
    issueDate: "June 2024",
    credentialId: "MATH-MODEL-7721",
    verificationUrl: "#",
    category: "Academic Workshop",
    description:
      "Fundamentals of translating rate-of-change phenomena into coupled differential systems with computational analysis.",
    accentSymbol: "dx/dt = f(x)",
  },
  {
    id: "cert-applied-prob",
    title: "Foundations of Probability & Inferential Statistics",
    issuingOrganization: "National Institute of Statistical Science",
    issueDate: "March 2024",
    credentialId: "STAT-PROB-4410",
    verificationUrl: "#",
    category: "Online Course",
    description:
      "Rigorous introduction to discrete and continuous random variables, conditional probabilities, Bayes' theorem, and estimator properties.",
    accentSymbol: "P(A \\cap B)",
  },
];
