import { useState } from "react";
import {
  ChatIcon,
  AutomationIcon,
  DollarIcon,
  SimulationIcon,
  FileDocumentIcon,
  ElectricIcon,
} from "../../assets/icons/icons";

const messagingData = [
  {
    title: "Welcome Credit SMS",
    type: "SMS",
    usedBy: "WF-001, WF-003",
    rate: "98.5%",
    rateColor: "text-green-600",
    avgCost: "$0.020",
    sent: "3,842",
    total: "$76.84",
    icon: <ChatIcon color="#155DFC" width={16} />,
  },
  {
    title: "Referral Success Email",
    type: "EMAIL",
    usedBy: "WF-002",
    rate: "94.2%",
    rateColor: "text-orange-600",
    avgCost: "$0.005",
    sent: "1,247",
    total: "$6.24",
    icon: <FileDocumentIcon color="#155DFC" width={16} />,
  },
  {
    title: "Fraud Alert Push",
    type: "PUSH",
    usedBy: "WF-004",
    rate: "96.8%",
    rateColor: "text-green-600",
    avgCost: "$0.001",
    sent: "582",
    total: "$0.58",
    icon: <ElectricIcon color="#155DFC" width={16} />,
  },
  {
    title: "Invoice Approved Email",
    type: "EMAIL",
    usedBy: "WF-006",
    rate: "99.1%",
    rateColor: "text-green-600",
    avgCost: "$0.005",
    sent: "892",
    total: "$4.46",
    icon: <FileDocumentIcon color="#155DFC" width={16} />,
  },
  {
    title: "Campaign Performance SMS",
    type: "SMS",
    usedBy: "WF-007",
    rate: "97.3%",
    rateColor: "text-green-600",
    avgCost: "$0.020",
    sent: "1,567",
    total: "$31.34",
    icon: <ChatIcon color="#155DFC" width={16} />,
  },
];

const data = [
  {
    title: "New User $10 Credit",
    status: "Simulation Active",
    cost: "$1200",
    triggers: "120",
    abuse: "22",
    abuseColor: "text-green-600",
    showButton: true,
    violations: null,
  },
  {
    title: "Black Friday 2x Rewards",
    status: "Simulation Active",
    cost: "$4500",
    triggers: "890",
    abuse: "45",
    abuseColor: "text-orange-500",
    showButton: false,
    violations: [
      "Exceeds daily budget cap of $3000",
      "Requires CFO co-approval",
    ],
  },
];

const drivers = [
  {
    id: 1,
    name: "Referral Reward Processing",
    meta: "0 triggers/day • Growth Team",
    cost: "$1,747",
  },
  {
    id: 2,
    name: "Marketing Campaign Optimizer",
    meta: "1,567 triggers/day • Marketing Team",
    cost: "$826",
  },
  {
    id: 3,
    name: "Support Ticket AI Triage",
    meta: "5,234 triggers/day • Support Team",
    cost: "$617",
  },
  {
    id: 4,
    name: "Customer Onboarding Workflow",
    meta: "3,842 triggers/day • CX Team",
    cost: "$407",
  },
  {
    id: 5,
    name: "Fraud Detection Auto-Block",
    meta: "582 triggers/day • Security Team",
    cost: "$297",
  },
];

