"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useLanguage } from "@/context/LanguageContext"
import { motion } from "framer-motion"
import { Home, Code, Briefcase, Compass, Mail, Users } from "lucide-react"

export default function Navbar() {
  const { t } = useLanguage()
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleNavigateToSection = (e: CustomEvent) => {
      setActiveSection(e.detail.sectionId)
    }

    const handleSectionChanged = (e: CustomEvent) => {
      setActiveSection(e.detail.sectionId)
    }

    window.addEventListener("navigateToSection", handleNavigateToSection as EventListener)
    window.addEventListener("sectionChanged", handleSectionChanged as EventListener)

    return () => {
      window.removeEventListener("navigateToSection", handleNavigateToSection as EventListener)
      window.removeEventListener("sectionChanged", handleSectionChanged as EventListener)
    }
  }, [])

  const navigateToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const event = new CustomEvent('navigateToSection', { detail: { sectionId } })
    window.dispatchEvent(event)
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-2"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-black/30 backdrop-blur-lg rounded-full px-6 py-3 flex items-center space-x-8 border border-white/10">
        <NavItem
          icon={<Home size={20} />}
          label={t("home")}
          active={activeSection === "home"}
          onClick={() => navigateToSection("home")}
        />
        <NavItem
          icon={<Code size={20} />}
          label={t("services")}
          active={activeSection === "services"}
          onClick={() => navigateToSection("services")}
        />
        <NavItem
          icon={<Briefcase size={20} />}
          label={t("projects")}
          active={activeSection === "projects"}
          onClick={() => navigateToSection("projects")}
        />
        <NavItem
          icon={<Compass size={20} />}
          label={t("approach")}
          active={activeSection === "approach"}
          onClick={() => navigateToSection("approach")}
        />
        <NavItem
          icon={<Users size={20} />}
          label={t("whychooseus")}
          active={activeSection === "whychooseus"}
          onClick={() => navigateToSection("whychooseus")}
        />
        <NavItem
          icon={<Mail size={20} />}
          label={t("contact")}
          active={activeSection === "contact"}
          onClick={() => navigateToSection("contact")}
        />
      </div>
    </motion.nav>
  )
}

interface NavItemProps {
  icon: React.ReactNode
  label: string
  active: boolean
  onClick: () => void
}

function NavItem({ icon, label, active, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${active ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white hover:bg-white/10"
        }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  )
}
