import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe, Briefcase, GraduationCap, Users } from "lucide-react"

export function Hero() {
  const advantages = [
    {
      icon: Briefcase,
      title: "Career Opportunities",
      description: "Access high-paying jobs with Chinese and international companies seeking bilingual professionals."
    },
    {
      icon: Globe,
      title: "Global Connectivity",
      description: "Connect with over 1.4 billion Chinese speakers and expand your professional network worldwide."
    },
    {
      icon: GraduationCap,
      title: "Scholarship Access",
      description: "Qualify for prestigious scholarship programs to study in China and other countries."
    },
    {
      icon: Users,
      title: "Cultural Understanding",
      description: "Bridge cultural gaps and become an invaluable asset in international business relations."
    }
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-coffee-dark pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23d4af37' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 rounded-full text-gold text-sm font-medium mb-6">
            <Globe className="h-4 w-4" />
            <span>Learn Languages, Transform Your Future</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6 text-balance">
            Welcome to
            <span className="text-gold block">Zimgro Consultancy</span>
          </h1>
          
          <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
            Your gateway to mastering Chinese and foreign languages. With the rise of Chinese and foreign investors worldwide, there is a growing demand for skilled language interpreters. We prepare you for success in this expanding global market.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-coffee-dark font-semibold text-base px-8">
              <Link href="#services">Explore Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-coffee-dark font-semibold text-base px-8 bg-transparent">
              <Link href="#contact">Enroll with Us</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">1,500+</div>
              <div className="text-sm text-white/60">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">95%</div>
              <div className="text-sm text-white/60">Pass Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">6</div>
              <div className="text-sm text-white/60">Chinese proficiency Levels</div>
            </div>
          </div>
        </div>

        {/* 4 Advantages Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-serif font-bold text-white text-center mb-8">
            Why Learn a Foreign Language?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="bg-gold/15 backdrop-blur-sm border border-gold/30 rounded-2xl p-6 hover:bg-gold/25 transition-colors text-center"
              >
                <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{advantage.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
