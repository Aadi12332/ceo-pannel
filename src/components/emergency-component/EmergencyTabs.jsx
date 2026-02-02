"use client";
import { useState } from "react";
import {
  ShieldIcon,
  SuccessIcon,
  WarningTriangleIcon,
  FileDocumentIcon,
  FreezeIcon,
} from "../../assets/icons/icons";
import killSwitchesIcon from "../../assets/killswitchicon.svg";
import runtimeIcon from "../../assets/runtimeicon.svg";
import { EyeIcon, LockIcon, ClockIcon, Pause, PlayCircle, XCircle } from "lucide-react";
import CriticalActionModal from "./CriticalActionModal";

const TABS = [
  "Kill Switches",
  "Incidents",
  "Integrations",
  "Emergency Controls",
  "Postmortems",
];

export default function EmergencyDashboard() {
  const [activeTab, setActiveTab] = useState("Kill Switches");
  const [actionType, setActionType] = useState(null);

  return (
    <div className="space-y-5 mb-5">
      <div className="flex gap-2 bg-[#F3F4F6] p-1 rounded-full w-full">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-full text-sm transition flex-1 flex justify-center items-center ${
              activeTab === tab ? "bg-white font-medium" : "text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Kill Switches" && (
        <KillSwitches actionType={actionType} setActionType={setActionType} />
      )}
      {activeTab === "Incidents" && (
        <Incidents actionType={actionType} setActionType={setActionType} />
      )}
      {activeTab === "Integrations" && (
        <Integrations actionType={actionType} setActionType={setActionType} />
      )}
      {activeTab === "Emergency Controls" && (
        <EmergencyControls
          actionType={actionType}
          setActionType={setActionType}
        />
      )}
      {activeTab === "Postmortems" && (
        <Postmortems actionType={actionType} setActionType={setActionType} />
      )}

      {actionType && (
        <CriticalActionModal
          type={actionType}
          onClose={() => setActionType(null)}
        />
      )}
    </div>
  );
}

