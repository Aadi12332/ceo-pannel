import { X, Calendar } from "lucide-react";
import { useState } from "react";
import Select from "../common/Select";

export default function RequestAccessReviewModal({ open, onClose }) {
  const [scope, setScope] = useState("");

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[96%] max-w-[596px] max-h-[96vh] overflow-auto rounded-xl p-6 relative"
      >
        <button onClick={onClose} className="absolute top-4 right-4">
          <X />
        </button>

        <h2 className="text-[18px] font-bold font-[Arial] mb-1">
          Request Access Review
        </h2>
        <p className="text-sm text-gray-500 mb-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <div className="space-y-4 text-sm">
          <div>
            <label className="font-medium block mb-1">Review Scope</label>
            <Select
              value={scope}
              onChange={setScope}
              placeholder="Select scope..."
              options={[
                { label: "Full Access", value: "full" },
                { label: "Read Only", value: "read" },
                { label: "Limited", value: "limited" },
              ]}
              inputClassName="!h-[44px] !rounded-lg !bg-white !border !border-[#D0D5DD] !text-sm !px-3"
              listItemClassName="!text-sm !px-3"
            />
          </div>

          <div>
            <label className="font-medium block mb-1">Effective Date</label>
            <div className="relative">
              <input
                className="w-full h-[44px] rounded-lg border border-[#D0D5DD] px-3 pr-10 text-sm"
                placeholder="dd / mm / yyyy"
              />
              <Calendar className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          <div>
            <label className="font-medium block mb-1">Review Focus</label>
            <textarea
              className="w-full h-28 rounded-lg bg-[#F2F4F7] p-3 outline-none"
              placeholder="What should reviewers focus on?..."
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
            Request Access Review
          </button>
        </div>
      </div>
    </div>
  );
}
