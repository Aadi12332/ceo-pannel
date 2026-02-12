import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "D1", variant: 6.3, upper: 8.9 },
  { day: "D2", variant: 8.8, upper: 10.8 },
  { day: "D3", variant: 9.9, upper: 11.6 },
  { day: "D4", variant: 11.5, upper: 12.7 },
  { day: "D5", variant: 12.2, upper: 13.5 },
  { day: "D6", variant: 14.0, upper: 15.0 },
];

export default function ExperimentPerformance() {
  return (
    <div className="h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="4 4" stroke="#E5E7EB" />
          <XAxis dataKey="day" tick={{ fill: "#6B7280", fontSize: 12 }} />
          <YAxis
            width={40}
            domain={[0, 20]}
            tickFormatter={(value) => `${value}%`}
            tick={{ fill: "#6B7280", fontSize: 12 }}
          />
          <Tooltip formatter={(value) => `${value}%`} />

          <Area
            type="monotone"
            dataKey="upper"
            fill="#3B82F699"
            stroke="transparent"
          />

          <Area
            type="monotone"
            dataKey="variant"
            stroke="transparent"
            fill="#10B981CC"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
