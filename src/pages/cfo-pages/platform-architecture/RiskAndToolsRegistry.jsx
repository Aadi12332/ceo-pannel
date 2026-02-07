import {
  AlertTriangle,
  Search,
  LayoutGrid,
  FileText,
  LineChart,
  Eye,
  Scan,
  ExternalLink,
  Calendar,
  User,
  DollarSign,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const riskTagColor = {
  Availability: "bg-blue-100 text-blue-600",
  Security: "bg-red-100 text-[#CF2027]",
  Performance: "bg-orange-100 text-[#F54900]",
  Compliance: "bg-green-100 text-[#00A63E]",
};

const riskStatusColor = {
  Mitigating: "bg-green-100 text-[#00A63E]",
};

const risks = [
  {
    id: "RISK-001",
    tag: "Availability",
    status: "Mitigating",
    title: "Single point of failure in Redis cluster",
    owner: "SRE Lead",
    due: "01-15-2026",
    icon: <AlertTriangle className="w-5 h-5 text-[#F54900]" />,
    iconBg: "bg-red-100",
  },
  {
    id: "RISK-002",
    tag: "Security",
    title: "Outdated TLS certificates in staging",
    owner: "Security Lead",
    due: "01-15-2026",
    icon: <AlertTriangle className="w-5 h-5 text-[#CF2027]" />,
    iconBg: "bg-red-100",
  },
  {
    id: "RISK-003",
    tag: "Performance",
    status: "Mitigating",
    title: "Ads service approaching capacity limits",
    owner: "Platform Team",
    due: "01-15-2026",
    icon: <AlertTriangle className="w-5 h-5 text-[#F54900]" />,
    iconBg: "bg-orange-100",
  },
  {
    id: "RISK-004",
    tag: "Compliance",
    title: "GDPR data retention policy gaps",
    owner: "Legal/Compliance",
    due: "01-15-2026",
    icon: <AlertTriangle className="w-5 h-5 text-[#2563EB]" />,
    iconBg: "bg-blue-100",
  },
  {
    id: "RISK-005",
    tag: "Compliance",
    title: "GDPR data retention policy gaps",
    owner: "Legal/Compliance",
    due: "01-15-2026",
    icon: <AlertTriangle className="w-5 h-5 text-[#2563EB]" />,
    iconBg: "bg-blue-100",
  },
  {
    id: "RISK-006",
    tag: "Compliance",
    title: "GDPR data retention policy gaps",
    owner: "Legal/Compliance",
    due: "01-15-2026",
    icon: <AlertTriangle className="w-5 h-5 text-[#2563EB]" />,
    iconBg: "bg-blue-100",
  },
  {
    id: "RISK-007",
    tag: "Compliance",
    title: "GDPR data retention policy gaps",
    owner: "Legal/Compliance",
    due: "01-15-2026",
    icon: <AlertTriangle className="w-5 h-5 text-[#2563EB]" />,
    iconBg: "bg-blue-100",
  },
];

const tools = [
  {
    section: "Discovery",
    items: [
      {
        title: "Service Catalog",
        desc: "Discover and manage all registered services",
        icon: <Search className="w-5 h-5 text-[#00A63E]" />,
        iconBg: "bg-green-100",
      },
    ],
  },
  {
    section: "Design",
    items: [
      {
        title: "System Diagramming",
        desc: "Create and edit architecture diagrams",
        icon: <LayoutGrid className="w-5 h-5 text-blue-600" />,
        iconBg: "bg-blue-100",
      },
      {
        title: "ADR Generator",
        desc: "Generate ADR templates with AI assistance",
        icon: <FileText className="w-5 h-5 text-blue-600" />,
        iconBg: "bg-blue-100",
      },
    ],
  },
  {
    section: "Monitoring",
    items: [
      {
        title: "APM Dashboard",
        desc: "Application performance metrics",
        icon: <LineChart className="w-5 h-5 text-[#00A63E]" />,
        iconBg: "bg-green-100",
      },
      {
        title: "Tracing Viewer",
        desc: "Distributed tracing and span analysis",
        icon: <Eye className="w-5 h-5 text-[#00A63E]" />,
        iconBg: "bg-green-100",
      },
    ],
  },
  {
    section: "Security",
    items: [
      {
        title: "Dependency Scanner",
        desc: "Scan dependencies for vulnerabilities",
        icon: <Scan className="w-5 h-5 text-[#CF2027]" />,
        iconBg: "bg-red-100",
      },
    ],
  },
  {
    section: "Cost",
    items: [
      {
        title: "Cost Explorer",
        desc: "Cloud spend analysis and optimization",
        icon: <DollarSign className="w-5 h-5 text-[#F54900]" />,
        iconBg: "bg-orange-100",
      },
    ],
  },
];

const RiskAndToolsRegistry = () => {
    const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold">Risk Register</h2>
            <p className="text-sm text-[#6B7280]">Top 10</p>
          </div>
          <button onClick={() => navigate("/view-risk-register")} className="px-3 py-2 bg-[#0E1E38] rounded-lg text-white">
            View All
          </button>
        </div>

        <div className="overflow-auto scroll-hide max-h-[420px]">
          {risks.map((risk, i) => (
            <div
              key={i}
              className="flex items-center gap-4 py-4 last:pb-0 first:pt-0 border-b last:border-b-0"
            >
              <div
                className={`w-10 h-10 min-w-10 rounded-lg flex items-center justify-center ${risk.iconBg}`}
              >
                {risk.icon}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-[#6B7280]">
                    {risk.id}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded text-xs ${riskTagColor[risk.tag]}`}
                  >
                    {risk.tag}
                  </span>
                  {risk.status && (
                    <span
                      className={`px-2 py-0.5 rounded text-xs ${riskStatusColor[risk.status]}`}
                    >
                      {risk.status}
                    </span>
                  )}
                </div>

                <p className="text-sm font-medium text-[#111827]">
                  {risk.title}
                </p>

                <div className="flex items-center gap-4 text-sm text-[#6B7280] mt-1">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {risk.owner}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Due: {risk.due}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 ">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Tools Registry</h2>
          <p className="text-sm text-[#6B7280]">7 Available</p>
        </div>

        <div className="space-y-4 overflow-auto scroll-hide max-h-[420px]">
          {tools.map((group, i) => (
            <div key={i}>
              <p className="text-sm font-medium">
                {group.section}
              </p>
              <div className="space-y-3">
                {group.items.map((tool, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between border-b py-4"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 min-w-10 rounded-lg flex items-center justify-center ${tool.iconBg}`}
                      >
                        {tool.icon}
                      </div>
                      <div>
                        <p className="font-medium">
                          {tool.title}
                        </p>
                        <p className="text-sm text-[#6B7280]">
                          {tool.desc}
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-blue-600" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RiskAndToolsRegistry;
