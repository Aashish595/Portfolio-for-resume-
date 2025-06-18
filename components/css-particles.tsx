"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

interface CSSParticlesProps {
  count?: number
  size?: "small" | "medium" | "large"
  speed?: "slow" | "medium" | "fast"
  type?: "bubbles" | "dots" | "stars"
}

export default function CSSParticles({
  count = 30,
  size = "medium",
  speed = "medium",
  type = "bubbles",
}: CSSParticlesProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const particles = Array.from({ length: count }, (_, i) => i)

  const getSizeClass = () => {
    switch (size) {
      case "small":
        return "w-1 h-1"
      case "large":
        return "w-3 h-3"
      default:
        return "w-2 h-2"
    }
  }

  const getSpeedClass = () => {
    switch (speed) {
      case "slow":
        return "animate-float-slow"
      case "fast":
        return "animate-float-fast"
      default:
        return "animate-float"
    }
  }

  const getTypeClass = () => {
    switch (type) {
      case "dots":
        return "rounded-full"
      case "stars":
        return "rotate-45"
      default:
        return "rounded-full"
    }
  }

  const getColorClass = () => {
    if (resolvedTheme === "dark") {
      return "bg-gradient-to-r from-blue-400/20 to-purple-400/20"
    }
    return "bg-gradient-to-r from-blue-500/10 to-purple-500/10"
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <div
          key={particle}
          className={`absolute ${getSizeClass()} ${getSpeedClass()} ${getTypeClass()} ${getColorClass()}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  )
}
