import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import WaveHeader from "@/components/WaveHeader";

export const metadata: Metadata = {
  title: "Joshua Melendres — Full Stack Developer & Creative",
  description:
    "Full Stack Developer and digital artist from the Philippines. I build beautiful web experiences and design creative digital products.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "UI/UX",
    "Philippines",
    "Web Developer",
  ],
  authors: [{ name: "Joshua Melendres" }],
  openGraph: {
    title: "Joshua Melendres — Full Stack Developer & Creative",
    description:
      "Full Stack Developer and digital artist from the Philippines.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col relative z-10">
            <Navbar />

            <div className="pt-28">
              <WaveHeader />
            </div>
            <main className="flex-1 pt-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
