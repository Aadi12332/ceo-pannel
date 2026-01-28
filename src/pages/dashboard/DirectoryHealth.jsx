import PageHeader from "../../components/common/Heading";
import SummaryCards from "../../components/common/SummaryCard";
import MainLayout from "../../components/layout/MainLayout";
import DirectoryChart from "../../components/directory-component/DirectoryChart";
import SLADashboard from "../../components/directory-component/SLADashboard";
import alertIcon from "../../assets/alertcircleicon.svg";
import folderIcon from "../../assets/fileicon.svg";
import sendIcon from "../../assets/alertcircleicon.svg";
import dashboardIcon from "../../assets/alertcircleicon.svg";
import riskIcon from "../../assets/alertcircleicon.svg";

const blockers = [
  {
    id: "BLK-001",
    title: "San Francisco Food Service Permit Expired",
    severity: "critical",
    tag: "Blocking Launch",
    affected: ["LPD", "COO"],
    days: "12 days",
    owner: "Emma Wilson (LPD)",
    description:
      "Permit expired Dec 5. New application submitted but processing time 30-45 days. Blocks SF market expansion.",
    highlight: true,
  },
  {
    id: "BLK-002",
    title: "Marketing Budget Overspend Blocking Q1 Campaigns",
    severity: "high",
    affected: ["CMO", "CFO"],
    days: "8 days",
    owner: "Jessica Lee (CMO)",
    description:
      "Q4 overspend by 8% blocking approval for Q1 campaign budget. Requires budget reallocation or CEO override.",
  },
  {
    id: "BLK-003",
    title: "Payment Integration Instability",
    severity: "high",
    affected: ["CTO", "CFO", "COO"],
    days: "3 days",
    owner: "Alex Chen (CTO)",
    description:
      "Stripe integration error rate at 15%. Blocking new payout methods rollout.",
  },
  {
    id: "BLK-004",
    title: "GDPR DSAR Processing Backlog",
    severity: "medium",
    affected: ["LPD", "CTO"],
    days: "18 days",
    owner: "Emma Wilson (LPD)",
    description:
      "47 pending data subject access requests. SLA is 30 days, oldest request is 18 days old.",
  },
];

const severityStyles = {
  critical: "bg-red-100 text-red-700 border-red-300",
  high: "bg-orange-100 text-orange-700",
  medium: "bg-yellow-100 text-yellow-700",
};

const healthStats = [
  {
    label: "Active Freezes",
    value: 1,
    change: 0,
  },
  {
    label: "Response Time",
    value: "45s",
    change: -12,
  },
  {
    label: "Incidents This Week",
    value: 3,
    change: -25,
  },
  {
    label: "System Health",
    value: "97%",
    change: 1,
  },
];

const healthCards = [
  {
    role: "CEO",
    name: "Sarah Johnson",
    health: 92,
    tone: "green",
    risks: [
      "Board meeting preparation delayed",
      "Investor communication backlog",
    ],
    incidents: 0,
    approvals: 3,
    spend: "94%",
    sla: { status: "meeting", time: "2h / 4h" },
  },
  {
    role: "COO",
    name: "Mike Davis",
    health: 88,
    tone: "yellow",
    risks: ["Provider onboarding SLA breaching", "Operational capacity at 95%"],
    incidents: 2,
    approvals: 12,
    spend: "94%",
    sla: { status: "meeting", time: "6h / 8h" },
  },
  {
    role: "CFO",
    name: "Emily Wang",
    health: 85,
    tone: "yellow",
    risks: ["Audit backlog increasing", "Payout reconciliation delayed"],
    incidents: 1,
    approvals: 8,
    spend: "99%",
    sla: { status: "meeting", time: "12h / 24h" },
  },
  {
    role: "CTO",
    name: "Alex Chen",
    health: 94,
    tone: "green",
    risks: [],
    incidents: 1,
    approvals: 5,
    spend: "91%",
    sla: { status: "meeting", time: "4h / 6h" },
  },
  {
    role: "CMO",
    name: "Jessica Lee",
    health: 76,
    tone: "yellow",
    risks: ["Campaign ROI below target", "Marketing budget overspent by 8%"],
    incidents: 0,
    approvals: 6,
    spend: "108%",
    sla: { status: "breached", time: "18h / 12h" },
  },
  {
    role: "GSD",
    name: "Tom Rodriguez",
    health: 82,
    tone: "yellow",
    risks: ["Lead conversion rate declining", "Sales pipeline visibility gaps"],
    incidents: 0,
    approvals: 4,
    spend: "90%",
    sla: { status: "meeting", time: "10h / 12h" },
  },
  {
    role: "LPD",
    name: "Emma Wilson",
    health: 68,
    tone: "red",
    risks: ["SF food service permit expired", "GDPR DSAR backlog"],
    incidents: 3,
    approvals: 15,
    spend: "97%",
    sla: { status: "breached", time: "72h / 48h" },
  },
  {
    role: "Automation",
    name: "Automation Team",
    health: 90,
    tone: "green",
    risks: ["Referral workflow paused due to abuse"],
    incidents: 1,
    approvals: 2,
    spend: "79%",
    sla: { status: "meeting", time: "0.5h / 1h" },
  },
];

