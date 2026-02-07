import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const cpuBg = (cpu) => {
  const value = parseInt(cpu);
  if (value > 80) return "bg-[#FFDDDB] text-[#CF2027]";
  if (value > 50) return "bg-[#FFEDD4] text-[#F54900]";
  return "bg-[#DCFCE7] text-[#008236]";
};

const percentBg = (val) =>
  val >= 70 ? "bg-[#DCFCE7] text-[#008236]" : "bg-[#FFDDDB] text-[#F54900]";

const errorBg = (error) => {
  const value = parseFloat(error);
  return value <= 0.1
    ? "bg-[#DCFCE7] text-[#008236]"
    : "bg-[#FFDDDB] text-[#F54900]";
};

const kpiData = [
  {
    service: "Identity",
    traffic: "12.5K/s",
    cpu: "72%",
    memory: "62%",
    latency: "12ms",
    error: "0.01%",
  },
  {
    service: "Orders",
    traffic: "8.2K/s",
    cpu: "38%",
    memory: "78%",
    latency: "45ms",
    error: "0.03%",
  },
  {
    service: "Payments",
    traffic: "3.1K/s",
    cpu: "88%",
    memory: "55%",
    latency: "89ms",
    error: "0.01%",
  },
  {
    service: "Ads",
    traffic: "45.8K/s",
    cpu: "45%",
    memory: "82%",
    latency: "156ms",
    error: "0.12%",
  },
];

const internalDeps = [
  {
    name: "Redis Cluster",
    type: "Cache",
    latency: "8ms",
    usedBy: "Identity, Orders, Ads",
    status: "warn",
  },
  {
    name: "PostgreSQL",
    type: "Database",
    latency: "12ms",
    usedBy: "All Services",
    status: "ok",
  },
  {
    name: "Kafka",
    type: "Messaging",
    latency: "15ms",
    usedBy: "All Services",
    status: "ok",
  },
  {
    name: "Elasticsearch",
    type: "Search",
    latency: "65ms",
    usedBy: "Orders, Ads, Studio",
    status: "warn",
  },
];

const externalDeps = [
  {
    name: "Stripe API",
    type: "Payments",
    latency: "120ms",
    usedBy: "Payments, Orders",
    status: "ok",
  },
  {
    name: "Twilio",
    type: "Communications",
    latency: "85ms",
    usedBy: "Alerts, Identity",
    status: "ok",
  },
  {
    name: "AWS S3",
    type: "Storage",
    latency: "85ms",
    usedBy: "Alerts, Identity",
    status: "ok",
  },
  {
    name: "SendGrid",
    type: "Email",
    latency: "200ms",
    usedBy: "Alerts, Identity",
    status: "ok",
  },
];

const dotBg = {
  ok: "bg-[#00A63E]",
  warn: "bg-[#F54900]",
};

const CapacityAndDependencies = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-5 mb-5">
      <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold">Capacity & Scaling KPIs</h2>
            <p className="text-sm text-[#6B7280]">4 total</p>
          </div>
          <button
            onClick={() => navigate("/view-capacity")}
            className="px-3 py-2 bg-[#0E1E38] rounded-lg text-white"
          >
            View All
          </button>
        </div>

        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="py-3">Service</th>
              <th>Traffic</th>
              <th>CPU</th>
              <th>Memory</th>
              <th>p95 Latency</th>
              <th>Error Rate</th>
            </tr>
          </thead>
          <tbody>
            {kpiData.map((row, i) => (
              <tr key={i} className="border-b last:border-b-0">
                <td className="py-4">{row.service}</td>
                <td>{row.traffic}</td>
                <td>
                  <span
                    className={`px-2 py-1 rounded text-sm ${cpuBg(row.cpu)}`}
                  >
                    {row.cpu}
                  </span>
                </td>
                <td>
                  <span
                    className={`px-2 py-1 rounded text-sm ${percentBg(
                      parseInt(row.memory),
                    )}`}
                  >
                    {row.memory}
                  </span>
                </td>
                <td>{row.latency}</td>
                <td>
                  <span
                    className={`px-2 py-1 rounded text-sm ${errorBg(row.error)}`}
                  >
                    {row.error}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3">
        <h2 className="text-lg font-semibold">Dependency Graph</h2>
        <p className="text-sm text-[#6B7280] mb-4">
          Internal & External Services
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm font-medium mb-2">Internal Services</p>
            <div className="space-y-3">
              {internalDeps.map((d, i) => (
                <div
                  key={i}
                  className="border rounded-lg p-4 flex justify-between items-center"
                >
                  <div className="w-full">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <p className="font-medium">
                        {d.name}{" "}
                        <span className="text-[#6B7280]">({d.type})</span>
                      </p>
                      <span
                        className={`w-2 h-2 rounded-full ${dotBg[d.status]}`}
                      />
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm text-[#6B7280]">
                        Latency:{" "}
                        <span className="text-[#1E1E1E]">{d.latency}</span>
                      </p>
                      <p className="text-sm text-[#6B7280]">
                        Used by: {d.usedBy}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">Third-Party Integrations</p>
            <div className="space-y-3">
              {externalDeps.map((d, i) => (
                <div
                  key={i}
                  className="border rounded-lg p-4 flex justify-between items-center"
                >
                  <div className="w-full">
                    <div className="flex items-center gap-2 justify-between mb-2">
                      <p className="font-medium">
                        {d.name}{" "}
                        <span className="text-[#6B7280]">({d.type})</span>
                      </p>
                      <div className="flex items-center gap-5">
                        <span
                          className={`w-2 h-2 rounded-full ${dotBg[d.status]}`}
                        />
                        <ExternalLink className="w-4 h-4 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm text-[#6B7280]">
                        Latency:{" "}
                        <span className="text-[#1E1E1E]">{d.latency}</span>
                      </p>
                      <p className="text-sm text-[#6B7280]">
                        Used by: {d.usedBy}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapacityAndDependencies;
