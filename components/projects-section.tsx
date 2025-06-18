"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import CSSParticles from "./css-particles"

const projects = [
  {
    id: 1,
    title: "Language Exchange Plateform",
    description:
      "• Built a real-time language exchange platform using the MERN stack enabling 1-on-1 or group video calls, chat, and screen sharing",
    image: "/lep.png?height=200&width=400",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    liveLink: "https://language-exchange-plateform.onrender.com/",
    githubLink: "https://github.com/Aashish595/Language-Exchange-Plateform",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative project management tool with real-time updates, team collaboration, and advanced filtering.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/johndoe/taskmanager",
  },
  {
    id: 3,
    title: "AI-Powered Analytics Dashboard",
    description:
      "A data visualization platform with machine learning insights and predictive analytics for business intelligence.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Vue.js", "Python", "FastAPI", "TensorFlow", "D3.js"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/johndoe/analytics",
  },
  {
    id: 4,
    title: "Social Media Platform",
    description:
      "A modern social networking app with real-time messaging, content sharing, and advanced privacy controls.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["React Native", "Firebase", "Node.js", "GraphQL", "Redis"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/johndoe/social",
  },
  {
    id: 5,
    title: "Cryptocurrency Tracker",
    description:
      "A real-time crypto portfolio tracker with price alerts, market analysis, and trading recommendations.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Angular", "TypeScript", "NestJS", "WebSocket", "Chart.js"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/johndoe/crypto",
  },
  {
    id: 6,
    title: "Learning Management System",
    description: "An educational platform with course creation, progress tracking, and interactive learning modules.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Next.js", "Supabase", "Tailwind", "Framer Motion", "Stripe"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/johndoe/lms",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50 relative">
      {/* Add subtle background particles */}
      <CSSParticles count={20} size="small" speed="slow" type="dots" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-lg"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    asChild
                  >
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