const workflows = [
  {
    id: "WF-001",
    title: "New User $10 Credit",
    status: ["simulation", "0% traffic", "Idempotent", "Dry-Run Mode"],
    theme: "blue",
    owner: "Alex Chen",
    department: "Growth",
    version: "2.3",
    costDay: "$0",
    costDayCap: "$2,000",
    costMonth: "$0",
    costMonthCap: "$50,000",
    usage: "0.0%",
    triggers: "0",
    errorRate: "0%",
    abuse: "0/100",
    anomaly: "5/100",
    policy: "NYC-CREDIT-POLICY-V1.2",
    actions: ["Approve Publish", "Disable Sim", "Cost Caps", "Audit"],
  },
  {
    id: "WF-002",
    title: "Referral Reward Processing",
    status: ["paused", "Idempotent"],
    theme: "red",
    failure: "Abuse score threshold exceeded (78/100)",
    owner: "Lisa Anderson",
    department: "Marketing",
    version: "3.1",
    costDay: "$1,747",
    costDayCap: "$2,500",
    costMonth: "$52,410",
    costMonthCap: "$60,000",
    usage: "69.9%",
    triggers: "0",
    errorRate: "0.2%",
    abuse: "78/100",
    anomaly: "85/100",
    policy: "REFERRAL-BUDGET-POLICY",
    actions: ["Enable Sim", "Cost Caps", "Audit"],
  },
  {
    id: "WF-003",
    title: "Customer Onboarding Workflow",
    status: ["active", "Idempotent"],
    theme: "green",
    owner: "Mike Davis",
    department: "Operations",
    version: "4.5",
    costDay: "$407",
    costDayCap: "$1,000",
    costMonth: "$12,210",
    costMonthCap: "$30,000",
    usage: "40.7%",
    triggers: "3,842",
    errorRate: "0.8%",
    abuse: "12/100",
    anomaly: "8/100",
    policy: "ONBOARDING-AUTOMATION-POLICY",
    actions: ["Pause", "Enable Sim", "Cost Caps", "Audit"],
  },
  {
    id: "WF-004",
    title: "Fraud Detection Auto-Block",
    status: ["active", "Idempotent"],
    theme: "green",
    owner: "Sarah Johnson",
    department: "Security",
    version: "2.8",
    costDay: "$29",
    costDayCap: "$500",
    costMonth: "$8,910",
    costMonthCap: "$15,000",
    usage: "59.4%",
    triggers: "582",
    errorRate: "1.2%",
    abuse: "5/100",
    anomaly: "3/100",
    policy: "FRAUD-PREVENTION-POLICY",
    actions: ["Pause", "Enable Sim", "Cost Caps", "Audit"],
  },
  {
    id: "WF-005",
    title: "Support Ticket AI Triage",
    status: ["failed"],
    theme: "red",
    failure: "Error rate exceeded 15% threshold",
    owner: "Tom Rodriguez",
    department: "Support",
    version: "1.9",
    costDay: "$61",
    costDayCap: "$1,500",
    costMonth: "$18,510",
    costMonthCap: "$45,000",
    usage: "41.1%",
    triggers: "5,234",
    errorRate: "15.2%",
    abuse: "8/100",
    anomaly: "92/100",
    policy: "AI-QUALITY-ASSURANCE-POLICY",
    actions: ["Rollback", "Enable Sim", "Cost Caps", "Audit"],
  },
  {
    id: "WF-006",
    title: "Invoice Auto-Approval",
    status: ["active", "Idempotent"],
    theme: "green",
    owner: "Emily Wang",
    department: "Finance",
    version: "5.2",
    costDay: "$173",
    costDayCap: "$500",
    costMonth: "$5,190",
    costMonthCap: "$15,000",
    usage: "34.6%",
    triggers: "892",
    errorRate: "0.5%",
    abuse: "3/100",
    anomaly: "2/100",
    policy: "FINANCIAL-AUTOMATION-POLICY",
    actions: ["Pause", "Enable Sim", "Cost Caps", "Audit"],
  },
  {
    id: "WF-007",
    title: "Marketing Campaign Optimizer",
    status: ["rollout", "10% traffic", "Idempotent"],
    theme: "green",
    owner: "Lisa Anderson",
    department: "Marketing",
    version: "2.1",
    costDay: "$826",
    costDayCap: "$3,000",
    costMonth: "$24,780",
    costMonthCap: "$90,000",
    usage: "27.5%",
    triggers: "1,567",
    errorRate: "2.3%",
    abuse: "15/100",
    anomaly: "12/100",
    policy: "MARKETING-SPEND-POLICY",
    actions: ["Pause", "Enable Sim", "Cost Caps", "Audit"],
  },
  {
    id: "WF-008",
    title: "Dynamic Pricing Engine",
    status: ["active", "Idempotent"],
    theme: "green",
    owner: "Emily Wang",
    department: "Finance",
    version: "1.2",
    costDay: "$342",
    costDayCap: "$800",
    costMonth: "$10,260",
    costMonthCap: "$24,000",
    usage: "42.8%",
    triggers: "12,450",
    errorRate: "0.3%",
    abuse: "7/100",
    anomaly: "4/100",
    policy: "PRICING-AUTOMATION-POLICY",
    actions: ["Pause", "Enable Sim", "Cost Caps", "Audit"],
  },
];

