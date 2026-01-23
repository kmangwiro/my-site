import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Languages, Plane, GraduationCap, Users, Award } from "lucide-react"

const services = [
  {
    icon: Languages,
    title: "Chinese Language Courses",
    description: "Comprehensive Mandarin Chinese courses for all levels, from basic conversational skills to advanced business Chinese.",
    features: ["HSK 1-6 Preparation", "Business Chinese", "Conversational Skills"],
  },
  {
    icon: BookOpen,
    title: "Foreign Language Training",
    description: "Learn other foreign languages with our experienced instructors. Perfect for personal growth or career advancement.",
    features: ["Multiple Languages", "Certified Instructors", "Flexible Schedules"],
  },
  {
    icon: GraduationCap,
    title: "HSK Certification",
    description: "Official HSK test preparation and certification. All levels from HSK 1 (beginner) to HSK 6 (advanced).",
    features: ["Official Test Centre", "Mock Exams", "Study Materials"],
  },
  {
    icon: Plane,
    title: "Travel & Tours",
    description: "Cultural immersion trips to China and other destinations. Experience the language in its native environment.",
    features: ["Educational Tours", "Cultural Exchange", "Group Travel"],
  },
  {
    icon: Users,
    title: "Corporate Training",
    description: "Customized language training programs for businesses and organizations working with Chinese partners.",
    features: ["On-site Training", "Custom Curriculum", "Team Building"],
  },
  {
    icon: Award,
    title: "Interpretation Services",
    description: "Professional interpretation and translation services for business meetings, conferences, and documents.",
    features: ["Business Meetings", "Document Translation", "Conference Support"],
  },
]

const hskLevels = [
  { level: "HSK 1", words: "3 months", description: "Basic daily communication" },
  { level: "HSK 2", words: "3 months", description: "Simple daily tasks" },
  { level: "HSK 3", words: "4 months", description: "Daily life & travel" },
  { level: "HSK 4", words: "4 months", description: "Wide range of topics" },
  { level: "HSK 5", words: "5 months", description: "Chinese media & speeches" },
  { level: "HSK 6", words: "5 months", description: "Native-level fluency" },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gold/20 text-gold-dark hover:bg-gold/30 mb-4">Our Services</Badge>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Zimgro Consultancy is a multifaceted organization offering comprehensive language training, travel experiences, and career opportunities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service) => (
            <Card key={service.title} className="border-border hover:border-gold/50 hover:shadow-lg transition-all duration-300 bg-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-gold-dark" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <Badge key={feature} variant="secondary" className="bg-secondary text-secondary-foreground">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* HSK Levels */}
        <div className="bg-coffee rounded-3xl p-8 sm:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
              HSK Proficiency Levels
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              The HSK (Hanyu Shuiping Kaoshi) is the standardized Chinese proficiency test. We offer preparation courses for all six levels.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hskLevels.map((hsk) => (
              <div
                key={hsk.level}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="text-gold font-bold text-lg mb-1">{hsk.level}</div>
                <div className="text-white/60 text-sm mb-2">{hsk.words} words</div>
                <div className="text-white/80 text-sm">{hsk.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
