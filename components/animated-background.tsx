"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  color: string
}

interface AnimatedBackgroundProps {
  particleCount?: number
  maxSize?: number
  minSize?: number
  speed?: number
  colors?: {
    light: string[]
    dark: string[]
  }
}

export default function AnimatedBackground({
  particleCount = 50,
  maxSize = 4,
  minSize = 1,
  speed = 0.5,
  colors = {
    light: ["rgba(59, 130, 246, 0.1)", "rgba(147, 51, 234, 0.1)", "rgba(236, 72, 153, 0.1)"],
    dark: ["rgba(59, 130, 246, 0.2)", "rgba(147, 51, 234, 0.2)", "rgba(236, 72, 153, 0.2)"],
  },
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>()
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      const particles: Particle[] = []
      const currentColors = resolvedTheme === "dark" ? colors.dark : colors.light

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (maxSize - minSize) + minSize,
          speedX: (Math.random() - 0.5) * speed,
          speedY: (Math.random() - 0.5) * speed,
          opacity: Math.random() * 0.5 + 0.1,
          color: currentColors[Math.floor(Math.random() * currentColors.length)],
        })
      }
      particlesRef.current = particles
    }

    const updateParticles = () => {
      particlesRef.current.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around screen edges
        if (particle.x > canvas.width) particle.x = 0
        if (particle.x < 0) particle.x = canvas.width
        if (particle.y > canvas.height) particle.y = 0
        if (particle.y < 0) particle.y = canvas.height

        // Subtle opacity animation
        particle.opacity += (Math.random() - 0.5) * 0.01
        particle.opacity = Math.max(0.05, Math.min(0.6, particle.opacity))
      })
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle) => {
        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Add subtle glow effect
        ctx.shadowColor = particle.color
        ctx.shadowBlur = particle.size * 2
        ctx.fill()
        ctx.restore()
      })
    }

    const animate = () => {
      updateParticles()
      drawParticles()
      animationRef.current = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      resizeCanvas()
      createParticles()
    }

    // Initialize
    resizeCanvas()
    createParticles()
    animate()

    // Event listeners
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mounted, resolvedTheme, particleCount, maxSize, minSize, speed, colors])

  // Update particles when theme changes
  useEffect(() => {
    if (!mounted || !canvasRef.current) return

    const currentColors = resolvedTheme === "dark" ? colors.dark : colors.light
    particlesRef.current.forEach((particle) => {
      particle.color = currentColors[Math.floor(Math.random() * currentColors.length)]
    })
  }, [resolvedTheme, colors, mounted])

  if (!mounted) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: "transparent",
      }}
    />
  )
}
