import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pipas",
  description:
    "Welcome! I'm Ismail Baalouk, also known as Pipas. As a self-taught developer, I'm passionate about creating impactful tech solutions. From open source projects to startups, join me in exploring the world of coding where innovation meets purpose.",
  authors: {
    name: "Pipas",
    url: process.env.NEXT_PUBLIC_BASE_URL,
  },
  openGraph: {
    title: "Pipas",
    description:
      "Welcome! I'm Ismail Baalouk, also known as Pipas. As a self-taught developer, I'm passionate about creating impactful tech solutions. From open source projects to startups, join me in exploring the world of coding where innovation meets purpose.",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: "Pipas' Portfolio",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/thumbnail.png`,
        width: 600,
        height: 400,
      },
    ],
  },
  icons: {
    icon: `${process.env.NEXT_PUBLIC_BASE_URL}/favicon.ico`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
