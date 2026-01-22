import {
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const activeAutomationsData = [
  { date: "Dec 15", value: 52 },
  { date: "Dec 16", value: 50 },
  { date: "Dec 17", value: 48 },
  { date: "Dec 18", value: 47 },
  { date: "Dec 19", value: 46 },
  { date: "Dec 20", value: 46 },
  { date: "Dec 21", value: 45 },
];

const policyComplianceData = [
  { date: "Dec 15", value: 100 },
  { date: "Dec 16", value: 100 },
  { date: "Dec 17", value: 99 },
  { date: "Dec 18", value: 100 },
  { date: "Dec 19", value: 101 },
  { date: "Dec 20", value: 101 },
  { date: "Dec 21", value: 101 },
];

const AutomationChart = () => {
  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 gap-6 mb-5">
      <div className="bg-white rounded-[16px] border border-[#0000001A] p-6">
        <h3 className="text-[20px] text-[#0A0A0A] mb-6">
          Active Automations Trend
        </h3>

        <div className="h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={activeAutomationsData}>
              <CartesianGrid strokeDasharray="4 4" stroke="#E5E7EB" />

              <XAxis
                dataKey="date"
                tick={{ fontSize: 12, fill: "#9CA3AF" }}
                axisLine={{ stroke: "#9CA3AF" }}
              />

              <YAxis
                domain={[0, 60]}
                tick={{ fontSize: 12, fill: "#9CA3AF" }}
              />

              <Line
                type="monotone"
                dataKey="value"
                stroke="#EF4444"
                strokeWidth={3}
                dot={{ r: 6, fill: "#EF4444" }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-[16px] border border-[#0000001A] p-6">
        <h3 className="text-[20px] text-[#0A0A0A] mb-6">
          Policy Compliance Trend
        </h3>

        <div className="h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={policyComplianceData}>
              <CartesianGrid strokeDasharray="4 4" stroke="#E5E7EB" />

              <XAxis
                dataKey="date"
                tick={{ fontSize: 12, fill: "#9CA3AF" }}
                axisLine={{ stroke: "#9CA3AF" }}
              />

              <YAxis
                domain={[0, 110]}
                tick={{ fontSize: 12, fill: "#9CA3AF" }}
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

export default AutomationChart;
