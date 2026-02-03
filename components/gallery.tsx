"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, X } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

/* =========================
   OUR JOURNEY — PICTURES
========================= */
const journeyPictures = [
  { src: "/gallery/gall5.jpeg", alt: "Students learning Chinese in classroom", category: "Exam Hall" },
  { src: "/gallery/classroom.jpeg", alt: "HSK certification ceremony", category: "Graduation" },
  { src: "/gallery/wall1.jpeg", alt: "Chinese cultural event", category: "Events" },
  { src: "/gallery/rena1.jpeg", alt: "Student testimonials", category: "Testimonials" },
  { src: "/gallery/laho1.jpeg", alt: "Evening class", category: "Evening Class" },
  { src: "/gallery/gall3.jpeg", alt: "Chinese calligraphy workshop", category: "Workshops" },
]

/* =========================
   OUR JOURNEY — VIDEOS
========================= */
const journeyVideos = [
  { src: "/gallery/characters.mp4", category: "Classroom Life" },
  { src: "/gallery/group-class.mp4", category: "Cultural Events" },
  { src: "/gallery/students.mp4", category: "Graduation Day" },
]

/* =========================
   SUCCESS STORIES — DATA
========================= */
const successStories = [
  {
    name: "Tanatswa Tizirai",
    achievement: "HSK 5 Certified",
    story:
      "Tanatswa began his journey working as a security guard in Harare before enrolling with ZIMGRO Language Consultancy. Through dedication and consistent study, he successfully completed HSK Level 4 and later advanced to HSK 5. With ZIMGRO’s guidance and career support, he secured a professional role as a Chinese language translator.",
    image: "/stories/tanatswa.jpeg",
  },
  {
    name: "Trust Majaura",
    achievement: "Professional Chinese Interpreter",
    story:
      "Trust joined ZIMGRO Language Consultancy with a clear goal of mastering Chinese. After completing HSK Level 5 and receiving continuous mentorship, he secured a full-time position as a Chinese interpreter at the Chinese Embassy.",
    image: "/stories/trust.jpeg",
  },
  {
    name: "Kudakwashe Mbizi",
    achievement: "HSK 6 Graduate",
    story:
      "Kudakwashe completed advanced Chinese language training and achieved HSK Level 6. With ZIMGRO’s support, he secured a professional role working closely with Chinese professionals in business environments.",
    image: "/stories/kuda.jpeg",
  },
]

/* =========================
   SUCCESS STORIES — VIDEOS
========================= */
const successVideos = [
  { src: "/videos/tkay.mp4", category: "Tanatswa Tizirai" },
  { src: "/videos/student2.mp4", category: "Ulysse Zirereze" },
  { src: "/videos/TanatswaMadura.mp4", category: "Tanatswa Madura" },
]

/* =========================
   COMPONENT
========================= */
export function Gallery() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= OUR JOURNEY ================= */}
        <div className="mb-28">
          <div className="text-center mb-16">
            <Badge className="bg-gold/20 text-gold-dark mb-4">Gallery</Badge>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">Our Journey in Pictures</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Moments from our classrooms, cultural events, and graduations.
            </p>
          </div>

          {/* Journey Pictures */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
            {journeyPictures.map((item, index) => (
              <div
                key={index}
                className={`relative group rounded-xl overflow-hidden ${index === 0 ? "col-span-2 row-span-2" : ""}`}
              >
                <div className={`relative ${index === 0 ? "aspect-square" : "aspect-video"}`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <Badge className="bg-gold text-navy">{item.category}</Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Journey Videos */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {journeyVideos.map((video, index) => (
              <div key={index} className="relative group rounded-xl overflow-hidden">
                <div className="relative aspect-video">
                  <video
                    src={video.src}
                    className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
                    muted
                    playsInline
                    preload="metadata"
                  />
                  <div className="absolute inset-0 bg-navy/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <button
                    onClick={() => setSelectedVideo(video.src)}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center shadow-lg">
                      <Play className="h-8 w-8 text-navy ml-1" />
                    </div>
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <Badge className="bg-gold text-navy">{video.category}</Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SUCCESS STORIES ================= */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <Badge className="bg-gold/20 text-gold-dark mb-4">Success</Badge>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Real stories from students who transformed their lives through Chinese.
            </p>
          </div>

          {/* Success Stories — Text + Pictures */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {successStories.map((story) => (
              <div key={story.name} className="bg-secondary rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-40 h-40 rounded-full overflow-hidden relative bg-muted">
                    <Image src={story.image} alt={story.name} fill className="object-cover" />
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

          {/* Success Videos — EXACTLY LIKE Journey Videos */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
            {successVideos.map((video, index) => (
              <div key={index} className="relative group rounded-xl overflow-hidden">
                <div className="relative aspect-video">
                  <video
                    src={video.src}
                    className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
                    muted
                    playsInline
                    preload="metadata"
                  />
                  <div className="absolute inset-0 bg-navy/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <button
                    onClick={() => setSelectedVideo(video.src)}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center shadow-lg">
                      <Play className="h-8 w-8 text-navy ml-1" />
                    </div>
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <Badge className="bg-gold text-navy">{video.category}</Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VIDEO MODAL — SAME FOR BOTH Journey and Success Videos */}
        {selectedVideo && (
          <div className="fixed inset-0 z-50 bg-navy/90 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl aspect-video">
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:bg-white/20"
                onClick={() => setSelectedVideo(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-full rounded-xl object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
