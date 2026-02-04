"use client";
import React, { useState } from "react";
import {
  EyeIcon,
  FileDocumentIcon,
  ShieldIcon,
} from "../../assets/icons/icons";
import folderIcon from "../../assets/foldericon.svg";
import { Download, CheckCircle } from "lucide-react";
import linkIcon from "../../assets/linkicon.svg";
import Select from "../common/Select";
import CommonAuditActionModal from "./CommonAuditActionModal";

const TABS = [
  { key: "audit-search", label: "Audit Search" },
  { key: "sensitive-reads", label: "Sensitive Reads" },
  { key: "audit-cases", label: "Audit Cases" },
  { key: "compliance", label: "Compliance" },
];

const complianceData = [
  {
    section: "Permits",
    items: [
      {
        title: "Business Operating License - NYC",
        status: "compliant",
        statusColor: "bg-green-100 text-green-700",
        container: "bg-white border",
        owner: "Emma Wilson (Legal)",
        expiry: "6/30/2025",
        reviewed: "12/1/2024",
        evidence: ["nyc_business_license.pdf"],
      },
      {
        title: "Food Service Permit - San Francisco",
        status: "pending",
        statusColor: "bg-yellow-100 text-yellow-700",
        container: "bg-yellow-50 border border-yellow-300",
        owner: "Mike Davis (COO)",
        reviewed: "12/5/2024",
      },
    ],
  },
  {
    section: "Insurance",
    items: [
      {
        title: "General Liability Insurance",
        status: "expiring soon",
        statusColor: "bg-orange-100 text-orange-700",
        container: "bg-orange-50 border border-orange-300",
        owner: "Mike Davis (COO)",
        expiry: "1/15/2025",
        reviewed: "11/15/2024",
        evidence: ["liability_insurance_2024.pdf"],
      },
      {
        title: "Cyber Security Insurance",
        status: "compliant",
        statusColor: "bg-green-100 text-green-700",
        container: "bg-white border",
        owner: "Alex Chen (CTO)",
        expiry: "8/1/2025",
        reviewed: "11/20/2024",
        evidence: ["cyber_insurance_2024.pdf"],
      },
    ],
  },
  {
    section: "Retention",
    items: [
      {
        title: "Financial Records (7-year retention)",
        status: "compliant",
        statusColor: "bg-green-100 text-green-700",
        container: "bg-white border",
        owner: "Emily Wang (CFO)",
        reviewed: "12/15/2024",
        evidence: ["retention_policy_financial.pdf"],
      },
      {
        title: "User Data (GDPR 30-day post-deletion)",
        status: "non compliant",
        statusColor: "bg-red-100 text-red-700",
        container: "bg-red-50 border border-red-300",
        owner: "Alex Chen (CTO)",
        reviewed: "12/18/2024",
        evidence: ["retention_audit_report.pdf"],
      },
    ],
  },
  {
    section: "DSAR",
    items: [
      {
        title: "GDPR Data Subject Access Request Process",
        status: "compliant",
        statusColor: "bg-green-100 text-green-700",
        container: "bg-white border",
        owner: "Emma Wilson (Legal)",
        reviewed: "12/10/2024",
        evidence: ["dsar_process.pdf", "gdpr_compliance_report.pdf"],
      },
      {
        title: "CCPA Data Deletion Process",
        status: "compliant",
        statusColor: "bg-green-100 text-green-700",
        container: "bg-white border",
        owner: "Emma Wilson (Legal)",
        reviewed: "12/12/2024",
        evidence: ["ccpa_compliance.pdf"],
      },
    ],
  },
];

