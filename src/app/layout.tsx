import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Thi Thanh Loan Do | Business Analyst & QA/QC",
  description:
    "Business Analyst & QA/QC for AI products. Requirements, BRDs/PRDs, regression suites and guardrail tests for trustworthy AI.",
  openGraph: {
    title: "Thi Thanh Loan Do",
    description: "Business Analyst & QA/QC for AI products.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
