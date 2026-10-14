import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://baara.ai"),
  title:
    "Baara AI — Train AI, get paid in dollars / Entraînez l'IA, soyez payé en dollars",
  description:
    "US AI companies are hiring experts in 100+ countries: $48–52/hour, remote, on your schedule. Des entreprises d'IA américaines recrutent des experts dans plus de 100 pays : 48 à 52 $/heure, à distance.",
  keywords: [
    "Mercor",
    "Baara AI",
    "AI safety",
    "remote AI training",
    "télétravail dollars",
    "entraînements IA",
    "Abdel Traore",
  ],
  openGraph: {
    title: "Baara AI — Train AI, get paid in dollars",
    description:
      "US AI companies are hiring experts in 100+ countries: $48–52/hour, remote, on your schedule.",
    url: "https://baara.ai",
    siteName: "Baara AI",
    locale: "fr_FR",
    type: "website",
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
}): React.JSX.Element {
  return (
    <html lang="fr" className="dark">
      <body className="min-h-screen bg-[#070b14] text-[#e2e8f0] antialiased">
        {children}
      </body>
    </html>
  );
}
