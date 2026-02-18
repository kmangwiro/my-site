import React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Link from "next/link"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://zimgroconsultancy.com"),

  title: {
    default: "Zimgro Consultancy | Learn Mandarin Chinese & Foreign Languages",
    template: "%s | Zimgro Consultancy",
  },

  description:
    "Zimgro Consultancy offers professional Chinese language, HSK certification training, travel and tours, and career opportunities in Harare, Zimbabwe.",

  keywords: [
  // Brand
  "Zimgro Consultancy",
  "Zimgro Consultancy Zimbabwe",
  "Zimgro Chinese school",

  // Core Chinese learning searches
  "Chinese language college in Zimbabwe",
  "Chinese language school in Zimbabwe",
  "Best Chinese language school in Zimbabwe",
  "Learn Chinese in Zimbabwe",
  "Learn Mandarin in Zimbabwe",
  "Mandarin classes Zimbabwe",
  "Chinese lessons Zimbabwe",

  // Harare location targeting
  "Chinese language school Harare",
  "Chinese classes Harare",
  "Mandarin classes Harare",
  "Learn Chinese Harare",
  "Chinese tutors Harare",

  // HSK exam targeting
  "HSK preparation Zimbabwe",
  "HSK courses Zimbabwe",
  "HSK classes Harare",
  "HSK exam preparation",
  "HSK training Zimbabwe",
  "HSK certification Zimbabwe",
  "Chinese proficiency test Zimbabwe",

  // Students and beginners
  "Chinese classes for beginners Zimbabwe",
  "Mandarin for beginners Zimbabwe",
  "Chinese language courses for students",

  // Professionals and careers
  "Chinese language for business Zimbabwe",
  "Chinese language for jobs Zimbabwe",
  "Chinese translator Zimbabwe",
  "Chinese interpreter Zimbabwe",
  "Mandarin interpreter Zimbabwe",

  // Foreign language category
  "Foreign language school Zimbabwe",
  "Language school Harare",
  "Language courses Zimbabwe",

  // Intent-based searches
  "Where to learn Chinese in Zimbabwe",
  "Best place to learn Chinese in Harare",
  "Chinese language training Zimbabwe",
  "Professional Chinese lessons Zimbabwe",

  // International searches
  "Learn Chinese in Africa",
  "Chinese school Africa",
  "HSK training Africa",
],


  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  openGraph: {
    title: "Zimgro Consultancy | Learn Chinese & Foreign Languages",
    description:
      "Professional Chinese language training, HSK certification, and career opportunities in Zimbabwe.",
    url: "https://zimgroconsultancy.com",
    siteName: "Zimgro Consultancy",
    locale: "en_ZW",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  const Navbar = () => (
    <nav className="w-full flex items-center justify-between p-4 bg-white dark:bg-gray-900 shadow-md">

      {/* Logo */}
      <Link href="#home" className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
          <span className="text-coffee-dark font-bold text-lg">Z</span>
        </div>

        <span className="text-xl font-bold text-gold font-serif">
          Zimgro Consultancy
        </span>
      </Link>

      {/* Navigation */}
      <div className="hidden md:flex items-center gap-6 text-coffee-dark dark:text-white font-medium">

        <Link href="#courses" className="hover:text-gold transition">
          Courses
        </Link>

        <Link href="#about" className="hover:text-gold transition">
          About
        </Link>

        <Link href="#contact" className="hover:text-gold transition">
          Contact
        </Link>

      </div>

    </nav>
  )

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-gray-50 dark:bg-gray-900`}
      >
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
