import {Card, CardContent} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import Image from "next/image"

const teamMembers = [
    {
        id: 1,
        name: "Tawanda Zimhindo",
        role: "Director / Founder",
        bio: "PhD in International Chinese Education (UZ & Renmin University pending). Masters in Teaching Chinese (Beijing Language & Culture University). Undergraduate at University of Zimbabwe.",
        image: "/team/tawanda.jpeg",
        specialties: ["HSK Training", "Chinese Language Education", "Leadership"],
    },
    {
        id: 2,
        name: "Letwin Zimhindo",
        role: "Chinese Teacher",
        bio: "Masters in Teaching Chinese (Qingdao University), Diploma in Economics (Tianjin Daxue), Degree in Business Management (MSU Zimbabwe).",
        image: "/team/let.jpeg",
        specialties: ["HSK Training", "Business Chinese"],
    },
    {
        id: 3,
        name: "Mu Laoshi (Charlotte Mugodo)",
        role: "Director / Lecturer / Interpreter",
        bio: "BA & Masters in Teaching Chinese (UZ & Renmin University / Beijing Language & Culture University), HSK Level 6.",
        image: "/team/mulaosh.jpeg",
        specialties: ["HSK 6", "Interpretation", "Advanced Chinese"],
    },
    {
        id: 4,
        name: "Rebokile Setoboli",
        role: "Chinese Teacher",
        bio: "BSc in Economics (University of Zimbabwe), Masters in Teaching Chinese (Tianjin University).",
        image: "/team/rebokile.jpeg",
        specialties: ["HSK Training", "Beginner & Intermediate Chinese"],
    },
    {
        id: 5,
        name: "Mrs. Matare",
        role: "Director / Chinese Instructor",
        bio: "Diploma in Human Resource Management, Certificate in International Chinese Education, HSK 5, Diploma in Theology (pending).",
        image: "/team/matare.jpeg",
        specialties: ["HSK Training", "Chinese for Adults"],
    },
    {
        id: 6,
        name: "Loveness Zimhindo",
        role: "Operations Director / Chinese Instructor",
        bio: "BSc in Marketing (University of Zimbabwe), Masters in Teaching Chinese to Speakers of Other Languages (Tianjin University).",
        image: "/team/loveness.jpeg",
        specialties: ["HSK Training", "Operations", "Chinese for Adults"],
    },
    {
        id: 7,
        name: "Runyararo Ndoro",
        role: "Chinese Teacher",
        bio: "Bachelors Degree in Substantive Laws (UZ), Certificate in Teaching Chinese to Speakers of Other Foreign Languages (Tianjin Normal University), Postgraduate Degree in Procedural Law (UZ pending).",
        image: "/team/runyararo.jpeg",
        specialties: ["HSK Training", "Chinese for Legal Professionals"],
    },
    {
        id: 8,
        name: "Ronald Dume",
        role: "Administrator | Portuguese Instructor",
        bio: "Bachelor of Applied Arts (University of Zimbabwe), Certificate in HIV/AIDS Counselling (University of Zimbabwe).",
        image: "/team/ronald.jpeg",
        specialties: ["Administration", "Portuguese Language Training"],
    },
    {
        id: 9,
        name: "Ronald Dume",
        role: "Administrator | Portuguese Instructor",
        bio: "Bachelor of Applied Arts (University of Zimbabwe), Certificate in HIV/AIDS Counselling (University of Zimbabwe).",
        image: "/team/ronald.jpeg",
        specialties: ["Administration", "Portuguese Language Training"],
    },
    {
        id: 10,
        name: "Kudzai Mangwiro",
        role: "Information and Technology",
        bio: "Bachelor degree in Data Science and Informatics (Midlands State University).",
        image: "/team/kudzai.jpeg",
        specialties: ["Digital Marketing", "Software Engineering"],
    },
    {
        id: 11,
        name: "Gogo Zimhindo",
        role: "Caretaker",
        image: "/team/gogo.jpeg",
        specialties: ["Caretaker"],
    },
    {
        id: 12,
        name: "Sekuru Zimhindo",
        role: "Caretaker",
        image: "/team/sekuru.jpeg",
        specialties: ["Caretaker"],
    },
]

export function Team() {
    return (
        <section id="team" className="py-20 bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <Badge className="bg-gold/20 text-gold-dark hover:bg-gold/30 mb-4">
                        Our Team
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-black mb-4">
                        Meet Our Expert Team
                    </h2>
                    <p className="text-gray-700 max-w-2xl mx-auto text-lg">
                        Our team of experienced educators and professionals are dedicated to helping you achieve your
                        language learning goals.
                    </p>
                </div>

                {/* Outer Card with gradient coffee-gold border */}
                <div
                    className="p-1 rounded-3xl bg-gradient-to-r from-coffee-dark/70 via-coffee-light/50 to-gold/70 shadow-lg">
                    <Card className="bg-gray-50 rounded-3xl shadow-inner">
                        <CardContent>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {teamMembers.map((member) => (
                                    <Card
                                        key={member.id}
                                        className="overflow-hidden rounded-2xl border border-gray-300 bg-white hover:shadow-xl hover:scale-105 transition-transform duration-300 relative"
                                    >
                                        {/* Thick Ribbon */}
                                        <div
                                            className="absolute top-0 left-0 w-full h-6 bg-gradient-to-r from-coffee-dark to-gold z-10 rounded-t-2xl"/>

                                        <div className="relative aspect-square bg-gray-200 mt-6">
                                            <Image
                                                src={member.image || "/placeholder.svg"}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                            />
                                            <div className="absolute inset-0 bg-black/20"/>
                                            <div className="absolute bottom-4 left-4 right-4 z-20">
                                                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                                                <p className="text-gold text-sm">{member.role}</p>
                                            </div>
                                        </div>

                                        <CardContent className="p-4">
                                            {member.bio && (
                                                <p className="text-black text-sm mb-4">{member.bio}</p>
                                            )}
                                            <div className="flex flex-wrap gap-2">
                                                {member.specialties.map((specialty) => (
                                                    <Badge
                                                        key={`${member.id}-${specialty}`}
                                                        variant="secondary"
                                                        className="bg-gray-200 text-black text-xs"
                                                    >
                                                        {specialty}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}