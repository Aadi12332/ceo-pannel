import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import Select from "../../../components/common/Select";
import ApprovalActionModal from "../../../components/approval-component/ApprovalActionModal";
import { ProductApprovalModal } from "./ProductApprovalModal";

const approvalData = [
  {
    id: "APQ-1042",
    product: "Global Product Catalog",
    change: "New lifecycle state: ‘Sunset Pending’",
    date: "01-27-2026, 14:12",
    risk: "Medium",
    status: "Awaiting Review",
  },
  {
    id: "APQ-1043",
    product: "Pricing Rules Engine",
    change: "Increase max discount threshold to 35%",
    date: "01-26-2026, 10:12",
    risk: "High",
    status: "Escalated",
  },
  {
    id: "APQ-1044",
    product: "Compliance Labels",
    change: "Add restricted label: ‘Export-Controlled’",
    date: "01-25-2026, 11:12",
    risk: "High",
    status: "Awaiting Review",
  },
  {
    id: "APQ-1045",
    product: "Order Orchestrator",
    change: "Enable region fallback routing",
    date: "01-24-2026, 12:12",
    risk: "Low",
    status: "Awaiting Review",
  },
  {
    id: "APQ-1046",
    product: "Global Product Catalog",
    change: "New lifecycle state: ‘Sunset Pending’",
    date: "01-23-2026, 14:12",
    risk: "Medium",
    status: "Awaiting Review",
  },
];

const auditData = [
  {
    id: "APQ-1042",
    product: "Global Product Catalog",
    reason: "Threshold exceeds policy PRC-12 (requires VP approval)",
    actor: "Governance Bot",
    time: "01-27-2026",
    timestamp: "01-27-2026, 14:12",
    correlation: "corr_3n8bKp",
    status: "Block",
  },
  {
    id: "APQ-1043",
    product: "Pricing Rules Engine",
    reason: "Medium risk change flagged for second reviewer",
    actor: "A. Chen",
    time: "01-26-2026",
    timestamp: "01-26-2026, 10:12",
    correlation: "corr_xla0Qy",
    status: "Escalate",
  },
  {
    id: "APQ-1044",
    product: "Compliance Labels",
    reason: "Label meets export compliance requirements",
    actor: "Policy Admin",
    time: "01-25-2026",
    timestamp: "01-25-2026, 11:12",
    correlation: "corr_p9V2tM",
    status: "Approve",
  },
  {
    id: "APQ-1045",
    product: "Order Orchestrator",
    reason: "Low risk; rollback plan attached",
    actor: "K. Smith",
    time: "01-24-2026",
    timestamp: "01-24-2026, 12:12",
    correlation: "corr_7wJ4sN",
    status: "Approve",
  },
];

const blockedData = [
  {
    id: "APQ-1042",
    product: "Global Product Catalog",
    action: "Raise max discount threshold",
    actor: "Governance Bot",
    timestamp: "01-27-2026, 14:12",
    blockReason: "Missing Approval",
  },
  {
    id: "APQ-1043",
    product: "Pricing Rules Engine",
    action: "Remove ‘Restricted’ label",
    actor: "A. Chen",
    timestamp: "01-26-2026, 10:12",
    blockReason: "Data Classification",
  },
  {
    id: "APQ-1044",
    product: "Compliance Labels",
    action: "Bulk update lifecycle states",
    actor: "Policy Admin",
    timestamp: "01-25-2026, 11:12",
    blockReason: "Policy",
  },
  {
    id: "APQ-1045",
    product: "Order Orchestrator",
    action: "Raise max discount threshold",
    actor: "K. Smith",
    timestamp: "01-24-2026, 12:12",
    blockReason: "Missing Approval",
  },
  {
    id: "APQ-1046",
    product: "Global Product Catalog",
    action: "Remove ‘Restricted’ label",
    actor: "Governance Bot",
    timestamp: "01-23-2026, 14:12",
    blockReason: "Data Classification",
  },
  {
    id: "APQ-1047",
    product: "Pricing Rules Engine",
    action: "Remove ‘Restricted’ label",
    actor: "A. Chen",
    timestamp: "01-23-2026, 14:12",
    blockReason: "Policy",
  },
  {
    id: "APQ-1048",
    product: "Compliance Labels",
    action: "Bulk update lifecycle states",
    actor: "Policy Admin",
    timestamp: "01-23-2026, 14:12",
    blockReason: "Missing Approval",
  },
  {
    id: "APQ-1049",
    product: "Order Orchestrator",
    action: "Bulk update lifecycle states",
    actor: "K. Smith",
    timestamp: "01-23-2026, 14:12",
    blockReason: "Missing Approval",
  },
];

