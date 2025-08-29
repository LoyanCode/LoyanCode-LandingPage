import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { LanguageProvider } from "@/context/LanguageContext"
import { ThemeProvider } from "@/context/ThemeContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "LoyanCode - Soluciones Digitales de Alto Impacto",
  description: "Ingenieros de Sistemas especializados en desarrollo web, móvil y plataformas a medida para tu negocio.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
