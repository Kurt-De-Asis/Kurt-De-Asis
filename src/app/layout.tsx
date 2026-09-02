import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import Chatbot from "./components/Chatbot";

const siteUrl = "https://kurt-de-asis.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Kurt Russel De Asis | Full-Stack Developer & Virtual Assistant",
  description:
    "Kurt Russel De Asis — Full-Stack Developer and Virtual Assistant / Executive Support Specialist based in Santa Rosa, Laguna, Philippines. I build reliable web applications (Go, Python, React, Next.js) and provide remote executive support.",
  keywords:
    "Kurt Russel De Asis, Full-Stack Developer, Software Developer, Virtual Assistant, Executive Support, Executive Assistant, Go Developer, Python Developer, React Developer, Next.js Developer, Remote Work, Freelance, Santa Rosa Laguna, Philippines",
  authors: [{ name: "Kurt Russel De Asis" }],
  creator: "Kurt Russel De Asis",
  publisher: "Kurt Russel De Asis",
  alternates: {
    canonical: siteUrl,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Kurt Russel De Asis | Full-Stack Developer & Virtual Assistant",
    description:
      "Full-Stack Developer and Virtual Assistant based in Santa Rosa, Laguna, Philippines. Building reliable web applications and providing remote executive support.",
    siteName: "Kurt Russel De Asis Portfolio",
    images: [
      {
        url: "/pfp.jpg",
        width: 1200,
        height: 630,
        alt: "Kurt Russel De Asis Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kurt Russel De Asis | Full-Stack Developer & Virtual Assistant",
    description:
      "Full-Stack Developer and Virtual Assistant based in Santa Rosa, Laguna, Philippines.",
    images: ["/pfp.jpg"],
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
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kurt Russel De Asis",
    url: siteUrl,
    jobTitle: "Full-Stack Developer & Virtual Assistant",
    email: "mailto:kurtrussel644@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Santa Rosa",
      addressRegion: "Laguna",
      addressCountry: "PH",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Bachelor of Science in Information Technology",
    },
    sameAs: [
      "https://github.com/Kurt-De-Asis",
      "https://www.linkedin.com/in/de-asis-kurt-russel-dizon-258790343",
    ],
    knowsAbout: [
      "Full-Stack Web Development",
      "Go",
      "Python",
      "React",
      "Next.js",
      "Virtual Assistance",
      "Executive Support",
      "Email and Calendar Management",
      "Lead Generation",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative min-h-screen">
            <ScrollProgress />
            <Navbar />
            <main>
              {children}
            </main>
            <Footer />
            <Chatbot />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}