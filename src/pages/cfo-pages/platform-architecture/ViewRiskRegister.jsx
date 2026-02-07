import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout";
import SearchInput from "../common/SearchInput";
import {
  AlertTriangle,
  Calendar,
  User,
} from "lucide-react";

const riskStatusColor = {
  Mitigating: "bg-green-100 text-[#00A63E]",
};

const riskTagColor = {
  Availability: "bg-blue-100 text-blue-600",
  Security: "bg-red-100 text-[#CF2027]",
  Performance: "bg-orange-100 text-[#F54900]",
  Compliance: "bg-green-100 text-[#00A63E]",
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
];

const ViewRiskRegister = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  return (
    <MainLayout>
      <div>
        <h2
          onClick={() => navigate("/platform-architecture")}
          className="text-[28px] font-bold text-[#0A0A0A] mb-5 flex items-center gap-2 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
          Risk Register
        </h2>
      </div>
      <div className="bg-white lg:rounded-xl lg:p-6 rounded-lg p-3 flex flex-col">
        <SearchInput value={search} onChange={setSearch} className="!mb-5 !max-w-[320px]" placeholder="Search" />
        <div className="overflow-auto scroll-hide max-h-[calc(100vh-270px)]">
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

              <div className="flex-1 flex flex-col gap-1">
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
    </MainLayout>
  );
};

export default ViewRiskRegister;