const toneMap = {
  green: {
    card: "bg-[#E9FCEF] border-[#86EFAC]",
    health: "text-[#4CAF50]",
    risk: "text-[#16A34A]",
    badge: "bg-[#DCFCE7] text-[#166534]",
  },
  yellow: {
    card: "bg-[#FEF9C3] border-[#FACC15]",
    health: "text-[#C58B1B]",
    risk: "text-[#DC2626]",
    badge: "bg-[#ECFEFF] text-[#065F46]",
  },
  red: {
    card: "bg-[#FDE8E8] border-[#FCA5A5]",
    health: "text-[#DC2626]",
    risk: "text-[#DC2626]",
    badge: "bg-[#FEE2E2] text-[#991B1B]",
  },
};
const DirectoryHealth = () => {
  return (
    <MainLayout>
      <PageHeader
        title="Directory Health Snapshot"
        description="Monitor which executive areas need attention - identify risks before budget breaches occur"
      />

      <SummaryCards items={healthStats} title="Directory Dashboard" />

      <DirectoryChart />

      <div className="bg-white rounded-[16px] border border-[#0000001A] p-6 mb-5">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <img src={alertIcon} alt="" />
            <h3 className="text-[20px] text-[#0A0A0A]">Top Blockers Queue</h3>
          </div>

          <button className="px-3 h-8 rounded-md text-[13px] bg-[#FDECEC] text-[#B42318]">
            1 Launch Blockers
          </button>
        </div>

        <div className="space-y-4">
          {blockers.map((item) => (
            <div
              key={item.id}
              className={`rounded-[12px] border p-5 ${
                item.highlight
                  ? "bg-[#FEF2F2] border-[#FDA29B]"
                  : "bg-white border-[#0000001A]"
              }`}
            >
              <div className="flex justify-between gap-4 mb-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="px-2 py-1 bg-[#F2F4F7] rounded text-[13px]">
                    {item.id}
                  </span>

                  <h4 className="text-[16px] font-medium text-[#0A0A0A]">
                    {item.title}
                  </h4>

                  <span
                    className={`px-2 py-1 rounded text-[12px] ${severityStyles[item.severity]}`}
                  >
                    {item.severity}
                  </span>

                  {item.tag && (
                    <span className="px-2 py-1 rounded text-[12px] bg-[#FDECEC] text-[#B42318]">
                      {item.tag}
                    </span>
                  )}
                </div>

                <button className="flex items-center gap-2 bg-[#0A0A0A] text-white px-4 h-9 rounded-lg text-[14px]">
                  <img src={folderIcon} alt="" className="w-5" />
                  Open Blocker
                </button>
              </div>

              <div className="grid xl:grid-cols-3 grid-cols-1 gap-4 mb-2">
                <div>
                  <p className="text-[13px] text-[#667085] mb-1">
                    Affected Directories
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {item.affected.map((dir) => (
                      <span
                        key={dir}
                        className="px-2 py-1 rounded-md border text-[12px] text-[#2563EB] border-[#C7D7FE]"
                      >
                        {dir}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[13px] text-[#667085]">Days Blocked</p>
                  <p className="text-[14px] font-medium text-[#B42318]">
                    {item.days}
                  </p>
                </div>

                <div>
                  <p className="text-[13px] text-[#667085]">Owner</p>
                  <p className="text-[14px] text-[#0A0A0A]">{item.owner}</p>
                </div>
              </div>

              <p className="text-[14px] text-[#344054]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mb-5">
        {healthCards.map((item, i) => {
          const tone = toneMap[item.tone];
          return (
            <div
              key={i}
              className={`rounded-[16px] border p-5 flex flex-col justify-between ${tone.card}`}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-[18px] font-medium text-[#0A0A0A]">
                      {item.role}
                    </h3>
                    <p className="text-[14px] text-[#475467]">{item.name}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-[28px] font-semibold ${tone.health}`}>
                      {item.health}
                    </p>
                    <p className="text-[14px] text-[#475467]">Health</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-[14px] text-[#0A0A0A] mb-2">Top Risks:</p>
                  {item.risks.length === 0 ? (
                    <p className="text-[14px] text-[#16A34A]">
                      ✓ No active risks
                    </p>
                  ) : (
                    item.risks.map((r, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center gap-2 text-[14px] text-red-500`}
                      >
                        <img src={riskIcon} alt="" className="w-4 h-4" />
                        {r}
                      </div>
                    ))
                  )}
                </div>

                <div className="flex justify-between text-[14px] mb-4">
                  <span className="text-center">
                    Incidents
                    <br />
                    {item.incidents}
                  </span>
                  <span className="text-center">
                    Approvals
                    <br />
                    {item.approvals}
                  </span>
                  <span className="text-center">
                    Spend
                    <br />
                    {item.spend}
                  </span>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-[13px] ${tone.badge}`}
                  >
                    {item.sla.status}
                  </span>
                  <span className="text-[14px] text-[#16A34A]">
                    {item.sla.time}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <button className="w-full flex items-center justify-center gap-2 border rounded-lg py-2 bg-white">
                  <img src={sendIcon} alt="" className="w-4 h-4" />
                  Send Target
                </button>
                <button className="w-full flex items-center justify-center gap-2 border rounded-lg py-2 bg-white">
                  <img src={dashboardIcon} alt="" className="w-4 h-4" />
                  Open Dashboard
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <SLADashboard />
    </MainLayout>
  );
};

export default DirectoryHealth;
