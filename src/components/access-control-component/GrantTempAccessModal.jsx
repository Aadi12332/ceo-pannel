import { X } from "lucide-react";
import { useState } from "react";
import Select from "../common/Select";

export default function GrantTempAccessModal({ open, onClose }) {
  const [priority, setPriority] = useState("");
  const [priority1, setPriority1] = useState("");
  const [priority2, setPriority2] = useState("");

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[96%] max-w-[596px] max-h-[96vh] overflow-auto scroll-hide lg:rounded-xl rounded-lg lg:p-6 p-3 relative"
      >
        <button onClick={onClose} className="absolute lg:top-4 top-3 lg:right-4 right-3">
          <X />
        </button>

        <h2 className="text-[18px] font-bold font-[Arial] mb-1">
          Grant Temporary Access
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-700 mb-5">
          <b>Policy Note:</b> Granting high-risk access may require CEO + CTO/LPD
          co-approval.
        </div>

        <div className="space-y-4 text-sm">
          <div>
            <label className="font-medium block mb-1">Grant Access To</label>
            <Select
              value={priority}
              onChange={setPriority}
              placeholder="Select user..."
              options={[
                { label: "User A", value: "a" },
                { label: "User B", value: "b" },
              ]}
              inputClassName="!h-[44px] !rounded-lg !bg-white !border !border-[#D0D5DD] !text-sm !px-3"
              listItemClassName="!text-sm !px-3"
            />
          </div>

          <div>
            <label className="font-medium block mb-1">Tool / Resource</label>
            <Select
              value={priority1}
              onChange={setPriority1}
              placeholder="Select tool..."
              options={[
                { label: "Payments", value: "payments" },
                { label: "Dashboard", value: "dashboard" },
              ]}
              inputClassName="!h-[44px] !rounded-lg !bg-white !border !border-[#D0D5DD] !text-sm !px-3"
              listItemClassName="!text-sm !px-3"
            />
          </div>

          <div>
            <label className="font-medium block mb-1">Scope</label>
            <input
              className="w-full h-[44px] rounded-lg border border-[#D0D5DD] px-3 text-sm"
              placeholder="e.g., Read-only, NYC region only, up to $500..."
            />
          </div>

          <div>
            <label className="font-medium block mb-1">Duration</label>
            <Select
              value={priority2}
              onChange={setPriority2}
              placeholder="Select duration..."
              options={[
                { label: "24 Hours", value: "24h" },
                { label: "7 Days", value: "7d" },
              ]}
              inputClassName="!h-[44px] !rounded-lg !bg-white !border !border-[#D0D5DD] !text-sm !px-3"
              listItemClassName="!text-sm !px-3"
            />
          </div>

          <div>
            <label className="font-medium block mb-1">
              Justification (Required)
            </label>
            <textarea
              className="w-full h-28 rounded-lg bg-[#F2F4F7] p-3 outline-none"
              placeholder="Why is this access needed?..."
            />
          </div>
        </div>

        <div className="flex gap-3 justify-end mt-6">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg border text-sm"
          >
            Cancel
          </button>
          <button className="px-5 py-2 rounded-lg bg-black text-white text-sm">
            Grant Temporary Access
          </button>
        </div>
      </div>
    </div>
  );
}
