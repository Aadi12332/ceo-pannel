import PageHeader from "../../components/common/Heading";
import SummaryCards from "../../components/common/SummaryCard";
import MainLayout from "../../components/layout/MainLayout";
import fileIcon from "../../assets/fileicon.svg";
import exportIcon from "../../assets/exporticon.svg";
import AuditChart from "../../components/common/AuditChart";
import checkIcon from "../../assets/checkedarrowicon.svg";
import blockIcon from "../../assets/freezeicon.svg";
import playIcon from "../../assets/pauseicon.svg";
import pauseIcon from "../../assets/pauseicon.svg";

const strategicAlerts = [
  {
    title: "Austin Market Window Closing",
    level: "high",
    description:
      "Competitor announced expansion - recommend accelerated timeline",
    market: "Austin, TX",
    action: "Approve expansion within 30 days",
  },
  {
    title: "Nashville Opportunity",
    level: "medium",
    description:
      "Low competition + strong demand = ideal expansion candidate",
    market: "Nashville, TN",
    action: "Consider Q1 2025 market entry",
  },
  {
    title: "Detroit Readiness Below Threshold",
    level: "low",
    description:
      "Regulatory approvals delayed - expansion automatically blocked",
    market: "Detroit, MI",
    action: "Continue monitoring regulatory progress",
  },
  {
    title: "Phoenix Growth Acceleration",
    level: "medium",
    description: "Market size increased 15% YoY - strong expansion opportunity",
    market: "Phoenix, AZ",
    action: "Review Q4 2024 expansion feasibility",
  },
];

const summaryCards = [
  {
    title: "Revenue Projection",
    rows: [
      { label: "Current ARR", value: "$12.4M" },
      { label: "With 6 Expansions", value: "$18.2M", highlight: "success" },
      { label: "Growth", value: "+47%", badge: true },
    ],
  },
  {
    title: "Market Coverage",
    rows: [
      { label: "Current Markets", value: 18 },
      { label: "Target by Q2 2025", value: 24 },
      { label: "Coverage", value: "75% of Target", badge: true },
    ],
  },
  {
    title: "Investment Required",
    rows: [
      { label: "Ready Markets", value: "$16.6M" },
      { label: "Avg Payback", value: "18 months" },
      { label: "Runway Impact", value: "-3.4 months", warning: true },
    ],
  },
];

const auditStats = [
  {
    label: "Total Audit Logs",
    value: "1,247",
    change: 12,
  },
  {
    label: "Critical Events",
    value: 34,
    change: -8,
  },
  {
    label: "Compliance Rate",
    value: "98%",
    change: 2,
  },
  {
    label: "Active Investigations",
    value: 5,
    change: 25,
  },
];
  const items = [
    {
      label: "Ready to Launch",
      value: 3,
      description: "Cities passed all 4 gates",
      icon: checkIcon,
      valueColor: "text-[#16A34A]",
    },
    {
      label: "Blocked",
      value: 2,
      description: "Cities below readiness threshold",
      icon: blockIcon,
      valueColor: "text-[#DC2626]",
    },
    {
      label: "Active",
      value: 1,
      description: "Cities in operation",
      icon: playIcon,
      valueColor: "text-[#2563EB]",
    },
    {
      label: "Paused",
      value: 0,
      description: "Cities temporarily halted",
      icon: pauseIcon,
      valueColor: "text-[#EA580C]",
    },
  ];
const Growth = () => {
  return (
    <MainLayout>
      <PageHeader
        title="Strategic Intelligence"
        description="CEO-only view for growth and expansion decisions, gated by policy and readiness scores (not daily ops)"
        actions={[
          {
            label: "Request Analysis",
            icon: fileIcon,
            onClick: () => console.log("Request Analysis"),
          },
          {
            label: "Pricing Change",
            icon: exportIcon,
            filter: true,
            onClick: () => console.log("Pricing Change"),
          },
        ]}
      />

      <SummaryCards items={auditStats} title="Strategic Dashboard" />

          <div className="grid xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mb-5">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-[16px] border border-[#0000001A] p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <img src={item.icon} alt="" className="w-5 h-5" />
            <p className="text-[16px] text-[#0A0A0A]">{item.label}</p>
          </div>

          <p className={`text-[32px] font-semibold mb-2 ${item.valueColor}`}>
            {item.value}
          </p>

          <p className="text-[14px] text-[#475467]">
            {item.description}
          </p>
        </div>
      ))}
    </div>

      <AuditChart />


    <div className="space-y-6 mb-5">
      <div className="bg-white rounded-[14px] border border-[#0000001A] p-6">
        <h2 className="text-[20px] text-[#0A0A0A] mb-6">
          Strategic Alerts & Recommendations
        </h2>

        <div className="space-y-4">
          {strategicAlerts.map((item, idx) => (
            <div
              key={idx}
              className="border border-[#E5E7EB] rounded-[14px] p-5"
            >
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-[16px] font-medium text-[#0A0A0A]">
                  {item.title}
                </h3>
                <span
                  className={`text-[12px] px-2 py-0.5 rounded ${
                    item.level === "high"
                      ? "bg-red-100 text-red-600"
                      : item.level === "medium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {item.level}
                </span>
              </div>

              <p className="text-[14px] text-[#475467] mb-1">
                {item.description}
              </p>

              <p className="text-[14px] text-[#667085] mb-3">
                Market: {item.market}
              </p>

              <div className="bg-[#EFF6FF] text-[#1D4ED8] text-[14px] px-4 py-2 rounded">
                <span className="font-medium">Recommended Action:</span>{" "}
                {item.action}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
        {summaryCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[14px] border border-[#0000001A] p-6"
          >
            <h3 className="text-[18px] text-[#0A0A0A] mb-4">
              {card.title}
            </h3>

            <div className="space-y-3">
              {card.rows.map((row, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between"
                >
                  <span className="text-[14px] text-[#475467]">
                    {row.label}
                  </span>

                  {row.badge ? (
                    <span className="text-[12px] px-2 py-0.5 rounded bg-green-100 text-green-700">
                      {row.value}
                    </span>
                  ) : (
                    <span
                      className={`text-[14px] font-medium ${
                        row.highlight === "success"
                          ? "text-green-600"
                          : row.warning
                          ? "text-yellow-700"
                          : "text-[#0A0A0A]"
                      }`}
                    >
                      {row.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    </MainLayout>
  );
};

export default Growth;
