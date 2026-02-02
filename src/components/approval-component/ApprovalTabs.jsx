"use client"
import React, { useMemo, useState } from "react"
import EvidenceModal from "./EvidenceModal"
import ApprovalActionModal from "./ApprovalActionModal"

const TABS = [
  { key: "All", label: "All (8)" },
  { key: "Finance", label: "Finance (2)" },
  { key: "Access", label: "Access (1)" },
  { key: "Automation", label: "Automation (1)" },
  { key: "Tech", label: "Tech (2)" },
  { key: "Legal", label: "Legal (1)" },
  { key: "Expansion", label: "Expansion (1)" }
]

const DATA = [
  {
    id: 1,
    category: "Finance",
    title: "High-Value Refund Request",
    priority: "high",
    priorityColor: "bg-orange-100 text-orange-700",
    description:
      "Customer refund request for order #45892 - exceeded standard threshold",
    requester: "Jennifer Lee (Customer Service)",
    department: "Customer Service",
    actionCode: "finance.refund.approve_high_value",
    policy: "POL-FIN-003 v2.1",
    exposure: "$8,500",
    risk: 72,
    requested: "Dec 22, 02:00 PM",
    simulation: "Fraud probability: 12% (Low risk)"
  },
  {
    id: 2,
    category: "Access",
    title: "Admin Role Assignment",
    priority: "critical",
    priorityColor: "bg-red-100 text-red-700",
    description:
      "Grant admin access to contractor John Smith for DevOps project",
    requester: "Michael Chen (CTO)",
    department: "Engineering",
    actionCode: "rbac.role.assign_admin",
    policy: "POL-SEC-007 v1.8",
    risk: 85,
    requested: "Dec 22, 11:30 AM"
  },
  {
    id: 3,
    category: "Automation",
    title: "Automation Budget Increase",
    priority: "high",
    priorityColor: "bg-orange-100 text-orange-700",
    description:
      "Increase marketing automation budget from $50K to $75K/month",
    requester: "Lisa Anderson (CMO)",
    department: "Marketing",
    actionCode: "automation.budget.increase",
    policy: "POL-AUTO-012 v1.3",
    exposure: "$25,000",
    risk: 68,
    requested: "Dec 21, 07:30 PM",
    simulation: "Projected ROI: 240% over 6 months"
  },
  {
    id: 4,
    category: "Tech",
    title: "Database Schema Change",
    priority: "critical",
    priorityColor: "bg-red-100 text-red-700",
    description: "Deploy breaking schema change to production database",
    requester: "Robert Wilson (Senior Engineer)",
    department: "Engineering",
    actionCode: "tech.database.schema_change_prod",
    policy: "POL-TECH-005 v3.2",
    risk: 91,
    requested: "Dec 22, 02:30 PM",
    simulation: "Estimated downtime: 15 minutes"
  },
  {
    id: 5,
    category: "Expansion",
    title: "Market Expansion - Austin",
    priority: "high",
    priorityColor: "bg-orange-100 text-orange-700",
    description:
      "Approve market expansion into Austin, TX - $2.4M investment",
    requester: "David Wilson (COO)",
    department: "Strategy",
    actionCode: "expansion.market.approve",
    policy: "POL-STRAT-001 v1.0",
    exposure: "$2,400,000",
    risk: 55,
    requested: "Dec 20, 03:30 PM",
    simulation: "Market readiness: 94%, ROI: 18 months"
  },
  {
    id: 6,
    category: "Legal",
    title: "Data Processing Agreement",
    priority: "medium",
    priorityColor: "bg-yellow-100 text-yellow-700",
    description: "Approve DPA with EU customer for GDPR compliance",
    requester: "Emma Davis (CFO)",
    department: "Finance",
    actionCode: "legal.contract.approve_dpa",
    policy: "POL-LEG-004 v2.0",
    risk: 45,
    requested: "Dec 21, 04:30 PM"
  },
  {
    id: 7,
    category: "Tech",
    title: "API Rate Limit Override",
    priority: "high",
    priorityColor: "bg-orange-100 text-orange-700",
    description:
      "Increase API rate limit for enterprise customer from 10K to 50K req/min",
    requester: "Alex Kumar (Product Manager)",
    department: "Product",
    actionCode: "tech.api.rate_limit_override",
    policy: "POL-TECH-008 v1.5",
    risk: 78,
    requested: "Dec 20, 09:30 PM",
    simulation: "Infrastructure cost increase: $12K/month"
  },
  {
    id: 8,
    category: "Finance",
    title: "Emergency Spend Authorization",
    priority: "critical",
    priorityColor: "bg-red-100 text-red-700",
    description:
      "Emergency cloud infrastructure spend - $45K for traffic spike mitigation",
    requester: "Michael Chen (CTO)",
    department: "Engineering",
    actionCode: "finance.emergency_spend.authorize",
    policy: "POL-FIN-009 v1.2",
    exposure: "$45,000",
    risk: 62,
    requested: "Dec 22, 03:45 PM"
  }
]

