import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pipas",
  description:
    "Welcome! I'm a self-taught developer passionate about coding impactful tech solutions. From open source to startups, join me in exploring the world of coding where innovation meets purpose.",
  authors: {
    name: "Pipas",
    url: "https://pipas.vercel.app",
  },
  openGraph: {
    title: "Pipas",
    description:
      "Welcome! I'm a self-taught developer passionate about coding impactful tech solutions. From open source to startups, join me in exploring the world of coding where innovation meets purpose.",

    url: "https://pipas.vercel.app",
    siteName: "Pipas' Portfolio",
    images: [
      {
        url: "https://pipas.vercel.app/thumbnail.png",
        width: 600,
        height: 400,
      },
    ],
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
      </body>
    </html>
  );
}
