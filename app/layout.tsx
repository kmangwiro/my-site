import React from "react"
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Zimgro Consultancy | Learn Chinese & Foreign Languages',
  description: 'Zimgro Consultancy offers professional Chinese language, HSK certification training, travel and tours, and career opportunities in Harare, Zimbabwe.',
  generator: 'v0.app',
  keywords: ['Chinese language', 'HSK', 'language courses', 'Zimbabwe', 'Harare', 'interpreters', 'foreign languages'],
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' }, // classic fallback
    ],
    apple: '/apple-icon.png',
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
        <span className="text-xl font-bold text-gold font-serif">Zimgro Consultancy</span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-6 text-coffee-dark font-medium">
        <Link href="#courses" className="hover:text-gold transition">Courses</Link>
        <Link href="#about" className="hover:text-gold transition">About</Link>
        <Link href="#contact" className="hover:text-gold transition">Contact</Link>
      </div>
    </nav>
  )

  return (
    <html lang="en">
      <head>
        {/* Fallback favicon for older browsers */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-gray-50 dark:bg-gray-900`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
