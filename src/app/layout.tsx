import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Meet Pithadiya ",
  description:
    "Premium portfolio of Meet Pithadiya, a full-stack developer specializing in React, Next.js, TypeScript, and modern web technologies. Available for placement, freelancing, and startup opportunities.",
  keywords: [
    "Meet Pithadiya",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Web Developer",
    "Frontend Developer",
  ],
  authors: [{ name: "Meet Pithadiya" }],
  creator: "Meet Pithadiya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://meetpatel.dev",
    title: "Meet Pithadiya — Full Stack Developer",
    description:
      "Premium portfolio of Meet Pithadiya, a full-stack developer specializing in React, Next.js, TypeScript, and modern web technologies.",
    siteName: "Meet Pithadiya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Pithadiya — Full Stack Developer",
    description:
      "Premium portfolio of Meet Pithadiya, a full-stack developer specializing in React, Next.js, TypeScript, and modern web technologies.",
    creator: "@meetpatel",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
