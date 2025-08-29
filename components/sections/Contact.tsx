"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/context/LanguageContext"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { Modal } from "@/components/ui/Modal"
import { Send, Calendar, Linkedin, Mail } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export default function Contact() {
  const { t } = useLanguage()
  const [showModal, setShowModal] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success")
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormStatus("idle")
        // Reset the form
        const form = e.target as HTMLFormElement
        form.reset()
      }, 3000)
    }, 1500)
  }

  return (
    <section className="w-full h-full flex items-center justify-center relative">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-2">{t("contactUs")}</h2>
          {/* <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t("contactSubtitle")}</p> */}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    {t("name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 bg-black/50 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    {t("email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 bg-black/50 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    {t("message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-2 bg-black/50 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  variant="gradient"
                  className="w-full"
                  disabled={formStatus === "submitting"}
                  leftIcon={formStatus === "submitting" ? undefined : <Send size={16} />}
                >
                  {formStatus === "submitting" ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : formStatus === "success" ? (
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Mensaje Enviado
                    </span>
                  ) : (
                    t("send")
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="mr-3 text-blue-400" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:info@loyancode.com" className="text-blue-400 hover:underline">
                      info@loyancode.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Linkedin className="mr-3 text-blue-400" />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a
                      href="https://linkedin.com/company/loyancode"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      linkedin.com/company/loyancode
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaWhatsapp className="mr-3 text-blue-400" />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <a
                      href="https://wa.me/573232346794"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      +57 323 234 6794
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">¿Prefieres una llamada?</h3>
              <p className="mb-4">Agenda una llamada con nuestro equipo para discutir tu proyecto en detalle.</p>
              <Button
                variant="outline"
                className="w-full bg-transparent"
                leftIcon={<Calendar size={16} />}
                onClick={() => setShowModal(true)}
              >
                {t("scheduleCall")}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Agendar una Llamada">
        <div className="space-y-4">
          <p>Selecciona una fecha y hora para tu llamada con nuestro equipo.</p>
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
              <label className="block text-sm font-medium mb-1">Fecha</label>
              <input
                type="date"
                className="w-full px-4 py-2 bg-black/50 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Hora</label>
              <select className="w-full px-4 py-2 bg-black/50 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>9:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>12:00 PM</option>
                <option>1:00 PM</option>
                <option>2:00 PM</option>
                <option>3:00 PM</option>
                <option>4:00 PM</option>
                <option>5:00 PM</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Tema de la llamada</label>
              <textarea
                className="w-full px-4 py-2 bg-black/50 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                placeholder="Describe brevemente el tema que quieres tratar"
              ></textarea>
            </div>
            <Button variant="gradient" className="w-full">
              Confirmar Llamada
            </Button>
          </form>
        </div>
      </Modal>
    </section>
  )
}
