import type { Metadata } from "next";
import { Kanit, Geist_Mono } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Awada Realestate Group",
  description:
    "Awada Real Estate Group is a modern property listing platform and branded website designed to connect buyers and sellers with their perfect home. Showcasing a curated selection of properties, the platform offers intuitive search filters, high-quality images, virtual tours, and detailed property insights. Whether you're looking to buy, sell, or explore the market, Awada Real Estate Group provides a seamless and user-friendly experience tailored to your real estate needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kanit.className} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
