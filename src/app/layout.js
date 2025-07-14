import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";

import langdata from "../../language.json";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://sitedesign.no"),
  title: {
    default: "SiteDesign - Professional Web Development",
    template: "%s | SiteDesign",
  },
  description:
    "Professional web development and design services. Creating modern, responsive websites with cutting-edge technology.",
  keywords: [
    "web development",
    "web design",
    "React",
    "Next.js",
    "JavaScript",
    "Norway",
  ],
  authors: [{ name: "Majid Askarifarsangi", url: "https://sitedesign.no" }],

  openGraph: {
    type: "website",
    locale: langdata.locale,
    url: "https://sitedesign.no",
    title: "SiteDesign - Professional Web Development",
    description:
      "Professional web development and design services. Creating modern, responsive websites with cutting-edge technology.",
    siteName: "SiteDesign",
    images: [
      {
        url: "https://sitedesign.no/avatar.png",
        width: 96,
        height: 96,
        alt: "SiteDesign - Professional Web Development",
      },
    ],
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

  alternates: {
    canonical: "https://sitedesign.no",
    languages: {
      "en-US": "https://en.sitedesign.no",
      "no-NO": "https://sitedesign.no",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang={langdata.lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
