import { useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  Database,
  Shield,
  TriangleAlert,
  CheckCircle2,
  Pencil,
} from "lucide-react";
import ApprovalDecisionModal from "./ApprovalDecisionModal";

const approvals = [
  {
    feature: "Social Login Integration",
    description:
      "Allow users to sign in using Google, Apple, and Microsoft accounts",
    requestedBy: "Product Team",
    date: "01-20-2026",
    pii: "email, full_name",
    note: "Requires OAuth 2.0 implementation with proper token handling",
    reviewers: "Security Team, Privacy Team",
    risk: "Medium",
    status: "Pending",
    action: "Approve/Reject",
  },
  {
    feature: "Advanced Analytics Dashboard",
    description:
      "New dashboard with detailed user behaviour analytics and cohort analysis",
    requestedBy: "Analytics Team",
    date: "01-21-2026",
    pii: "ip_address, device_id, email",
    note: "Must ensure all data is anonymized before visualization",
    reviewers: "Privacy Team, Legal Team",
    risk: "High",
    status: "In Review",
    action: "View Details",
  },
  {
    feature: "Two-Factor Authentication",
    description:
      "Add SMS and authenticator app based 2FA for all user accounts",
    requestedBy: "Security Team",
    date: "01-22-2026",
    pii: "phone_number",
    note: "Improves overall account security posture",
    reviewers: "Engineering, Product Team",
    risk: "Low",
    status: "Approved",
    action: "View Details",
  },
  {
    feature: "Customer Data Export",
    description:
      "Enable customers to export all their data in machine-readable format",
    requestedBy: "Legal Team",
    date: "01-20-2026",
    pii: "email, full_name, phone_number",
    note: "Improves overall account security posture",
    reviewers: "Engineering, Product Team",
    risk: "Medium",
    status: "Approved",
    action: "View Details",
  },
];

const statusStyle = {
  Pending: "bg-[#FEF3C7] text-[#B45309]",
  "In Review": "bg-[#DBEAFE] text-[#2563EB]",
  Approved: "bg-[#DCFCE7] text-[#166534]",
};

const riskStyle = {
  Low: "bg-[#DCFCE7] text-[#166534]",
  Medium: "bg-[#FEF3C7] text-[#B45309]",
  High: "bg-[#FEE2E2] text-[#B91C1C]",
  Critical: "bg-[#FEE2E2] text-[#B91C1C]",
};

const kpiCards = [
  {
    title: "Active Security Rules",
    value: "4",
    delta: "+12% vs last week",
    deltaColor: "text-[#00A63E]",
    icon: Shield,
    iconBg: "bg-[#DCFCE7]",
    iconColor: "text-[#008236]",
  },
  {
    title: "PII Fields Managed",
    value: "8",
    delta: "",
    deltaColor: "text-[#00A63E]",
    icon: Database,
    iconBg: "bg-[#CEDFFF]",
    iconColor: "text-[#3178EC]",
  },
  {
    title: "Pending Approvals",
    value: "2",
    delta: "",
    deltaColor: "text-[#CF2027]",
    icon: CheckCircle2,
    iconBg: "bg-[#FEF9C2]",
    iconColor: "text-[#A65F00]",
  },
  {
    title: "Active Risk Reviews",
    value: "2",
    delta: "",
    deltaColor: "text-[#CF2027]",
    icon: TriangleAlert,
    iconBg: "bg-[#FFE2E2]",
    iconColor: "text-[#CF2027]",
  },
];

const piiData = [
  {
    field: "email",
    type: "String",
    retention: 365,
    lastReviewed: "01-20-2026",
    allowedPurposes: "Marketing, Analytics, Personalisation",
    protection: "Encrypted, Anonymised",
    risk: "High",
  },
  {
    field: "full_name",
    type: "String",
    retention: 365,
    lastReviewed: "01-21-2026",
    allowedPurposes: "Compliance, Support, Billing",
    protection: "Encrypted, Anonymised",
    risk: "High",
  },
  {
    field: "ip_address",
    type: "String",
    retention: 730,
    lastReviewed: "01-22-2026",
    allowedPurposes: "Marketing, Personalisation",
    protection: "Anonymised",
    risk: "Low",
  },
  {
    field: "billing_address",
    type: "String",
    retention: 90,
    lastReviewed: "01-20-2026",
    allowedPurposes: "Compliance",
    protection: "Encrypted",
    risk: "Medium",
  },
  {
    field: "phone_number",
    type: "String",
    retention: 365,
    lastReviewed: "01-19-2026",
    allowedPurposes: "Support, Security",
    protection: "Encrypted",
    risk: "High",
  },
  {
    field: "device_id",
    type: "String",
    retention: 180,
    lastReviewed: "01-18-2026",
    allowedPurposes: "Analytics",
    protection: "Anonymised",
    risk: "Low",
  },
];

