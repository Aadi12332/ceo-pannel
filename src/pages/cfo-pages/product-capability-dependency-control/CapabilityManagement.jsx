import { useState } from "react";
import { Search } from "lucide-react";
import Select from "../../../components/common/Select";

const exceptionData = [
  {
    created: "01-27-2026, 14:46:48",
    product: "Ledger",
    capability: "Data Export",
    reason:
      "Temporary export access needed for a data migration. Requesting exception for a limited window.",
    status: "Approved",
    reviewerNote:
      "Approved for 30 days; ensure Audit Trail remains enabled and complete SSO runbook review.",
  },
  {
    created: "01-27-2026, 14:46:48",
    product: "Gateway",
    capability: "Enterprise SSO",
    reason:
      "Enterprise customer contract requires SSO for initial launch.",
    status: "Denied",
    reviewerNote:
      "Use the supported migration toolchain; exports must remain behind standard approvals.",
  },
];

const statusStyleExceptionData = {
  Approved: "bg-[#D1FADF] text-[#067647]",
  Denied: "bg-[#FEE4E2] text-[#B42318]",
};

export default function CapabilityManagement() {
  const [activeTab, setActiveTab] = useState("registry");
  const [Type, setType] = useState("");
  const [subActive, setSubActive] = useState("blocked");

  const subtabs = [
    { key: "blocked", label: "Blocked Dependencies" },
    { key: "exception", label: "Exception Requests" },
  ];

  const tabs = [
    { key: "registry", label: "Capability Registry" },
    { key: "mapping", label: "Dependency Mapping" },
    { key: "violation", label: "Violation Review" },
  ];

  const registryData = [
    { name: "Audit Trail", owner: "Security", status: "Active" },
    { name: "Data Export", owner: "Platform", status: "Deprecated" },
    { name: "AI Summaries", owner: "Applied AI", status: "Draft" },
    { name: "Billing Hooks", owner: "Finance Ops", status: "Active" },
    { name: "Enterprise SSO", owner: "Identity", status: "Active" },
    { name: "Data Export", owner: "Platform", status: "Deprecated" },
    { name: "AI Summaries", owner: "Applied AI", status: "Draft" },
    { name: "Billing Hooks", owner: "Finance Ops", status: "Active" },
    { name: "Enterprise SSO", owner: "Identity", status: "Active" },
    { name: "Data Export", owner: "Platform", status: "Deprecated" },
    { name: "AI Summaries", owner: "Applied AI", status: "Draft" },
    { name: "Billing Hooks", owner: "Finance Ops", status: "Active" },
    { name: "Enterprise SSO", owner: "Identity", status: "Active" },
  ];

  const statusStyle = {
    Active: "bg-[#D1FADF] text-[#027A48]",
    Deprecated: "bg-[#D9E8FF] text-[#175CD3]",
    Draft: "bg-[#FEF3C7] text-[#B45309]",
  };

  return (
    <div className="space-y-5 mt-10">
      <div className="flex gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-6 py-3 rounded-full lg:text-[18px] text-sm lg:h-[52px] h-10 items-center flex font-medium transition ${
              activeTab === tab.key
                ? "bg-[#0E1E38] text-white"
                : "bg-[#fff] text-[#344054]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "registry" && (
        <div className="bg-white rounded-lg lg:rounded-xl lg:p-6 p-3 border border-[#0000001a]">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative sm:w-72">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                placeholder="Search"
                className="w-full pl-9 pr-3 py-2 h-12 lg:!rounded-xl !rounded-lg border border-[#0000001a] outline-none"
              />
            </div>
            <div className="w-[200px]">
              <Select
                placeholder="All Status"
                value={Type}
                onChange={(value) => {
                  setType(value);
                }}
                options={[
                  { value: "Active", label: "Active" },
                  { value: "Draft", label: "Draft" },
                  { value: "Deprecated", label: "Deprecated" },
                ]}
                inputClassName="!h-12 !mt-0 lg:!rounded-xl !rounded-lg !px-3 !text-sm !bg-white !border !border-[#0000001a]"
                listItemClassName="!px-3 !text-sm"
                listParentClassName="!min-h-max"
              />
            </div>
          </div>

          <div className="overflow-auto scroll-hide h-[calc(100vh-400px)]">
            <table className="w-full text-sm min-w-[800px]">
              <thead>
                <tr className="border-b border-[#0000001a] text-left">
                  <th className="py-3 font-bold">Capability Name</th>
                  <th className="py-3 font-bold">Owner</th>
                  <th className="py-3 font-bold">Status</th>
                  <th className="py-3 font-bold text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {registryData.map((item, i) => (
                  <tr
                    key={i}
                    className="border-b border-[#0000001a] last:border-b-0"
                  >
                    <td className="py-4">{item.name}</td>
                    <td>{item.owner}</td>
                    <td>
                      <span
                        className={`px-3 py-1 text-xs rounded ${statusStyle[item.status]}`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="text-center w-[200px]">
                      <button className="px-4 py-2 h-10 flex items-center justify-center w-[200px] bg-[#0E1E38] text-white rounded-lg text-sm">
                        {item.status === "Active"
                          ? "Mark Deprecated"
                          : "Mark Active"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "mapping" && (
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-3 bg-white rounded-lg lg:rounded-xl lg:p-6 p-3 border border-[#0000001a] space-y-4">
            <p className="text-sm text-gray-500 pb-2">Product</p>
            <p className="text-sm text-gray-500 border-b border-[#0000001a] pb-4">
              Select a product to manage its allowed capabilities.
            </p>
            <div className="space-y-2">
              <button className="w-full text-left h-11 flex items-center px-4 py-2 rounded-full bg-[#0E1E38] text-white">
                Ledger
              </button>
              <button className="w-full text-left h-11 flex items-center px-4 py-2 rounded-full bg-[#F2F4F7]">
                Risk Studio
              </button>
              <button className="w-full text-left h-11 flex items-center px-4 py-2 rounded-full bg-[#F2F4F7]">
                Gateway
              </button>
            </div>
          </div>

          <div className="col-span-9 bg-white rounded-lg lg:rounded-xl lg:p-6 p-3 border border-[#0000001a]">
            <div className="flex items-center gap-3 justify-between">
              <p className="text-sm text-gray-500 mb-4">
                Product → Capability links
              </p>
              <p className="text-sm text-gray-500 mb-4">Editing Ladger</p>
            </div>
            <div className="overflow-auto scroll-hide h-[calc(100vh-360px)]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#0000001a] text-left">
                    <th className="py-3">Use</th>
                    <th className="py-3">Capability</th>
                    <th className="py-3">Owner</th>
                    <th className="py-3">Requires</th>
                  </tr>
                </thead>
                <tbody>
                  {registryData.map((item, i) => (
                    <tr
                      key={i}
                      className="border-b border-[#0000001a] last:border-b-0"
                    >
                      <td className="py-4">
                        <input
                          type="checkbox"
                          className="w-5 h-5 accent-black cursor-pointer"
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.owner}</td>
                      <td>
                        <span className="px-3 py-1 text-xs rounded bg-[#D9E8FF] text-[#175CD3]">
                          Audit Trail
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

      {activeTab === "violation" && (
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3 bg-white rounded-lg lg:rounded-xl lg:p-6 p-3 border border-[#0000001a] space-y-4">
            <p className="text-sm text-gray-500 pb-2">Product</p>
            <p className="text-sm text-gray-500 border-b border-[#0000001a] pb-4">
              Select a product to manage its allowed capabilities.
            </p>
            <div className="space-y-2">
              {subtabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setSubActive(tab.key)}
                  className={`w-full text-left h-11 flex items-center px-4 rounded-full text-base font-medium transition ${
                    subActive === tab.key
                      ? "bg-[#0E1E38] text-white"
                      : "bg-[#F2F4F7] text-[#344054]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {subActive === "blocked" && (
            <div className="col-span-9 bg-white rounded-lg lg:rounded-xl lg:p-6 p-3 border border-[#0000001a]">
              <h3 className="font-semibold">Violations</h3>
              <p className="text-sm text-gray-500 mb-4">
                A violation occurs when a product enables a capability but does
                not enable its required capabilities.
              </p>

              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#0000001a] text-left">
                    <th className="py-3">Product</th>
                    <th className="py-3">Capability</th>
                    <th className="py-3">Missing Prerequisites</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-4">Risk Studio</td>
                    <td>Security</td>
                    <td>
                      <span className="px-3 py-1 text-xs rounded bg-[#D9E8FF] text-[#175CD3]">
                        Audit Trail
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {subActive === "exception" && (
            <div className="col-span-9 bg-white rounded-lg lg:rounded-xl lg:p-6 p-3 border border-[#0000001a]">
              <h3 className="font-semibold">Exception Requests</h3>
              <p className="text-sm text-gray-500 mb-4">
                Approvals should be time-boxed and include an owner +
                mitigation.
              </p>

              
<div className="overflow-x-auto scroll-hide">
  <table className="min-w-[1600px] w-full text-sm">
    <thead>
      <tr className="border-b border-[#0000001a] text-left">
        <th className="py-3 px-3 font-semibold">Created</th>
        <th className="py-3 px-3 font-semibold">Product</th>
        <th className="py-3 px-3 font-semibold">Capability</th>
        <th className="py-3 px-3 font-semibold">Reason</th>
        <th className="py-3 px-3 font-semibold">Status</th>
        <th className="py-3 px-3 font-semibold">Reviewer note</th>
        <th className="py-3 px-3 font-semibold text-center">Actions</th>
      </tr>
    </thead>

    <tbody>
      {exceptionData.map((row, index) => (
        <tr
          key={index}
          className="border-b border-[#0000001a] align-top"
        >
          <td className="py-4 px-3 whitespace-nowrap">{row.created}</td>

          <td className="py-4 px-3 whitespace-nowrap">{row.product}</td>

          <td className="py-4 px-3 whitespace-nowrap">
            {row.capability}
          </td>

          <td className="py-4 px-3 min-w-[320px] text-[#475467]">
            {row.reason}
          </td>

          <td className="py-4 px-3">
            <span
              className={`px-3 py-1 text-xs rounded ${statusStyleExceptionData[row.status]}`}
            >
              {row.status}
            </span>
          </td>

          <td className="py-4 px-3 min-w-[320px] text-[#475467]">
            {row.reviewerNote}
          </td>

          <td className="py-4 px-3 text-center">
            <button
              disabled
              className="px-5 py-2 rounded-lg bg-[#E4E7EC] text-[#98A2B3] cursor-not-allowed"
            >
              Approve
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
