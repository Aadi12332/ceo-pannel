import { X } from "lucide-react";

export default function OpenAuditCaseModal({ onClose }) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg lg:rounded-xl lg:p-6 p-3 relative overflow-auto w-[96%] max-w-[596px] max-h-[96vh]"
      >
        <button onClick={onClose} className="absolute lg:top-4 top-3 lg:right-4 right-3">
          <X />
        </button>

        <h2 className="text-[18px] font-bold font-[Arial] mb-1">
          Open Audit Case
        </h2>

        <p className="text-sm text-[#667085] mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        <div className="space-y-5">
          <div>
            <label className="text-sm font-medium mb-1 block">
              Case Title
            </label>
            <input
              className="w-full h-11 rounded-lg border bg-white px-3 outline-none"
              placeholder="e.g., Investor DD – Q1"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">
              Purpose (Required)
            </label>
            <textarea
              className="w-full h-28 rounded-lg border bg-white p-3 outline-none"
              placeholder="Why is this audit case being opened?..."
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">
              Scope
            </label>
            <textarea
              className="w-full h-28 rounded-lg border bg-white p-3 outline-none"
              placeholder="What data/systems/time periods are in scope?..."
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">
              Assign Owner
            </label>
            <input
              className="w-full h-11 rounded-lg border bg-white px-3 outline-none"
              placeholder="e.g., John Deo COO"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-8">

          <button className="px-6 flex-1 py-2 rounded-lg bg-[#0E1E38] text-white">
            Open Case
          </button>
          <button
            onClick={onClose}
            className="px-6 flex-1 py-2 rounded-lg border"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