function KillSwitches({ actionType, setActionType }) {
  const sections = [
    {
      title: "$ Payout Controls",
      items: [
        {
          name: "Global Payout Freeze",
          status: "active",
          scope: "global",
          desc: "Freeze all payouts across all cities and services",
          metrics: [
            { label: "Affected Services", value: "3" },
            { label: "Providers", value: "2,340" },
            { label: "Transactions/day", value: "850" },
          ],
          services: [
            "Payout Engine",
            "Settlement System",
            "Banking Integration",
          ],
        },
        {
          name: "NYC Payout Freeze",
          status: "active",
          scope: "city: NYC",
          desc: "Freeze payouts only in New York City",
          metrics: [
            { label: "Affected Services", value: "1" },
            { label: "Providers", value: "456" },
            { label: "Transactions/day", value: "180" },
          ],
          services: ["NYC Payout Queue"],
        },
      ],
    },
    {
      title: "Automation Controls",
      items: [
        {
          name: "Pause All Automations",
          status: "active",
          scope: "global",
          desc: "Pause all AI and automation systems",
          metrics: [
            { label: "Affected Services", value: "4" },
            { label: "Users", value: "5,000" },
            { label: "Transactions/day", value: "1,200" },
          ],
          services: [
            "Auto-Refund Bot",
            "Lead Nurture Bot",
            "Email Campaign Automation",
            "Dynamic Pricing Engine",
          ],
        },
        {
          name: "Pause Marketing Automations",
          status: "active",
          scope: "department: Marketing",
          desc: "Pause only marketing-related automations",
          metrics: [
            { label: "Affected Services", value: "3" },
            { label: "Users", value: "0" },
            { label: "Transactions/day", value: "0" },
          ],
          services: [
            "Email Campaign Automation",
            "Social Media Bot",
            "Ad Bidding Engine",
          ],
        },
      ],
    },
    {
      title: "Integration Controls",
      items: [
        {
          name: "Disable Payment Integration",
          status: "active",
          scope: "service: Stripe",
          desc: "Disable Stripe payment processing integration",
          metrics: [
            { label: "Affected Services", value: "3" },
            { label: "Users", value: "3,200" },
            { label: "Transactions/day", value: "950" },
          ],
          services: [
            "Payment Processing",
            "Checkout Flow",
            "Subscription Billing",
          ],
        },
        {
          name: "Disable Ordering Integration",
          status: "active",
          scope: "service: MealMe",
          desc: "Disable MealMe menu sync and ordering integration",
          metrics: [
            { label: "Affected Services", value: "3" },
            { label: "Users", value: "1,800" },
            { label: "Providers", value: "450" },
            { label: "Transactions/day", value: "600" },
          ],
          services: ["Menu Sync", "Order Processing", "Restaurant Portal"],
        },
        {
          name: "Disable Ad Platform Integration",
          status: "active",
          scope: "service: Google Ads",
          desc: "Disable Google Ads and Facebook Ads integrations",
          metrics: [{ label: "Affected Services", value: "3" }],
          services: ["Ad Bidding", "Campaign Management", "Analytics Sync"],
        },
      ],
    },
    {
      title: "Onboarding Controls",
      items: [
        {
          name: "Lock User Onboarding",
          status: "active",
          scope: "global",
          desc: "Prevent new user registrations",
          metrics: [
            { label: "Affected Services", value: "3" },
            { label: "Users", value: "200" },
          ],
          services: ["User Registration", "Signup Flow", "Email Verification"],
        },
        {
          name: "Lock Provider Onboarding",
          status: "active",
          scope: "global",
          desc: "Prevent new provider/restaurant registrations",
          metrics: [
            { label: "Affected Services", value: "3" },
            { label: "Providers", value: "50" },
          ],
          services: [
            "Provider Registration",
            "Restaurant Onboarding",
            "KYC Verification",
          ],
        },
      ],
    },
  ];

  return (
    <div className="space-y-5">
      <div className="bg-white border rounded-2xl p-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
            <EyeIcon className="text-gray-500 w-5" />
          </div>

          <div>
            <h3 className="font-semibold text-lg">Platform Safe Mode</h3>
            <p className="text-sm text-gray-600">
              Enable read-only mode - disables all writes, payments, and
              transactions
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setActionType("safeMode");
          }}
          className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm"
        >
          <LockIcon className="w-5 text-white" /> Enable Safe Mode
        </button>
      </div>
      {sections.map((section, i) => (
        <div key={i} className="bg-white border rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">{section.title}</h2>

          <div className="space-y-5">
            {section.items.map((item, j) => (
              <div key={j} className="border rounded-xl p-5 bg-white">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-700">
                    {item.status}
                  </span>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-purple-100 text-purple-700">
                    {item.scope}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-4">{item.desc}</p>

                <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <ShieldIcon color="#4A5565" width={16} />
                    <span className="tracking-wide">
                      EMERGENCY-AUTO-PAUSE-ALL
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <img src={runtimeIcon} alt="" />
                    <span className="tracking-wide">
                      RUNTIME_FLAG_AUTOMATION_PAUSE_ALL
                    </span>
                  </div>

                  <span className="ml-2 px-3 py-0.5 rounded-full text-xs bg-purple-100 text-purple-700 border border-[#0000001A]">
                    Requires CEO Approval
                  </span>
                </div>

                <div className="grid grid-cols-4 bg-gray-50 rounded-lg p-4 mb-4">
                  {item.metrics.map((m, k) => (
                    <div key={k} className="text-center">
                      <p className="text-xs text-gray-500">{m.label}</p>
                      <p className="font-semibold">{m.value}</p>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-gray-500 mb-2">Affected Services:</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.services.map((s, k) => (
                    <span
                      key={k}
                      className="px-2 py-1 text-xs rounded-full bg-blue-50 text-blue-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setActionType("killSwitch")}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2"
                >
                  <img src={killSwitchesIcon} alt="" />
                  🔴 Activate Kill Switch
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Incidents({ actionType, setActionType }) {
  const incidents = [
    {
      id: "INC-2024-089",
      title: "Payment Gateway Integration Failure",
      sev: "SEV2",
      status: "mitigating",
      commander: "Alex Chen (CTO)",
      users: "1,250",
      providers: "340",
      revenue: "$45.0K",
      duration: "Ongoing",
      services: ["Payment Processing", "Payout System"],
      timeline: [
        {
          time: "Dec 22, 01:05 PM",
          text: "Integration disabled globally to prevent cascading failures",
          by: "Sarah Johnson (CEO)",
        },
        {
          time: "Dec 22, 01:15 PM",
          text: "Alternative operational path activated",
          by: "Mike Davis (COO)",
        },
        {
          time: "Dec 22, 01:30 PM",
          text: "CS team notified via emergency tasks",
          by: "System",
        },
      ],
      footer: "Postmortem due: 12/26/2024 • Owner: Alex Chen (CTO)",
      style: "bg-orange-50 border-orange-300",
      btnText: "",
    },
    {
      id: "INC-2024-088",
      title: "API Rate Limit Exceeded - MealMe Integration",
      sev: "SEV3",
      status: "resolved",
      commander: "Alex Chen (CTO)",
      users: "450",
      providers: "120",
      revenue: "$8.5K",
      duration: "145m",
      services: ["Menu Sync", "Order Processing"],
      timeline: [
        {
          time: "Dec 21, 07:55 PM",
          text: "Incident created Sev3",
          by: "Alex Chen (CTO)",
        },
        {
          time: "Dec 21, 08:30 PM",
          text: "Rate limits increased",
          by: "MealMe (External Partner)",
        },
        {
          time: "Dec 21, 10:15 PM",
          text: "Incident resolved",
          by: "Alex Chen (CTO)",
        },
      ],
      footer: "Postmortem complete • Prevention policy: POL-INT-012",
      style: "bg-white",
      btnText: "",
    },
    {
      id: "INC-2024-087",
      title: "Fraud Detection System Outage",
      sev: "SEV1",
      status: "postmortem",
      commander: "Sarah Johnson (CEO)",
      users: "0",
      providers: "0",
      revenue: "$125.0K",
      duration: "270m",
      services: ["Fraud Detection", "Payout Processing"],
      timeline: [
        {
          time: "Dec 20, 03:40 PM",
          text: "All payouts frozen immediately",
          by: "Sarah Johnson (CEO)",
        },
        {
          time: "Dec 20, 04:30 PM",
          text: "Fraud team investigating root cause",
          by: "Security Team",
        },
        {
          time: "Dec 20, 08:00 PM",
          text: "System restored, payouts resumed with manual review",
          by: "Sarah Johnson (CEO)",
        },
      ],
      footer: "Postmortem due: 12/23/2024 • Owner: Sarah Johnson (CEO)",
      style: "bg-red-50 border-red-300",
      btnText: "Require Policy",
    },
  ];

  return (
    <div className="bg-white border rounded-2xl p-6 space-y-5">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Active & Recent Incidents</h2>
        <div className="flex gap-2">
          <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-700">
            1 Active
          </span>
          <span className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-700">
            1 Postmortem
          </span>
        </div>
      </div>

      {incidents.map((item, i) => (
        <div key={i} className={`border rounded-xl p-5 ${item.style}`}>
          <div className="flex justify-between items-start mb-3">
            <div className="flex gap-2 items-center">
              <span className="bg-gray-100 text-sm px-2 py-1 rounded-lg">
                {item.id}
              </span>
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <span className="px-2 py-0.5 text-xs rounded-full bg-yellow-100 text-yellow-700">
                {item.sev}
              </span>
              <span
                className={`px-2 py-0.5 text-xs rounded-full ${
                  item.status === "resolved"
                    ? "bg-green-100 text-green-700"
                    : item.status === "postmortem"
                      ? "bg-purple-100 text-purple-700"
                      : "bg-orange-100 text-orange-700"
                }`}
              >
                {item.status}
              </span>
            </div>

            <button className="px-4 py-2 rounded-lg bg-black text-white text-sm">
              Enter Incident
            </button>
          </div>

          <p className="text-sm text-gray-600 mb-4">
            Commander: {item.commander}
          </p>

          <div className="grid grid-cols-4 gap-4 mb-4">
            {[
              ["Impacted Users", item.users],
              ["Impacted Providers", item.providers],
              ["Revenue Impact", item.revenue],
              ["Duration", item.duration],
            ].map((m, j) => (
              <div key={j} className="bg-white rounded-lg p-3">
                <p className="text-xs text-gray-500">{m[0]}</p>
                <p className="font-semibold">{m[1]}</p>
              </div>
            ))}
          </div>

          <div className="mb-4">
            <p className="text-sm font-medium mb-1">Affected Services:</p>
            <div className="flex gap-2 flex-wrap">
              {item.services.map((s, j) => (
                <span
                  key={j}
                  className="px-2 py-0.5 rounded-full text-xs bg-red-100 text-red-700"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#F9FAFB] rounded-lg p-4 mb-3">
            <p className="text-sm font-medium mb-2">Timeline:</p>
            <div className="space-y-4">
              {item.timeline.map((t, j) => (
                <div key={j} className="flex gap-3 items-start">
                  <div className=" text-gray-500">
                    <ClockIcon className="w-4 text-gray-500" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-700 font-medium">
                      {t.time}
                    </p>
                    <p className="text-sm text-gray-900">{t.text}</p>
                    <p className="text-sm text-gray-500">by {t.by}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`${item.status === "resolved" ? "bg-green-50 border border-green-200 text-[#1B5E20]" : "bg-yellow-50 border border-yellow-200 text-[#894B00]"} rounded-lg px-3 py-2 text-sm flex items-center justify-between gap-2`}
          >
            <div className="flex items-center gap-2">
              {item.status === "resolved" ? (
                <SuccessIcon width={14} />
              ) : (
                <WarningTriangleIcon color="#894B00" width={14} />
              )}
              {item.footer}
            </div>

            {item.btnText && (
              <button
                onClick={() => setActionType("requirePolicy")}
                className="inline-flex items-center gap-2 border border-gray-300 rounded-lg px-2 py-1 bg-white text-black"
              >
                <FileDocumentIcon color="black" width={16} />
                {item.btnText}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function Integrations({ actionType, setActionType }) {
  const stats = [
    { label: "4 Operational", cls: "bg-green-100 text-green-700" },
    { label: "1 Degraded", cls: "bg-yellow-100 text-yellow-700" },
    { label: "1 Disabled", cls: "bg-red-100 text-red-700" },
  ];

  const integrations = [
    {
      name: "MealMe Menu Sync",
      type: "Menu Provider",
      status: "operational",
      uptime: "99.8%",
      errors: 3,
      lastCheck: "02:30 PM",
      id: "INT-001",
    },
    {
      name: "Stripe Payment Processing",
      type: "Payment Gateway",
      status: "disabled",
      uptime: "95.2%",
      errors: 245,
      lastCheck: "01:30 PM",
      id: "INT-002",
    },
    {
      name: "Twilio SMS Provider",
      type: "Communication",
      status: "operational",
      uptime: "99.9%",
      errors: 1,
      lastCheck: "02:30 PM",
      id: "INT-003",
    },
    {
      name: "SendGrid Email Service",
      type: "Communication",
      status: "operational",
      uptime: "99.7%",
      errors: 8,
      lastCheck: "02:30 PM",
      id: "INT-004",
    },
    {
      name: "Google Maps API",
      type: "Location Services",
      status: "operational",
      uptime: "99.95%",
      errors: 0,
      lastCheck: "02:30 PM",
      id: "INT-005",
    },
    {
      name: "Plaid Bank Verification",
      type: "Financial",
      status: "degraded",
      uptime: "97.5%",
      errors: 42,
      lastCheck: "02:30 PM",
      id: "INT-006",
    },
  ];

  return (
    <div className="bg-white border rounded-2xl p-6 space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Integration Status</h2>
        <div className="flex gap-2">
          {stats.map((s, i) => (
            <span key={i} className={`px-3 py-1 rounded-full text-sm ${s.cls}`}>
              {s.label}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {integrations.map((item, i) => (
          <div
            key={i}
            className={`border rounded-xl p-5 ${
              item.status === "disabled"
                ? "bg-red-50 border-red-300"
                : item.status === "degraded"
                  ? "bg-yellow-50 border-yellow-300"
                  : "bg-white"
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">{item.name}</h3>
                <span className="px-2 py-0.5 rounded-full text-xs bg-gray-100">
                  {item.type}
                </span>
                <span
                  className={`px-2 py-0.5 rounded-full text-xs ${
                    item.status === "operational"
                      ? "bg-green-100 text-green-700"
                      : item.status === "degraded"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <button
                onClick={
                  item.status !== "disabled"
                    ? () => setActionType("disableIntegration")
                    : undefined
                }
                className={`px-4 py-2 rounded-lg text-sm flex items-center gap-2 ${
                  item.status === "disabled"
                    ? "bg-black text-white"
                    : "bg-red-600 text-white"
                }`}
              >
                {item.status === "disabled" ? <><PlayCircle className="text-white w-4" /> Enable</> : <><XCircle className="text-white w-4" /> Disable</>}
              </button>
            </div>

            <div className="grid grid-cols-4 gap-6 text-sm">
              <div>
                <p className="text-gray-500">Uptime</p>
                <p
                  className={`font-semibold ${
                    item.status === "disabled"
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >
                  {item.uptime}
                </p>
              </div>
              <div>
                <p className="text-gray-500">Errors (24h)</p>
                <p
                  className={`font-semibold ${
                    item.errors > 0 ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {item.errors}
                </p>
              </div>
              <div>
                <p className="text-gray-500">Last Check</p>
                <p>{item.lastCheck}</p>
              </div>
              <div>
                <p className="text-gray-500">ID</p>
                <p className="font-mono">{item.id}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EmergencyControls({ actionType, setActionType }) {
  const controls = [
    {
      title: "Payouts",
      status: "active",
      desc: "Provider payout processing",
      lastChanged: "12/20/2024, 8:00:00 PM",
      changedBy: "Sarah Johnson (CEO)",
      action: "Freeze Payouts",
      actionicon: <FreezeIcon className="text-white" width={16} />,
      bg: "bg-white",
      border: "border-gray-200",
    },
    {
      title: "Automation",
      status: "paused",
      desc: "Automated workflows and triggers",
      lastChanged: "12/30/2025, 2:59:49 PM",
      action: "Pause All Automation",
      actionicon: <Pause className="text-white w-4" />,
      bg: "bg-orange-50",
      border: "border-orange-300",
    },
    {
      title: "Onboarding",
      status: "active",
      desc: "New user and provider registration",
      lastChanged: "12/15/2024, 1:30:00 PM",
      action: "Lock Onboarding",
      actionicon: <LockIcon className="text-white" width={16} />,
      bg: "bg-white",
      border: "border-gray-200",
    },
    {
      title: "Promotions",
      status: "active",
      desc: "Active promotional campaigns",
      lastChanged: "12/10/2024, 5:30:00 PM",
      action: "Pause Promotions",
      actionicon: <Pause className="text-white w-4" />,
      bg: "bg-white",
      border: "border-gray-200",
    },
  ];

  const rules = [
    {
      trigger: "Sev1 payment outage",
      action: "Freeze payouts immediately",
    },
    {
      trigger: "Fraud score > 90 on payout batch",
      action: "Freeze payouts + alert CEO",
    },
    {
      trigger: "Abuse detection on promotion",
      action: "Pause promotion + alert Growth team",
    },
    {
      trigger: "Integration error rate > 50%",
      action: "Disable integration + create incident",
    },
  ];

  return (
    <div className="bg-white border rounded-2xl p-6 space-y-6">
      <h2 className="text-xl font-semibold">Emergency Controls State</h2>

      <div className="grid grid-cols-2 gap-4">
        {controls.map((item, i) => (
          <div
            key={i}
            className={`rounded-xl border p-5 ${item.bg} ${item.border}`}
          >
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold">{item.title}</h3>
              <span
                className={`px-2 py-0.5 rounded-full text-xs ${
                  item.status === "active"
                    ? "bg-green-100 text-green-700"
                    : "bg-orange-100 text-orange-700"
                }`}
              >
                {item.status}
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-3">{item.desc}</p>

            <p className="text-sm text-gray-600">
              Last changed: {item.lastChanged}
            </p>

            {item.changedBy && (
              <p className="text-sm text-gray-600">
                Changed by: {item.changedBy}
              </p>
            )}

            <button
              onClick={() => {
                if (item.action === "Pause Promotions") {
                  setActionType("pausePromotions");
                }
                if (item.action === "Freeze Payouts") {
                  setActionType("freezePayouts");
                }
                if (item.action === "Lock Onboarding") {
                  setActionType("lockOnboarding");
                }
              }}
              className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm mt-5 flex items-center gap-2"
            >
              {item.actionicon}
              {item.action}
            </button>
          </div>
        ))}
      </div>

      <div>
        <h3 className="font-semibold mb-3">
          Auto-Freeze Rules (Policy-Driven)
        </h3>

        <div className="space-y-3">
          {rules.map((rule, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-gray-50 rounded-lg p-4"
            >
              <div>
                <p className="text-sm">
                  <span className="font-semibold">Trigger:</span> {rule.trigger}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Action:</span> {rule.action}
                </p>
              </div>

              <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                Enabled
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Postmortems({ actionType, setActionType }) {
  const postmortems = [
    {
      id: "INC-2024-089",
      title: "Payment Gateway Integration Failure",
      owner: "Alex Chen (CTO)",
      dueDate: "12/26/2024",
      sev: "SEV2",
      bg: "bg-yellow-50 border-yellow-300",
      policy: {
        text: "Required for Sev1",
        color: "text-red-600",
      },
    },
    {
      id: "INC-2024-088",
      title: "API Rate Limit Exceeded - MealMe Integration",
      owner: "Alex Chen (CTO)",
      dueDate: "12/29/2024",
      sev: "SEV3",
      bg: "bg-green-50 border-green-300",
      policy: {
        text: "POL-INT-012",
        color: "text-green-700",
        link: true,
      },
    },
    {
      id: "INC-2024-087",
      title: "Fraud Detection System Outage",
      owner: "Sarah Johnson (CEO)",
      dueDate: "12/23/2024",
      sev: "SEV1",
      bg: "bg-yellow-50 border-yellow-300",
      policy: {
        text: "Required for Sev1",
        color: "text-red-600",
      },
      warning: "Prevention policy required before Sev1 incident can be closed",
    },
  ];

  return (
    <div className="bg-white border rounded-2xl p-6 space-y-5">
      <h2 className="text-xl font-semibold">Postmortem Tracker</h2>

      {postmortems.map((item) => (
        <div key={item.id} className={`border rounded-xl p-5 ${item.bg}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2 py-0.5 text-sm font-mono rounded bg-gray-100">
              {item.id}
            </span>

            <h3 className="font-semibold text-lg">{item.title}</h3>

            <span
              className={`px-2 py-0.5 text-xs rounded-full font-medium ${
                item.sev === "SEV1"
                  ? "bg-red-100 text-red-700"
                  : item.sev === "SEV2"
                    ? "bg-orange-100 text-orange-700"
                    : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {item.sev}
            </span>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 text-sm mb-4">
            <div>
              <p className="text-gray-500">Owner</p>
              <p>{item.owner}</p>
            </div>

            <div>
              <p className="text-gray-500">Due Date</p>
              <p>{item.dueDate}</p>
            </div>

            <div>
              <p className="text-gray-500">Prevention Policy</p>
              <p className={item.policy.color}>
                {item.policy.link ? "🔗 " : ""}
                {item.policy.text}
              </p>
            </div>
          </div>

          {item.warning && (
            <div className="flex items-center gap-2 bg-red-50 border border-red-300 text-red-700 rounded-lg px-4 py-3 text-sm">
              ⚠️ {item.warning}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}
