import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Team } from "@/components/team"
import { GalleryClient } from "@/components/gallery-client"
import { Vacancies, UpcomingEvents } from "@/components/vacancies"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Team />
      <GalleryClient />

      {/* Jobs */}
      <Vacancies />

      {/* Events (just below vacancies) */}
      <UpcomingEvents />

      <Contact />
      <Footer />
    </main>
  )
}