export default function ApprovalQueue() {
  const [activeTab, setActiveTab] = useState("All")
const [openEvidence, setOpenEvidence] = useState(false);
const [actionType, setActionType] = useState(null);

const openModal = (type) => setActionType(type);
const closeModal = () => setActionType(null);

  const filtered = useMemo(() => {
    if (activeTab === "All") return DATA
    return DATA.filter(i => i.category === activeTab)
  }, [activeTab])

  return (
    <div className="w-full p-6 space-y-6 bg-white rounded-xl mb-5">
      <h2 className="text-xl font-semibold">Approval Queue by Category</h2>

      <div className="flex gap-2 bg-gray-100 p-1 rounded-full w-full">
        {TABS.map(t => (
          <button
            key={t.key}
            onClick={() => setActiveTab(t.key)}
            className={`px-4 py-1.5 text-sm rounded-full flex justify-center items-center flex-1 ${
              activeTab === t.key
                ? "bg-white shadow text-black"
                : "text-gray-600"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="space-y-5">
        {filtered.map(item => (
          <div
            key={item.id}
            className="bg-white border rounded-2xl p-6 space-y-5"
          >
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${item.priorityColor}`}
                  >
                    {item.priority}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>

              <div className="border-2 border-orange-300 rounded-xl px-4 py-2 text-center">
                <div className="text-2xl font-semibold text-orange-600">
                  {item.risk}
                </div>
                <div className="text-sm text-gray-600">Risk</div>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
              <div>
                <div className="text-gray-500">Requester</div>
                <div className="font-medium">{item.requester}</div>
              </div>
              <div>
                <div className="text-gray-500">Department</div>
                <div className="font-medium">{item.department}</div>
              </div>
              <div>
                <div className="text-gray-500">Action Code</div>
                <div className="bg-gray-100 rounded-md px-2 py-1 font-mono text-xs inline-block">
                  {item.actionCode}
                </div>
              </div>
              <div>
                <div className="text-gray-500">Policy</div>
                <div className="bg-blue-100 text-blue-800 rounded-md px-2 py-1 inline-block">
                  {item.policy}
                </div>
              </div>
            </div>

            <div className=" bg-gray-50 rounded-lg px-4 py-3 text-sm">
              <div className="flex justify-between items-center rounded-lg">
                <div className="flex items-center gap-6 text-gray-600">
                <span>2 attachments</span>
                <span>2 audit refs</span>
                {item.simulation && (
                  <span className="text-blue-600">
                    Simulation available
                  </span>
                )}
              </div>
              <button onClick={() => setOpenEvidence(true)} className="text-blue-600 font-medium">
                View Evidence →
              </button>
              </div>
            {item.simulation && (
              <div className="text-sm text-gray-700">
                <span className="font-medium">Simulation:</span>{" "}
                {item.simulation}
              </div>
            )}
            </div>


            <div className="flex flex-wrap gap-3">
  <button onClick={() => openModal("approve")} className="bg-black text-white px-5 py-2 rounded-lg">
    Approve
  </button>

  <button onClick={() => openModal("reject")} className="bg-red-600 text-white px-5 py-2 rounded-lg">
    Reject
  </button>

  <button onClick={() => openModal("revision")} className="border px-5 py-2 rounded-lg">
    Request Revision
  </button>

  <button onClick={() => openModal("delegate")} className="border px-5 py-2 rounded-lg">
    Delegate
  </button>

  <button onClick={() => openModal("escalate")} className="border px-5 py-2 rounded-lg">
    Escalate
  </button>

  <button onClick={() => openModal("audit")} className="border px-5 py-2 rounded-lg">
    Open Audit Case
  </button>
</div>
          </div>
        ))}
        
<EvidenceModal
  open={openEvidence}
  onClose={() => setOpenEvidence(false)}
/>

{actionType && (
  <ApprovalActionModal type={actionType} onClose={closeModal} />
)}

      </div>
    </div>
  )
}
