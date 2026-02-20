import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  BarChart,
  Bar,
} from "recharts";

const stats = [
  { label: "Open Bugs", value: 88, color: "text-red-600" },
  { label: "Closed This Week", value: 92, color: "text-green-600" },
  { label: "Week Trend", value: "8%", color: "text-green-600" },
  { label: "Avg Resolution", value: "2.4 days", color: "text-black" },
];

const data = [
  { day: "Mon", open: 8, closed: 11.3 },
  { day: "Tue", open: 10, closed: 11.7 },
  { day: "Wed", open: 12, closed: 12 },
  { day: "Thu", open: 14, closed: 12.5 },
  { day: "Fri", open: 15.2, closed: 12.8 },
];

const severityStats = [
  { label: "Critical", value: 3, color: "text-red-600" },
  { label: "High", value: 12, color: "text-orange-600" },
  { label: "Medium", value: 28, color: "text-amber-700" },
  { label: "Low", value: 45, color: "text-black" },
];

const moduleData = [
  { name: "Business Suite", value: 18 },
  { name: "Food", value: 15 },
  { name: "Home Services", value: 13 },
  { name: "Viral", value: 10 },
];

export default function BugTrends() {
  return (
    <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-4 border border-[#0000001a]">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Bug Trends</h2>
        <p className="text-sm text-green-600 mt-1">
          8% fewer this week
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stats.map((item, index) => (
          <div
            key={index}
            className="border border-[#0000001a] rounded-xl p-6 text-center"
          >
            <p
              className={`text-3xl font-semibold ${item.color}`}
            >
              {item.value}
            </p>
            <p className="text-sm text-[#6B7280] mt-2">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-center mb-6">
        Open vs Closed (7 days)
      </h3>

      <div className="w-full h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#E5E7EB"
            />
            <XAxis
              dataKey="day"
              tick={{ fill: "#6B7280" }}
              axisLine={{ stroke: "#E5E7EB" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#6B7280" }}
              axisLine={false}
              tickLine={false}
              width={35}
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="open"
              stroke="#DC2626"
              strokeWidth={2}
              dot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="closed"
              stroke="#16A34A"
              strokeWidth={2}
              dot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-14">
  <h3 className="text-lg font-semibold text-center mb-6">
    By Severity
  </h3>

  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
    {severityStats.map((item, index) => (
      <div
        key={index}
        className="border border-[#0000001a] rounded-xl p-6 text-center"
      >
        <p className={`text-3xl font-semibold ${item.color}`}>
          {item.value}
        </p>
        <p className="text-sm text-[#6B7280] mt-2">
          {item.label}
        </p>
      </div>
    ))}
  </div>

  <h3 className="text-lg font-semibold text-center mb-6">
    By Module
  </h3>

  <div className="w-full h-[350px]">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={moduleData}
        layout="vertical"
        margin={{ top: 0, right: 20, left: 0, bottom: 0 }}
      >
        <CartesianGrid
          strokeDasharray="4 4"
          stroke="#CBD5E1"
        />
        <XAxis
          type="number"
          tick={{ fill: "#64748B" }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          type="category"
          dataKey="name"
          tick={{ fill: "#475569" }}
          axisLine={false}
          tickLine={false}
          width={120}
        />
        <Bar
          dataKey="value"
          fill="url(#colorGradient)"
          radius={[0, 6, 6, 0]}
        />
        <defs>
          <linearGradient
            id="colorGradient"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </BarChart>
    </ResponsiveContainer>
  </div>
</div>

    </div>
  );
}
