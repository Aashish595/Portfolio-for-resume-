"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Target, Code, Award } from "lucide-react"

const dsaStats = [
  {
    platform: "LeetCode",
    solved: 450,
    total: 2500,
    rank: "Guardian",
    icon: <Code className="w-6 h-6" />,
  },
  {
    platform: "GeeksforGeeks",
    solved: 320,
    total: 1500,
    rank: "Expert",
    icon: <Target className="w-6 h-6" />,
  },
  {
    platform: "HackerRank",
    solved: 280,
    total: 800,
    rank: "5 Star",
    icon: <Trophy className="w-6 h-6" />,
  },
  {
    platform: "CodeChef",
    solved: 150,
    total: 500,
    rank: "4 Star",
    icon: <Award className="w-6 h-6" />,
  },
]

const algorithms = [
  "Dynamic Programming",
  "Graph Algorithms",
  "Tree Traversals",
  "Sorting & Searching",
  "Greedy Algorithms",
  "Backtracking",
  "Divide & Conquer",
  "String Algorithms",
  "Bit Manipulation",
  "Two Pointers",
  "Sliding Window",
  "Binary Search",
]

const dataStructures = [
  "Arrays & Strings",
  "Linked Lists",
  "Stacks & Queues",
  "Trees & BST",
  "Heaps",
  "Hash Tables",
  "Graphs",
  "Tries",
  "Segment Trees",
  "Disjoint Set",
]

export default function DSASection() {
  return (
    <section id="dsa" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">DSA & Problem Solving</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey in competitive programming and algorithmic problem solving
          </p>
        </div>

        {/* Platform Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {dsaStats.map((stat) => (
            <Card
              key={stat.platform}
              className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-0 shadow-md"
            >
              <CardHeader className="pb-3">
                <div className="flex justify-center mb-2 text-blue-600 dark:text-blue-400">{stat.icon}</div>
                <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">{stat.platform}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.solved}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">out of {stat.total} problems</div>
                <Badge
                  variant="secondary"
                  className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                >
                  {stat.rank}
                </Badge>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(stat.solved / stat.total) * 100}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Algorithms */}
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                <Code className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                Key Algorithms Mastered
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {algorithms.map((algorithm) => (
                  <Badge
                    key={algorithm}
                    variant="secondary"
                    className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-200"
                  >
                    {algorithm}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Data Structures */}
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                <Target className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
                Data Structures Expertise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {dataStructures.map((structure) => (
                  <Badge
                    key={structure}
                    variant="secondary"
                    className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors duration-200"
                  >
                    {structure}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievement Highlights */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-0 shadow-lg">
            <CardContent className="py-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">🏆 Recent Achievements</h3>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">Top 5%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">LeetCode Weekly Contest</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">1200+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Total Problems Solved</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">Expert</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Average Rating</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
