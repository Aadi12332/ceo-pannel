import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const activePoliciesData = [
  { date: "Dec 15", value: 22 },
  { date: "Dec 16", value: 22 },
  { date: "Dec 17", value: 23 },
  { date: "Dec 18", value: 23 },
  { date: "Dec 19", value: 23 },
  { date: "Dec 20", value: 24 },
  { date: "Dec 21", value: 24 },
];

const policyViolationsData = [
  { date: "Dec 15", value: 27 },
  { date: "Dec 16", value: 25 },
  { date: "Dec 17", value: 23 },
  { date: "Dec 18", value: 22 },
  { date: "Dec 19", value: 21 },
  { date: "Dec 20", value: 20 },
  { date: "Dec 21", value: 19 },
];

const PolicyTrends = () => {
  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 gap-6 mb-5">
      
      <div className="bg-white rounded-lg border border-[#0000001A] lg:rounded-[14px] lg:p-6 p-3">
        <h3 className="text-[20px] font-medium text-[#1E1E1E] mb-4">
          Active Policies Trend
        </h3>

        <div className="h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={activePoliciesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tick={{ fontSize: 12, fill: "#9CA3AF" }} />
              <YAxis tick={{ fontSize: 12, fill: "#9CA3AF" }} />
              <Bar
                dataKey="value"
                radius={[8, 8, 0, 0]}
                fill="#4C1D95"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-[#0000001A] lg:rounded-[14px] lg:p-6 p-3">
        <h3 className="text-[20px] font-medium text-[#1E1E1E] mb-4">
          Policy Violations Trend
        </h3>

        <div className="h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={policyViolationsData}>
              <defs>
                <linearGradient id="colorViolation" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#06B6D4E5" stopOpacity={1} />
                  <stop offset="100%" stopColor="#06B6D4E5" stopOpacity={0.2} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tick={{ fontSize: 12, fill: "#9CA3AF" }} />
              <YAxis tick={{ fontSize: 12, fill: "#9CA3AF" }} />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#5BC0D8"
                fill="url(#colorViolation)"
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};

export default PolicyTrends;
