import { Card, CardContent } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

interface QuestionAnalysisProps {
  currentScore: number
  totalQuestions: number
}

export function QuestionAnalysis({ currentScore, totalQuestions }: QuestionAnalysisProps) {
  const data = [
    { name: 'Correct', value: currentScore },
    { name: 'Incorrect', value: totalQuestions - currentScore },
  ]

  const COLORS = ['#4f46e5', '#e5e7eb']

  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="font-semibold mb-2 flex justify-between">
          Question Analysis
          <span className="text-blue-600">{currentScore}/{totalQuestions}</span>
        </h3>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          You scored {currentScore} questions correct out of {totalQuestions}. 
          {currentScore < totalQuestions && " However, it still needs some improvements."}
        </p>
      </CardContent>
    </Card>
  )
}

