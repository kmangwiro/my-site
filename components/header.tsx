"use client"

import {useState} from "react"
import Link from "next/link"
import {Menu, X} from "lucide-react"
import {Button} from "@/components/ui/button"

const navLinks = [
    {href: "#home", label: "Home"},
    {href: "#services", label: "Services"},
    {href: "#team", label: "Our Team"},
    {href: "#gallery", label: "Gallery"},
    {href: "#vacancies", label: "Vacancies"},
    {href: "#contact", label: "Contact"},
]

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-navy text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="#home" className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                            <img
                                src="/favicon.ico"   // <-- place your logo here in /public folder
                                alt="Zimgro Consultancy Logo"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span className="text-xl font-bold text-gold font-serif">Zimgro Consultancy</span>
                    </Link>


                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-3 py-2 text-sm font-medium text-white/90 hover:text-gold transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button asChild className="ml-4 bg-gold hover:bg-gold-dark text-navy font-semibold">
                            <Link href="#contact">Get Started</Link>
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-navy border-t border-white/10">
                    <nav className="px-4 py-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block px-3 py-2 text-sm font-medium text-white/90 hover:text-gold hover:bg-white/5 rounded-lg transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button asChild className="w-full mt-4 bg-gold hover:bg-gold-dark text-navy font-semibold">
                            <Link href="#contact" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    )
}
