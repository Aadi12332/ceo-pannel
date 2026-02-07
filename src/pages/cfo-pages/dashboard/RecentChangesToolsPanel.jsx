import { useNavigate } from "react-router-dom";
import {
  Terminal,
  Database,
  Shield,
  GitBranch,
  Server,
  BarChart3,
  Cloud,
  Key,
} from "lucide-react";
const recentChangesData = [
  {
    user: "Sarah Chen",
    action: "deployed",
    highlightClass: "text-green-600",
    title: "api-service v2.4.1",
    time: "2 min ago",
    auditId: "AUD-001234",
    avatar: "https://i.pravatar.cc/40?img=12",
  },
  {
    user: "Mike Johnson",
    action: "modified",
    highlightClass: "text-orange-600",
    title: "IAM policy: prod-access",
    time: "5 min ago",
    auditId: "AUD-002222",
    avatar: "https://i.pravatar.cc/40?img=32",
  },
  {
    user: "Alex Kim",
    action: "created",
    highlightClass: "text-blue-600",
    title: "alert rule: cpu-threshold",
    time: "10 min ago",
    auditId: "AUD-002226",
    avatar: "https://i.pravatar.cc/40?img=48",
  },
  {
    user: "Emily Davis",
    action: "deleted",
    highlightClass: "text-red-600",
    title: "stale-feature-branch",
    time: "20 min ago",
    auditId: "AUD-002227",
    avatar: "https://i.pravatar.cc/40?img=47",
  },
  {
    user: "James Wilson",
    action: "approved",
    highlightClass: "text-green-600",
    title: "security patch #847",
    time: "22 min ago",
    auditId: "AUD-002228",
    avatar: "https://i.pravatar.cc/40?img=60",
  },
  {
    user: "Sarah Chen",
    action: "scaled",
    highlightClass: "text-orange-600",
    title: "worker-pool: 5 → 8 nodes",
    time: "44 min ago",
    auditId: "AUD-002229",
    avatar: "https://i.pravatar.cc/40?img=12",
  },
];

const toolsData = [
  {
    title: "Console",
    desc: "Shell access",
    icon: <Terminal className="w-4 h-4 min-w-4 text-[#1E1E1E]" />,
    enabled: true,
  },
  {
    title: "Database",
    desc: "Query explorer",
    icon: <Database className="w-4 h-4 min-w-4 text-[#1E1E1E]" />,
    enabled: true,
  },
  {
    title: "Security Hub",
    desc: "Threat dashboard",
    icon: <Shield className="w-4 h-4 min-w-4 text-[#1E1E1E]" />,
    enabled: true,
  },
  {
    title: "CI/CD",
    desc: "Pipeline manager",
    icon: <GitBranch className="w-4 h-4 min-w-4 text-[#1E1E1E]" />,
    enabled: true,
  },
  {
    title: "Servers",
    desc: "Fleet management",
    icon: <Server className="w-4 h-4 min-w-4 text-[#1E1E1E]" />,
    enabled: true,
  },
  {
    title: "Analytics",
    desc: "System metrics",
    icon: <BarChart3 className="w-4 h-4 min-w-4 text-[#1E1E1E]" />,
    enabled: true,
  },
  {
    title: "Cloud Console",
    desc: "AWS/GCP/Azure",
    icon: <Cloud className="w-4 h-4 min-w-4 text-[#1E1E1E]" />,
    enabled: true,
  },
  {
    title: "Secrets",
    desc: "Vault access",
    icon: <Key className="w-4 h-4 min-w-4 text-[#1E1E1E]" />,
    enabled: false,
  },
];

const RecentChangesToolsPanel = () => {
  const navigate = useNavigate();
  const enabledCount = toolsData.filter((t) => t.enabled).length;
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
      <div className="bg-white lg:rounded-xl lg:p-6 rounded-lg p-3">
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-[#111827]">Tools</h2>
          <p className="text-sm text-[#6B7280]">
            {enabledCount}/{toolsData.length} enabled
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:gap-4 gap-2">
          {toolsData.map((tool, index) => (
            <div
              key={index}
              className={`border rounded-lg lg:p-4 p-2 ${
                tool.enabled
                  ? "border-[#D1D5DB] text-[#111827]"
                  : "border-[#E5E7EB] text-[#9CA3AF]"
              }`}
            >
              <div className="flex items-center gap-2">
                <div>{tool.icon}</div>
                <p className="font-medium text-[#1E1E1E]">{tool.title}</p>
              </div>
              <p className="text-sm text-[#929292]">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white lg:rounded-xl lg:p-6 rounded-lg p-3 flex max-h-[468px] flex-col">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold text-[#111827]">
              Recent Changes
            </h2>
            <p className="text-sm text-[#6B7280]">Last 50 actions</p>
          </div>

          <button onClick={()=>navigate("/view-recent-change")} className="px-3 py-2 bg-[#0E1E38] rounded-lg text-white">
            View All
          </button>
        </div>

        <div className="overflow-auto scroll-hide">
          {recentChangesData.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 justify-between py-4 last:pb-0 first:pt-0 border-b last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />

                <div>
                  <p className="text-sm text-[#111827]">
                    <span className="font-medium">{item.user}</span>{" "}
                    <span className={item.highlightClass}>{item.action}</span>{" "}
                    {item.title}
                  </p>
                  <p className="text-sm text-[#9CA3AF]">{item.time}</p>
                </div>
              </div>

              <span className="text-sm font-medium text-blue-600 text-end">
                {item.auditId}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentChangesToolsPanel;
