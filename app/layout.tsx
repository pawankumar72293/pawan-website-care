import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pawan Kumar | Senior Full-Stack Engineer & Website Care Specialist",
  description:
    "Senior Full-Stack Developer with 5+ years of experience building scalable web applications and providing reliable monthly website care from $10/mo. Specializing in Laravel, Node.js, React, Next.js, and API integrations.",
  keywords: [
    "Pawan Kumar",
    "Full-Stack Web Developer",
    "Senior Laravel Developer",
    "Node.js Developer",
    "React Developer",
    "Next.js Developer",
    "Website Maintenance",
    "Website Care Plans",
    "Desarrollador Web Full Stack",
    "Mantenimiento Web Mensual",
    "Web Application Development",
    "Freelance Developer Remote",
  ],
  authors: [{ name: "Pawan Kumar" }],
  openGraph: {
    title: "Pawan Kumar | Senior Full-Stack Engineer & Website Care",
    description:
      "High-performance web applications and monthly website support starting at $10/mo. 5+ years experience, 25+ delivered projects, available worldwide.",
    url: "https://pawan.42web.io",
    siteName: "Pawan Kumar Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pawan Kumar | Senior Full-Stack Engineer",
    description:
      "Reliable web application engineering and ongoing website support. Direct developer collaboration.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-[#F7F8F5] text-[#10131A]">
        {children}
      </body>
    </html>
  );
}
