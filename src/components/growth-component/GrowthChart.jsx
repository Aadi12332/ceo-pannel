import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer
} from "recharts"

const expansionMarketsData = [
  { date: "Dec 15", value: 55 },
  { date: "Dec 16", value: 53 },
  { date: "Dec 17", value: 50 },
  { date: "Dec 18", value: 49 },
  { date: "Dec 19", value: 48 },
  { date: "Dec 20", value: 47 },
  { date: "Dec 21", value: 45 }
]

const growthVelocityData = [
  { date: "Dec 15", value: 100 },
  { date: "Dec 16", value: 100 },
  { date: "Dec 17", value: 99 },
  { date: "Dec 18", value: 100 },
  { date: "Dec 19", value: 101 },
  { date: "Dec 20", value: 101 },
  { date: "Dec 21", value: 101 }
]

export default function GrowthCharts() {
  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 gap-5 mb-5">
      <div className="bg-white rounded-xl border border-[#0000001A] p-6">
        <h3 className="text-[22px] text-[#0A0A0A] mb-6">
          Expansion Ready Markets
        </h3>

        <div className="h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={expansionMarketsData}>
              <CartesianGrid strokeDasharray="4 4" stroke="#D1D5DB" />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 13, fill: "#6B7280" }}
                axisLine={{ stroke: "#6B7280" }}
              />
              <YAxis
                domain={[0, 60]}
                tick={{ fontSize: 13, fill: "#6B7280" }}
                axisLine={{ stroke: "#6B7280" }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#E2554F"
                strokeWidth={3}
                dot={{ r: 6, fill: "#E2554F" }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-[#0000001A] p-6">
        <h3 className="text-[22px] text-[#0A0A0A] mb-6">
          Growth Velocity Trend
        </h3>

        <div className="h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={growthVelocityData}>
              <CartesianGrid strokeDasharray="4 4" stroke="#D1D5DB" />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 13, fill: "#6B7280" }}
                axisLine={{ stroke: "#6B7280" }}
              />
              <YAxis
                domain={[0, 110]}
                tick={{ fontSize: 13, fill: "#6B7280" }}
                axisLine={{ stroke: "#6B7280" }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#4CAF73"
                strokeWidth={3}
                dot={{ r: 6, fill: "#4CAF73" }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
