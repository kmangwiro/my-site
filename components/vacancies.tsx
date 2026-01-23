import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Briefcase, DollarSign } from "lucide-react"
import Link from "next/link"

const vacancies = [
  {
    title: "Chinese-English Translator",
    company: "Zimbabwe Mining Corp",
    location: "Harare, Zimbabwe",
    type: "Full-time",
    salary: "$800 - $1,200/month",
    requirements: ["HSK 4+", "English Fluency", "2+ years experience"],
    description: "Seeking qualified translator for mining operations with Chinese partners. Must be able to translate technical documents and interpret during meetings.",
    isNew: true,
    forAlumni: true,
  },
  {
    title: "Mandarin Teacher",
    company: "International School of Harare",
    location: "Harare, Zimbabwe",
    type: "Full-time",
    salary: "$600 - $900/month",
    requirements: ["HSK 5+", "Teaching Certificate", "Native/Fluent"],
    description: "Teaching Mandarin to primary and secondary school students. Experience with young learners preferred.",
    isNew: true,
    forAlumni: true,
  },
  {
    title: "Interpreter - Construction",
    company: "Sino-Zim Construction",
    location: "Bulawayo, Zimbabwe",
    type: "Contract",
    salary: "$700 - $1,000/month",
    requirements: ["HSK 4+", "Technical Vocabulary", "Driving License"],
    description: "On-site interpreter for construction projects. Will work directly with Chinese engineers and local workers.",
    isNew: false,
    forAlumni: true,
  },
  {
    title: "Customer Service - Chinese Speaking",
    company: "Huawei Zimbabwe",
    location: "Harare, Zimbabwe",
    type: "Full-time",
    salary: "$500 - $700/month",
    requirements: ["HSK 3+", "Customer Service Skills", "Computer Literate"],
    description: "Handle customer inquiries in Chinese and English. Training provided for product knowledge.",
    isNew: false,
    forAlumni: false,
  },
]

export function Vacancies() {
  return (
    <section id="vacancies" className="py-20 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gold/20 text-gold-dark hover:bg-gold/30 mb-4">Opportunities</Badge>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
            Job Vacancies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We help our alumni and students find rewarding careers. Browse current opportunities from our partner companies.
          </p>
        </div>

        {/* Vacancies Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {vacancies.map((vacancy, index) => (
            <Card key={index} className="border-border hover:border-gold/50 hover:shadow-lg transition-all duration-300 bg-card">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {vacancy.isNew && (
                        <Badge className="bg-green-500/20 text-green-700">New</Badge>
                      )}
                      {vacancy.forAlumni && (
                        <Badge className="bg-gold/20 text-gold-dark">For Alumni</Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl text-card-foreground">{vacancy.title}</CardTitle>
                    <CardDescription className="text-base font-medium text-gold-dark mt-1">
                      {vacancy.company}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{vacancy.description}</p>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-gold-dark" />
                    <span>{vacancy.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4 text-gold-dark" />
                    <span>{vacancy.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground col-span-2">
                    <DollarSign className="h-4 w-4 text-gold-dark" />
                    <span>{vacancy.salary}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium text-foreground mb-2">Requirements:</p>
                  <div className="flex flex-wrap gap-2">
                    {vacancy.requirements.map((req) => (
                      <Badge key={req} variant="secondary" className="bg-secondary text-secondary-foreground">
                        {req}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button asChild className="w-full bg-gold hover:bg-gold-dark text-navy font-semibold">
                  <Link href="#contact">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center p-8 bg-navy rounded-2xl">
          <Briefcase className="h-12 w-12 text-gold mx-auto mb-4" />
          <h3 className="text-2xl font-serif font-bold text-white mb-2">
            Want to Post a Vacancy?
          </h3>
          <p className="text-white/70 mb-6 max-w-xl mx-auto">
            If your company is looking for Chinese language professionals, partner with us to reach qualified candidates.
          </p>
          <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold hover:text-navy font-semibold bg-transparent">
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
