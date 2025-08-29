"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/context/LanguageContext"
import { motion } from "framer-motion"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Modal } from "@/components/ui/Modal"
import { Code, Smartphone, Database, Globe } from "lucide-react"

export default function Services() {
  const { t } = useLanguage()
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  const services: Service[] = [
    {
      id: "web",
      title: t("webDevelopment"),
      description: t("webDevelopmentDesc"),
      icon: <Code size={24} />,
      details: {
        benefits: [
          "Diseño UI/UX personalizado",
          "Optimización SEO",
          "Responsive design",
          "Integración con APIs",
          "Rendimiento optimizado",
        ],
        technologies: ["React", "Next.js", "Vue", "Angular", "WordPress", "Tailwind CSS"],
        useCases: ["E-commerce", "Landing Pages", "Aplicaciones Web", "Portales Corporativos"],
      },
    },
    {
      id: "mobile",
      title: t("mobileApps"),
      description: t("mobileAppsDesc"),
      icon: <Smartphone size={24} />,
      details: {
        benefits: [
          "Experiencia de usuario nativa",
          "Alto rendimiento",
          "Acceso a funciones del dispositivo",
          "Notificaciones push",
          "Funcionamiento offline",
        ],
        technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
        useCases: ["Apps de Comercio", "Redes Sociales", "Herramientas de Productividad", "IoT Control"],
      },
    },
    {
      id: "microservices",
      title: t("microservices"),
      description: t("microservicesDesc"),
      icon: <Database size={24} />,
      details: {
        benefits: [
          "Escalabilidad independiente",
          "Resiliencia",
          "Despliegue continuo",
          "Tecnologías específicas por servicio",
          "Mantenimiento simplificado",
        ],
        technologies: ["Node.js", "Python", "Go", "Docker", "Kubernetes", "AWS Lambda"],
        useCases: ["Sistemas de Pagos", "Gestión de Usuarios", "Procesamiento de Datos", "Integraciones"],
      },
    },
    {
      id: "platforms",
      title: t("digitalPlatforms"),
      description: t("digitalPlatformsDesc"),
      icon: <Globe size={24} />,
      details: {
        benefits: [
          "Solución integral",
          "Flujos de trabajo optimizados",
          "Análisis de datos",
          "Escalabilidad empresarial",
          "Personalización completa",
        ],
        technologies: ["MERN Stack", "MEAN Stack", "Django", "Laravel", "AWS", "Azure"],
        useCases: ["CRM", "ERP", "Plataformas Educativas", "Marketplaces", "Sistemas de Gestión"],
      },
    },
  ]

  return (
    <section className="w-full h-full flex items-center justify-center relative">
      <div className="container mx-auto px-4 py-12 mt-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("ourServices")}</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t("servicesSubtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} onClick={() => setSelectedService(service)} />
          ))}
        </div>
      </div>

      <ServiceModal service={selectedService} isOpen={!!selectedService} onClose={() => setSelectedService(null)} />
    </section>
  )
}

interface Service {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  details: {
    benefits: string[]
    technologies: string[]
    useCases: string[]
  }
}

interface ServiceCardProps {
  service: Service
  index: number
  onClick: () => void
}

function ServiceCard({ service, index, onClick }: ServiceCardProps) {
  const { t } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card hoverEffect className="h-full flex flex-col">
        <CardHeader>
          <div className="bg-blue-600/20 p-3 rounded-lg w-fit mb-4">{service.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-gray-300">{service.description}</p>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="w-full justify-center" onClick={onClick}>
            {t("exploreService")}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

interface ServiceModalProps {
  service: Service | null
  isOpen: boolean
  onClose: () => void
}

function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
  if (!service) return null

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={service.title} size="lg">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-blue-400 mb-2">Beneficios</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {service.details.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* <div>
          <h3 className="text-lg font-medium text-blue-400 mb-2">Tecnologías</h3>
          <div className="flex flex-wrap gap-2">
            {service.details.technologies.map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-blue-900/30 border border-blue-500/30 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div> */}

        <div>
          <h3 className="text-lg font-medium text-blue-400 mb-2">Casos de Uso</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {service.details.useCases.map((useCase, index) => (
              <li key={index} className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                <span>{useCase}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-white/10">
          <Button
            variant="gradient"
            className="w-full"
            onClick={() => {
              onClose()
              // Navigate to contact section using the horizontal navigator
              const event = new CustomEvent('navigateToSection', { detail: { sectionId: 'contact' } })
              window.dispatchEvent(event)
            }}
          >
            Solicitar este servicio
          </Button>
        </div>
      </div>
    </Modal>
  )
}
