import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "KingHouse - Professional Villa Management in Jabodetabek",
  description: "Professional villa management services in Jabodetabek. Optimize your property revenue with our comprehensive management solutions. Find exclusive accommodations for your stay.",
  keywords: ["villa management", "jabodetabek", "property management", "villa rental", "Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi"],
  authors: [{ name: "KingHouse" }],
  openGraph: {
    title: "KingHouse - Professional Villa Management",
    description: "Professional villa management services in Jabodetabek",
    type: "website",
    locale: "id_ID",
    siteName: "KingHouse",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
