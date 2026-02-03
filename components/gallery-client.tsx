"use client"

import dynamic from "next/dynamic"

const Gallery = dynamic(
  () => import("./gallery").then((mod) => mod.Gallery),
  { ssr: false }
)

export function GalleryClient() {
  return <Gallery />
}
