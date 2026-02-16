import { X } from "lucide-react";
import { useState } from "react";

export default function ApprovalDecisionModal({ open, onClose }) {
  const [decision, setDecision] = useState("Approve");
  const [comment, setComment] = useState("");

  if (!open) return null;

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div onClick={(e) => e.stopPropagation()} className="bg-white w-full max-w-2xl rounded-2xl p-6 border border-[#0000001a] relative">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-500 hover:text-black"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-semibold mb-1">
          Social Login Integration
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Keep capabilities small and composable. Add dependencies later.
        </p>

        <p className="font-medium mb-3">Select Option</p>

        <div className="flex gap-8 mb-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="decision"
              value="Approve"
              checked={decision === "Approve"}
              onChange={() => setDecision("Approve")}
              className="accent-green-600 w-4 h-4"
            />
            <span className="text-green-600 font-medium">Approve</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="decision"
              value="Reject"
              checked={decision === "Reject"}
              onChange={() => setDecision("Reject")}
              className="accent-red-600 w-4 h-4"
            />
            <span className="text-red-600 font-medium">Reject</span>
          </label>
        </div>

        <p className="font-medium mb-2">Add Review Comment</p>

        <textarea
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full rounded-xl border border-[#0000001a] p-3 text-sm resize-none outline-none"
        />

        <div className="border-t border-[#0000001a] mt-8 pt-6 flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 h-11 rounded-xl border border-[#0000001a] text-sm"
          >
            Cancel
          </button>

          <button className="flex-1 h-11 rounded-xl bg-[#0E1E38] text-white text-sm font-medium">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
