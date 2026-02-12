import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { week: "W-10", revenue: 370000, usage: 95000 },
  { week: "W-9", revenue: 385000, usage: 110000 },
  { week: "W-8", revenue: 380000, usage: 108000 },
  { week: "W-7", revenue: 372000, usage: 102000 },
  { week: "W-6", revenue: 360000, usage: 95000 },
  { week: "W-5", revenue: 355000, usage: 90000 },
  { week: "W-4", revenue: 375000, usage: 105000 },
  { week: "W-3", revenue: 395000, usage: 120000 },
  { week: "W-2", revenue: 405000, usage: 128000 },
  { week: "W-1", revenue: 412000, usage: 135000 },
];

export default function UsageRevenueChart() {
  return (
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="week" tick={{ fontSize: 12 }} stroke="#6B7280" />
            <YAxis
              tick={{ fontSize: 12 }}
              stroke="#6B7280"
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <Tooltip formatter={(value) => value.toLocaleString()} />
            <Legend verticalAlign="bottom" height={36} iconType="circle" />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#2E9E6F"
              strokeWidth={3}
              dot={false}
              name="Revenue"
            />
            <Line
              type="monotone"
              dataKey="usage"
              stroke="#F59E0B"
              strokeWidth={3}
              dot={false}
              name="Usage"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
  );
}
