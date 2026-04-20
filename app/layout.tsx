import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { cn } from "@/lib/utils";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Afawya | Spontaneous Meme Generator",
  description:
    "Create and download the iconic 'Incoming Call' memes instantly. Spontaneous, simple, and funny.",
  keywords: [
    "Afawya",
    "Meme Generator",
    "Incoming Call Meme",
    "Arabic Memes",
    "Spontaneity",
  ],
  openGraph: {
    title: "Afawya | Spontaneous Meme Generator",
    description:
      "Who's calling? Create your own 'Incoming Call' meme in seconds.",
    url: "https://afawya.vercel.app",
    siteName: "Afawya",
    images: [
      {
        url: "/icons/afawya-logo.png",
        width: 512,
        height: 512,
        alt: "Afawya Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Afawya | Incoming Call Meme Generator",
    description:
      "The fastest way to generate Spontaneous 'Incoming Call' memes.",
    images: ["/icons/afawya-logo.png"],
  },
  icons: {
    icon: "/icons/afawya-logo.png",
    shortcut: "/icons/afawya-logo.png",
    apple: "/icons/afawya-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "dark",
        "antialiased",
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col container mx-auto w-xl">
        <header className="flex items-center justify-between">
          <Image
            src={"/icons/afawya-logo.png"}
            width={120}
            height={120}
            alt="logo"
          />
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
