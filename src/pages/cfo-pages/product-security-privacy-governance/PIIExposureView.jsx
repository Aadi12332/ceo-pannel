import { useState } from "react";
import MainLayout from "../../../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Pencil, ChevronRight, Search } from "lucide-react";
import ApprovalDecisionModal from "./ApprovalDecisionModal";
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

const riskStyle = {
  Low: "bg-[#DCFCE7] text-[#166534]",
  Medium: "bg-[#FEF3C7] text-[#B45309]",
  High: "bg-[#FEE2E2] text-[#B91C1C]",
  Critical: "bg-[#FEE2E2] text-[#B91C1C]",
};
const PIIExposureView = () => {
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
                PII Exposure Rules
              </h1>
              <p className="text-sm text-gray-500">
                Manage allowed fields, purpose tags, and data retention policies
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
      </div>
      <ApprovalDecisionModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </MainLayout>
  );
};

export default PIIExposureView;
