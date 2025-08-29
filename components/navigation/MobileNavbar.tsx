"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/context/LanguageContext"
import { useTheme } from "@/context/ThemeContext"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Settings, Home, Code, Briefcase, Compass, Mail, Linkedin, Sun, Moon, Users } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export default function MobileNavbar() {
  const { language, changeLanguage, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const [navOpen, setNavOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)

  const toggleNav = () => {
    setNavOpen(!navOpen)
    if (settingsOpen) setSettingsOpen(false)
  }

  const toggleSettings = () => {
    setSettingsOpen(!settingsOpen)
    if (navOpen) setNavOpen(false)
  }

  const navigateToSection = (sectionId: string) => {
    const event = new CustomEvent('navigateToSection', { detail: { sectionId } })
    window.dispatchEvent(event)
    setNavOpen(false)
  }

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-lg border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={toggleNav} className="p-2 rounded-full hover:bg-white/10">
            {navOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="text-xl font-bold">LoyanCode</div>

          <button onClick={toggleSettings} className="p-2 rounded-full hover:bg-white/10">
            <Settings size={24} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {navOpen && (
          <motion.div
            className="fixed top-[57px] left-0 bottom-0 z-40 w-64 bg-black/80 backdrop-blur-lg border-r border-white/10"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-4">{t("navigation")}</h2>
              <div className="space-y-2">
                <MobileNavItem icon={<Home size={20} />} label={t("home")} onClick={() => navigateToSection("home")} />
                <MobileNavItem
                  icon={<Code size={20} />}
                  label={t("services")}
                  onClick={() => navigateToSection("services")}
                />
                <MobileNavItem
                  icon={<Briefcase size={20} />}
                  label={t("projects")}
                  onClick={() => navigateToSection("projects")}
                />
                <MobileNavItem
                  icon={<Compass size={20} />}
                  label={t("approach")}
                  onClick={() => navigateToSection("approach")}
                />
                <MobileNavItem
                  icon={<Users size={20} />}
                  label={t("whychooseus")}
                  onClick={() => navigateToSection("why-choose-us")}
                />
                <MobileNavItem
                  icon={<Mail size={20} />}
                  label={t("contact")}
                  onClick={() => navigateToSection("contact")}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {settingsOpen && (
          <motion.div
            className="fixed top-[57px] right-0 bottom-0 z-40 w-64 bg-black/80 backdrop-blur-lg border-l border-white/10"
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-4">{t("settings")}</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm text-gray-400 mb-2">{t("socialMedia")}</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://linkedin.com/company/loyancode"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-white/10"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="https://wa.me/573232346794"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-white/10"
                    >
                      <FaWhatsapp size={20} />
                    </a>
                    <a
                      href="mailto:info@loyancode.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-white/10"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm text-gray-400 mb-2">{theme === "dark" ? t("lightMode") : t("darkMode")}</h3>
                  <button
                    onClick={toggleTheme}
                    className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/10 w-full"
                  >
                    {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    <span>{theme === "dark" ? t("lightMode") : t("darkMode")}</span>
                  </button>
                </div>

                <div>
                  <h3 className="text-sm text-gray-400 mb-2">
                    {language === "es" ? t("changeToEnglish") : t("changeToSpanish")}
                  </h3>
                  <button
                    onClick={() => changeLanguage(language === "es" ? "en" : "es")}
                    className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/10 w-full"
                  >
                    <img
                      src={language === "es" ? "https://flagcdn.com/w40/us.png" : "https://flagcdn.com/w40/es.png"}
                      alt={language === "es" ? "English" : "Español"}
                      className="w-5 h-5 rounded-full object-cover"
                    />
                    <span>{language === "es" ? t("changeToEnglish") : t("changeToSpanish")}</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

interface MobileNavItemProps {
  icon: React.ReactNode
  label: string
  onClick: () => void
}

function MobileNavItem({ icon, label, onClick }: MobileNavItemProps) {
  return (
    <button onClick={onClick} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 w-full">
      {icon}
      <span>{label}</span>
    </button>
  )
}
