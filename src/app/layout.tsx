import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Triano Nurhikmat (Anno) - AI & Data Engineer",
  description:
    "AI & Data Engineer specializing in MLOps, GenAI (Gemini), GCP & AWS. Building and shipping data/AI systems with best practices.",
  keywords: [
    "AI Engineer",
    "Data Engineer",
    "MLOps",
    "Machine Learning",
    "GCP",
    "AWS",
    "Vertex AI",
    "BigQuery",
    "Gemini",
    "Data Analytics",
  ],
  authors: [{ name: "Triano Nurhikmat" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://trianonurhikmat.com",
    title: "Triano Nurhikmat (Anno) - AI & Data Engineer",
    description:
      "AI & Data Engineer specializing in MLOps, GenAI (Gemini), GCP & AWS. Building and shipping data/AI systems with best practices.",
    siteName: "Triano Nurhikmat Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Triano Nurhikmat (Anno) - AI & Data Engineer",
    description:
      "AI & Data Engineer specializing in MLOps, GenAI (Gemini), GCP & AWS.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Triano Nurhikmat",
              alternateName: "Anno",
              jobTitle: "AI & Data Engineer",
              description:
                "AI & Data Engineer specializing in MLOps, GenAI (Gemini), GCP & AWS",
              url: "https://trianonurhikmat.com",
              sameAs: [
                "https://www.linkedin.com/in/trianonurhikmat/",
                "https://github.com/trianonurhikmat",
              ],
              knowsAbout: [
                "Machine Learning",
                "Data Engineering",
                "MLOps",
                "Google Cloud Platform",
                "AWS",
                "Vertex AI",
                "BigQuery",
                "Artificial Intelligence",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
