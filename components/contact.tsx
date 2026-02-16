"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Facebook, Youtube, MessageCircle } from "lucide-react"
import Link from "next/link"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone Numbers",
    values: ["+263 78 640 9822", "+263 77 333 1861", "+263 77 943 7116"],
  },
  {
    icon: MapPin,
    label: "Address",
    values: ["4th Floor, Globe House", "CNR J Moyo and Angwa", "Harare, Zimbabwe"],
  },
  {
    icon: Clock,
    label: "Business Hours",
    values: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 9:00 AM - 1:00 PM"],
  },
  {
    icon: Mail,
    label: "Email",
    values: ["info@zimgroconsultancy.com"],
  },
]

const socialLinks = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/zimgroconsultancy/",
    color: "hover:text-blue-600",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://www.youtube.com/@zimgroconsultancy_official",
    color: "hover:text-red-600",
  },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    ),
    label: "TikTok",
    href: "https://www.tiktok.com/@zimgroconsultancy0",
    color: "hover:text-foreground",
  },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    label: "X (Twitter)",
    href: "https://x.com/zimgro_official",
    color: "hover:text-foreground",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/263786409822",
    color: "hover:text-green-600",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gold/20 text-gold-dark hover:bg-gold/30 mb-4">Contact Us</Badge>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to start your language learning journey? Contact us today for enrollment information, course details, or any inquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6">Send an email</h3>
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="bg-background border-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-background border-input"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+263..."
                  className="bg-background border-input"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-foreground">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="How can we help?"
                  required
                  className="bg-background border-input"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us more about your inquiry..."
                  rows={5}
                  required
                  className="bg-background border-input resize-none"
                />
              </div>
              
              <Button type="submit" className="w-full bg-gold hover:bg-gold-dark text-navy font-semibold">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="grid gap-4">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <info.icon className="h-5 w-5 text-gold-dark" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{info.label}</h4>
                    {info.values.map((value, index) => (
                      <p key={index} className="text-muted-foreground text-sm">{value}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <h4 className="font-medium text-foreground mb-4">Follow Us</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-muted-foreground transition-colors ${social.color}`}
                  >
                    <social.icon />
                    <span className="text-sm font-medium">{social.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="bg-card rounded-xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.3399999!2d31.0529!3d-17.8294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGlobe%20House%2C%20Harare!5e0!3m2!1sen!2szw!4v1234567890"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zimgro Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
