import type { Metadata } from "next";
import { Cutive_Mono, Nanum_Myeongjo } from "next/font/google";
import "./globals.css";

const cutiveMono = Cutive_Mono({
  weight: "400",
  variable: "--font-cutive-mono",
  subsets: ["latin"],
});

const nanumMyeongjo = Nanum_Myeongjo({
  weight: ["400", "700", "800"],
  variable: "--font-nanum-myeongjo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Geunbon Menu",
  description: "Vintage A5 Menu for Geunbon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cutiveMono.variable} ${nanumMyeongjo.variable} font-serif antialiased`}>
        {children}
      </body>
    </html>
  );
}
