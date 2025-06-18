"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

interface GradientOrbsProps {
  count?: number
  size?: "small" | "medium" | "large"
  intensity?: "subtle" | "medium" | "strong"
}

export default function GradientOrbs({ count = 5, size = "medium", intensity = "subtle" }: GradientOrbsProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const orbs = Array.from({ length: count }, (_, i) => i)

  const getSizeClass = () => {
    switch (size) {
      case "small":
        return "w-32 h-32"
      case "large":
        return "w-96 h-96"
      default:
        return "w-64 h-64"
    }
  }

  const getIntensityClass = () => {
    const baseOpacity = resolvedTheme === "dark" ? "0.1" : "0.05"
    switch (intensity) {
      case "strong":
        return resolvedTheme === "dark" ? "opacity-30" : "opacity-20"
      case "medium":
        return resolvedTheme === "dark" ? "opacity-20" : "opacity-10"
      default:
        return resolvedTheme === "dark" ? "opacity-10" : "opacity-5"
    }
  }

  const gradients = [
    "from-blue-400 to-purple-600",
    "from-purple-400 to-pink-600",
    "from-pink-400 to-red-600",
    "from-green-400 to-blue-600",
    "from-yellow-400 to-orange-600",
  ]

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {orbs.map((orb, index) => (
        <div
          key={orb}
          className={`absolute ${getSizeClass()} ${getIntensityClass()} bg-gradient-to-br ${
            gradients[index % gradients.length]
          } rounded-full blur-3xl animate-pulse`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
            transform: `translate(-50%, -50%)`,
          }}
        />
      ))}
    </div>
  )
}
