// components/vacancies.tsx
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {MapPin, Clock, Briefcase, DollarSign} from "lucide-react"
import Link from "next/link"

/* =========================
   Vacancies Data
========================= */
const vacancies = [
    {
        title: "Interpreter - Construction",
        company: "Sino-Zim Construction",
        location: "Bulawayo, Zimbabwe",
        type: "Contract",
        salary: "$700 - $1,000/month",
        requirements: ["HSK 4+", "Technical Vocabulary", "Driving License"],
        description:
            "On-site interpreter for construction projects. Will work directly with Chinese engineers and local workers.",
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
        description:
            "Handle customer inquiries in Chinese and English. Training provided for product knowledge.",
        isNew: false,
        forAlumni: false,
    },
]

/* =========================
   Upcoming Events Data
========================= */
const upcomingEvents = [

    {
        title: "Alumni Career Opportunities Talk Day",
        date: "To Be Announced",
        time: "To Be Announced",
        location: "Harare, Zimbabwe",
        description:
            "An interactive session exploring how Chinese language skills open doors to global career opportunities.",
    },
    {
        title: "Enrollment for the Next Semester",
        date: "30 March 2026",
        time: "Office Hours",
        location: "Zimgro Chinese Language Center",
        description:
            "Open enrollment period for new and continuing students for the upcoming semester.",
    },
    {
        title: "Semester Opening Ceremony",
        date: "To Be Announced",
        time: "To Be Announced",
        location: "Zimgro Chinese Language Center",
        description:
            "Official opening of the new academic semester at Zimgro Chinese Language Center.",
    },
    {
        title: "Semester Examination Period",
        date: "March 22, 2026",
        time: "As Scheduled",
        location: "Zimgro Chinese Language Center",
        description:
            "End-of-semester examinations for enrolled Chinese language programs.",
    },
    {
        title: "Zimgro Chinese Language and Culture Competition",
        date: "To Be Announced",
        time: "To Be Announced",
        location: "To Be Announced",
        description:
            "A prestigious competition promoting Chinese language proficiency and cultural understanding among students.",
    },
    {
        title: "Zimgro Anniversary Celebration",
        date: "To Be Announced",
        time: "To Be Announced",
        location: "Zimgro Chinese Language Center",
        description:
            "Celebrating Zimgro’s growth, achievements, and contributions to Chinese language education.",
    }

]

/* =========================
   Vacancies Component
========================= */
export function Vacancies() {
    return (
        <section id="vacancies" className="py-20 bg-card">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <Badge className="bg-gold/20 text-gold-dark hover:bg-gold/30 mb-4">
                        Opportunities
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
                        Job Vacancies
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        We help our alumni and students find rewarding careers. Browse current opportunities from our
                        partner companies.
                    </p>
                </div>

                {/* Vacancies Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {vacancies.map((vacancy, index) => (
                        <Card
                            key={index}
                            className="border-border hover:border-gold/50 hover:shadow-lg transition-all duration-300 bg-card"
                        >
                            <CardHeader>
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            {vacancy.isNew && (
                                                <Badge className="bg-green-500/20 text-green-700">
                                                    New
                                                </Badge>
                                            )}
                                            {vacancy.forAlumni && (
                                                <Badge className="bg-gold/20 text-gold-dark">
                                                    For Alumni
                                                </Badge>
                                            )}
                                        </div>
                                        <CardTitle className="text-xl text-card-foreground">
                                            {vacancy.title}
                                        </CardTitle>
                                        <CardDescription className="text-base font-medium text-gold-dark mt-1">
                                            {vacancy.company}
                                        </CardDescription>
                                    </div>
                                </div>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground text-sm">
                                    {vacancy.description}
                                </p>

                                <div className="grid grid-cols-2 gap-3 text-sm">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <MapPin className="h-4 w-4 text-gold-dark"/>
                                        <span>{vacancy.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Clock className="h-4 w-4 text-gold-dark"/>
                                        <span>{vacancy.type}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground col-span-2">
                                        <DollarSign className="h-4 w-4 text-gold-dark"/>
                                        <span>{vacancy.salary}</span>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-border">
                                    <p className="text-sm font-medium text-foreground mb-2">
                                        Requirements:
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {vacancy.requirements.map((req) => (
                                            <Badge
                                                key={req}
                                                variant="secondary"
                                                className="bg-secondary text-secondary-foreground"
                                            >
                                                {req}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                <Button
                                    asChild
                                    className="w-full bg-gold hover:bg-gold-dark text-navy font-semibold"
                                >
                                    <Link href="#contact">Apply Now</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center p-8 bg-navy rounded-2xl">
                    <Briefcase className="h-12 w-12 text-gold mx-auto mb-4"/>
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">
                        Want to Post a Vacancy?
                    </h3>
                    <p className="text-white/70 mb-6 max-w-xl mx-auto">
                        If your company is looking for Chinese language professionals, partner with us to reach
                        qualified candidates.
                    </p>
                    <Button
                        asChild
                        variant="outline"
                        className="border-gold text-gold hover:bg-gold hover:text-navy font-semibold bg-transparent"
                    >
                        <Link href="#contact">Contact Us</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

/* =========================
   Upcoming Events Component
========================= */
export function UpcomingEvents() {
    return (
        <section id="events" className="py-20 bg-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <Badge className="bg-gold/20 text-gold-dark hover:bg-gold/30 mb-4">
                        Events
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
                        Upcoming Events
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Stay connected through workshops, networking sessions, and special events.
                    </p>
                </div>

                {/* Events Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {upcomingEvents.map((event, index) => (
                        <Card
                            key={index}
                            className="border-border hover:border-gold/50 hover:shadow-xl transition-all duration-300 bg-card"
                        >
                            <CardHeader>
                                <CardTitle className="text-xl">{event.title}</CardTitle>
                                <CardDescription className="text-gold-dark font-medium">
                                    {event.date}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <div className="space-y-2 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4 text-gold-dark"/>
                                        <span>{event.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-gold-dark"/>
                                        <span>{event.location}</span>
                                    </div>
                                </div>

                                <p className="text-sm text-muted-foreground">
                                    {event.description}
                                </p>
                                <Button
                                    asChild
                                    className="w-full bg-gold hover:bg-gold-dark text-navy font-semibold"
                                >
                                    <Link href="#contact">Learn More</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
