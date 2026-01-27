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

const pendingApprovalsData = [
  { date: "Dec 15", value: 18 },
  { date: "Dec 16", value: 16 },
  { date: "Dec 17", value: 15 },
  { date: "Dec 18", value: 14 },
  { date: "Dec 19", value: 13 },
  { date: "Dec 20", value: 14 },
  { date: "Dec 21", value: 12 },
];

const approvalRateData = [
  { date: "Dec 15", value: 74 },
  { date: "Dec 16", value: 76 },
  { date: "Dec 17", value: 78 },
  { date: "Dec 18", value: 79 },
  { date: "Dec 19", value: 79 },
  { date: "Dec 20", value: 80 },
  { date: "Dec 21", value: 80 },
];

const ApprovalTrends = () => {
  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 gap-6 mb-5">
      <div className="bg-white rounded-lg lg:rounded-[14px] border border-[#0000001A] p-6">
        <h3 className="text-[20px] text-[#0A0A0A] mb-6">
          Pending Approvals Trend
        </h3>

        <div className="h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={pendingApprovalsData}>
              <defs>
                <linearGradient
                  id="pendingGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity={0.1} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="4 4" stroke="#E5E7EB" />

              <XAxis
                dataKey="date"
                tick={{ fontSize: 12, fill: "#9CA3AF" }}
                axisLine={{ stroke: "#9CA3AF" }}
              />

              <YAxis
                tick={{ fontSize: 12, fill: "#9CA3AF" }}
                axisLine={{ stroke: "#9CA3AF" }}
              />

              <Area
                type="monotone"
                dataKey="value"
                stroke="#F59E0B"
                fill="url(#pendingGradient)"
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-lg lg:rounded-[14px] border border-[#0000001A] p-6">
        <h3 className="text-[20px] text-[#0A0A0A] mb-6">Approval Rate Trend</h3>

        <div className="h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={approvalRateData}>
              ={" "}
              <defs>
                <linearGradient
                  id="approvalGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#10B981" stopOpacity={0.45} />
                  <stop offset="100%" stopColor="#10B981" stopOpacity={0.12} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="4 4" stroke="#E5E7EB" />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 12, fill: "#9CA3AF" }}
                axisLine={{ stroke: "#9CA3AF" }}
              />
              <YAxis
                domain={[0, 100]}
                tick={{ fontSize: 12, fill: "#9CA3AF" }}
                axisLine={{ stroke: "#9CA3AF" }}
              />
              <Area
  type="monotone"
  dataKey="value"
  stroke="none"
  fill="url(#approvalGradient)"
  fillOpacity={1}
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

export default ApprovalTrends;
