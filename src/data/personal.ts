export interface PersonalInterest {
  title: string;
  tagline: string;
  description: string;
  reflection: string;
}

export const personalInterests: PersonalInterest[] = [
  {
    title: "Reading & Intellectual Inquiry",
    tagline: "Exploring philosophy of science & historical mathematics",
    description: "Reading about the history of mathematics, scientific discoveries, and essays that examine how foundational truths were uncovered over centuries.",
    reflection: "Understanding the human stories behind mathematical discoveries illuminates why the questions were asked in the first place.",
  },
  {
    title: "Deep Focus & Problem Contemplation",
    tagline: "Patience with unanswered questions",
    description: "Spending uninterrupted time thinking through difficult puzzles, chess tactics, and logical riddles without rushing for immediate solutions.",
    reflection: "Mathematics teaches that true clarity takes quiet time and persistent patience.",
  },
  {
    title: "Creative Structure & Writing",
    tagline: "Clarity in thought and expression",
    description: "Appreciating structured prose, clean note-taking, notebook indexing, and synthesizing complex lecture topics into transparent summaries.",
    reflection: "If a concept cannot be written with crystalline clarity, it simply hasn't been understood deeply enough.",
  },
  {
    title: "Nature & Geometric Patterns",
    tagline: "Observing symmetry in the everyday world",
    description: "Noticing natural spirals, leaf phyllotaxis, architectural symmetries, and acoustic waveforms in everyday surroundings.",
    reflection: "Nature speaks in the language of geometry and conservation laws.",
  },
];
