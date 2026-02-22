import type { Metadata } from "next";
import { IBM_Plex_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
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
  description: "One student's kebab reviews in Southampton",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(poppins.variable, ibmPlexMono.variable)}>
        <main className="flex min-h-screen flex-col justify-between p-4 pt-16">
          <Header />
          <div className="size-full flex-1">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
