import { X } from "lucide-react";
import { useState } from "react";
import Select from "../common/Select";

export default function AutomationCostCapModal({ open, onClose }) {
  if (!open) return null;

  const [workflow, setWorkflow] = useState(null);
  const [costCap, setCostCap] = useState(null);


  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 !mt-0"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 relative w-[96%] max-w-[612px] max-h-[96vh] overflow-auto"
      >
        <button onClick={onClose} className="absolute lg:top-4 top-3 lg:right-4 right-3">
          <X />
        </button>

        <h2 className="text-[18px] font-bold font-[Arial] mb-1">
          Set Automation Cost Cap
        </h2>
        <p className="text-sm text-gray-500 mb-5">
          Set daily cost caps for automation workflows
        </p>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-1 block">
              Workflow (Optional – leave blank for global cap)
            </label>
            <Select
              placeholder="Select workflow or apply globally..."
              value={workflow}
              onChange={setWorkflow}
              options={[
                { label: "Global", value: "global" },
                { label: "Payout Automation", value: "payout" },
                { label: "Fraud Checks", value: "fraud" },
              ]}
              inputClassName="!h-[48px] !rounded-lg !px-3 !bg-white !border !border-[#D0D5DD] !text-sm"
              listItemClassName="!text-sm !px-3"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">
              Daily Cost Cap ($)
            </label>
            <input
              className="w-full h-[48px] rounded-lg border border-[#D0D5DD] px-3 outline-none"
              placeholder="e.g., 5000"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">
              Action When Cap Reached
            </label>
            <Select
              placeholder="Select..."
              value={costCap}
              onChange={setCostCap}
              options={[
                { label: "Pause automation", value: "pause" },
                { label: "Throttle execution", value: "throttle" },
                { label: "Send alert only", value: "alert" },
              ]}
              inputClassName="!h-[48px] !rounded-lg !px-3 !bg-white !border !border-[#D0D5DD] !text-sm"
              listItemClassName="!text-sm !px-3"
            />
          </div>

          <div className="bg-blue-50 text-blue-700 text-sm rounded-lg p-3">
            <b>Note:</b> This will publish a new policy rule enforced by the
            policy engine.
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button className="px-5 py-2 flex-1 rounded-lg bg-[#101828] text-white">
            Set Cost Cap & Publish Policy
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2 flex-1 rounded-lg border"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
