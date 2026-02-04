import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const auditLogsData = [
  { date: "Dec 15", value: 1100 },
  { date: "Dec 16", value: 1130 },
  { date: "Dec 17", value: 1160 },
  { date: "Dec 18", value: 1185 },
  { date: "Dec 19", value: 1210 },
  { date: "Dec 20", value: 1235 },
  { date: "Dec 21", value: 1260 },
];

const complianceRateData = [
  { date: "Dec 15", value: 99 },
  { date: "Dec 16", value: 99 },
  { date: "Dec 17", value: 100 },
  { date: "Dec 18", value: 100 },
  { date: "Dec 19", value: 101 },
  { date: "Dec 20", value: 101 },
  { date: "Dec 21", value: 101 },
];

const AuditChart = () => {
  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 gap-5 mb-5">
      <div className="bg-white rounded-lg lg:rounded-[16px] border border-[#0000001A] lg:p-6 p-3">
        <h3 className="text-[20px] text-[#0A0A0A] mb-6">
          Audit Logs Trend
        </h3>

        <div className="h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={auditLogsData}
              margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="4 4"
                stroke="#E5E7EB"
              />

              <XAxis
                dataKey="date"
                tick={{ fontSize: 12, fill: "#9CA3AF" }}
                axisLine={{ stroke: "#9CA3AF" }}
              />

              <YAxis
                tick={{ fontSize: 12, fill: "#9CA3AF" }}
                axisLine={{ stroke: "#9CA3AF" }}
              />

              <Line
                type="monotone"
                dataKey="value"
                stroke="#4F7BFF"
                strokeWidth={3}
                dot={{ r: 6, fill: "#4F7BFF" }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-lg lg:rounded-[16px] border border-[#0000001A] lg:p-6 p-3">
        <h3 className="text-[20px] text-[#0A0A0A] mb-6">
          Compliance Rate Trend
        </h3>

        <div className="h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={complianceRateData}
              margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="4 4"
                stroke="#E5E7EB"
              />

              <XAxis
                dataKey="date"
                tick={{ fontSize: 12, fill: "#9CA3AF" }}
                axisLine={{ stroke: "#9CA3AF" }}
              />

              <YAxis
                domain={[0, 110]}
                tick={{ fontSize: 12, fill: "#9CA3AF" }}
                axisLine={{ stroke: "#9CA3AF" }}
              />

              <Line
                type="monotone"
                dataKey="value"
                stroke="#10B981"
                strokeWidth={3}
                dot={{ r: 6, fill: "#10B981" }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AuditChart;
