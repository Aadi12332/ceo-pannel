import { useState } from "react";
import { X } from "lucide-react";

export function ProductApprovalModal({ open, onClose, data }) {
  const [decision, setDecision] = useState("approve");
  const [comment, setComment] = useState("");

  if (!open) return null;

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div onClick={(e)=>e.stopPropagation()} className="w-full max-w-2xl bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a] relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-semibold text-[#111827]">
          Product Approval
        </h2>
        <p className="text-sm text-[#6B7280] mt-1">
          {data?.id} — {data?.product}
        </p>

        <div className="mt-6">
          <p className="text-sm font-medium mb-3">Select Option</p>

          <div className="flex items-center gap-8">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={decision === "approve"}
                onChange={() => setDecision("approve")}
                className="w-5 h-5 accent-[#16A34A]"
              />
              <span className="text-[#16A34A] font-medium">
                Approve
              </span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={decision === "reject"}
                onChange={() => setDecision("reject")}
                className="w-5 h-5 accent-[#DC2626]"
              />
              <span className="text-[#DC2626] font-medium">
                Reject
              </span>
            </label>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm font-medium mb-2">Comment</p>
          <textarea
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full rounded-xl border border-[#0000001a] p-3 text-sm resize-none focus:outline-none"
          />
        </div>

        <div className="border-t border-[#0000001a] mt-6 pt-6 flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 h-11 rounded-xl border border-[#0000001a] text-sm"
          >
            Cancel
          </button>

          <button
            className="flex-1 h-11 rounded-xl bg-[#0E1E38] text-white text-sm"
            onClick={onClose}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
