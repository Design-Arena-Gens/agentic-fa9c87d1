import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Intelliwave - Agence d'Automatisation AI & Chatbots sur Mesure",
  description: "Spécialiste en automatisation AI avec n8n et création de chatbots intelligents sur mesure pour votre entreprise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
