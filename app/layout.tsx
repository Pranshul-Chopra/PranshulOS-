import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CustomCursor } from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pranshulos.vercel.app"),
  title: "PranshulOS — A Local-First Personal Operating Environment",
  description:
    "PranshulOS is a local-first productivity shell for Windows built around tasks, goals, routines, notes, and personal workflows — without requiring an account or cloud backend.",
  keywords: [
    "PranshulOS",
    "Local-First Software",
    "Productivity OS",
    "Windows Productivity Shell",
    "SQLite Desktop App",
    "Offline Notes",
    "Personal Kanban",
    "Workflow Engine",
    "Chibi AI",
  ],
  authors: [{ name: "Pranshul Chopra" }],
  openGraph: {
    title: "PranshulOS — A Local-First Personal Operating Environment",
    description:
      "Your computer should work for you — not the other way around. Local-first Windows productivity shell designed around tasks, goals, routines, notes, and visual workflows.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "PranshulOS Dashboard Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PranshulOS — A Local-First Personal Operating Environment",
    description:
      "A personal operating environment for getting things done. Local SQLite, 1-click execution, and zero cloud lock-in.",
    images: ["/dashboard.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased selection:bg-gold/30 selection:text-white`}>
        <ScrollProgress />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
