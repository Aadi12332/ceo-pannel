import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout";
import SearchInput from "../common/SearchInput";

const statusStyle = {
  Healthy: "bg-[#DCFCE7] text-[#008236]",
  Degraded: "bg-[#FEF3C7] text-[#B45309]",
  Down: "bg-[#FFDDDB] text-[#CF2027]",
};

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

const ViewHealth = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  return (
    <MainLayout>
      <div>
        <h2
          onClick={() => navigate("/api-integrations")}
          className="text-[28px] font-bold text-[#0A0A0A] mb-5 flex items-center gap-2 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
          Integration Health
        </h2>
      </div>
      <div className="bg-white lg:rounded-xl lg:p-6 rounded-lg p-3 flex flex-col">
        <SearchInput value={search} onChange={setSearch} className="!mb-5 !max-w-[320px]" placeholder="Search" />
        <div className="overflow-auto scroll-hide max-h-[calc(100vh-270px)]">
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
    </MainLayout>
  );
};

export default ViewHealth;
