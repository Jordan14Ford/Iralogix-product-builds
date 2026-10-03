import type { Metadata } from "next";
import { Inter, Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-public-sans",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-inter-family",
});

export const metadata: Metadata = {
  title: "Verify account",
  description: "Step 1 of onboarding: confirm your identity.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${publicSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-[#111827]">{children}</body>
    </html>
  );
}
