"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Eye, FileText } from "lucide-react"

export default function ResumeSection() {
  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Resume</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Download my resume or view it online to learn more about my experience and skills
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Resume Preview */}
          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-bold text-gray-900 dark:text-white">
                <FileText className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                Resume Preview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-inner min-h-[400px] border">
                <div className="space-y-4">
                  <div className="text-center border-b pb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Gurudas Maurya</h3>
                    <p className="text-gray-600 dark:text-gray-400">Full Stack Developer</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                     aashishmaurya959@gmail.com | +91 9919454692 | LinkedIn | GitHub
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Experience</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-200"> Mern Stack Developer</p>
                        <p className="text-gray-600 dark:text-gray-400">Gltich Studio | May-july(2025)</p>
                        <p className="text-gray-500 dark:text-gray-500">
                          Led development of scalable web applications...
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-200">Internship</p>
                        <p className="text-gray-600 dark:text-gray-400">Gltich Studio | May-july(2025)</p>
                        <p className="text-gray-500 dark:text-gray-500">
                          Built and maintained multiple client projects...
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Education</h4>
                    <div className="text-sm">
                      <p className="font-semibold text-gray-800 dark:text-gray-200">B.TECH Computer Science(AI-ML)</p>
                      <p className="text-gray-600 dark:text-gray-400">Galgotias University | 2021 - 2025</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Skills</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      JavaScript, TypeScript, React, Next.js, Node.js, , MongoDB...
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Download Options */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">Get My Resume</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  
                  <Download className="mr-2 h-5 w-5" />
                  
                  Download PDF Resume
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-2 hover:bg-gray-50 dark:hover:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <Eye className="mr-2 h-5 w-5" />
                  View Full Resume Online
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">0+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">15+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">15+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">100%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
