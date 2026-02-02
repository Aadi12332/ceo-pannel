import { useState } from "react";
import { X, Calendar } from "lucide-react";
import Select from "../common/Select";

export default function BudgetCeilingModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-xl p-6 relative w-[96%] max-w-[680px] max-h-[96vh] overflow-auto"
      >
        <button onClick={onClose} className="absolute top-4 right-4">
          <X />
        </button>

        <h2 className="text-[18px] font-bold font-[Arial] mb-1">
          Set Budget Ceiling
        </h2>
        <p className="text-sm text-gray-500 mb-5">
          Set budget caps that will be enforced via policy engine
        </p>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium block mb-1">
              Budget Category
            </label>
            <Select
              placeholder="Select category..."
              value={null}
              onChange={() => {}}
              options={[
                { label: "Marketing", value: "marketing" },
                { label: "Operations", value: "operations" },
                { label: "Technology", value: "technology" },
              ]}
              inputClassName="!h-[44px] !rounded-lg !px-3 !bg-white !border !border-[#E5E7EB] !text-[14px]"
              listItemClassName="!px-3 !text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">
              Monthly Cap ($)
            </label>
            <input
              placeholder="e.g., 150000"
              className="w-full h-[44px] rounded-lg border border-[#E5E7EB] px-3 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">
              Effective Date
            </label>
            <div className="relative">
              <input
              type="date"
                placeholder="dd / mm / yyyy"
                className="w-full h-[44px] rounded-lg border border-[#E5E7EB] px-3 outline-none"
              />
              {/* <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" /> */}
            </div>
          </div>

          <div className="bg-blue-50 text-blue-700 text-sm rounded-lg p-3">
            <b>Note:</b> This will publish a new policy rule that automatically
            enforces the budget cap.
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button className="px-5 py-2 rounded-lg bg-black text-white text-sm flex-1">
            Set Budget Cap & Publish Policy
          </button>
          <button className="px-5 py-2 rounded-lg border text-sm flex-1">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
