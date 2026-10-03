import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";

const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-atkinson",
});

export const metadata: Metadata = {
  title: "Foodash | Your local corner shop, delivered",
  description:
    "Order everyday essentials from independent corner shops near you.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body
        className={`${atkinson.variable} font-sans antialiased bg-warmwhite text-charcoal`}
      >
        {children}
      </body>
    </html>
  );
}
