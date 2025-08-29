"use client"

import { useState } from "react"
import { useLanguage } from "@/context/LanguageContext"
import { motion } from "framer-motion"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Modal } from "@/components/ui/Modal"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function Projects() {
  const { t } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: "project1",
      title: "E-commerce Platform",
      description: "A complete e-commerce solution with inventory management and payment processing.",
      image: "/placeholder.svg?height=600&width=800",
      details: {
        challenge:
          "Create a scalable e-commerce platform with real-time inventory updates and secure payment processing.",
        solution:
          "Developed a custom platform using Next.js for the frontend and Node.js microservices for the backend, with MongoDB for data storage.",
        technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redis", "Docker"],
        results: "Increased sales by 40% and reduced page load time by 60% compared to the previous solution.",
      },
    },
    {
      id: "project2",
      title: "Healthcare Mobile App",
      description: "A mobile application for patients to schedule appointments and access medical records.",
      image: "/placeholder.svg?height=600&width=800",
      details: {
        challenge:
          "Build a secure, HIPAA-compliant mobile app for patient-doctor communication and medical record access.",
        solution:
          "Created a React Native app with end-to-end encryption and secure authentication, integrated with hospital APIs.",
        technologies: ["React Native", "Firebase", "Node.js", "Express", "PostgreSQL"],
        results: "Reduced appointment scheduling time by 80% and improved patient satisfaction scores by 35%.",
      },
    },
    {
      id: "project3",
      title: "Real Estate Management System",
      description: "A comprehensive platform for property management, tenant communication, and maintenance tracking.",
      image: "/placeholder.svg?height=600&width=800",
      details: {
        challenge: "Develop a system to streamline property management operations and improve tenant communication.",
        solution:
          "Built a web application with a responsive dashboard, automated notifications, and maintenance request tracking.",
        technologies: ["React", "Django", "PostgreSQL", "AWS", "Twilio API"],
        results: "Reduced administrative workload by 50% and decreased maintenance response time by 60%.",
      },
    },
  ]

  return (
    <section className="w-full h-full flex items-center justify-center relative">
      <div className="container mx-auto px-4 py-12 mt-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">{t("ourProjects")}</h2>
          {/* <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t("projectsSubtitle")}</p> */}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onClick={() => setSelectedProject(project)} />
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}

interface Project {
  id: string
  title: string
  description: string
  image: string
  details: {
    challenge: string
    solution: string
    technologies: string[]
    results: string
  }
}

interface ProjectCardProps {
  project: Project
  index: number
  onClick: () => void
}

function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const { t } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card hoverEffect className="h-full flex flex-col overflow-hidden">
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <CardHeader>
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-gray-300">{project.description}</p>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="w-full justify-center" onClick={onClick}>
            {t("viewCase")}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const { t } = useLanguage()

  if (!project) return null

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title} size="xl">
      <div className="space-y-6">
        <div className="rounded-lg overflow-hidden">
          <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-blue-400 mb-2">{t("challenge")}</h3>
            <p>{project.details.challenge}</p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-blue-400 mb-2">{t("solution")}</h3>
            <p>{project.details.solution}</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-blue-400 mb-2">{t("technologies")}</h3>
          <div className="flex flex-wrap gap-2">
            {project.details.technologies.map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-blue-900/30 border border-blue-500/30 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-blue-400 mb-2">{t("results")}</h3>
          <p>{project.details.results}</p>
        </div>
      </div>
    </Modal>
  )
}
