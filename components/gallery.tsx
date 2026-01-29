"use client"

import {useState} from "react"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {Play, X} from "lucide-react"
import Image from "next/image"

const galleryItems = [
    {
        id: "vid-1",
        type: "video",
        src: "/videos/zimgro-admin.mp4",
        thumbnail: "/videos/place.png", // optional
        alt: "Campus tour",
        category: "Videos",
    },
    {
        id: "vid-2",
        type: "video",
        src: "/videos/classroom.mp4",
        thumbnail: "/videos/placeholder.png",
        alt: "Classroom session",
        category: "Videos",
    },
    {
        id: "vid-3",
        type: "video",
        src: "/videos/graduation.mp4",
        thumbnail: "/videos/place.png",
        alt: "Graduation ceremony",
        category: "Videos",
    },

    {
        type: "image",
        src: "/gallery/gall5.jpeg",
        alt: "Students learning Chinese in classroom",
        category: "exam hall",
    },
    {
        type: "image",
        src: "/gallery/classroom.jpeg",
        alt: "HSK certification ceremony",
        category: "Graduation",
    },
    {
        type: "image",
        src: "/gallery/wall1.jpeg",
        alt: "Chinese cultural event",
        category: "Events",
    },
    {
        type: "image",
        src: "/gallery/rena1.jpeg",
        alt: "Student testimonials",
        category: "Testimonials",
    },
    {
        type: "image",
        src: "/gallery/laho1.jpeg",
        alt: "Evening class",
        category: "Evening class",
    },
    {
        type: "image",
        src: "/gallery/gall3.jpeg",
        alt: "Chinese calligraphy workshop",
        category: "Workshops",
    },
]

const successStories = [
    {

        name: "Tanatswa Tizirai",
        achievement: "HSK 5 Certified",
        story: "Tanatswa began his journey working as a security guard in Harare before enrolling with ZIMGRO Language Consultancy. Through dedication and consistent study, he successfully completed HSK Level 4 and later advanced to HSK 5. With ZIMGRO’s guidance and career support, he secured a professional role as a Chinese language translator. Today, he enjoys a transformed career and a significantly improved standard of living, proving that the right skills can open life-changing opportunities.",
        image: "/stories/tanatswa.jpeg",

    },
    {
        name: "Trust Majaura",
        achievement: "Professional Chinese Interpreter",
        story: "Trust Majaura joined ZIMGRO Language Consultancy with a clear goal: to master the Chinese language and build a meaningful international career. Through disciplined study and successful completion of HSK Level 5, he developed strong interpretation and communication skills. With continuous mentorship and professional preparation from ZIMGRO, Trust secured a full-time position as a Chinese interpreter at the Chinese Embassy. His journey reflects how commitment, guided learning, and the right support system can turn ambition into reality.",
        image: "/stories/trust.jpeg",
    },

    {
        name: "Kudakwashe Mbizi",
        achievement: "Chinese Language Professional",
        story: "Kudakwashe Mbizi enrolled at ZIMGRO Language Consultancy with the determination to build a career using the Chinese language. After completing advanced Chinese language training and achieving HSK Level 6, he developed high-level communication and interpretation skills. With guidance and career support from ZIMGRO, Kudakwashe secured a professional role working closely with Chinese professionals, where he now applies his language expertise in real-world business and operational environments. His journey demonstrates how advanced language mastery can unlock high-value career opportunities.",
        image: "/stories/kuda.jpeg",
    }

]

export function Gallery() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

    return (
        <section id="gallery" className="py-20 bg-secondary">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <Badge className="bg-gold/20 text-gold-dark hover:bg-gold/30 mb-4">Gallery</Badge>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
                        Our Journey in Pictures
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Explore moments from our classrooms, cultural events, graduation ceremonies, and educational
                        tours.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20">
                    {galleryItems.map((item, index) => (
                        <div
                            key={index}
                            className={`relative group rounded-xl overflow-hidden bg-muted ${
                                index === 0 ? "col-span-2 row-span-2" : ""
                            }`}
                        >
                            <div className={`relative ${index === 0 ? "aspect-square" : "aspect-video"}`}>
                                <Image
                                    src={(item.type === "video" ? (item as {
                                        thumbnail: string
                                    }).thumbnail : item.src) || "/placeholder.svg"}
                                    alt={item.alt}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                />
                                <div
                                    className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity"/>

                                {item.type === "video" && (
                                    <button
                                        onClick={() => setSelectedVideo(item.src)}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <div
                                            className="w-16 h-16 rounded-full bg-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Play className="h-8 w-8 text-navy ml-1"/>
                                        </div>
                                    </button>
                                )}

                                <div
                                    className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Badge className="bg-gold text-navy">{item.category}</Badge>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Success Stories */}
                <div className="bg-card rounded-3xl p-8 sm:p-12 border border-border">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">
                            Success Stories
                        </h3>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Our students achieve remarkable results. Here are some of their inspiring stories.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {successStories.map((story) => (
                            <div
                                key={story.name}
                                className="bg-secondary rounded-xl p-6 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div
                                        className="w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden bg-muted relative">
                                        <Image
                                            src={story.image || "/placeholder.svg"}
                                            alt={story.name}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 640px) 160px, 176px"
                                        />
                                    </div>


                                    <div>
                                        <h4 className="font-semibold text-foreground">{story.name}</h4>
                                        <p className="text-gold-dark text-sm font-medium">{story.achievement}</p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed">{story.story}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {selectedVideo && (
                <div className="fixed inset-0 z-50 bg-navy/90 flex items-center justify-center p-4">
                    <div className="relative w-full max-w-4xl">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute -top-12 right-0 text-white hover:bg-white/20"
                            onClick={() => setSelectedVideo(null)}
                        >
                            <X className="h-6 w-6"/>
                        </Button>
                        <div className="aspect-video">
                            <iframe
                                src={selectedVideo}
                                className="w-full h-full rounded-xl"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
