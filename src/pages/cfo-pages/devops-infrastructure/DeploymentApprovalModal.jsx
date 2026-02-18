import { CheckCircle2 } from "lucide-react";

const DeploymentApprovalModal = ({
  open,
  onClose,
  decision,
  setDecision,
}) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 !mt-0"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-[520px] w-[96%] lg:rounded-xl rounded-lg lg:p-6 p-3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Deployment Approval</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="mb-6">
          <p className="font-medium mb-3">Approval Progress</p>

          <div className="flex items-center gap-3 mb-2">
            <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
            <span className="text-[#22C55E] font-medium">CI Auto</span>
          </div>

          <div className="flex items-center gap-3 text-gray-400">
            <CheckCircle2 className="w-5 h-5 text-gray-300" />
            <span>You (CTO)</span>
          </div>
        </div>

        <div className="mb-8">
          <p className="font-medium mb-3">Select Option</p>

          <div className="flex items-center gap-8">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={decision === "approve"}
                onChange={() => setDecision("approve")}
                className="hidden"
              />
              <span
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  decision === "approve"
                    ? "border-[#22C55E]"
                    : "border-gray-300"
                }`}
              >
                {decision === "approve" && (
                  <span className="w-2.5 h-2.5 bg-[#22C55E] rounded-full" />
                )}
              </span>
              <span className="text-[#22C55E] font-medium">Approve</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={decision === "reject"}
                onChange={() => setDecision("reject")}
                className="hidden"
              />
              <span
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  decision === "reject"
                    ? "border-[#EF4444]"
                    : "border-gray-300"
                }`}
              >
                {decision === "reject" && (
                  <span className="w-2.5 h-2.5 bg-[#EF4444] rounded-full" />
                )}
              </span>
              <span className="text-[#EF4444] font-medium">Reject</span>
            </label>
          </div>
        </div>

        <div className="flex items-center gap-4 border-t pt-4">
          <button
            onClick={onClose}
            className="flex-1 border rounded-lg py-2"
          >
            Cancel
          </button>

          <button
            onClick={onClose}
            className="flex-1 bg-[#0E1E38] text-white rounded-lg py-2"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeploymentApprovalModal;
