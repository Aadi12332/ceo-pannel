import {useNavigate} from "react-router-dom";    

const statusStyle = {
  Healthy: "bg-[#DCFCE7] text-[#008236]",
  Degraded: "bg-[#FEF3C7] text-[#B45309]",
  Down: "bg-[#FFDDDB] text-[#CF2027]",
};

const summary = [
  { label: "Active", value: 23, color: "text-[#008236]" },
  { label: "Degraded", value: 2, color: "text-[#B45309]" },
  { label: "Down", value: 1, color: "text-[#CF2027]" },
];

const integrations = [
  {
    name: "Stripe Payments",
    category: "Payments",
    status: "Healthy",
    latency: "45ms",
    error: "0.02%",
    uptime: "99.99%",
    incident: "32 days ago",
  },
  {
    name: "Twilio SMS",
    category: "Communications",
    status: "Healthy",
    latency: "120ms",
    error: "0.15%",
    uptime: "99.95%",
    incident: "7 days ago",
  },
  {
    name: "SendGrid Email",
    category: "Communications",
    status: "Degraded",
    latency: "890ms",
    error: "2.3%",
    uptime: "98.5%",
    incident: "2 hours ago",
  },
  {
    name: "Google Maps",
    category: "Location",
    status: "Healthy",
    latency: "78ms",
    error: "0.08%",
    uptime: "99.98%",
    incident: "45 days ago",
  },
  {
    name: "AWS S3",
    category: "Storage",
    status: "Healthy",
    latency: "35ms",
    error: "0.01%",
    uptime: "99.999%",
    incident: "90 days ago",
  },
  {
    name: "Firebase FCM",
    category: "Push Notifications",
    status: "Healthy",
    latency: "95ms",
    error: "0.5%",
    uptime: "99.9%",
    incident: "14 days ago",
  },
  {
    name: "Elasticsearch",
    category: "Search",
    status: "Degraded",
    latency: "450ms",
    error: "1.8%",
    uptime: "99.2%",
    incident: "4 hours ago",
  },
  {
    name: "Partner Order API",
    category: "Orders",
    status: "Down",
    latency: "--",
    error: "100%",
    uptime: "85.5%",
    incident: "Active Incident",
  },
];

export default function IntegrationHealth() {
    const navigate = useNavigate();     
  return (
    <div className="space-y-5 mb-5">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {summary.map((s, i) => (
          <div
            key={i}
            className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3"
          >
            <p className="text-sm text-gray-500">{s.label}</p>
            <p className={`text-2xl font-semibold ${s.color}`}>
              {s.value}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">
            Integration Health
          </h2>
          <button onClick={()=>navigate("/view-health")} className="px-3 py-2 bg-[#0E1E38] rounded-lg text-white">
            View All
          </button>
        </div>

        <div className="w-[calc(100vw-44px)] lg:w-[unset] overflow-auto scroll-hide">
          <table className="min-w-[1100px] w-full border-collapse">
            <thead>
              <tr className="border-b text-left text-sm text-black">
                <th className="py-3">Integration</th>
                <th>Category</th>
                <th>Status</th>
                <th>Latency (p95)</th>
                <th>Error Rate</th>
                <th>Uptime</th>
                <th>Last Incident</th>
              </tr>
            </thead>

            <tbody>
              {integrations.map((row, i) => (
                <tr
                  key={i}
                  className="border-b last:border-b-0 text-sm"
                >
                  <td className="py-4 text-gray-400">{row.name}</td>
                  <td className="text-gray-400">{row.category}</td>
                  <td className="text-gray-400">
                    <span
                      className={`px-2 py-1 rounded text-sm ${statusStyle[row.status]}`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="text-gray-400">{row.latency}</td>
                  <td className="text-gray-400">{row.error}</td>
                  <td className="text-gray-400">{row.uptime}</td>
                  <td
                    className={` text-gray-400 {
                      row.incident === "Active Incident"
                        ? "text-[#CF2027]"
                        : "text-gray-500"
                    }`}
                  >
                    {row.incident}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
