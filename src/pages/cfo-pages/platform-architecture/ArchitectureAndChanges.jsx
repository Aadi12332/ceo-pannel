import { User, Calendar, Clock } from "lucide-react";

const riskColor = {
  Low: "text-[#00A63E] bg-green-100 text-green-700",
  Medium: "text-[#F54900] bg-yellow-100 text-yellow-700",
  High: "text-[#CF2027] bg-red-100 text-red-700",
};

const statusBg = {
  Proposed: "bg-blue-100 text-blue-600",
  Draft: "bg-yellow-100 text-yellow-700",
  Approved: "bg-green-100 text-green-700",
  Implemented: "bg-green-100 text-green-700",
};

const data = {
  adr: {
    title: "Architecture Decision Records",
    subtitle: "6 total",
items: [
  {
    adrDataId: "ADR-001",
    risk: "High",
    status: "Approved",
    title:
      "Migrate to Event-Driven Architecture for Order Processing",
    owner: "J. Smith",
    date: "01-15-2026",
  },
  {
    adrDataId: "ADR-001",
    risk: "Medium",
    status: "Implemented",
    title: "Adopt GraphQL Federation for API Gateway",
    owner: "J. Smith",
    date: "01-15-2026",
  },
  {
    adrDataId: "ADR-001",
    risk: "Low",
    status: "Proposed",
    title: "Split Provider Onboarding into Microservices",
    owner: "J. Smith",
    date: "01-15-2026",
  },
  {
    adrDataId: "ADR-001",
    risk: "Low",
    status: "Draft",
    title:
      "Implement Circuit Breaker Pattern for Payment Gateway",
    owner: "J. Smith",
    date: "01-15-2026",
  },
  {
    adrDataId: "ADR-001",
    risk: "High",
    status: "Approved",
    title:
      "Replace Redis with DynamoDB for Session Storage",
    owner: "J. Smith",
    date: "01-15-2026",
  },
  {
    adrDataId: "ADR-001",
    risk: "Medium",
    status: "Implemented",
    title:
      "Deprecate Legacy REST APIs in Favor of gRPC",
    owner: "J. Smith",
    date: "01-15-2026",
  },
]
  },
  changes: {
    title: "Change Requests",
    subtitle: "3 Pending",
    actions: true,
    items: [
      {
        adrChangeId: "CR-2024-001",
        risk: "High",
        tag: "Architecture",
        title: "Deploy new microservice boundary for Provider Onboarding",
        owner: "J. Smith",
        date: "01-15-2026",
        expiry: "Expires: 1d 14h",
      },
      {
        adrChangeId: "CR-2024-002",
        risk: "Medium",
        tag: "Infrastructure",
        title: "Upgrade Kubernetes cluster to v1.29",
        owner: "J. Smith",
        date: "01-15-2026",
        expiry: "Expires: 2d 14h",
      },
      {
        adrChangeId: "CR-2024-003",
        risk: "Low",
        tag: "Architecture",
        title: "Migrate session storage from Redis to DynamoDB",
        owner: "K. Wong",
        date: "01-15-2026",
        expiry: "Expires: 3d 14h",
      },
      {
        adrChangeId: "CR-2024-004",
        risk: "Medium",
        tag: "Security",
        title: "Enable mTLS for all internal service communication",
        owner: "Security Lead",
        date: "01-15-2026",
      },
      {
        adrChangeId: "CR-2024-005",
        risk: "High",
        tag: "Architecture",
        title: "Deploy new microservice boundary for Provider Onboarding",
        owner: "J. Smith",
        date: "01-15-2026",
      },
      {
        adrChangeId: "CR-2024-006",
        risk: "High",
        tag: "Architecture",
        title: "Deploy new microservice boundary for Provider Onboarding",
        owner: "J. Smith",
        date: "01-15-2026",
      },
    ],
  },
};

const ArchitectureAndChanges = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
      {Object.values(data).map((section, idx) => (
        <div
          key={idx}
          className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 flex flex-col max-h-[500px]"
        >
          <div className="mb-4">
            <h2 className="text-lg font-semibold">{section.title}</h2>
            <p
              className={`text-sm ${section.actions ? "text-[#F54900]" : "text-[#6B7280]"} `}
            >
              {section.subtitle}
            </p>
          </div>

          <div className="overflow-auto scroll-hide">
            {section.items.map((item, index) => (
              <div
                key={index}
                className="py-4 last:pb-0 first:pt-0 border-b last:border-b-0"
              >
                <div className="flex items-center gap-3 mb-2">
                  {item.adrDataId && (
                    <span className="text-xs text-[#929292]">
                      {item.adrDataId}
                    </span>
                  )}
                  {item.adrChangeId && (
                    <span className="text-xs text-[#929292]">
                      {item.adrChangeId}
                    </span>
                  )}
                  <span
                    className={`px-2 py-0.5 rounded text-xs font-medium ${riskColor[item.risk]}`}
                  >
                    {item.risk} Risk
                  </span>

                  {item.tag && (
                    <span className="px-2 py-0.5 rounded text-xs bg-green-100 text-green-700">
                      {item.tag}
                    </span>
                  )}

                  {item.status && (
                    <span
                      className={`px-2 py-0.5 rounded text-xs ${statusBg[item.status]}`}
                    >
                      {item.status}
                    </span>
                  )}
                </div>

                <p className="text-sm font-medium text-[#111827]">
                  {item.title}
                </p>

                <div className="flex items-center gap-4 text-sm text-[#6B7280] mt-1">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {item.owner}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                  {item.expiry && (
                    <div className="flex items-center gap-1 text-[#F54900]">
                      <Clock className="w-4 h-4" />
                      {item.expiry}
                    </div>
                  )}
                </div>

                {section.actions && (
                  <div className="flex gap-3 mt-2">
                    <button className="text-[#00A63E] text-sm leading-[1] font-medium border-r pr-3 border-[#1E1E1E]">
                      Approve
                    </button>
                    <button className="text-[#CF2027] text-sm leading-[1] font-medium">
                      Reject
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArchitectureAndChanges;
