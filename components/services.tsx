import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {
    BookOpen,
    Languages,
    Plane,
    GraduationCap,
    Users,
    Award,
    Phone,
} from "lucide-react";

/* =========================
   SERVICES DATA
========================= */

const services = [
    {
        icon: Languages,
        title: "Chinese Language Courses",
        description:
            "Comprehensive Mandarin Chinese courses for all levels, from basic conversational skills to advanced business Chinese.",
        features: ["HSK 1–6 Preparation", "Business Chinese", "Conversational Skills"],
    },
    {
        icon: BookOpen,
        title: "Foreign Language Training",
        description:
            "Learn other foreign languages with our experienced instructors, perfect for personal growth or career advancement. Apart from Chinese, it is also important to note that Zimgro offers other languages such as Portuguese, French, and German, but only on a one-on-one basis. ",
        features: ["Multiple Languages", "Certified Instructors", "Flexible Schedules"],
    },
    {
        icon: GraduationCap,
        title: "HSK Certification",
        description:
            "Official HSK test preparation and certification for all levels, from beginner to advanced.",
        features: ["Official Test Centre","Study Materials"],
    },
    {
        icon: Plane,
        title: "Travel & Tours",
        description:
            "Cultural immersion trips to China and other destinations. Experience the language in its native environment.",
        features: ["Educational Tours", "Cultural Exchange", "Group Travel"],
    },
    {
        icon: Users,
        title: "Corporate Training",
        description:
            "Customized language training programs for businesses working with Chinese partners.",
        features: ["On-site Training", "Custom Curriculum", "Team Building"],
    },
    {
        icon: Award,
        title: "Interpretation Services",
        description:
            "Professional interpretation and translation services for meetings, conferences, and documents.",
        features: ["Business Meetings", "Document Translation", "Conference Support"],
    },
];

/* =========================
   HSK STRUCTURED DATA
========================= */

// Exam Timeline
const examTimeline = {
    registration: "19 Jan – 10 Feb",
    examDate: "22 March",
    results: "Approximately 1 month after the exam",
};

// Examination Fees
const examFees = [
    {level: "HSK 1", fee: "$15"},
    {level: "HSK 2", fee: "$25"},
    {level: "HSK 3", fee: "$35"},
    {level: "HSK 4", fee: "$45"},
    {level: "HSK 5", fee: "$55"},
    {level: "HSK 6", fee: "$65"},
];

// Level Structure
const levelStructure = [
    {
        title: "Elementary Level",
        levels: [
            {level: "HSK 1", duration: "1 Semester (≈ 3 months)"},
            {level: "HSK 2", duration: "1 Semester (≈ 3 months)"},
        ],
        description:
            "Covers basic pronunciation, daily conversations, and simple sentence structures.",
    },
    {
        title: "Intermediate Level",
        levels: [
            {level: "HSK 3", duration: "2 Semester"},
            {level: "HSK 4", duration: "2 Semester"},
        ],
        description:
            "Focuses on grammar accuracy, reading comprehension, and practical communication.",
    },
    {
        title: "Advanced Level",
        levels: [
            {level: "HSK 5", duration: "2 Semester"},
            {level: "HSK 6", duration: "2 Semester"},
        ],
        description:
            "Advanced reading, writing, professional and academic Chinese proficiency.",
    },
];

/* =========================
   COMPONENT
========================= */

export function Services() {
    return (
        <section id="services" className="py-20 bg-secondary">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* ===== Section Header ===== */}
                <div className="text-center mb-16">
                    <Badge className="bg-gold/20 text-gold-dark mb-4">Our Services</Badge>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">Our Services</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Zimgro Consultancy offers structured language training, official HSK
                        certification, translation and interpretation services.
                    </p>
                </div>

                {/* ===== Services Grid ===== */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {services.map((service) => (
                        <Card
                            key={service.title}
                            className="rounded-2xl bg-gray-200 border border-gray-300 shadow-md hover:shadow-xl transition-shadow"
                        >
                            <CardHeader className="flex flex-col items-center text-center">
                                <div
                                    className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                                    <service.icon className="h-8 w-8 text-black"/>
                                </div>
                                <CardTitle className="text-lg font-bold text-black">{service.title}</CardTitle>
                                <CardDescription className="text-black/80 text-sm mt-1">
                                    {service.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap justify-center gap-2 mt-2">
                                    {service.features.map((feature) => (
                                        <Badge key={feature} variant="secondary" className="text-black bg-gray-300/50">
                                            {feature}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>


                {/* ===== HSK INFORMATION CARDS ===== */}
                <div className="bg-coffee rounded-3xl p-8 sm:p-12">

                    <div className="text-center mb-10">
                        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
                            HSK Program Information
                        </h3>
                        <p className="text-white/70 max-w-2xl mx-auto">
                            Clear, structured information on HSK exams, fees, and proficiency levels.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {/* Card 1 – Dates */}
                        <Card
                            className="h-full rounded-2xl border border-gold/30 bg-white/5 shadow-md hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <CardTitle className="text-gold text-lg font-bold">Exam Dates</CardTitle>
                                <CardDescription className="text-white/70 text-sm">Official HSK
                                    timeline</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2 text-white/80 text-sm">
                                <div><span className="font-semibold">Registration:</span> {examTimeline.registration}
                                </div>
                                <div><span className="font-semibold">Exam Date:</span> {examTimeline.examDate}</div>
                                <div><span className="font-semibold">Results:</span> {examTimeline.results}</div>
                            </CardContent>
                        </Card>

                        {/* Card 2 – Exam Fees */}
                        <Card
                            className="h-full rounded-2xl border border-gold/30 bg-white/5 shadow-md hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <CardTitle className="text-gold text-lg font-bold">Examination Fees</CardTitle>
                                <CardDescription className="text-white/70 text-sm">Official exam fees</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-1 text-white/80 text-sm">
                                {examFees.map((item) => (
                                    <div key={item.level} className="flex justify-between">
                                        <span>{item.level}</span>
                                        <span className="font-semibold">{item.fee}</span>
                                    </div>
                                ))}
                                <div className="text-white/70 mt-2 p-2 bg-gold/20 rounded text-xs">
                                    Note: An additional $5 administrative fee applies to all registrations.
                                </div>
                            </CardContent>
                        </Card>

                        {/* Cards 3-5 – Program Structure split by Level */}
                        {levelStructure.map((level) => (
                            <Card key={level.title}
                                  className="h-full rounded-2xl border border-gold/30 bg-white/5 shadow-md hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-gold text-lg font-bold">{level.title}</CardTitle>
                                    <CardDescription className="text-white/70 text-sm">Level breakdown</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2 text-white/80 text-sm">
                                    {level.levels.map((lvl) => (
                                        <div key={lvl.level} className="text-white/70">
                                            {lvl.level} – {lvl.duration}
                                        </div>
                                    ))}
                                    <div className="text-white/60">{level.description}</div>
                                </CardContent>
                            </Card>
                        ))}

                    </div>
                </div>

                {/* ===== WhatsApp Registration ===== */}
                <div className="text-center mt-12">
                    <a
                        href="https://wa.me/263786409822"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gold hover:bg-gold/80 text-white font-semibold rounded-xl transition-colors"
                    >
                        <Phone className="w-5 h-5"/>
                        Contact via WhatsApp
                    </a>
                </div>

            </div>
        </section>
    );
}
