import { Card, CardContent } from "@/components/ui/card"
import { Trophy, FileText, CheckCircle2 } from 'lucide-react'

interface QuickStatisticsProps {
  scores: {
    rank: number
    percentile: number
    currentScore: number
  }
}

export function QuickStatistics({ scores }: QuickStatisticsProps) {
  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      <Card>
        <CardContent className="p-4 text-center">
          <div className="flex justify-center mb-2">
            <Trophy className="h-8 w-8 text-yellow-400" />
          </div>
          <div className="text-2xl font-bold">{scores.rank}</div>
          <div className="text-sm text-gray-500">YOUR RANK</div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-center">
          <div className="flex justify-center mb-2">
            <FileText className="h-8 w-8 text-blue-500" />
          </div>
          <div className="text-2xl font-bold">{scores.percentile}%</div>
          <div className="text-sm text-gray-500">PERCENTILE</div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-center">
          <div className="flex justify-center mb-2">
            <CheckCircle2 className="h-8 w-8 text-green-500" />
          </div>
          <div className="text-2xl font-bold">{scores.currentScore}/15</div>
          <div className="text-sm text-gray-500">CORRECT ANSWERS</div>
        </CardContent>
      </Card>
    </div>
  )
}

