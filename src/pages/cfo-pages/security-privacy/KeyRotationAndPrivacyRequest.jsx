import { useState } from "react";
import DeploymentApprovalModal from "../devops-infrastructure/DeploymentApprovalModal";
const keyData = [
  {
    key: "Payments API signing key",
    system: "payments-service",
    cadence: "Every 30d",
    last: "01-20-2026, 15:14",
    next: "02-19-2026",
    status: "Due",
    statusClass: "bg-[#FEF3C7] text-[#B45309]",
  },
  {
    key: "Session token encryption",
    system: "auth",
    cadence: "Every 60d",
    last: "01-20-2026, 09:14",
    next: "03-19-2026",
    status: "Pass",
    statusClass: "bg-[#DCFCE7] text-[#008236]",
  },
  {
    key: "Webhook secret",
    system: "integrations",
    cadence: "Every 90d",
    last: "01-19-2026, 10:14",
    next: "04-18-2026",
    status: "Overdue",
    statusClass: "bg-[#FFDDDB] text-[#CF2027]",
  },
];

const privacyData = [
  {
    type: "Export",
    subject: "RTuser_8f2",
    requested: "01-20-2026, 15:14",
    status: "Needs Approval",
    statusClass: "bg-[#FEF3C7] text-[#B45309]",
    approvals: "1/2",
    expiry: "01-19-2027",
  },
  {
    type: "Delete",
    subject: "user_19b",
    requested: "01-20-2026, 09:14",
    status: "Queued",
    statusClass: "bg-[#DBEAFE] text-[#2563EB]",
    approvals: "0/2",
    expiry: "01-19-2027",
  },
  {
    type: "Export",
    subject: "user_eel",
    requested: "01-19-2026, 10:14",
    status: "Completed",
    statusClass: "bg-[#DCFCE7] text-[#008236]",
    approvals: "1/1",
    expiry: "01-18-2027",
  },
];

export default function KeyRotationAndPrivacyRequest() {
  const [openApproval, setOpenApproval] = useState(false);
  const [decision, setDecision] = useState("approve");

  return (
    <div className="space-y-6">
      <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3">
        <div className="mb-5">
          <h2 className="text-xl font-semibold">Key Rotation</h2>
          <p className="text-sm text-gray-500">
            Rotation cadence and compliance status.
          </p>
        </div>

        <div className="flex items-center justify-between mb-2 text-sm">
          <span>Compliance score</span>
          <span className="text-[#22C55E] font-medium">33%</span>
        </div>

        <div className="flex items-center gap-2 text-sm mb-3">
            <p>Pass: <span className="text-[#008236]">on schedule</span></p>
            <p>Due: <span className="text-[#B45309]">approaching</span></p>
            <p>Overdue: <span className="text-[#CF2027]">breach risk</span></p>
        </div>

        <div className="h-2 bg-gray-200 mb-4">
          <div className="h-2 bg-[#22C55E] w-[33%]" />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full text-sm">
            <thead className="border-b text-left">
              <tr>
                <th className="py-3">Key</th>
                <th>System</th>
                <th>Cadence</th>
                <th>Last Rotated</th>
                <th>Next due</th>
                <th>Compliance</th>
              </tr>
            </thead>
            <tbody>
              {keyData.map((k, i) => (
                <tr key={i} className="border-b last:border-b-0">
                  <td className="py-4">{k.key}</td>
                  <td>{k.system}</td>
                  <td>{k.cadence}</td>
                  <td>{k.last}</td>
                  <td>{k.next}</td>
                  <td>
                    <span
                      className={`px-2 py-0.5 text-xs rounded ${k.statusClass}`}
                    >
                      {k.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3">
        <div className="mb-5">
          <h2 className="text-xl font-semibold">Privacy Request</h2>
          <p className="text-sm text-gray-500">
            User data export/deletion with approval gates and consent logging.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full text-sm">
            <thead className="border-b text-left">
              <tr>
                <th className="py-3">Type</th>
                <th>Subject</th>
                <th>Requested</th>
                <th>Status</th>
                <th>Approvals</th>
                <th>Expiry</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {privacyData.map((p, i) => (
                <tr key={i} className="border-b last:border-b-0">
                  <td className="py-4">{p.type}</td>
                  <td>{p.subject}</td>
                  <td>{p.requested}</td>
                  <td>
                    <span
                      className={`px-2 py-0.5 text-xs rounded ${p.statusClass}`}
                    >
                      {p.status}
                    </span>
                  </td>
                  <td>{p.approvals}</td>
                  <td>{p.expiry}</td>
                  <td>
                    <button className="px-4 py-2 bg-[#0E1E38] text-white rounded-lg" onClick={() => setOpenApproval(true)}>
                      Approve
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
                <DeploymentApprovalModal
        open={openApproval}
        onClose={() => setOpenApproval(false)}
        decision={decision}
        setDecision={setDecision}
      />
        </div>
      </div>
    </div>
  );
}
