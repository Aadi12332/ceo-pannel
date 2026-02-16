import { useState } from "react";
import MainLayout from "../../../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Calendar, ChevronRight, Search } from "lucide-react";
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
const SensitiveFeatureView = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);

  return (
    <MainLayout>
      <div className="space-y-5">
        <div className="flex justify-between items-start">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="w-5 text-gray-500" />
            <div>
              <h1 className="text-2xl font-semibold">
                Sensitive Feature Approvals
              </h1>
              <p className="text-sm text-gray-500">
                Controlled Testing with Policy-Based Feature Rollouts
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full sm:max-w-72 mb-5">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="w-full pl-9 pr-3 py-2 rounded-lg border border-[#0000001a] focus:outline-none"
          />
        </div>

        <div className="bg-white lg:rounded-2xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
          <div className="overflow-auto scroll-hide lg:w-[calc(100vw-390px)] w-[calc(100vw-46px)] ">
            <table className="w-[2000px] text-sm">
              <thead>
                <tr className="text-left border-b border-[#0000001a]">
                  <th className="py-3 px-2 font-semibold">Feature Name</th>
                  <th className="py-3 px-2 font-semibold">Requested By</th>
                  <th className="py-3 px-2 font-semibold">Request Date</th>
                  <th className="py-3 px-2 font-semibold">
                    PII Fields Accessed
                  </th>
                  <th className="py-3 px-2 font-semibold">Security Notes</th>
                  <th className="py-3 px-2 font-semibold">
                    Assigned Reviewers
                  </th>
                  <th className="py-3 px-2 font-semibold">Risk</th>
                  <th className="py-3 px-2 font-semibold">Status</th>
                  <th className="py-3 px-2 font-semibold text-right">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {approvals.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-[#0000001a] hover:bg-gray-50 transition"
                  >
                    <td className="py-4 px-2">
                      <p className="font-medium text-[#111827]">
                        {row.feature}
                      </p>
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
                      <button
                        onClick={() => setOpenModal(true)}
                        className="h-9 px-4 rounded-xl bg-[#0E1E38] text-white text-xs"
                      >
                        {row.action}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ApprovalDecisionModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </MainLayout>
  );
};

export default SensitiveFeatureView;
