import Hero from "@/components/sections/Hero"
import Services from "@/components/sections/Services"
import Projects from "@/components/sections/Projects"
import Approach from "@/components/sections/Approach"
import WhyChooseUs from "@/components/sections/WhyChooseUs"
import Contact from "@/components/sections/Contact"
import Navbar from "@/components/navigation/Navbar"
import SocialSidebar from "@/components/navigation/SocialSidebar"
import MobileNavbar from "@/components/navigation/MobileNavbar"
import HorizontalNavigator from "@/components/ui/HorizontalNavigator"
import { Home as HomeIcon, Settings, FolderOpen, Lightbulb, Users, Mail } from "lucide-react"

export default function Home() {
  const sections = [
    {
      id: "home",
      title: "Inicio",
      icon: <HomeIcon className="w-4 h-4" />,
      component: <Hero />
    },
    {
      id: "services",
      title: "Servicios",
      icon: <Settings className="w-4 h-4" />,
      component: <Services />
    },
    {
      id: "projects",
      title: "Proyectos",
      icon: <FolderOpen className="w-4 h-4" />,
      component: <Projects />
    },
    {
      id: "approach",
      title: "Enfoque",
      icon: <Lightbulb className="w-4 h-4" />,
      component: <Approach />
    },
    {
      id: "whychooseus",
      title: "Por Qué Nosotros",
      icon: <Users className="w-4 h-4" />,
      component: <WhyChooseUs />
    },
    {
      id: "contact",
      title: "Contacto",
      icon: <Mail className="w-4 h-4" />,
      component: <Contact />
    }
  ]

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-black via-blue-950 to-blue-900 text-white overflow-hidden">
      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <Navbar />
        <SocialSidebar />
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <MobileNavbar />
      </div>

      {/* Horizontal Navigator */}
      <div className="pt-16 lg:pt-0">
        <HorizontalNavigator sections={sections} />
      </div>
    </main>
  )
}