export default function AutomationGovernancePage() {
  const [activeTab, setActiveTab] = useState("workflows");

  const tabs = [
    {
      key: "workflows",
      label: "Active Workflows",
      icon: <AutomationIcon color="#0A0A0A" />,
    },
    {
      key: "cost",
      label: "Cost Drivers",
      icon: <DollarIcon color="#0A0A0A" width={16} />,
    },
    { key: "simulation", label: "Simulation", icon: <SimulationIcon /> },
    {
      key: "messaging",
      label: "Messaging",
      icon: <ChatIcon color="#0A0A0A" />,
    },
  ];

  return (
    <div className="bg-[#EEF4FF] mb-5">
      <div className="">
        <div className="bg-[#ECECF0] rounded-full p-1 flex gap-2 mb-5">
          {tabs.map((tab) => {
            const active = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 py-2 rounded-full text-[14px] font-medium transition flex items-center gap-2 justify-center
                  ${active ? "bg-white text-black" : "text-[#0A0A0A]"}`}
              >
                {tab.icon}
                {tab.label}
              </button>
            );
          })}
        </div>

        {activeTab === "workflows" && (
          <div className="space-y-6 bg-white rounded-2xl p-6">
            <h2 className="text-[20px] font-semibold">
              Automation Registry – Full Governance Control
            </h2>

            {workflows.map((w) => (
              <div
                className={`flex items-start gap-3 rounded-xl border border-[#0000001A] p-6 flex-1 ${
                  w.theme === "red"
                    ? "border-[#FFC9C9] bg-[#FEF2F2]"
                    : w.theme === "blue"
                      ? "border-[#A2F4FD] bg-[#ECFEFF]"
                      : "border-[#0000001A]"
                }`}
              >
                <div
                  key={w.id}
                  className={`rounded-xl border border-[#0000001A] p-6 flex-1`}
                >
                  <div className="flex justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[13px] bg-[#F2F4F7] px-2 py-0.5 rounded">
                          {w.id}
                        </span>
                        <p className="font-semibold">{w.title}</p>
                        {w.status.map((s) => (
                          <span
                            key={s}
                            className="text-[12px] px-2 py-0.5 rounded-full bg-[#EEF2FF] text-[#3730A3]"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      {w.failure && (
                        <div className="mt-2 text-[14px] text-red-600 bg-[#FEE2E2] px-3 py-2 rounded-lg">
                          Failure: {w.failure}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-[#F9FAFB] rounded-xl p-4">
                      <p className="text-[14px] text-[#475467]">Owner</p>
                      <p className="font-medium">{w.owner}</p>
                      <p className="text-[14px] text-[#475467] mt-2">
                        Department
                      </p>
                      <p>{w.department}</p>
                      <p className="text-[14px] text-[#475467] mt-2">Version</p>
                      <p>{w.version}</p>
                    </div>

                    <div className="bg-[#F0FDF4] rounded-xl p-4">
                      <p className="text-[14px] text-[#475467]">Cost / Day</p>
                      <p className="font-semibold text-green-600">
                        {w.costDay}
                      </p>
                      <p className="text-[13px]">Cap: {w.costDayCap}</p>

                      <p className="text-[14px] text-[#475467] mt-3">
                        Cost / Month
                      </p>
                      <p className="font-semibold text-blue-600">
                        {w.costMonth}
                      </p>
                      <p className="text-[13px]">Cap: {w.costMonthCap}</p>

                      <div className="h-2 bg-[#E5E7EB] rounded-full mt-3">
                        <div
                          className="h-full bg-green-500 rounded-full"
                          style={{ width: w.usage }}
                        />
                      </div>
                      <p className="text-[12px] mt-1">{w.usage} of daily cap</p>
                    </div>

                    <div className="bg-[#FFF7ED] rounded-xl p-4">
                      <p className="text-[14px]"> Triggers (24h): </p>
                      <p className="font-medium text-sm mb-2">{w.triggers}</p>
                      <p className="text-[14px]">Error Rate: </p>
                      <p className="font-medium text-sm mb-2">{w.errorRate}</p>
                      <p className="text-[14px]">Abuse Score: </p>
                      <p className="font-medium text-sm mb-2">{w.abuse}</p>
                      <p className="text-[14px]"> Anomaly Score: </p>
                      <p className="font-medium text-sm">{w.anomaly}</p>
                    </div>
                  </div>

                  <div className="bg-[#F5F3FF] border border-[#0000001A] border-[#DDD6FE] rounded-lg px-4 py-2 text-[14px]">
                    Linked Policy: {w.policy}{" "}
                    <span className="ml-2 text-red-600 bg-[#FEE2E2] px-2 py-0.5 rounded-full text-[12px]">
                      Requires Approval
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {w.actions.map((a) => (
                    <button
                      key={a}
                      className={`px-4 py-2 rounded-lg text-[14px] ${
                        a === "Approve Publish" || a === "Rollback"
                          ? "bg-black text-white"
                          : "border"
                      }`}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "cost" && (
          <div className="space-y-6 bg-white rounded-2xl p-6">
            <h2 className="text-[20px] font-semibold">
              Top Cost Drivers (Daily Spend)
            </h2>

            {drivers.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border border-[#0000001A] border-[#EAECF0] rounded-xl p-5"
              >
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded bg-[#E0ECFF] text-blue-700 flex items-center justify-center font-semibold">
                    {item.id}
                  </div>
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-[14px] text-[#475467]">{item.meta}</p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-green-600 text-[20px] font-semibold">
                    {item.cost}
                  </p>
                  <p className="text-[14px] text-[#475467]">per day</p>
                </div>
              </div>
            ))}

            <div className="bg-[#F0F6FF] rounded-xl p-6 flex justify-between items-center">
              <div>
                <p className="font-medium">Total Daily Automation Cost</p>
                <p className="text-[14px] text-[#475467]">
                  Monthly projection: $122,010
                </p>
              </div>
              <p className="text-[22px] font-semibold text-blue-600">$4,067</p>
            </div>
          </div>
        )}

        {activeTab === "simulation" && (
          <div className="space-y-6 bg-white rounded-2xl p-6">
            <h2 className="text-[20px] font-semibold">
              Simulation & Shadow Mode Results
            </h2>

            {data.map((item, idx) => (
              <div
                key={idx}
                className="border border-[#D6BCFA] bg-[#FAF5FF] rounded-xl p-6"
              >
                <div className="flex justify-between mb-4">
                  <p className="font-semibold">{item.title}</p>
                  <span className="text-[12px] px-3 py-1 bg-[#E9D5FF] text-[#6B21A8] rounded-full">
                    {item.status}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-4">
                  <div>
                    <p className="text-[14px] text-[#475467]">
                      Est. Cost / Day
                    </p>
                    <p className="text-green-600 font-semibold">{item.cost}</p>
                  </div>
                  <div>
                    <p className="text-[14px] text-[#475467]">Est. Triggers</p>
                    <p className="font-semibold">{item.triggers}</p>
                  </div>
                  <div>
                    <p className="text-[14px] text-[#475467]">
                      Predicted Abuse Score
                    </p>
                    <p className={`${item.abuseColor} font-semibold`}>
                      {item.abuse}
                    </p>
                  </div>
                </div>

                {item.violations && (
                  <div className="mb-4 rounded-lg border border-[#0000001A] border-red-200 bg-red-50 p-4 text-red-600 text-[14px] space-y-1">
                    <p className="font-semibold">Policy Violations:</p>
                    {item.violations.map((v, i) => (
                      <p key={i}>{v}</p>
                    ))}
                  </div>
                )}

                <div className="bg-blue-50 p-3 rounded-lg text-[14px] flex items-center justify-between">
                  <p>
                    <span className="font-semibold">Recommended Action: </span>
                    Approve for gradual rollout
                  </p>

                  {item.showButton && (
                    <button className="px-4 py-2 rounded-lg bg-black text-white text-[14px]">
                      Approve for Rollout
                    </button>
                  )}
                </div>
              </div>
            ))}

            <div className="bg-[#F9FAFB] rounded-xl p-6">
              <p className="font-semibold mb-3">Gradual Rollout Strategy</p>
              <div className="flex items-center gap-3 mb-3 text-[14px]">
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                  1%
                </span>
                →
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                  10%
                </span>
                →
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                  50%
                </span>
                →
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700">
                  100%
                </span>
              </div>
              <p className="text-[14px] text-[#475467]">
                Each stage requires monitoring gates: error rate &lt; 5%, abuse
                score &lt; 40, cost within cap
              </p>
            </div>
          </div>
        )}

        {activeTab === "messaging" && (
          <div className="space-y-6 bg-white rounded-2xl p-6">
            <h2 className="text-[20px] font-semibold">
              Messaging Templates & Delivery Metrics
            </h2>

            {messagingData.map((m) => (
              <div
                key={m.title}
                className="border border-[#E5E7EB] rounded-xl px-6 py-5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="">{m.icon}</div>
                  <p className="font-medium">{m.title}</p>

                  <span
                    className={`text-[12px] px-2 py-0.5 rounded-full ${
                      m.type === "SMS"
                        ? "bg-[#E0ECFF] text-blue-600"
                        : m.type === "EMAIL"
                          ? "bg-[#F3E8FF] text-purple-600"
                          : "bg-[#DCFCE7] text-green-700"
                    }`}
                  >
                    {m.type}
                  </span>
                </div>

                <p className="text-[14px] text-[#475467] mb-4">
                  Used by: {m.usedBy}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-4 gap-6">
                  <div>
                    <p className="text-[14px] text-[#475467] mb-1">
                      Delivery Rate
                    </p>
                    <p className={`font-semibold ${m.rateColor}`}>{m.rate}</p>
                  </div>

                  <div>
                    <p className="text-[14px] text-[#475467] mb-1">Avg Cost</p>
                    <p className="font-semibold">{m.avgCost}</p>
                  </div>

                  <div>
                    <p className="text-[14px] text-[#475467] mb-1">
                      Sent (24h)
                    </p>
                    <p className="font-semibold">{m.sent}</p>
                  </div>

                  <div>
                    <p className="text-[14px] text-[#475467] mb-1">
                      Total Cost (24h)
                    </p>
                    <p className="font-semibold text-green-600">{m.total}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Footer */}
            <div className="bg-[#F0F6FF] rounded-xl px-6 py-5 flex justify-between items-center">
              <div>
                <p className="font-medium">Total Messages (24h)</p>
                <p className="text-[14px] text-[#475467]">
                  Across all templates
                </p>
              </div>

              <p className="text-[22px] font-semibold text-blue-600">8,130</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
