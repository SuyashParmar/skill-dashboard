import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface ComparisonGraphProps {
  percentile: number
}

export function ComparisonGraph({ percentile }: ComparisonGraphProps) {
  const data = [
    { x: 0, y: 0 },
    { x: 10, y: 10 },
    { x: 20, y: 20 },
    { x: 30, y: 40 },
    { x: 40, y: 60 },
    { x: 50, y: 100 },
    { x: 60, y: 60 },
    { x: 70, y: 40 },
    { x: 80, y: 20 },
    { x: 90, y: 10 },
    { x: 100, y: 0 },
  ]

  return (
    <div className="mt-8">
      <h3 className="font-semibold mb-4">Comparison Graph</h3>
      <ChartContainer config={{
        line: {
          label: "Percentile Distribution",
          color: "hsl(var(--chart-1))",
        },
      }} className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line type="monotone" dataKey="y" stroke="hsl(var(--chart-1))" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="x" stroke="transparent" strokeWidth={0}>
              {data.map((entry, index) => (
                <Tooltip
                  key={`tooltip-${index}`}
                  content={<CustomTooltip percentile={percentile} />}
                  cursor={false}
                  position={{ x: entry.x, y: entry.y }}
                />
              ))}
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
      <p className="text-center mt-4 text-sm text-gray-600">
        You scored {percentile}% percentile which is {percentile > 72 ? 'higher' : 'lower'} than the
        average percentile 72% of all the engineers who took this assessment
      </p>
    </div>
  )
}

function CustomTooltip({ active, payload, percentile }: any) {
  if (active && payload && payload.length) {
    const [{ value }] = payload
    return value === percentile ? (
      <div className="bg-white border border-gray-200 p-2 shadow-md rounded">
        <p className="text-sm">Your percentile: {percentile}%</p>
      </div>
    ) : null
  }
  return null
}

