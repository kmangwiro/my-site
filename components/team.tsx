import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const teamMembers = [
  {
    name: "Dr. Chen Wei",
    role: "Director & Senior Instructor",
    bio: "PhD in Chinese Linguistics with 15+ years of teaching experience. Native Mandarin speaker.",
    image: "/team/director.jpg",
    specialties: ["HSK 5-6", "Business Chinese"],
  },
  {
    name: "Tatenda Moyo",
    role: "Language Coordinator",
    bio: "Certified HSK instructor. Studied in Beijing for 5 years. Expert in beginner training.",
    image: "/team/coordinator.jpg",
    specialties: ["HSK 1-3", "Conversational"],
  },
  {
    name: "Lin Xiaoming",
    role: "Cultural Programs Manager",
    bio: "Manages travel and cultural exchange programs. 10+ years in educational tourism.",
    image: "/team/programs.jpg",
    specialties: ["Travel & Tours", "Cultural Exchange"],
  },
  {
    name: "Grace Mutasa",
    role: "Career Services Advisor",
    bio: "Helps students connect with job opportunities. Strong network with Chinese companies in Zimbabwe.",
    image: "/team/careers.jpg",
    specialties: ["Job Placement", "Career Guidance"],
  },
]

export function Team() {
  return (
    <section id="team" className="py-20 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gold/20 text-gold-dark hover:bg-gold/30 mb-4">Our Team</Badge>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our team of experienced educators and professionals are dedicated to helping you achieve your language learning goals.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <Card key={member.name} className="overflow-hidden border-border hover:border-gold/50 hover:shadow-lg transition-all duration-300 bg-card">
              <div className="aspect-square relative bg-muted">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                  <p className="text-gold text-sm">{member.role}</p>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty) => (
                    <Badge key={specialty} variant="secondary" className="bg-gold/10 text-gold-dark text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
