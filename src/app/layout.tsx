import type { Metadata } from "next";
import { IBM_Plex_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";

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
  title: "Saints Food Diary",
  description: "A food diary for saints",
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
          poppins.variable,
          ibmPlexMono.variable,
          "bg-pale font-poppins text-black"
        )}
      >
        <main className="flex min-h-screen flex-col p-2 md:p-4 md:pt-0">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
