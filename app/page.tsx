'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { BarChart, FileText, Home, Trophy, CheckCircle2, User } from 'lucide-react'
import Image from "next/image"
import { useState } from "react"
import { UpdateScoresDialog } from "@/components/ui/update-scores-dialog"
import { QuickStatistics } from "@/components/ui/quick-statistics"
import { ComparisonGraph } from "@/components/ui/comparison-graph"
import { QuestionAnalysis } from "@/components/ui/question-analysis"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function SkillDashboard() {
  const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false)
  const [scores, setScores] = useState({
    rank: 4,
    percentile: 90,
    currentScore: 12
  })

  const handleUpdateScores = (newScores: typeof scores) => {
    setScores(newScores)
  }

  return (
    <div className="flex h-screen bg-white ">
      {/* Sidebar */}
      <div className="w-64 border-r p-6 space-y-6 max-xl:hidden">
        <div className="flex items-center space-x-2">
          <div className="font-bold text-xl max-md:hidden">WhatBytes</div>
        </div>

        <nav className="space-y-2 ">
          <Button variant="ghost" className="w-full justify-start">
            <Home className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start text-blue-600">
            <BarChart className="mr-2 h-4 w-4" />
            Skill Test
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <FileText className="mr-2 h-4 w-4" />
            Internship
          </Button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">Skill Test</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Suyash Parmar</span>
            <Avatar>
              <AvatarImage src="https://i.pinimg.com/originals/d5/b0/4c/d5b04cc3dcd8c17702549ebc5f1acf1a.png" alt="Suyash Parmar" />
              <AvatarFallback>SP</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Test Details */}
          <div className="col-span-2">
            <Card >
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="HTML5 Logo"
                    width={60}
                    height={60}
                    className="rounded mx-auto sm:mx-0"
                  />
                  <div className="flex-1 text-center sm:text-left">
                    <h2 className="text-xl font-semibold">Hyper Text Markup Language</h2>
                    <p className="text-gray-500 text-sm">
                      Questions: 15 | Duration: 15 mins | Submitted on 5 June 2021
                    </p>
                  </div>
                  <Button
                    className="bg-blue-600 mx-auto sm:mx-0"
                    onClick={() => setIsUpdateDialogOpen(true)}
                  >
                    Update
                  </Button>
                </div>


                {/* Quick Statistics */}
                <QuickStatistics scores={scores} />

                {/* Comparison Graph */}
                <ComparisonGraph percentile={scores.percentile} />

              </CardContent>
            </Card>
          </div>

          {/* Syllabus Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>Syllabus Wise Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">HTML Tools, Forms, History</span>
                  <span className="text-sm text-blue-600">80%</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Tags & References in HTML</span>
                  <span className="text-sm text-orange-600">60%</span>
                </div>
                <Progress value={60} className="h-2 bg-orange-100 [&>div]:bg-orange-500" />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Tables & References in HTML</span>
                  <span className="text-sm text-red-600">24%</span>
                </div>
                <Progress value={24} className="h-2 bg-red-100 [&>div]:bg-red-500" />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Tables & CSS Basics</span>
                  <span className="text-sm text-green-600">96%</span>
                </div>
                <Progress value={96} className="h-2 bg-green-100 [&>div]:bg-green-500" />
              </div>

              {/* Question Analysis */}
              <QuestionAnalysis currentScore={scores.currentScore} totalQuestions={15} />
            </CardContent>
          </Card>
        </div>
        <UpdateScoresDialog
          open={isUpdateDialogOpen}
          onOpenChange={setIsUpdateDialogOpen}
          initialValues={scores}
          onSave={handleUpdateScores}
        />
      </div>
    </div>
  )
}

