"use client"

import { useState } from "react"
import { useLanguage } from "@/context/LanguageContext"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Palette, Code, Rocket, Wrench, Users } from "lucide-react"

export default function Approach() {
  const { t } = useLanguage()
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set())

  const steps = [
    {
      id: "discovery",
      title: t("discovery"),
      description: t("discoveryDesc"),
      shortDesc: "Análisis profundo de necesidades y objetivos",
      icon: <Search className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: ["Entrevistas con stakeholders", "Análisis de competencia", "Definición de objetivos", "Planificación estratégica"],
      duration: "1-2 semanas"
    },
    {
      id: "design",
      title: t("design"),
      description: t("designDesc"),
      shortDesc: "Creación de experiencias visuales únicas",
      icon: <Palette className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["Wireframes y prototipos", "Diseño UI/UX", "Sistema de diseño", "Validación con usuarios"],
      duration: "2-3 semanas"
    },
    {
      id: "development",
      title: t("development"),
      description: t("developmentDesc"),
      shortDesc: "Construcción robusta y escalable",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: ["Desarrollo frontend", "Desarrollo backend", "Integración de APIs", "Testing y QA"],
      duration: "4-8 semanas"
    },
    {
      id: "deployment",
      title: t("deployment"),
      description: t("deploymentDesc"),
      shortDesc: "Despliegue seguro y optimizado",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: ["Configuración de servidores", "Despliegue automatizado", "Optimización de rendimiento", "Monitoreo"],
      duration: "1-2 semanas"
    },
    {
      id: "support",
      title: t("support"),
      description: t("supportDesc"),
      shortDesc: "Soporte continuo y mantenimiento",
      icon: <Wrench className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      features: ["Soporte técnico 24/7", "Mantenimiento preventivo", "Actualizaciones", "Capacitación"],
      duration: "Continuo"
    },
    {
      id: "team",
      title: "Equipo",
      description: "Trabajamos con un equipo multidisciplinario de expertos en diferentes tecnologías y metodologías.",
      shortDesc: "Equipo multidisciplinario de expertos",
      icon: <Users className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: ["Desarrolladores full-stack", "Diseñadores UI/UX", "DevOps engineers", "Project managers"],
      duration: "Dedicado"
    }
  ]

  const toggleCard = (cardId: string) => {
    const newFlippedCards = new Set(flippedCards)
    if (newFlippedCards.has(cardId)) {
      newFlippedCards.delete(cardId)
    } else {
      newFlippedCards.add(cardId)
    }
    setFlippedCards(newFlippedCards)
  }

  return (
    <section className="w-full h-full flex items-center justify-center relative">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("ourApproach")}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t("approachSubtitle")}</p>
        </motion.div>

        {/* Cards Container */}
        <div className="max-w-7xl mx-auto">
          {/* Top Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {steps.slice(0, 3).map((step, index) => (
              <FlipCard
                key={step.id}
                step={step}
                index={index}
                isFlipped={flippedCards.has(step.id)}
                onToggle={() => toggleCard(step.id)}
              />
            ))}
          </div>

          {/* Bottom Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.slice(3, 6).map((step, index) => (
              <FlipCard
                key={step.id}
                step={step}
                index={index + 3}
                isFlipped={flippedCards.has(step.id)}
                onToggle={() => toggleCard(step.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface Step {
  id: string
  title: string
  description: string
  shortDesc: string
  icon: React.ReactNode
  color: string
  features: string[]
  duration: string
}

interface FlipCardProps {
  step: Step
  index: number
  isFlipped: boolean
  onToggle: () => void
}

function FlipCard({ step, index, isFlipped, onToggle }: FlipCardProps) {
  return (
    <motion.div
      className="relative h-80 cursor-pointer perspective-1000"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={onToggle}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        {/* Front of Card */}
        <motion.div
          className="absolute inset-0 backface-hidden"
          style={{
            background: `linear-gradient(135deg, ${step.color})`
          }}
        >
          <div className="w-full h-full rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-2xl border border-white/20">
            {/* Icon */}
            <motion.div
              className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="text-white">
                {step.icon}
              </div>
            </motion.div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>

            {/* Duration */}
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <span className="text-white font-medium">{step.duration}</span>
            </div>

            {/* Flip Hint */}
            <motion.div
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 text-sm"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Click para voltear
            </motion.div>
          </div>
        </motion.div>

        {/* Back of Card */}
        <motion.div
          className="absolute inset-0 backface-hidden rotate-y-180"
          style={{
            background: `linear-gradient(135deg, ${step.color})`
          }}
        >
          <div className="w-full h-full rounded-2xl p-6 flex flex-col text-white shadow-2xl border border-white/20">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                {step.icon}
              </div>
              <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
                {step.duration}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3">{step.title}</h3>

            {/* Description */}
            <p className="text-sm text-white/90 mb-4 leading-relaxed flex-1">
              {step.description}
            </p>

            {/* Features */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-white/90">Características:</h4>
              {step.features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/80 flex-shrink-0" />
                  <span className="text-white/80">{feature}</span>
                </div>
              ))}
            </div>

            {/* Flip Back Hint */}
            <motion.div
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 text-sm"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Click para voltear
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