const cases = [
  {
    id: "CASE-2024-001",
    title: "Investor DD – Q1",
    status: "pending approval",
    statusStyle: "bg-orange-100 text-orange-700",
    owner: "Sarah Johnson (CEO)",
    purpose: "Investor due diligence package for Series B funding",
    scope: "Governance controls, policy history, incident postmortems",
    evidence: [
      "governance_controls.pdf",
      "policy_history.json",
      "incident_postmortems.pdf",
    ],
    created: "12/20/2024, 3:30:00 PM",
    actions: ["export", "close"],
  },
  {
    id: "CASE-2024-002",
    title: "GDPR Data Subject Request",
    status: "open",
    statusStyle: "bg-blue-100 text-blue-700",
    owner: "Emma Wilson (Legal)",
    purpose: "User requested data deletion under GDPR Article 17",
    scope: "All personal data for user UID-12345",
    created: "12/21/2024, 8:00:00 PM",
    actions: ["close"],
  },
  {
    id: "CASE-2024-003",
    title: "Internal Fraud Investigation",
    status: "investigating",
    statusStyle: "bg-yellow-100 text-yellow-700",
    owner: "Alex Chen (CTO)",
    purpose: "Investigate unusual refund pattern flagged by fraud detection",
    scope: "Provider PRV-567 transactions from Dec 15–18",
    evidence: [
      "transaction_logs.csv",
      "access_logs.json",
      "approval_chain.pdf",
    ],
    created: "12/18/2024, 2:30:00 PM",
    actions: ["close"],
  },
  {
    id: "CASE-2024-004",
    title: "SOC 2 Audit Evidence",
    status: "closed",
    statusStyle: "bg-green-100 text-green-700",
    owner: "Sarah Johnson (CEO)",
    purpose: "Annual SOC 2 Type II audit evidence collection",
    scope: "Full year access controls, change management, incident response",
    evidence: [
      "access_controls.pdf",
      "change_logs.json",
      "incident_response.pdf",
      "policy_docs.zip",
    ],
    created: "11/1/2024, 1:30:00 PM",
    closed: "12/1/2024, 10:30:00 PM",
    container: "bg-green-50 border border-green-300",
  },
];

const sensitiveReads = [
  {
    id: "SR-001",
    level: "high",
    levelStyle: "bg-orange-100 text-orange-700",
    container: "bg-orange-50 border border-orange-300",
    actor: "Sarah Johnson (CEO)",
    action: "PII Reveal",
    type: "Customer PII",
    count: "1,247",
    purpose: "Board meeting presentation",
    date: "Dec 22, 2024, 02:00 PM",
  },
  {
    id: "SR-002",
    level: "critical",
    levelStyle: "bg-red-100 text-red-700",
    container: "bg-red-50 border border-red-300",
    actor: "Emma Wilson (Legal)",
    action: "Mass Export",
    type: "Financial Records",
    count: "8,540",
    purpose: "Regulatory compliance audit",
    date: "Dec 21, 2024, 08:30 PM",
  },
  {
    id: "SR-003",
    level: "high",
    levelStyle: "bg-orange-100 text-orange-700",
    container: "bg-orange-50 border border-orange-300",
    actor: "Mike Davis (COO)",
    action: "High-Risk Tool",
    type: "Provider Bank Details",
    count: "340",
    purpose: "Payout reconciliation review",
    date: "Dec 21, 2024, 04:00 PM",
  },
  {
    id: "SR-004",
    level: "medium",
    levelStyle: "bg-yellow-100 text-yellow-700",
    container: "bg-white border",
    actor: "Alex Chen (CTO)",
    action: "Database Query",
    type: "User Authentication Logs",
    count: "15,620",
    purpose: "Security incident investigation",
    date: "Dec 20, 2024, 04:30 PM",
  },
];

const actionOptions = [
  { label: "All Actions", value: "ALL" },
  { label: "Approval", value: "APPROVAL" },
  { label: "Policy Change", value: "POLICY_CHANGE" },
  { label: "Access Event", value: "ACCESS_EVENT" },
];

const riskOptions = [
  { label: "All Levels", value: "ALL" },
  { label: "Low", value: "LOW" },
  { label: "Medium", value: "MEDIUM" },
  { label: "High", value: "HIGH" },
  { label: "Critical", value: "CRITICAL" },
];

const timeOptions = [
  { label: "Last 24 Hours", value: "24H" },
  { label: "Last 7 Days", value: "7D" },
  { label: "Last 30 Days", value: "30D" },
];

