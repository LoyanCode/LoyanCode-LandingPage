"use client"

import { useState } from "react"
import { useLanguage } from "@/context/LanguageContext"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { Modal } from "@/components/ui/Modal"
import { ArrowRight } from "lucide-react"
import ParticlesBackground from "@/components/ui/ParticlesBackground"
import mascot from "@/public/mascot.png"

export default function Hero() {
  const { t } = useLanguage()
  const [showModal, setShowModal] = useState(false)

  return (
    <section className="w-full h-full flex items-center justify-center relative">
      <ParticlesBackground />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-12">
          {/* Left side - Mascot */}
          <motion.div
            className="lg:w-1/3 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-blue-500/20 blur-xl animate-pulse"></div>
              <img
                src={mascot.src}
                width={450}
                height={450}
                alt="LoyanCode Mascot"
                className="relative z-10 mascot-glow w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] object-contain"
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            className="lg:w-2/3 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 neon-text">{t("heroTitle")}</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl lg:mx-0 mx-auto">{t("heroSubtitle")}</p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button variant="gradient" size="lg" rightIcon={<ArrowRight />} onClick={() => setShowModal(true)}>
                {t("getStarted")}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  // Navigate to contact section using the horizontal navigator
                  const event = new CustomEvent('navigateToSection', { detail: { sectionId: 'contact' } })
                  window.dispatchEvent(event)
                }}
              >
                {t("freeConsultation")}
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start">
              <StatsCard number="5+" label="Años de Experiencia" />
              <StatsCard number="50+" label="Proyectos Completados" />
            </div>
          </motion.div>
        </div>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Iniciar Proyecto">
        <div className="space-y-4">
          <p>Completa el formulario a continuación para iniciar tu proyecto con LoyanCode.</p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nombre</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-black/50 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-black/50 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Tipo de Proyecto</label>
              <select className="w-full px-4 py-2 bg-black/50 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Desarrollo Web</option>
                <option>Aplicación Móvil</option>
                <option>Microservicios</option>
                <option>Plataforma Digital</option>
                <option>Otro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Descripción</label>
              <textarea
                className="w-full px-4 py-2 bg-black/50 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                placeholder="Describe brevemente tu proyecto"
              ></textarea>
            </div>
            <Button variant="gradient" className="w-full">
              Enviar Solicitud
            </Button>
          </form>
        </div>
      </Modal>
    </section>
  )
}

interface StatsCardProps {
  number: string
  label: string
}

function StatsCard({ number, label }: StatsCardProps) {
  return (
    <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-4 min-w-[150px]">
      <div className="text-3xl font-bold text-blue-400 mb-1">{number}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  )
}
