import type { Metadata, Viewport } from "next";
import { Newsreader, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const serifFont = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});

const sansFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F8FAFC",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sharmili-mandal.vercel.app"),
  title: "Sharmili Mandal | Mathematics Student & Portfolio",
  description:
    "Personal academic portfolio of Sharmili Mandal, Mathematics Undergraduate student at Panskura Banamali College (4-year course), passionate about analytical thinking, problem-solving, and continuous learning.",
  keywords: [
    "Sharmili Mandal",
    "Mathematics Student",
    "Panskura Banamali College",
    "Bakcha V.J High School",
    "Pure Mathematics",
    "Applied Mathematics",
    "Real Analysis",
    "Problem Solving",
    "Analytical Thinking",
    "Academic Portfolio",
    "Web Development",
    "LaTeX",
  ],
  authors: [{ name: "Sharmili Mandal" }],
  creator: "Sharmili Mandal",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/sharmili-mandal.jpg", type: "image/jpeg" },
    ],
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sharmili-mandal.vercel.app",
    title: "Sharmili Mandal | Mathematics Student",
    description:
      "Exploring the beauty of mathematics through curiosity, logic, and problem-solving.",
    siteName: "Sharmili Mandal Portfolio",
    images: [
      {
        url: "/sharmili-mandal.jpg",
        width: 1024,
        height: 1024,
        alt: "Sharmili Mandal - Mathematics Student",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharmili Mandal | Mathematics Student",
    description:
      "Personal academic portfolio of Sharmili Mandal, Mathematics Undergraduate at Panskura Banamali College.",
    images: ["/sharmili-mandal.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sharmili Mandal",
    jobTitle: "Mathematics Student",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Bakcha V.J High School",
    },
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Panskura Banamali College",
    },
    url: "https://sharmili-mandal.vercel.app",
    image: "https://sharmili-mandal.vercel.app/sharmili-mandal.jpg",
    sameAs: [
      "https://www.linkedin.com/in/sharmili-mandal-4ba9453a9",
      "https://github.com/sharmili-mandal",
    ],
  };

  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable} ${monoFont.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-[#DBEAFE] selection:text-[#1D4ED8]">
        {children}
      </body>
    </html>
  );
}