const results = [
  {
    who: "Sarah Johnson (CEO)",
    what: "Approved API rate increase",
    why: "Support production scaling requirements",
    when: "Dec 22, 02:00 PM",
    result: "success",
    risk: "medium",
  },
  {
    who: "Michael Chen (CTO)",
    what: "Created new security policy",
    why: "Address recent vulnerability findings",
    when: "Dec 22, 12:45 PM",
    result: "success",
    risk: "high",
  },
  {
    who: "Emma Davis (CFO)",
    what: "Viewed transaction audit logs",
    why: "Investigation of unusual payout patterns",
    when: "Dec 22, 12:15 PM",
    result: "success",
    risk: "critical",
  },
  {
    who: "Sarah Johnson (CEO)",
    what: "Denied refund threshold increase",
    why: "Risk assessment indicates potential fraud exposure",
    when: "Dec 21, 09:50 PM",
    result: "success",
    risk: "high",
  },
  {
    who: "System Auto",
    what: "Emergency freeze activated",
    why: "Fraud detection threshold exceeded",
    when: "Dec 21, 07:30 PM",
    result: "success",
    risk: "critical",
  },
  {
    who: "Michael Chen (CTO)",
    what: "Updated API rate limit policy",
    why: "Accommodate increased traffic load",
    when: "Dec 21, 05:30 PM",
    result: "success",
    risk: "medium",
  },
  {
    who: "Emma Davis (CFO)",
    what: "Exported financial audit report",
    why: "Quarterly board meeting preparation",
    when: "Dec 21, 04:00 PM",
    result: "success",
    risk: "low",
  },
  {
    who: "System Auto",
    what: "Denied unauthorized access",
    why: "User role does not have required permissions",
    when: "Dec 21, 02:45 PM",
    result: "failure",
    risk: "high",
  },
  {
    who: "Sarah Johnson (CEO)",
    what: "Delegated approval authority",
    why: "Out of office - business continuity",
    when: "Dec 20, 10:30 PM",
    result: "success",
    risk: "medium",
  },
  {
    who: "David Wilson (COO)",
    what: "Approved support escalation policy",
    why: "Improved customer service SLA",
    when: "Dec 20, 07:30 PM",
    result: "success",
    risk: "low",
  },
];

const riskBadge = {
  low: "bg-green-100 text-green-700 border-[#7BF1A8]",
  medium: "bg-yellow-100 text-yellow-700 border-[#FFD166]",
  high: "bg-orange-100 text-orange-700 border-[#FFA2A2]",
  critical: "bg-red-100 text-red-700 border-[#FFA2A2]",
};

