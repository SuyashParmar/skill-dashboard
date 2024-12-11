import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
interface ComparisonGraphProps {
  percentile: number;
}
export function ComparisonGraph({ percentile }: ComparisonGraphProps) {
  const generateData = () => {
    const data = [];
    for (let i = 0; i <= 100; i += 1) {
      let y;
      if (i <= 50) {
        y = Math.pow(i / 50, 2) * 100;
      } else {
        y = Math.pow((100 - i) / 50, 2) * 100;
      }
      data.push({ x: i, y: Math.round(y) });
    }
    return data;
  };
  const data = generateData();
  return (
    <div className="mt-8">
      <h3 className="font-semibold mb-4">Comparison Graph</h3>
      <ChartContainer
        config={{
          line: {
            label: "Percentile Distribution",
            color: "hsl(var(--chart-1))",
          },
        }}

      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="x"
              label={{ value: 'Percentile', position: 'bottom', offset: -5 }}
            />
            <YAxis
              label={{ value: 'Score', angle: -90, position: 'insideLeft', offset: 10 }}
            />
            <ChartTooltip content={<CustomTooltip percentile={percentile} />} />
            {/* Main line connecting the points */}
            <Line
              type="monotone"
              dataKey="y"
              stroke="black"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 8 }}
            />
            {/* Vertical line at user's percentile */}
            <ReferenceLine
              x={percentile}
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              strokeDasharray="3 3"
              label={{
                value: 'Your Score',
                position: 'top',
                fill: 'hsl(var(--primary))',
                fontSize: 12
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
      <p className="text-center mt-4 text-sm text-muted-foreground">
        You scored in the {percentile}th percentile, which is {percentile > 72 ? 'higher' : 'lower'} than the
        average percentile (72nd) of all engineers who took this assessment.
      </p>
    </div>
  );
}
function CustomTooltip({ active, payload, percentile }: any) {
  if (active && payload && payload.length) {
    const [{ payload: data }] = payload;
    return (
      <div className="bg-background border border-border p-2 shadow-md rounded">
        <p className="text-sm font-medium">Percentile: {data.x}</p>
        <p className="text-sm">Score: {data.y}</p>
        {data.x === percentile && (
          <p className="text-sm font-bold text-primary">Your Score</p>
        )}
      </div>
    );
  }
  return null;
}







