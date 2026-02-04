"use client"
import React from "react"
import {InfoCircleIcon,SuccessIcon} from "../../assets/icons/icons"

const timelineData = [
  {
    role: "CEO",
    title: "Froze payouts",
    description: "Payment outage detected in EMEA region",
    time: "Dec 21, 07:30 PM",
    status: "done",
  },
  {
    role: "CTO",
    title: "Started investigation",
    description: "Analyzing payment gateway logs",
    time: "Dec 21, 07:45 PM",
    status: "done",
  },
  {
    role: "CTO",
    title: "Identified root cause",
    description: "Database connection pool exhausted",
    time: "Dec 21, 09:00 PM",
    status: "done",
  },
  {
    role: "CTO",
    title: "Implemented fix",
    description: "Scaled database connections and restarted services",
    time: "Dec 21, 10:15 PM",
    status: "done",
  },
  {
    role: "CTO",
    title: "Requested CEO approval",
    description: "System ready to resume - awaiting CEO sign-off",
    time: "Dec 21, 10:30 PM",
    status: "pending",
  },
]

const auditTrail = [
  {
    who: "System Auto",
    what: "Emergency freeze activated",
    why: "Fraud detection threshold exceeded",
    when: "Dec 21, 07:30 PM",
    result: "success",
    risk: "critical",
  },
]

const riskStyle = {
  critical: "bg-red-100 text-red-700 border-[#FFA2A2]",
}

const resultStyle = {
  success: "bg-green-100 text-green-700 border-[#7BF1A8]",
  failure: "bg-red-100 text-red-700 border-[#FFA2A2]",
}

export default function IncidentResponseTimeline() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg lg:rounded-2xl border p-3 lg:p-6">
        <h2 className="text-xl font-semibold mb-6">
          Incident Response Timeline – Payment Gateway Outage
        </h2>

        <div className="space-y-6">
          {timelineData.map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 flex items-center justify-center ${
                    item.status === "pending"
                      ? "bg-[#DBEAFE] text-blue-600"
                      : "bg-[#F3F4F6] text-gray-600"
                  }`}
                >
                  {item.status === "pending" ? <InfoCircleIcon color="#155DFC" width={16} /> : <SuccessIcon color="#4A5565" width={16} />}
                </div>
                {i !== timelineData.length - 1 && (
                  <div className="w-0.5 min-h-10 flex-1 bg-[#E5E7EB]" />
                )}
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-start sm:flex-row flex-col">
                  <div>
                    <p className="font-medium">
                      {item.role} •{" "}
                      <span className="text-gray-600">
                        {item.title}
                      </span>
                    </p>
                    <p className="text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500">
                    {item.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg lg:rounded-2xl border p-3 lg:p-6">
        <h2 className="text-xl font-semibold mb-4">
          Emergency Actions Audit Trail
        </h2>

        <div className="overflow-auto scroll-hide w-[calc(100vw-48px)] lg:w-auto">
          <table className="w-full min-w-[800px] lg:min-w-[600px] text-sm">
          <thead className="border-b text-gray-600">
            <tr>
              <th className="py-3 text-left">Who</th>
              <th className="py-3 text-left">What</th>
              <th className="py-3 text-left">Why</th>
              <th className="py-3 text-left">When</th>
              <th className="py-3 text-left">Result</th>
              <th className="py-3 text-left">Risk</th>
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
                  <span
                    className={`px-2 py-0.5 rounded-full border text-xs ${
                      resultStyle[row.result]
                    }`}
                  >
                    {row.result}
                  </span>
                </td>
                <td className="py-3">
                  <span
                    className={`px-2 py-0.5 rounded-full border text-xs ${
                      riskStyle[row.risk]
                    }`}
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
