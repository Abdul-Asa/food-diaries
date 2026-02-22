import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/seo/json-ld";
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

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://saints-diary.abdul-asa.dev";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Saints Food Diary — Kebab reviews in Southampton",
    template: "%s | Saints Food Diary",
  },
  description:
    "Honest kebab spot reviews in Southampton. Quality, aesthetic, price, and value — one student's diary, no sponsorships.",
  keywords: [
    "kebab",
    "Southampton",
    "food reviews",
    "restaurant reviews",
    "student food",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: baseUrl,
    siteName: "Saints Food Diary",
    title: "Saints Food Diary — Kebab reviews in Southampton",
    description:
      "Honest kebab spot reviews in Southampton. Quality, aesthetic, price, and value — no sponsorships.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saints Food Diary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saints Food Diary — Kebab reviews in Southampton",
    description:
      "Honest kebab spot reviews in Southampton. No sponsorships.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Saints Food Diary",
  url: baseUrl,
  description:
    "Honest kebab spot reviews in Southampton. Quality, aesthetic, price, and value — one student's diary, no sponsorships.",
  inLanguage: "en-GB",
  publisher: {
    "@type": "Person",
    name: "Saints Food Diary",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(poppins.variable, ibmPlexMono.variable)}>
        <JsonLd data={websiteSchema} />
        <main className="flex min-h-screen flex-col justify-between p-4 pt-16">
          <Header />
          <div className="size-full flex-1">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