const assessments = [
  {
    name: "Third-Party Analytics SDK Update",
    findings:
      "New SDK version collects additional device telemetry. Reviewed data collection scope.",
    resolution: "Approved with custom configuration to limit data collection",
    requestDate: "01-20-2026",
    resolvedDate: "01-25-2026",
    requestedBy: "Sarah Chen",
    status: "Approved",
    risk: "Medium",
  },
  {
    name: "CCPA Compliance Audit",
    findings: "Minor gaps in data deletion workflows for California users",
    resolution: "--",
    requestDate: "01-21-2026",
    resolvedDate: "--",
    requestedBy: "Michael Torres",
    status: "In Review",
    risk: "High",
  },
  {
    name: "New Payment Processor Integration",
    findings:
      "Requires PCI DSS compliance verification and security assessment",
    resolution: "--",
    requestDate: "01-22-2026",
    resolvedDate: "--",
    requestedBy: "Emily Watson",
    status: "Pending",
    risk: "Critical",
  },
  {
    name: "User Profile API Changes",
    findings: "Added new optional fields for user preferences",
    resolution: "No PII impact, approved for deployment",
    requestDate: "01-20-2026",
    resolvedDate: "01-24-2026",
    requestedBy: "David Kim",
    status: "Approved",
    risk: "Low",
  },
];

