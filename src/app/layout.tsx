import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mridul Nehra | The Dreamer's Code",
  description:
    "Portfolio of Mridul Nehra — CSE student, AI enthusiast, and aspiring entrepreneur from Rajasthan. A dreamer who codes.",
  keywords: [
    "Mridul Nehra",
    "portfolio",
    "CSE student",
    "AI",
    "machine learning",
    "web developer",
    "Rajasthan",
  ],
  authors: [{ name: "Mridul Nehra" }],
  openGraph: {
    title: "Mridul Nehra | The Dreamer's Code",
    description: "A dreamer who codes — CSE student, AI enthusiast, builder.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><text y='28' font-size='28'>✦</text></svg>" />
      </head>
      <body className={nunito.variable}>
        {children}
      </body>
    </html>
  );
}
