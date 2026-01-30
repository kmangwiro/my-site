"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, X } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

/* =========================
   GALLERY DATA
========================= */

const galleryItems = [
  {
    id: "vid-3",
    type: "video",
    src: "/videos/graduation.mp4",
    alt: "Graduation ceremony",
    category: "Videos",
  },
  {
    id: "vid-2",
    type: "video",
    src: "/videos/classroom.mp4",
    alt: "Classroom session",
    category: "Videos",
  },
  {
    id: "vid-1",
    type: "video",
    src: "/videos/zimgro-admin.mp4",
    alt: "Campus tour",
    category: "Videos",
  },
  {
    type: "image",
    src: "/gallery/gall5.jpeg",
    alt: "Students learning Chinese in classroom",
    category: "Exam Hall",
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
    category: "Evening Class",
  },
  {
    type: "image",
    src: "/gallery/gall3.jpeg",
    alt: "Chinese calligraphy workshop",
    category: "Workshops",
  },
]

/* =========================
   COMPONENT
========================= */

export function Gallery() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ===== Section Header ===== */}
        <div className="text-center mb-16">
          <Badge className="bg-gold/20 text-gold-dark mb-4">Gallery</Badge>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
            Our Journey in Pictures
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore moments from our classrooms, cultural events, graduation ceremonies, and educational tours.
          </p>
        </div>

        {/* ===== Gallery Grid ===== */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20">
          {galleryItems.map((item, index) => (
            <div
              key={item.id ?? index}
              className={`relative group rounded-xl overflow-hidden bg-muted ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <div className={`relative ${index === 0 ? "aspect-square" : "aspect-video"}`}>

                {/* IMAGE OR VIDEO */}
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* PLAY BUTTON */}
                {item.type === "video" && (
                  <button
                    onClick={() => setSelectedVideo(item.src)}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center shadow-lg">
                      <Play className="h-8 w-8 text-navy ml-1" />
                    </div>
                  </button>
                )}

                {/* CATEGORY BADGE */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <Badge className="bg-gold text-navy">{item.category}</Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== VIDEO MODAL ===== */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-navy/90 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
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
              className="w-full rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  )
}
