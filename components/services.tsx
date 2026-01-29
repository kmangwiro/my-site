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
            "Learn other foreign languages with our experienced instructors. Perfect for personal growth or career advancement.",
        features: ["Multiple Languages", "Certified Instructors", "Flexible Schedules"],
    },
    {
        icon: GraduationCap,
        title: "HSK Certification",
        description:
            "Official HSK test preparation and certification for all levels, from beginner to advanced.",
        features: ["Official Test Centre", "Mock Exams", "Study Materials"],
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

// Card 1 – Exam Timeline
const examTimeline = {
    registration: "19 Jan – 10 Feb",
    examDate: "22 March",
    results: "Approximately 1 month after the exam",
};

// Card 2 – Examination Fees
const examFees = [
    {level: "HSK 1", fee: "$15"},
    {level: "HSK 2", fee: "$25"},
    {level: "HSK 3", fee: "$35"},
    {level: "HSK 4", fee: "$45"},
    {level: "HSK 5", fee: "$55"},
    {level: "HSK 6", fee: "$65"},
];

// Card 3 – Semester Fees
const semesterFees = [
    {level: "HSK 1", fee: "$205 + $15 enrolment"},
    {level: "HSK 2", fee: "$220"},
    {level: "HSK 3", fee: "$230"},
    {level: "HSK 4", fee: "$240"},
    {level: "HSK 5", fee: "$250"},
    {level: "HSK 6", fee: "$260"},
];

// Card 4 – Level Explanation
const levelStructure = [
    {
        title: "Elementary Level",
        levels: "HSK 1 – HSK 2",
        duration: "1 Semester (≈ 3 months)",
        description:
            "Covers basic pronunciation, daily conversations, and simple sentence structures.",
    },
    {
        title: "Intermediate Level",
        levels: "HSK 3 – HSK 4",
        duration: "2 Semesters",
        description:
            "Focuses on grammar accuracy, reading comprehension, and practical communication.",
    },
    {
        title: "Advanced Level",
        levels: "HSK 5 – HSK 6",
        duration: "2+ Semesters",
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
                    <Badge className="bg-gold/20 text-gold-dark mb-4">
                        Our Services
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
                        Our Services
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Zimgro Consultancy offers structured language training, official HSK
                        certification, cultural experiences, and professional services.
                    </p>
                </div>

                {/* ===== Services Grid ===== */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {services.map((service) => (
                        <Card
                            key={service.title}
                            className="hover:border-gold/50 hover:shadow-lg transition-all"
                        >
                            <CardHeader>
                                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                                    <service.icon className="h-6 w-6 text-gold-dark"/>
                                </div>
                                <CardTitle>{service.title}</CardTitle>
                                <CardDescription>
                                    {service.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {service.features.map((feature) => (
                                        <Badge key={feature} variant="secondary">
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
                            Clear, structured information on HSK exams, fees, semesters, and
                            proficiency levels.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {/* Card 1 – Dates */}
                        <Card className="bg-white/5 border border-white/10">
                            <CardHeader>
                                <CardTitle className="text-gold">Exam Dates</CardTitle>
                                <CardDescription className="text-white/70">
                                    Official HSK timeline
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2 text-white/80 text-sm">
                                <div>
                                    <span className="font-semibold">Registration:</span>{" "}
                                    {examTimeline.registration}
                                </div>
                                <div>
                                    <span className="font-semibold">Exam Date:</span>{" "}
                                    {examTimeline.examDate}
                                </div>
                                <div>
                                    <span className="font-semibold">Results:</span>{" "}
                                    {examTimeline.results}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 2 – Exam Fees */}
                        <Card className="bg-white/5 border border-white/10">
                            <CardHeader>
                                <CardTitle className="text-gold">Examination Fees</CardTitle>
                                <CardDescription className="text-white/70">
                                    Official exam fees
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-1 text-white/80 text-sm">
                                {examFees.map((item) => (
                                    <div key={item.level} className="flex justify-between">
                                        <span>{item.level}</span>
                                        <span className="font-semibold">{item.fee}</span>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Card 3 – Semester Fees */}
                        <Card className="bg-white/5 border border-white/10">
                            <CardHeader>
                                <CardTitle className="text-gold">Semester Fees</CardTitle>
                                <CardDescription className="text-white/70">
                                    Tuition per level
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-1 text-white/80 text-sm">
                                {semesterFees.map((item) => (
                                    <div key={item.level} className="flex justify-between">
                                        <span>{item.level}</span>
                                        <span className="font-semibold">{item.fee}</span>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Card 4 – Structure */}
                        <Card className="bg-white/5 border border-white/10">
                            <CardHeader>
                                <CardTitle className="text-gold">
                                    Program Structure
                                </CardTitle>
                                <CardDescription className="text-white/70">
                                    Level breakdown
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4 text-white/80 text-sm">
                                {levelStructure.map((level) => (
                                    <div key={level.title}>
                                        <div className="font-semibold text-white">
                                            {level.title}
                                        </div>
                                        <div className="text-white/70">{level.levels}</div>
                                        <div className="text-white/60">
                                            {level.duration}
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

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
