import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const chartData = [
  { day: "Mon", passing: 112, failing: 25 },
  { day: "Tue", passing: 130, failing: 18 },
  { day: "Wed", passing: 95, failing: 20 },
  { day: "Thu", passing: 170, failing: 26 },
  { day: "Fri", passing: 138, failing: 19 },
  { day: "Sat", passing: 180, failing: 27 },
  { day: "Sun", passing: 178, failing: 26 },
];

const PassingFailingChart = () => {
  return (
    <div className="py-5">
      <div style={{ width: "100%", height: 350 }}>
        <ResponsiveContainer>
          <BarChart
            data={chartData}
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="4 4" stroke="#E5E7EB" />
            <XAxis
              dataKey="day"
              tick={{ fill: "#6B7280", fontSize: 12 }}
            />
            <YAxis
              domain={[0, 200]}
              tick={{ fill: "#6B7280", fontSize: 12 }}
            />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="passing"
              fill="#5BAE87"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="failing"
              fill="#D94B45"
              radius={[0, 0, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PassingFailingChart;
