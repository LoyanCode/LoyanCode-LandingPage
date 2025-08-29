"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/context/LanguageContext"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/Card"
import { Eye, MessageSquare, Layers, Award } from "lucide-react"

export default function WhyChooseUs() {
  const { t } = useLanguage()

  const reasons = [
    {
      id: "vision",
      title: t("strategicVision"),
      description: t("strategicVisionDesc"),
      icon: <Eye size={24} className="text-blue-400" />,
    },
    {
      id: "communication",
      title: t("transparentComm"),
      description: t("transparentCommDesc"),
      icon: <MessageSquare size={24} className="text-blue-400" />,
    },
    {
      id: "solutions",
      title: t("customSolutions"),
      description: t("customSolutionsDesc"),
      icon: <Layers size={24} className="text-blue-400" />,
    },
    {
      id: "quality",
      title: t("qualityCommitment"),
      description: t("qualityCommitmentDesc"),
      icon: <Award size={24} className="text-blue-400" />,
    },
  ]

  return (
    <section className="w-full h-full flex items-center justify-center relative">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("whyChooseUs")}</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t("whyChooseUsSubtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <ReasonCard key={reason.id} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface Reason {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

interface ReasonCardProps {
  reason: Reason
  index: number
}

function ReasonCard({ reason, index }: ReasonCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="h-full p-6 transition-all duration-300 relative overflow-hidden">
        {/* Background glow effect on hover */}
        <div
          className={`absolute inset-0 bg-blue-600/10 rounded-xl transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
            }`}
        ></div>

        <div className="relative z-10">
          <div className="flex items-start">
            <div className="mr-4 p-3 bg-blue-900/30 rounded-lg">{reason.icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-300">{reason.description}</p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
