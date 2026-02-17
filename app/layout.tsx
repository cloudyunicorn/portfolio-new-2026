import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import FloatingLines from "@/components/FloatingLines";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rajat | Portfolio",
  description: "Rajat - Frontend Developer & Software Engineer. Building modern web applications with React, Next.js, and cutting-edge frontend technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <div className="fixed inset-0 -z-10 h-full w-full">
              <FloatingLines
                linesGradient={["#2E0249", "#570A57", "#A91079"]}
                lineCount={[4, 6, 4]}
                lineDistance={[0.1, 0.2, 0.1]}
                animationSpeed={0.5}
                parallaxStrength={0.1}
                mixBlendMode="normal"
              />
            </div>
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
