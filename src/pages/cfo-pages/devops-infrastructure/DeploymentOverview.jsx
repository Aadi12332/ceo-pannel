import { Clock, Activity, XCircle, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const kpiCards = [
  {
    title: "Mean Time to Deploy",
    value: "14.2 min",
    delta: "-8% vs last week",
    deltaColor: "text-[#CF2027]",
    icon: Clock,
    iconBg: "bg-[#DCFCE7]",
    iconColor: "text-[#008236]",
  },
  {
    title: "Deploy Frequency",
    value: "4.2/day",
    delta: "+12% vs last week",
    deltaColor: "text-[#00A63E]",
    icon: Activity,
    iconBg: "bg-[#FEF3C7]",
    iconColor: "text-[#B45309]",
  },
  {
    title: "Change Failure Rate",
    value: "2.8%",
    delta: "-15% vs last week",
    deltaColor: "text-[#CF2027]",
    icon: XCircle,
    iconBg: "bg-[#FFDDDB]",
    iconColor: "text-[#CF2027]",
  },
  {
    title: "MTTR",
    value: "45 min",
    delta: "-22% vs last week",
    deltaColor: "text-[#CF2027]",
    icon: CheckCircle,
    iconBg: "bg-[#DCFCE7]",
    iconColor: "text-[#008236]",
  },
];

const environments = [
  {
    name: "Production",
    uptime: "99.99%",
    latency: "12ms",
    error: "0.01%",
    saturation: "68%",
    dot: "bg-[#00A63E]",
  },
  {
    name: "Staging",
    uptime: "99.85%",
    latency: "78ms",
    error: "0.15%",
    saturation: "45%",
    dot: "bg-[#F54900]",
  },
  {
    name: "Development",
    uptime: "98.5%",
    latency: "120ms",
    error: "0.45%",
    saturation: "32%",
    dot: "bg-[#00A63E]",
  },
];

const statusStyle = {
  Success: "bg-[#DCFCE7] text-[#008236]",
  Running: "bg-[#FEF3C7] text-[#B45309]",
  Failed: "bg-[#FFDDDB] text-[#CF2027]",
  "Rolled Back": "bg-[#FFEDD4] text-[#F54900]",
};

const pipelineData = [
  {
    id: "#4582",
    service: "Payments API",
    env: "Production",
    branch: "hotfix/pay-err",
    commit: "a1c9f3",
    status: "Success",
    stage: "Canary 5%",
    duration: "6m 32s",
  },
  {
    id: "#4581",
    service: "Orders API",
    env: "Production",
    branch: "release/v2.4",
    commit: "b7d21e",
    status: "Running",
    stage: "Full Deploy",
    duration: "--",
  },
  {
    id: "#4579",
    service: "Auth Service",
    env: "Stage",
    branch: "develop",
    commit: "d3f88a",
    status: "Failed",
    stage: "Integration Tests",
    duration: "4m 12s",
  },
  {
    id: "#4578",
    service: "Search API",
    env: "Development",
    branch: "feature/ranking",
    commit: "f9aa01",
    status: "Success",
    stage: "Build",
    duration: "2m 05s",
  },
  {
    id: "#4576",
    service: "Ads Engine",
    env: "Production",
    branch: "release/v2.3",
    commit: "c1e7bb",
    status: "Rolled Back",
    stage: "Post-Deploy Check",
    duration: "9m 10s",
  },
];

export default function DeploymentOverview() {
  const navigate = useNavigate();
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiCards.map((k, i) => (
          <div key={i} className="bg-white rounded-xl p-5 flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">{k.title}</p>
              <p className="text-2xl font-semibold mt-1">{k.value}</p>
              <p className={`text-sm mt-1 ${k.deltaColor}`}>{k.delta}</p>
            </div>
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center ${k.iconBg}`}
            >
              <k.icon className={`w-5 h-5 ${k.iconColor}`} />
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Environment Health</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {environments.map((e, i) => (
            <div key={i} className="bg-white rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="font-medium">{e.name}</p>
                <span className={`w-2 h-2 rounded-full ${e.dot}`} />
              </div>
              <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-4 grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-gray-500">Uptime</p>
                  <p className="font-medium">{e.uptime}</p>
                </div>
                <div>
                  <p className="text-gray-500">Latency</p>
                  <p className="font-medium">{e.latency}</p>
                </div>
                <div>
                  <p className="text-gray-500">Error Rate</p>
                  <p className="font-medium">{e.error}</p>
                </div>
                <div>
                  <p className="text-gray-500">Saturation</p>
                  <p className="font-medium">{e.saturation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Deployment Pipeline</h2>
          <button
            onClick={() => navigate("/view-development")}
            className="px-3 py-2 bg-[#0E1E38] rounded-lg text-white"
          >
            View All
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[1100px] w-full text-sm">
            <thead className="border-b">
              <tr className="text-left text-gray-500">
                <th className="py-3">Build ID</th>
                <th>Service</th>
                <th>Environment</th>
                <th>Branch</th>
                <th>Commit</th>
                <th>Status</th>
                <th>Stage</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {pipelineData.map((r, i) => (
                <tr key={i} className="border-b last:border-b-0">
                  <td className="py-4">{r.id}</td>
                  <td>{r.service}</td>
                  <td>{r.env}</td>
                  <td>{r.branch}</td>
                  <td>{r.commit}</td>
                  <td>
                    <span
                      className={`px-2 py-0.5 text-xs rounded ${statusStyle[r.status]}`}
                    >
                      {r.status}
                    </span>
                  </td>
                  <td>{r.stage}</td>
                  <td>{r.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
