import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { url } from "inspector";
import NavBar from "./components/NavBar";
import Frame from "./components/Frame";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dear Diary",
  description: "Keep your memoir alive",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={{
        backgroundImage: "url('/bg_unsplash_scott.jpg')"
      }}>
        <Frame>
          <NavBar/>
          {children}
        </Frame>
      </body>
    </html>
  );
}
