"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
// Add import at the top
import AnimatedBackground from "./animated-background"
import GradientOrbs from "./gradient-orbs"

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      const xPos = (clientX / innerWidth) * 100
      const yPos = (clientY / innerHeight) * 100

      hero.style.background = `
        radial-gradient(circle at ${xPos}% ${yPos}%, 
          rgba(59, 130, 246, 0.15) 0%, 
          rgba(147, 51, 234, 0.1) 25%, 
          transparent 50%),
        linear-gradient(135deg, 
          rgba(59, 130, 246, 0.1) 0%, 
          rgba(147, 51, 234, 0.05) 100%)
      `
    }

    hero.addEventListener("mousemove", handleMouseMove)
    return () => hero.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20"
    >
      {/* Animated Background */}
      <AnimatedBackground particleCount={60} maxSize={3} minSize={1} speed={0.3} />
      <GradientOrbs count={3} size="large" intensity="subtle" />

      {/* Existing animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Gurudas Maurya
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6">Mern Stack Developer</p>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                I craft modern, scalable web applications with cutting-edge technologies. Passionate about clean code,
                user experience, and solving complex problems.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 hover:bg-gray-50 dark:hover:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform duration-200">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform duration-200">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform duration-200">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 p-2">
                  <Image
                    src="/main-photo.jpeg?height=300&width=300"
                    alt="John Doe"
                    width={300}
                    height={300}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce delay-300"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce delay-700"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
