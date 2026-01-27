"use client"
import React from "react"

const delegationRules = [
  { label: "Max Duration", value: "7 days (168 hours)" },
  { label: "Allowed Delegates", value: "C-Level only" },
  { label: "Scope Restrictions", value: "Same department" },
  { label: "Auto-revoke on expiry", value: "Yes", pill: true }
]

const escalationTimers = [
  { label: "Critical Priority", value: "6 hours", color: "text-red-600" },
  { label: "High Priority", value: "12 hours", color: "text-orange-600" },
  { label: "Medium Priority", value: "24 hours", color: "text-yellow-600" },
  { label: "Low Priority", value: "48 hours", color: "text-gray-800" }
]

const auditTrail = [
  {
    who: "Sarah Johnson (CEO)",
    what: "Approved API rate increase",
    why: "Support production scaling requirements",
    when: "Dec 22, 02:00 PM",
    result: "success",
    risk: "medium"
  },
  {
    who: "Sarah Johnson (CEO)",
    what: "Denied refund threshold increase",
    why: "Risk assessment indicates potential fraud exposure",
    when: "Dec 21, 09:50 PM",
    result: "success",
    risk: "high"
  },
  {
    who: "Sarah Johnson (CEO)",
    what: "Delegated approval authority",
    why: "Out of office - business continuity",
    when: "Dec 20, 10:30 PM",
    result: "success",
    risk: "medium"
  },
  {
    who: "David Wilson (COO)",
    what: "Approved support escalation policy",
    why: "Improved customer service SLA",
    when: "Dec 20, 07:30 PM",
    result: "success",
    risk: "low"
  }
]

const riskColor = {
  low: "bg-green-100 text-green-700 border-[#7BF1A8]",
  medium: "bg-yellow-100 text-yellow-700 border-[#FFDF20]",
  high: "bg-orange-100 text-orange-700 border-[#FFB86A]"
}

export default function DelegationAndAudit() {
  return (
    <div className="space-y-5">
      <div className="bg-white border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-6">
          Delegation & Escalation Rules
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Delegation Rules</h3>
            {delegationRules.map((item, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span className="text-gray-600">{item.label}:</span>
                {item.pill ? (
                  <span className="px-3 py-0.5 rounded-full bg-green-100 text-green-700">
                    {item.value}
                  </span>
                ) : (
                  <span className="font-medium">{item.value}</span>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Auto-Escalation Timers</h3>
            {escalationTimers.map((item, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span className="text-gray-600">{item.label}:</span>
                <span className={`font-medium ${item.color}`}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Approval Audit Trail</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b text-left text-gray-600">
              <tr>
                <th className="py-3">Who</th>
                <th className="py-3">What</th>
                <th className="py-3">Why</th>
                <th className="py-3">When</th>
                <th className="py-3">Result</th>
                <th className="py-3">Risk</th>
              </tr>
            </thead>
            <tbody>
              {auditTrail.map((row, i) => (
                <tr key={i} className="border-b last:border-0">
                  <td className="py-3">{row.who}</td>
                  <td className="py-3">{row.what}</td>
                  <td className="py-3">{row.why}</td>
                  <td className="py-3">{row.when}</td>
                  <td className="py-3">
                    <span className="px-3 py-0.5 rounded-full bg-green-100 text-green-700 border border-[#7BF1A8]">
                      {row.result}
                    </span>
                  </td>
                  <td className="py-3">
                    <span
                      className={`px-3 py-0.5 rounded-full border ${riskColor[row.risk]}`}
                    >
                      {row.risk}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
