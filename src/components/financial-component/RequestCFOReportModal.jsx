import { X } from "lucide-react";
import Select from "../common/Select";

export default function RequestCFOReportModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg lg:rounded-xl lg:p-6 p-3 relative w-[96%] max-w-[512px] max-h-[96vh] overflow-auto"
      >
        <button onClick={onClose} className="absolute lg:top-4 top-3 lg:right-4 right-3">
          <X />
        </button>

        <h2 className="text-[18px] font-bold font-[Arial] mb-1">
          Request CFO Report
        </h2>
        <p className="text-sm text-gray-500 mb-5">
          Request detailed financial report from CFO
        </p>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium block mb-1">
              Report Type
            </label>
            <Select
              placeholder="Select report type..."
              value={null}
              onChange={() => {}}
              options={[
                { label: "Revenue Report", value: "revenue" },
                { label: "Expense Breakdown", value: "expense" },
                { label: "Profit & Loss", value: "pl" },
              ]}
              inputClassName="!h-[44px] !rounded-lg !px-3 !bg-white !border !border-[#E5E7EB] !text-[14px]"
              listItemClassName="!px-3 !text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">
              Time Period
            </label>
            <Select
              placeholder="Select period..."
              value={null}
              onChange={() => {}}
              options={[
                { label: "This Month", value: "month" },
                { label: "This Quarter", value: "quarter" },
                { label: "This Year", value: "year" },
              ]}
              inputClassName="!h-[44px] !rounded-lg !px-3 !bg-white !border !border-[#E5E7EB] !text-[14px]"
              listItemClassName="!px-3 !text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">
              Priority
            </label>
            <Select
              placeholder="Select priority..."
              value={null}
              onChange={() => {}}
              options={[
                { label: "Low", value: "low" },
                { label: "Medium", value: "medium" },
                { label: "High", value: "high" },
              ]}
              inputClassName="!h-[44px] !rounded-lg !px-3 !bg-white !border !border-[#E5E7EB] !text-[14px]"
              listItemClassName="!px-3 !text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">
              Additional Notes
            </label>
            <textarea
              placeholder="Any specific areas to focus on..."
              className="w-full h-28 rounded-lg border border-[#E5E7EB] px-3 py-2 outline-none !text-[14px]"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button className="px-5 py-2 flex-1 rounded-lg bg-black text-white text-[14px]">
            Send Request to CFO
          </button>
          <button className="px-5 py-2 flex-1 rounded-lg border text-[14px]">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
