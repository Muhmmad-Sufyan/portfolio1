import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Muhammad Sufyan Portfolio",
  description: "Portfolio website of Muhammad Sufyan, a web developer and designer. Showcasing projects, skills, and contact information. And also a blog section for sharing insights and tutorials on web development.A portfolio website built with Next.js and Tailwind CSS.",
  keywords: [
    "Ehsas Lab",
    "ehsaslab",
    "ehsas-lab",
    "ehsas_lab",
    "ehsas lab",
    "clickmedia",
    "ClickMedia",
    "click-media",
    "click_media",
    "click media",
    "SUFYAN",
    "Sufyan",
    "Muhammad Sufyan",
    "Sufyan's Portfolio",
    "Muhammad Sufyan's Portfolio",
    "Muhammad Sufyan Web Developer",
    "Muhammad Sufyan Web Designer",
    "Muhammad Sufyan Next.js",
    "Muhammad Sufyan Tailwind CSS",
    "Muhammad Sufyan Projects",
    "Muhammad Sufyan Skills",
    "Muhammad Sufyan Contact Information",
    "Muhammad Sufyan Blog",
    "Muhammad Sufyan Web Development",
    "Muhammad Sufyan Tutorials",
    "Muhammad Sufyan Frontend Developer",
    "Muhammad Sufyan Fullstack Developer",
    "Muhammad Sufyan Portfolio Website",
    "Muhammad Sufyan Developer Portfolio",
    "Muhammad Sufyan Designer Portfolio",
    "Muhammad Sufyan Personal Website",
    "Muhammad Sufyan Tech Blog",
    "Muhammad Sufyan Coding Tutorials",
    "Muhammad Sufyan Web Projects",
    "Muhammad Sufyan Development Skills",
    "Muhammad Sufyan Contact Info",
    "Muhammad Sufyan Online Portfolio",
    "Portfolio of Muhammad Sufyan",
    "Sufyan Web Developer",
    "Sufyan Web Designer",
    "Sufyan Next.js",
    "Sufyan Tailwind CSS",
    "Sufyan Projects",
    "Sufyan Skills",
    "Sufyan Contact Information",
    "Sufyan Blog",
    "Sufyan Web Development",
    "Sufyan Tutorials",
    "Sufyan Frontend Developer",
    "Sufyan Fullstack Developer",
    "Sufyan Developer Portfolio",
    "Sufyan Designer Portfolio",
    "Sufyan Personal Website",
    "Sufyan Tech Blog",
    "Sufyan Coding Tutorials",
    "Sufyan Web Projects",
    "Sufyan Development Skills",
    "Sufyan Contact Info",
    "Sufyan Online Portfolio",
    "Portfolio of Sufyan",
    "sufyandev",
    "sjking",
    "Web Developer Portfolio",
    "Designer Portfolio",
    "Personal Website",
    "Tech Blog",
    "Coding Tutorials",
    "Web Projects",
    "Development Skills",
    "Contact Info",
    "Online Portfolio",
    "Portfolio Website",
    "Web Developer",
    "Web Designer",
    "Next.js",
    "Tailwind CSS",
    "Projects",
    "Skills",
    "Contact Information",
    "Blog",
    "Web Development",
    "Tutorials",
    "Frontend Developer",
    "Fullstack Developer",
  ],
  authors: [{ name: "Muhammad Sufyan", url: "https://sufyandev.netlify.app"},{ name: "Ehsas Lab", url: "https://suf12.netlify.app" }],
  openGraph: {
    title: "Muhammad Sufyan Portfolio",
    description: "Portfolio website of Muhammad Sufyan, a web developer and designer. Showcasing projects, skills, and contact information. And also a blog section for sharing insights and tutorials on web development.",
    url: "https://sufyandev.netlify.app",
    siteName: "Muhammad Sufyan Portfolio",
    images: [
      {
        url: "/sjking.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Sufyan Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Sufyan Portfolio",
    description: "Portfolio website of Muhammad Sufyan, a web developer and designer. Showcasing projects, skills, and contact information. And also a blog section for sharing insights and tutorials on web development.",
    images: ["/sjking.jpg"],
  },
  facebook: {
    appId: "1234567890",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
