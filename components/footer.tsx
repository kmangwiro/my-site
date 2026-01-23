import Link from "next/link"
import { Facebook, Youtube, MessageCircle } from "lucide-react"

const footerLinks = {
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Our Team", href: "#team" },
    { label: "Gallery", href: "#gallery" },
    { label: "Vacancies", href: "#vacancies" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    { label: "Chinese Courses", href: "#services" },
    { label: "HSK Certification", href: "#services" },
    { label: "Travel & Tours", href: "#services" },
    { label: "Corporate Training", href: "#services" },
    { label: "Interpretation", href: "#services" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/zimgroconsultancy/", label: "Facebook" },
  { icon: Youtube, href: "https://www.youtube.com/@zimgroconsultancy_official", label: "YouTube" },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    ),
    href: "https://www.tiktok.com/@zimgroconsultancy0",
    label: "TikTok",
  },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    href: "https://x.com/zimgro_official",
    label: "X",
  },
  { icon: MessageCircle, href: "https://wa.me/263786409822", label: "WhatsApp" },
]

export function Footer() {
  return (
    <footer className="bg-coffee-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="#home" className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                <span className="text-coffee-dark font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-gold font-serif">Zimgro Consultancy</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Zimgro Consultancy - Your gateway to Chinese and foreign language proficiency. Learn, Travel, Connect Globally.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:bg-gold hover:text-coffee-dark transition-colors"
                  aria-label={social.label}
                >
                  <social.icon />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <strong className="text-white/90">Address:</strong><br />
                4th Floor, Globe House<br />
                CNR J Moyo and Angwa<br />
                Harare, Zimbabwe
              </li>
              <li>
                <strong className="text-white/90">Phone:</strong><br />
                +263 78 640 9822<br />
                +263 77 333 1861
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Zimgro Consultancy. All rights reserved.
          </p>
          <p className="text-white/50 text-sm mt-2 sm:mt-0">
            Learn • Travel • Connect Globally
          </p>
        </div>
      </div>
    </footer>
  )
}
