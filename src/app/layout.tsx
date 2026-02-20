import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Mono, Poppins } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-poppins",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ibm",
});

export const metadata: Metadata = {
  title: "Food Diaries - Best Kebab Spots in Southampton",
  description:
    "Your guide to the tastiest Kebab spots in Southampton. Discover top-rated restaurants with honest reviews and ratings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          poppins.variable,
          ibmPlexMono.variable,
          "bg-pale font-poppins text-black",
          "antialiased",
        )}
      >
        <main className="flex min-h-screen flex-col p-2 md:p-4 md:pt-0">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