export default function SensitiveFeatureApprovals() {
    const navigate = useNavigate();
      const [openModal, setOpenModal] = useState(false);
    
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiCards.map((k, i) => (
          <div
            key={i}
            className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 flex justify-between items-center"
          >
            <div>
              <p className="text-sm text-gray-500">{k.title}</p>
              <p className="text-2xl font-semibold mt-1">{k.value}</p>
              <p className={`text-sm mt-1 min-h-4 ${k.deltaColor}`}>
                {k.delta}
              </p>
            </div>
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center ${k.iconBg}`}
            >
              <k.icon className={`w-5 h-5 ${k.iconColor}`} />
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white lg:rounded-2xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold">
              Sensitive Feature Approvals
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Recent Feature Approvals
            </p>
          </div>
          <button onClick={()=>navigate("/sensitive-feature-view")} className="h-10 px-5 rounded-xl bg-[#0E1E38] text-white text-sm">
            View All
          </button>
        </div>

        <div className="overflow-auto scroll-hide lg:w-[calc(100vw-390px)] w-[calc(100vw-46px)] ">
          <table className="w-[2000px] text-sm">
            <thead>
              <tr className="text-left border-b border-[#0000001a]">
                <th className="py-3 px-2 font-semibold">Feature Name</th>
                <th className="py-3 px-2 font-semibold">Requested By</th>
                <th className="py-3 px-2 font-semibold">Request Date</th>
                <th className="py-3 px-2 font-semibold">PII Fields Accessed</th>
                <th className="py-3 px-2 font-semibold">Security Notes</th>
                <th className="py-3 px-2 font-semibold">Assigned Reviewers</th>
                <th className="py-3 px-2 font-semibold">Risk</th>
                <th className="py-3 px-2 font-semibold">Status</th>
                <th className="py-3 px-2 font-semibold text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {approvals.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-[#0000001a] hover:bg-gray-50 transition"
                >
                  <td className="py-4 px-2">
                    <p className="font-medium text-[#111827]">{row.feature}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {row.description}
                    </p>
                  </td>

                  <td className="px-2 text-[#374151]">{row.requestedBy}</td>

                  <td className="px-2 text-[#374151]">{row.date}</td>

                  <td className="px-2 text-[#374151] whitespace-nowrap">
                    {row.pii}
                  </td>

                  <td className="px-2 text-[#374151] max-w-xs">{row.note}</td>

                  <td className="px-2 text-[#374151] whitespace-nowrap">
                    {row.reviewers}
                  </td>

                  <td className="px-2">
                    <span
                      className={`px-3 py-1 text-xs rounded ${riskStyle[row.risk]}`}
                    >
                      {row.risk}
                    </span>
                  </td>

                  <td className="px-2">
                    <span
                      className={`px-3 py-1 text-xs rounded ${statusStyle[row.status]}`}
                    >
                      {row.status}
                    </span>
                  </td>

                  <td className="px-2 text-right">
                    <button onClick={() => setOpenModal(true)} className="h-9 px-4 rounded-xl bg-[#0E1E38] text-white text-xs">
                      {row.action}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
                <ApprovalDecisionModal
                  open={openModal}
                  onClose={() => setOpenModal(false)}
                />
        </div>
      </div>
      <div className="bg-white lg:rounded-2xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold">PII Exposure Rules</h2>
            <p className="text-sm text-gray-500 mt-1">Recent Rules</p>
          </div>
          <button onClick={()=>navigate("/pii-exposure-view")} className="h-10 px-5 rounded-xl bg-[#0E1E38] text-white text-sm">
            View All
          </button>
        </div>

        <div className="overflow-auto scroll-hide lg:w-[calc(100vw-390px)] w-[calc(100vw-46px)] ">
          <table className="min-w-[1500px] w-full text-sm">
            <thead>
              <tr className="text-left border-b border-[#0000001a]">
                <th className="py-3 px-2 font-semibold">PII Field</th>
                <th className="py-3 px-2 font-semibold">
                  Retention Period (days)
                </th>
                <th className="py-3 px-2 font-semibold">Last Reviewed</th>
                <th className="py-3 px-2 font-semibold">Allowed Purposes</th>
                <th className="py-3 px-2 font-semibold">Protection Settings</th>
                <th className="py-3 px-2 font-semibold">Risk</th>
                <th className="py-3 px-2 font-semibold text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {piiData.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-[#0000001a] hover:bg-gray-50 transition"
                >
                  <td className="py-4 px-2">
                    <p className="font-medium text-[#111827]">{row.field}</p>
                    <p className="text-xs text-gray-500 mt-1">{row.type}</p>
                  </td>

                  <td className="px-2 text-[#374151]">{row.retention}</td>

                  <td className="px-2 text-[#374151]">{row.lastReviewed}</td>

                  <td className="px-2 text-[#374151] whitespace-nowrap">
                    {row.allowedPurposes}
                  </td>

                  <td className="px-2 text-[#374151] whitespace-nowrap">
                    {row.protection}
                  </td>

                  <td className="px-2">
                    <span
                      className={`px-3 py-1 text-xs rounded ${riskStyle[row.risk]}`}
                    >
                      {row.risk}
                    </span>
                  </td>

                  <td className="px-2 text-center">
                    <button
                      onClick={() => navigate("/pii-exposure-edit")}
                      className="h-9 w-9 flex items-center justify-center"
                    >
                      <Pencil size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white lg:rounded-2xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold">
              Security Risk Review History
            </h2>
            <p className="text-sm text-gray-500 mt-1">Recent Security Risk</p>
          </div>
          <button onClick={()=>navigate("/security-risk-view")} className="h-10 px-5 rounded-xl bg-[#0E1E38] text-white text-sm">
            View All
          </button>
        </div>

        <div className="overflow-auto scroll-hide lg:w-[calc(100vw-390px)] w-[calc(100vw-46px)] ">
          <table className="w-[2000px] text-sm">
            <thead>
              <tr className="text-left border-b border-[#0000001a]">
                <th className="py-3 px-3 font-semibold">Name</th>
                <th className="py-3 px-3 font-semibold">Findings</th>
                <th className="py-3 px-3 font-semibold">Resolution</th>
                <th className="py-3 px-3 font-semibold">Request Date</th>
                <th className="py-3 px-3 font-semibold">Resolved Date</th>
                <th className="py-3 px-3 font-semibold">Requested By</th>
                <th className="py-3 px-3 font-semibold">Status</th>
                <th className="py-3 px-3 font-semibold">Risk</th>
              </tr>
            </thead>

            <tbody>
              {assessments.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-[#0000001a] hover:bg-gray-50 transition"
                >
                  <td className="py-4 px-3 font-medium text-[#111827]">
                    {row.name}
                  </td>

                  <td className="px-3 text-[#374151] max-w-sm">
                    {row.findings}
                  </td>

                  <td className="px-3 text-[#374151] max-w-sm">
                    {row.resolution}
                  </td>

                  <td className="px-3 text-[#374151]">{row.requestDate}</td>

                  <td className="px-3 text-[#374151]">{row.resolvedDate}</td>

                  <td className="px-3 text-[#374151]">{row.requestedBy}</td>

                  <td className="px-3">
                    <span
                      className={`px-3 py-1 text-xs rounded ${statusStyle[row.status]}`}
                    >
                      {row.status}
                    </span>
                  </td>

                  <td className="px-3">
                    <span
                      className={`px-3 py-1 text-xs rounded ${riskStyle[row.risk]}`}
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
  );
}
