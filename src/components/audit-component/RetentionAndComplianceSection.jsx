import lockIcon from "../../assets/lockicon.svg";

const retentionItems = [
  {
    title: "Audit Logs",
    retention: "7 years",
    meta: "2.4M records",
    status: "enforced",
  },
  {
    title: "Financial Records",
    retention: "7 years",
    meta: "850K records",
    status: "enforced",
  },
  {
    title: "User Data (Active)",
    retention: "Until deletion request",
    meta: "125K users",
    status: "enforced",
  },
  {
    title: "User Data (Deleted)",
    retention: "30 days post-deletion",
    meta: "340 pending",
    status: "exception",
    exceptionCount: 1,
  },
  {
    title: "Incident Postmortems",
    retention: "Indefinite",
    meta: "47 records",
    status: "enforced",
  },
  {
    title: "Policy Versions",
    retention: "Indefinite",
    meta: "234 versions",
    status: "enforced",
  },
];

const risks = [
  {
    title: "Data Breach Vulnerability",
    desc: "Unpatched security vulnerability in authentication module",
    category: "Security",
    affected: "Authentication, User Database",
  },
  {
    title: "Regulatory Non-Compliance",
    desc: "CCPA data deletion requests not processed within SLA",
    category: "Compliance",
    affected: "Data Management, User Privacy",
  },
];

const RetentionAndComplianceSection = () => {
  return (
    <div className="space-y-6">
      {/* Retention Policies */}
      <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6">
        <div className="flex items-center gap-2 mb-6">
          <img src={lockIcon} className="w-5 h-5" />
          <h2 className="text-[18px] font-semibold">
            Retention Policies (AEPS-Enforced)
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {retentionItems.map((item, i) => (
            <div
              key={i}
              className="border border-[#E5E7EB] rounded-xl p-4 flex justify-between"
            >
              <div>
                <p className="font-medium text-[15px]">{item.title}</p>
                <p className="text-[14px] text-[#475467]">
                  Retention: {item.retention}
                </p>
                <p className="text-[14px] text-[#344054] mt-1">
                  {item.meta}
                </p>
              </div>

              {item.status === "enforced" && (
                <span className="h-fit px-3 py-1 rounded-full text-[12px] bg-[#E8F5EC] text-[#027A48]">
                  Enforced
                </span>
              )}

              {item.status === "exception" && (
                <span className="h-fit px-3 py-1 rounded-full text-[12px] bg-[#FBEAD1] text-[#B54708]">
                  Exception: {item.exceptionCount}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Active Compliance Risks */}
      <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6">
        <h2 className="text-[18px] font-semibold mb-6">
          Active Compliance Risks
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {risks.map((risk, i) => (
            <div
              key={i}
              className="border border-[#E5E7EB] rounded-xl p-4"
            >
              <div className="flex justify-between mb-2">
                <p className="font-medium">{risk.title}</p>
                <span className="px-3 py-1 rounded-full text-[12px] bg-[#FEE4E2] text-[#B42318]">
                  critical
                </span>
              </div>

              <p className="text-[14px] text-[#475467] mb-3">
                {risk.desc}
              </p>

              <p className="text-[13px] text-[#667085]">
                <span className="font-medium">Category:</span>{" "}
                {risk.category}
              </p>
              <p className="text-[13px] text-[#667085]">
                <span className="font-medium">Affected:</span>{" "}
                {risk.affected}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RetentionAndComplianceSection;
