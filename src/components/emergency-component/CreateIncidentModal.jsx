import { X } from "lucide-react";
import { useState } from "react";
import Select from "../common/Select";

export default function CreateIncidentModal({ onClose }) {
  const [severity, setSeverity] = useState("");

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 !mt-0"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg lg:rounded-xl lg:p-6 p-3 relative w-[96%] max-w-[512px] max-h-[96vh] overflow-auto"
      >
        <button onClick={onClose} className="absolute lg:top-4 top-3 lg:right-4 right-3">
          <X />
        </button>

        <h2 className="text-[18px] font-bold font-[Arial] mb-1">
          Create Incident
        </h2>

        <p className="text-sm text-gray-500 mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium block mb-1">
              Incident Title
            </label>
            <input
              placeholder="Brief description of the issue..."
              className="w-full h-[44px] rounded-lg border px-3 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">
              Severity
            </label>
            <Select
              placeholder="Select severity..."
              value={severity}
              onChange={setSeverity}
              options={[
                { label: "Low", value: "low" },
                { label: "Medium", value: "medium" },
                { label: "High", value: "high" },
                { label: "Critical", value: "critical" },
              ]}
              inputClassName="!h-[44px] !rounded-lg !px-3 !bg-white !border !text-base"
              listItemClassName="!px-3 !text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">
              Affected Services
            </label>
            <input
              placeholder="e.g., Payment Processing, Payout System"
              className="w-full h-[44px] rounded-lg border px-3 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">
              Initial Assessment
            </label>
            <textarea
              placeholder="What happened and what's the current state?..."
              className="w-full h-28 rounded-lg border p-3 outline-none"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button className="px-6 py-2 flex-1 rounded-lg bg-[#0E1E38] text-white">
            Create Incident
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
