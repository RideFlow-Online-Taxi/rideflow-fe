import type { Metadata } from "next";
import { DM_Sans } from "next/font/google"
import "./globals.css";

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800","900"]
})

export const metadata: Metadata = {
  title: "RideFlow",
  description: "Ride safely with the flow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} bg-dspBgColor antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
