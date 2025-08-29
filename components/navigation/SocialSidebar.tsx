"use client"

import type React from "react"
import { useLanguage } from "@/context/LanguageContext"
import { useTheme } from "@/context/ThemeContext"
import { motion } from "framer-motion"
import { Linkedin, Mail, Sun, Moon } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export default function SocialSidebar() {
  const { language, changeLanguage, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.div
      className="fixed top-1/4 right-8 transform -translate-y-1/2 z-40 flex flex-col items-center space-y-6"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="bg-black/30 backdrop-blur-lg rounded-full p-3 flex flex-col items-center space-y-4 border border-white/10">
        <SocialButton icon={<Linkedin size={20} />} label="LinkedIn" href="https://linkedin.com/company/loyancode" />
        <SocialButton icon={<FaWhatsapp size={20} />} label="WhatsApp" href="https://wa.me/573232346794" />
        <SocialButton icon={<Mail size={20} />} label="Email" href="mailto:info@loyancode.com" />
      </div>

      <div className="bg-black/30 backdrop-blur-lg rounded-full p-3 flex flex-col items-center space-y-4 border border-white/10">
        <button
          onClick={toggleTheme}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
          title={theme === "dark" ? t("lightMode") : t("darkMode")}
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button
          onClick={() => changeLanguage(language === "es" ? "en" : "es")}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
          title={language === "es" ? t("changeToEnglish") : t("changeToSpanish")}
        >
          <img
            src={language === "es" ? "https://flagcdn.com/w40/us.png" : "https://flagcdn.com/w40/es.png"}
            alt={language === "es" ? "English" : "Español"}
            className="w-6 h-6 rounded-full object-cover"
          />
        </button>
      </div>
    </motion.div>
  )
}

interface SocialButtonProps {
  icon: React.ReactNode
  label: string
  href: string
}

function SocialButton({ icon, label, href }: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
      title={label}
    >
      {icon}
    </a>
  )
}
