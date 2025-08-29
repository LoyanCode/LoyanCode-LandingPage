"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "@/context/ThemeContext"

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles = []
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          color: theme === "dark" ? "#3182ce" : "#2b6cb0",
          alpha: Math.random() * 0.5 + 0.1,
          speed: Math.random() * 0.5 + 0.1,
          direction: Math.random() * 360,
        })
      }
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${particle.color
          .replace("#", "")
          .match(/.{2}/g)
          ?.map((hex) => Number.parseInt(hex, 16))
          .join(", ")}, ${particle.alpha})`
        ctx.fill()

        // Update position
        const radians = (particle.direction * Math.PI) / 180
        particle.x += Math.cos(radians) * particle.speed
        particle.y += Math.sin(radians) * particle.speed

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.direction = 180 - particle.direction
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.direction = 360 - particle.direction
        }
      })

      // Draw connections
      ctx.strokeStyle = theme === "dark" ? "rgba(49, 130, 206, 0.15)" : "rgba(43, 108, 176, 0.15)"
      ctx.lineWidth = 0.5

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(drawParticles)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    drawParticles()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />
}

interface Particle {
  x: number
  y: number
  radius: number
  color: string
  alpha: number
  speed: number
  direction: number
}
