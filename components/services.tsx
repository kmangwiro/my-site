import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {BookOpen, Languages, Plane, GraduationCap, Users, Award, Phone} from "lucide-react";

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
];

const hskLevels = [
    {level: "HSK 1", duration: "3 months", description: ""},
    {level: "HSK 2", duration: "3 months", description: ""},
    {level: "HSK 3", duration: "4 months", description: ""},
    {level: "HSK 4", duration: "4 months", description: ""},
    {level: "HSK 5", duration: "5 months", description: ""},
    {level: "HSK 6", duration: "5 months", description: ""},
];

const hskFees = [
    {level: "HSK 1", courseFee: "$205 + enrolment $15", examFee: "$15", hsKKFee: "$20"},
    {level: "HSK 2", courseFee: "$220", examFee: "$25", hsKKFee: "$30"},
    {level: "HSK 3", courseFee: "$230", examFee: "$35", hsKKFee: "$40"},
    {level: "HSK 4", courseFee: "$240", examFee: "$45", hsKKFee: ""},
    {level: "HSK 5", courseFee: "$250", examFee: "$55", hsKKFee: ""},
    {level: "HSK 6", courseFee: "$260", examFee: "$65", hsKKFee: ""},
];

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
                        Zimgro Consultancy is a multifaceted organization offering comprehensive language training,
                        travel experiences, and career opportunities.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {services.map((service) => (
                        <Card key={service.title}
                              className="border-border hover:border-gold/50 hover:shadow-lg transition-all duration-300 bg-card">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                                    <service.icon className="h-6 w-6 text-gold-dark"/>
                                </div>
                                <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                                <CardDescription
                                    className="text-muted-foreground">{service.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {service.features.map((feature) => (
                                        <Badge key={feature} variant="secondary"
                                               className="bg-secondary text-secondary-foreground">
                                            {feature}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* HSK Levels */}
                <div className="bg-coffee rounded-3xl p-8 sm:p-12 mb-12">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
                            HSK Proficiency Levels
                        </h3>
                        <p className="text-white/70 max-w-2xl mx-auto">
                            The HSK (Hanyu Shuiping Kaoshi) is the standardized Chinese proficiency test. We offer
                            preparation courses for all six levels.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {hskLevels.map((hsk) => (
                            <div
                                key={hsk.level}
                                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
                            >
                                <div className="text-gold font-bold text-lg mb-1">{hsk.level}</div>
                                <div className="text-white/60 text-sm mb-2">
                                    Duration: {hsk.duration}
                                </div>
                                <div className="text-white/80 text-sm">{hsk.description}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* HSK Fees & Exam Details */}
                <div className="bg-coffee rounded-3xl p-8 sm:p-12 mb-12">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                            HSK Fees & Exam Details
                        </h3>
                        <p className="text-white/70 max-w-2xl mx-auto">
                            Course fees, examination registration fees, HSKK speaking fees, and exam dates.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {hskFees.map((fee) => (
                            <div
                                key={fee.level}
                                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
                            >
                                <div className="text-gold font-bold text-lg mb-2">{fee.level}</div>
                                <div className="text-white/80 text-sm mb-1">
                                    <span className="font-semibold">Course Fee:</span> {fee.courseFee}
                                </div>
                                <div className="text-white/80 text-sm mb-1">
                                    <span className="font-semibold">Exam Fee:</span> {fee.examFee}
                                </div>
                                {fee.hsKKFee && (
                                    <div className="text-white/80 text-sm mb-1">
                                        <span className="font-semibold">HSKK Fee:</span> {fee.hsKKFee}
                                    </div>
                                )}
                                <div className="text-white/80 text-sm mt-1">
                                    <span className="font-semibold">Registration Dates:</span> 19 Jan – 10 Feb
                                </div>
                                <div className="text-white/80 text-sm">
                                    <span className="font-semibold">Exam Date:</span> 22 Mar
                                </div>
                                <div className="text-white/80 text-sm">
                                    <span className="font-semibold">Results Date:</span> 22 Apr (certificates 22 May)
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Registration Instructions with WhatsApp */}
                <div className="bg-coffee rounded-3xl p-8 sm:p-12">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                            How to Complete Registration
                        </h3>
                        <p className="text-white/70 max-w-2xl mx-auto">
                            Please submit the following to complete your HSK registration. For more information, contact
                            us via WhatsApp.
                        </p>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-white/80 mb-6">
                        <li>Full name (as per National ID)</li>
                        <li>Date of birth</li>
                        <li>National ID number or a clear photo of your National ID</li>
                        <li>Email address</li>
                        <li>Digital passport-size photo with a white background</li>
                    </ul>
                    <div className="text-center">
                        <a
                            href="https://wa.me/263786409822"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold hover:bg-gold/80 text-white font-semibold rounded-xl transition-colors"
                        >
                            <Phone className="w-5 h-5"/>
                            Contact via WhatsApp
                        </a>
                    </div>

                </div>

            </div>
        </section>
    );
}
