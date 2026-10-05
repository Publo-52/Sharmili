export interface ProfileData {
  name: string;
  role: string;
  currentYear: string;
  heroHeadline: string;
  heroStatement: string;
  heroIntroduction: string;
  heroPills: string[];
  aboutLead: string;
  aboutParagraphs: string[];
  currently: string;
  focus: string[];
  mindset: string[];
  contactEmail: string;
  linkedinUrl: string;
  githubUrl: string;
  location: string;
  profileImage: string;
}

export const profileData: ProfileData = {
  name: "Sharmili Mandal",
  role: "Mathematics Undergraduate",
  currentYear: "Undergraduate (4-Year Course)",
  heroHeadline: "SHARMILI MANDAL",
  heroStatement: "Exploring the beauty of mathematics through curiosity, logic, and problem-solving.",
  heroIntroduction: "I’m a Mathematics student at Panskura Banamali College (4-year undergraduate course) with a strong interest in analytical thinking, problem-solving, and understanding how mathematical ideas connect with the world around us.",
  heroPills: ["MATHEMATICS", "ANALYTICAL THINKING", "CURIOSITY"],
  aboutLead: "Curiosity begins with a question.",
  aboutParagraphs: [
    "I am Sharmili Mandal, currently pursuing a 4-year undergraduate degree in Mathematics at Panskura Banamali College. I enjoy understanding concepts deeply, approaching problems from different perspectives, and finding logical patterns behind complex ideas.",
    "Having completed my schooling at Bakcha V.J High School, my academic journey has strengthened my analytical thinking, patience, attention to detail, and problem-solving abilities. I’m continuously exploring new areas of mathematics and looking for opportunities to apply what I learn beyond the classroom.",
  ],
  currently: "Mathematics Student at Panskura Banamali College",
  focus: ["Mathematics", "Problem Solving", "Analytical Thinking"],
  mindset: ["Learn", "Explore", "Understand"],
  contactEmail: "mandalsharmili06@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/sharmili-mandal-4ba9453a9",
  githubUrl: "https://github.com/sharmili-mandal",
  location: "India",
  profileImage: "/sharmili-mandal.jpg",
};
