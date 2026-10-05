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
  title: "Sharmili Mandal | Mathematics Student",
  description:
    "Personal portfolio of Sharmili Mandal, a third-year Mathematics student interested in analytical thinking, problem solving, mathematics, and continuous learning.",
  keywords: [
    "Sharmili Mandal",
    "Mathematics Student",
    "Pure Mathematics",
    "Applied Mathematics",
    "Real Analysis",
    "Problem Solving",
    "Analytical Thinking",
    "Academic Portfolio",
  ],
  authors: [{ name: "Sharmili Mandal" }],
  creator: "Sharmili Mandal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sharmilimandal.me",
    title: "Sharmili Mandal | Mathematics Student",
    description:
      "Exploring the beauty of mathematics through curiosity, logic, and problem-solving.",
    siteName: "Sharmili Mandal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharmili Mandal | Mathematics Student",
    description:
      "Personal portfolio of Sharmili Mandal, a third-year Mathematics student.",
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
  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable} ${monoFont.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-[#DBEAFE] selection:text-[#1D4ED8]">
        {children}
      </body>
    </html>
  );
}
