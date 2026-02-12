import "./globals.css";
import "./grain.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Playfair_Display, Inter } from "next/font/google";
import type { Metadata } from "next";
import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
  const host = (await headers()).get("host") || "";
  const isOfficialDomain =
    host === "motusdesigns.com" || host.endsWith(".motusdesigns.com");

  return {
    robots: {
      index: isOfficialDomain,
      follow: isOfficialDomain,
    },
  };
}
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} bg-motusBg text-motusHeading antialiased`}>

        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