export default function AuditTabs() {
  const [activeTab, setActiveTab] = useState("audit-search");
  const [actionCode, setActionCode] = useState(null);
  const [riskLevel, setRiskLevel] = useState(null);
  const [timeWindow, setTimeWindow] = useState(null);
  const [modalType, setModalType] = useState(null);

  return (
    <div className="w-full mb-5">
      <div className="overflow-auto scroll-hide w-[calc(100vw-24px)] lg:w-auto">
        <div className="flex gap-3 bg-[#F4F6F8] rounded-full p-1 mb-5 w-full min-w-[800px] lg:min-w-[600px]">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-5 py-2 rounded-full text-sm flex-1 flex justify-center items-center ${
              activeTab === tab.key ? "bg-white font-semibold" : "text-gray-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      </div>

      {activeTab === "audit-search" && (
        <div className="space-y-5 mb-5">
          <div className="bg-white rounded-lg lg:rounded-2xl border p-3 lg:p-6">
            <h2 className="text-xl font-semibold mb-5">
              Advanced Audit Search
            </h2>

            <div className="grid lg:grid-cols-3 gap-4 mb-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-[14px] text-[#0a0a0a]">
                  Search Query
                </label>
                <input
                  placeholder="User/provider/order, staff member..."
                  className="h-10 px-3 text-[14px] bg-[#F3F3F5] rounded-lg"
                />
              </div>

              <Select
                placeholder="All Actions"
                label="All Actions"
                options={actionOptions}
                value={actionCode}
                onChange={setActionCode}
                inputClassName="!h-10 !px-3 !text-[14px] !bg-[#F3F3F5] !rounded-lg"
                listItemClassName="!text-[14px] !px-3 !py-1.5"
              />

              <Select
                label="All Levels"
                placeholder="All Levels"
                options={riskOptions}
                value={riskLevel}
                onChange={setRiskLevel}
                inputClassName="!h-10 !px-3 !text-[14px] !bg-[#F3F3F5] !rounded-lg"
                listItemClassName="!text-[14px] !px-3 !py-1.5"
              />
            </div>

            <div className="grid lg:grid-cols-3 gap-4 mb-4">
              <Select
                label="Time Window"
                placeholder="Time Window"
                options={timeOptions}
                value={timeWindow}
                onChange={setTimeWindow}
                inputClassName="!h-10 !px-3 !text-[14px] !bg-[#F3F3F5] !rounded-lg"
                listItemClassName="!text-[14px] !px-3 !py-1.5"
              />

              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-[14px] text-[#0a0a0a]">
                  Tool ID (Optional)
                </label>
                <input
                  placeholder="e.g., TOOL-001"
                  className="h-10 px-3 text-[14px] bg-[#F3F3F5] rounded-lg"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-[14px] text-[#0a0a0a]">
                  Staff Member (Optional)
                </label>

                <input
                  placeholder="e.g., Sarah Johnson"
                  className="h-10 px-3 text-[14px] bg-[#F3F3F5] rounded-lg"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-[14px] text-[#0a0a0a]">
                  From Date
                </label>
                <input className="h-10 px-3 text-[14px] bg-[#F3F3F5] rounded-lg" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-[14px] text-[#0a0a0a]">
                  To Date
                </label>
                <input className="h-10 px-3 text-[14px] bg-[#F3F3F5] rounded-lg" />
              </div>
            </div>

            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>Showing 0 of 10 audit logs</span>
              <button className="border rounded-lg px-4 py-2 text-sm">
                Export Results
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg lg:rounded-2xl border p-3 lg:p-6">
            <h2 className="text-xl font-semibold mb-4">Search Results</h2>

            <div className="overflow-auto scroll-hide w-[calc(100vw-44px)] lg:w-auto">
              <table className="w-full text-[14px] min-w-[800px] lg:min-w-[600px] text-sm">
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
                {results.map((row, i) => (
                  <tr key={i} className="border-b last:border-0">
                    <td className="py-3">{row.who}</td>
                    <td className="py-3">{row.what}</td>
                    <td className="py-3">{row.why}</td>
                    <td className="py-3">{row.when}</td>
                    <td className="py-3">
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs border ${
                          row.result === "success"
                            ? "bg-green-100 text-green-700 border-[#7BF1A8]"
                            : "bg-red-100 text-red-700 border-[#FFA2A2]"
                        }`}
                      >
                        {row.result}
                      </span>
                    </td>
                    <td className="py-3">
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs border ${riskBadge[row.risk]}`}
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
      )}

      {activeTab === "sensitive-reads" && (
        <div className="space-y-5 rounded-lg lg:rounded-xl bg-white lg:p-6 p-3">
          <div className="flex justify-between items-center">
            <h2 className="sm:text-xl text-sm font-semibold">Sensitive Reads Report</h2>
            <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs">
              3 High-Risk
            </span>
          </div>

          <div className="space-y-5">
            {sensitiveReads.map((item) => (
              <div
                key={item.id}
                className={`rounded-lg lg:rounded-xl p-2.5 lg:p-5 space-y-4 ${item.container}`}
              >
                <div className="flex items-center gap-3">
                  <EyeIcon color="#F54900" width={20} />
                  <span className="text-sm px-2 py-1 bg-[#F3F4F6] rounded-lg">
                    {item.id}
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${item.levelStyle}`}
                  >
                    {item.level}
                  </span>
                </div>

                <div className="grid md:grid-cols-4 gap-6 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Actor</p>
                    <p>{item.actor}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Action</p>
                    <p>{item.action}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Data Type</p>
                    <p>{item.type}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Record Count</p>
                    <p className="font-bold text-orange-600">{item.count}</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg px-4 py-3 text-sm">
                  <span className="font-semibold">Purpose:</span> {item.purpose}
                  <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#EFF6FF] rounded-lg lg:rounded-xl lg:p-5 p-2.5 text-sm text-gray-700">
            <h3 className="font-semibold text-[#0A0A0A] text-[18px] mb-2">
              Enhanced Audit Requirements
            </h3>
            <ul className="list-disc pl-5 space-y-1.5">
              <li className="text-[#364153] text-[14px]">
                PII views require purpose field and are logged with enhanced
                audit trail
              </li>
              <li className="text-[#364153] text-[14px]">
                Mass exports trigger automatic review by Legal team
              </li>
              <li className="text-[#364153] text-[14px]">
                High-risk tool usage requires CEO approval for data access
              </li>
              <li className="text-[#364153] text-[14px]">
                All sensitive reads are immutable and retention-policy enforced
              </li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === "audit-cases" && (
        <div className="space-y-5 rounded-lg lg:rounded-xl bg-white lg:p-6 p-3">
          <div className="flex justify-between items-center gap-3 flex-wrap">
            <h2 className="sm:text-xl text-sm font-semibold">Open Audit Cases</h2>
            <div className="flex gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                1 Open
              </span>
              <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">
                1 Investigating
              </span>
              <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700">
                1 Pending
              </span>
            </div>
          </div>

          {cases.map((item) => (
            <div
              key={item.id}
              className={`border rounded-lg lg:rounded-xl lg:p-6 p-2.5 space-y-4 ${
                item.container || "bg-white"
              }`}
            >
              <div className="flex items-center gap-3 flex-wrap">
                <img src={folderIcon} alt="" />
                <span className="text-sm text-[#0A0A0A] px-2 py-1 bg-[#F3F4F6] rounded-lg">
                  {item.id}
                </span>
                <h3 className="font-semibold">{item.title}</h3>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${item.statusStyle}`}
                >
                  {item.status}
                </span>
              </div>

              <p className="text-sm text-gray-600">
                <span className="font-medium">
                  <b>Owner:</b>
                </span>{" "}
                {item.owner}
              </p>

              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-gray-500 mb-1">Purpose</p>
                  <p>{item.purpose}</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Scope</p>
                  <p>{item.scope}</p>
                </div>
              </div>

              {item.evidence && (
                <div>
                  <p className="text-sm text-gray-500 mb-2">Evidence Links:</p>
                  <div className="flex flex-wrap gap-2">
                    {item.evidence.map((file, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-50 text-blue-700 border flex items-center gap-2 border-[#0000001A] rounded-full text-xs"
                      >
                        <img src={linkIcon} alt="" />
                        {file}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="text-xs text-gray-500">
                Created: {item.created}
                {item.closed && (
                  <>
                    <br />
                    Closed: {item.closed}
                  </>
                )}
              </div>

              {item.actions && (
                <div className="flex gap-3">
                  {item.actions.includes("export") && (
                    <button
                      onClick={() => setModalType("export")}
                      className="border px-4 py-2 rounded-lg text-sm flex items-center gap-2"
                    > <Download className="w-4 h-4" />
                      Export Evidence
                    </button>
                  )}

                  <button
                    onClick={() => setModalType("close")}
                    className="bg-black text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Close Case
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {modalType && (
        <CommonAuditActionModal
          type={modalType}
          onClose={() => setModalType(null)}
        />
      )}

      {activeTab === "compliance" && (
        <div className="space-y-5 rounded-lg lg:rounded-xl bg-white lg:p-6 p-3">
          <div className="flex justify-between items-center gap-3 flex-wrap">
            <h2 className="sm:text-xl text-sm font-semibold">Compliance Checklist</h2>
            <div className="flex gap-2 text-xs flex-wrap">
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700">
                5 Compliant
              </span>
              <span className="px-3 py-1 rounded-full bg-red-100 text-red-700">
                1 Non-Compliant
              </span>
              <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700">
                1 Expiring Soon
              </span>
            </div>
          </div>

          {complianceData.map((group, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-medium">
                <ShieldIcon color="#155DFC" width={16} />
                {group.section}
              </div>

              {group.items.map((item, i) => (
                <div
                  key={i}
                  className={`lg:rounded-xl rounded-lg lg:p-5 p-2.5 space-y-3 ${item.container}`}
                >
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-medium">{item.title}</h3>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${item.statusColor}`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Owner</p>
                      <p>{item.owner}</p>
                    </div>

                    {item.expiry && (
                      <div>
                        <p className="text-gray-500">Expiry Date</p>
                        <p
                          className={
                            item.status === "expiring soon"
                              ? "text-orange-600"
                              : ""
                          }
                        >
                          {item.expiry}
                        </p>
                      </div>
                    )}

                    <div>
                      <p className="text-gray-500">Last Reviewed</p>
                      <p>{item.reviewed}</p>
                    </div>
                  </div>

                  {item.evidence && (
                    <div className="text-sm">
                      <p className="text-gray-500 mb-1">Evidence:</p>
                      <div className="flex flex-wrap gap-2">
                        {item.evidence.map((file, fi) => (
                          <span
                            key={fi}
                            className="px-2 py-1 bg-gray-100 rounded text-xs flex items-center gap-2"
                          >
                            <FileDocumentIcon color="#0A0A0A" width={16} />
                            {file}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
