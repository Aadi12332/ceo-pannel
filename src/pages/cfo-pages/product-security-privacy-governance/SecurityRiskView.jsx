import { useState } from "react";
import MainLayout from "../../../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Pencil, ChevronRight, Search } from "lucide-react";
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

const riskStyle = {
  Low: "bg-[#DCFCE7] text-[#166534]",
  Medium: "bg-[#FEF3C7] text-[#B45309]",
  High: "bg-[#FEE2E2] text-[#B91C1C]",
  Critical: "bg-[#FEE2E2] text-[#B91C1C]",
};

const statusStyle = {
  Pending: "bg-[#FEF3C7] text-[#B45309]",
  "In Review": "bg-[#DBEAFE] text-[#2563EB]",
  Approved: "bg-[#DCFCE7] text-[#166534]",
};
const SecurityRiskView = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

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
                Security Risk Review History
              </h1>
              <p className="text-sm text-gray-500">
                Complete history of security risk assessments and decisions
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
    </MainLayout>
  );
};

export default SecurityRiskView;