const riskStyle = {
  High: "bg-[#FEE2E2] text-[#DC2626]",
  Medium: "bg-[#FEF3C7] text-[#B45309]",
  Low: "bg-[#DCFCE7] text-[#15803D]",
};

const statusStyle = {
  "Awaiting Review": "bg-[#EDE9FE] text-[#7C3AED]",
  Escalated: "bg-[#DBEAFE] text-[#2563EB]",
};

const statusAuditStyle = {
  Block: "bg-[#FEE2E2] text-[#B91C1C]",
  Escalate: "bg-[#DBEAFE] text-[#2563EB]",
  Approve: "bg-[#DCFCE7] text-[#15803D]",
};

const blockReasonStyle = {
  "Missing Approval": "bg-[#FEE2E2] text-[#DC2626]",
  "Data Classification": "bg-[#DBEAFE] text-[#2563EB]",
  Policy: "bg-[#FEF3C7] text-[#B45309]",
};

export default function ApprovalQueue() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [product, setProduct] = useState("");
  const [action, setAction] = useState("");
  const [risk, setRisk] = useState("");
  const [activeTab, setActiveTab] = useState("approval");
  const [openProduct, setOpenProduct] = useState(false);

  const row = {
    id: "APQ-1042",
    product: "Global Product Catalog",
  };
  const tabs = [
    { key: "approval", label: "Approval Queue" },
    { key: "audit", label: "Audit History" },
    { key: "blocked", label: "Blocked Actions" },
  ];

  const filtered = useMemo(() => {
    return approvalData.filter((item) => {
      const matchesSearch =
        item.product.toLowerCase().includes(search.toLowerCase()) ||
        item.change.toLowerCase().includes(search.toLowerCase()) ||
        item.id.toLowerCase().includes(search.toLowerCase());

      const matchesStatus = status ? item.status === status : true;
      const matchesRisk = risk ? item.risk === risk : true;

      return matchesSearch && matchesStatus && matchesRisk;
    });
  }, [search, status, risk]);

  return (
    <>
      <div className="flex flex-wrap gap-4 mb-5">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;

          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-8 h-14 rounded-full text-base font-medium transition
              ${
                isActive
                  ? "bg-[#0E1E38] text-white"
                  : "bg-[#fff] text-[#111827]"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {activeTab === "approval" && (
        <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
          <h2 className="text-2xl font-semibold text-[#111827]">
            Approval Queue
          </h2>
          <p className="text-sm text-[#6B7280] mt-1">
            Triage incoming product changes with risk and policy context.
          </p>

          <div className="flex flex-col lg:flex-row gap-4 mt-6">
            <div className="relative w-full lg:w-[320px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 text-[#6B7280]" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
                className="w-full h-11 pl-9 pr-3 rounded-xl border border-[#0000001a] outline-none text-sm"
              />
            </div>

            <div className="w-full lg:w-[220px]">
              <Select
                placeholder="All Status"
                value={status}
                onChange={(val) => setStatus(val)}
                options={[
                  { value: "", label: "All Status" },
                  { value: "Awaiting Review", label: "Awaiting Review" },
                  { value: "Escalated", label: "Escalated" },
                ]}
                inputClassName="!h-11 !rounded-xl !px-3 !text-sm !bg-white !border !border-[#0000001a]"
                listItemClassName="!px-3 !text-sm"
                listParentClassName=""
              />
            </div>

            <div className="w-full lg:w-[220px]">
              <Select
                placeholder="All Risk Level"
                value={risk}
                onChange={(val) => setRisk(val)}
                options={[
                  { value: "", label: "All Risk Level" },
                  { value: "High", label: "High" },
                  { value: "Medium", label: "Medium" },
                  { value: "Low", label: "Low" },
                ]}
                inputClassName="!h-11 !rounded-xl !px-3 !text-sm !bg-white !border !border-[#0000001a]"
                listItemClassName="!px-3 !text-sm"
                listParentClassName=""
              />
            </div>
          </div>

          <div className="mt-6 overflow-auto scroll-hide lg:w-[calc(100vw-390px)] w-[calc(100vw-46px)]">
            <table className="min-w-[1600px] w-full text-sm">
              <thead>
                <tr className="text-left border-b border-[#0000001a]">
                  <th className="py-3 px-4 font-semibold">ID</th>
                  <th className="py-3 px-4 font-semibold">Product</th>
                  <th className="py-3 px-4 font-semibold">Change</th>
                  <th className="py-3 px-4 font-semibold">Submitted Date</th>
                  <th className="py-3 px-4 font-semibold">Risk</th>
                  <th className="py-3 px-4 font-semibold">Status</th>
                  <th className="py-3 px-4 font-semibold text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((row) => (
                  <tr key={row.id} className="border-b border-[#0000001a]">
                    <td className="py-4 px-4 text-[#374151]">{row.id}</td>
                    <td className="px-4 text-[#111827] font-medium">
                      {row.product}
                    </td>
                    <td className="px-4 text-[#374151]">{row.change}</td>
                    <td className="px-4 text-[#374151] whitespace-nowrap">
                      {row.date}
                    </td>
                    <td className="px-4">
                      <span
                        className={`px-3 py-1 text-xs rounded-md ${riskStyle[row.risk]}`}
                      >
                        {row.risk}
                      </span>
                    </td>
                    <td className="px-4">
                      <span
                        className={`px-3 py-1 text-xs rounded-md ${statusStyle[row.status]}`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="px-4 text-center">
                      <button onClick={() => setOpenProduct(true)} className="px-5 h-10 rounded-xl bg-[#0E1E38] text-white text-sm">
                        Approve/Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <ProductApprovalModal
              open={openProduct}
              onClose={() => setOpenProduct(false)}
              data={row}
            />
          </div>
        </div>
      )}

      {activeTab === "audit" && (
        <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
          <h2 className="text-2xl font-semibold text-[#111827]">
            Audit History
          </h2>
          <p className="text-sm text-[#6B7280] mt-1">
            Filter by product, actor, and action type to reconstruct decisions.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <div className="relative w-full md:w-1/3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] w-4 h-4" />
              <input
                placeholder="Search"
                className="w-full h-11 pl-9 pr-3 rounded-xl border border-[#0000001a] text-sm outline-none"
              />
            </div>

            <div className="w-full md:w-1/4">
              <Select
                placeholder="All Product"
                value={product}
                onChange={setProduct}
                options={[
                  { value: "all", label: "All Product" },
                  { value: "catalog", label: "Global Product Catalog" },
                  { value: "pricing", label: "Pricing Rules Engine" },
                ]}
                inputClassName="!h-11 !rounded-xl !px-3 !text-sm !bg-white !border !border-[#0000001a]"
                listItemClassName="!px-3 !text-sm"
              />
            </div>

            <div className="w-full md:w-1/4">
              <Select
                placeholder="All Actions"
                value={action}
                onChange={setAction}
                options={[
                  { value: "all", label: "All Actions" },
                  { value: "approve", label: "Approve" },
                  { value: "block", label: "Block" },
                  { value: "escalate", label: "Escalate" },
                ]}
                inputClassName="!h-11 !rounded-xl !px-3 !text-sm !bg-white !border !border-[#0000001a]"
                listItemClassName="!px-3 !text-sm"
              />
            </div>
          </div>

          <div className="mt-6 overflow-auto scroll-hide lg:w-[calc(100vw-390px)] w-[calc(100vw-46px)]">
            <table className="min-w-[1600px] w-full text-sm">
              <thead>
                <tr className="text-left border-b border-[#0000001a]">
                  <th className="py-3 px-4 font-semibold">ID</th>
                  <th className="py-3 px-4 font-semibold">Product</th>
                  <th className="py-3 px-4 font-semibold">Reason</th>
                  <th className="py-3 px-4 font-semibold">Actor</th>
                  <th className="py-3 px-4 font-semibold">Time</th>
                  <th className="py-3 px-4 font-semibold">Timestamp</th>
                  <th className="py-3 px-4 font-semibold">Correlation</th>
                  <th className="py-3 px-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {auditData.map((row) => (
                  <tr
                    key={row.id}
                    className="border-b border-[#0000001a] hover:bg-gray-50 transition"
                  >
                    <td className="py-4 px-4">{row.id}</td>
                    <td className="px-4">{row.product}</td>
                    <td className="px-4 max-w-xs">{row.reason}</td>
                    <td className="px-4">{row.actor}</td>
                    <td className="px-4">{row.time}</td>
                    <td className="px-4">{row.timestamp}</td>
                    <td className="px-4">{row.correlation}</td>
                    <td className="px-4">
                      <span
                        className={`px-3 py-1 text-xs rounded ${statusAuditStyle[row.status]}`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "blocked" && (
        <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
          <h2 className="text-2xl font-semibold text-[#111827]">
            Blocked Actions
          </h2>
          <p className="text-sm text-[#6B7280] mt-1">
            Review and unblock attempts that were stopped by governance rules.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <div className="relative w-full md:w-1/3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] w-4 h-4" />
              <input
                placeholder="Search"
                className="w-full h-11 pl-9 pr-3 rounded-xl border border-[#0000001a] text-sm outline-none"
              />
            </div>
          </div>

          <div className="mt-6 overflow-auto scroll-hide lg:w-[calc(100vw-390px)] w-[calc(100vw-46px)]">
             <table className="min-w-[1400px] w-full text-sm">
    <thead>
      <tr className="text-left border-b border-[#0000001a]">
        <th className="py-3 px-4 font-semibold">ID</th>
        <th className="py-3 px-4 font-semibold">Product</th>
        <th className="py-3 px-4 font-semibold">Attempted Action</th>
        <th className="py-3 px-4 font-semibold">Actor</th>
        <th className="py-3 px-4 font-semibold">Timestamp</th>
        <th className="py-3 px-4 font-semibold">Block reason</th>
      </tr>
    </thead>

    <tbody>
      {blockedData.map((row) => (
        <tr
          key={row.id}
          className="border-b border-[#0000001a] hover:bg-gray-50 transition"
        >
          <td className="py-4 px-4 text-[#374151]">{row.id}</td>
          <td className="px-4 text-[#374151]">{row.product}</td>
          <td className="px-4 text-[#374151]">{row.action}</td>
          <td className="px-4 text-[#374151]">{row.actor}</td>
          <td className="px-4 text-[#374151] whitespace-nowrap">
            {row.timestamp}
          </td>
          <td className="px-4">
            <span
              className={`px-3 py-1 text-xs rounded-md ${blockReasonStyle[row.blockReason]}`}
            >
              {row.blockReason}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
          </div>
        </div>
      )}
    </>
  );
}
