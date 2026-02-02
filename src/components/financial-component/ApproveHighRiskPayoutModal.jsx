import { X, AlertTriangle, Check, CheckCircle } from "lucide-react";

export default function ApproveHighRiskPayoutModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 !mt-0"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-xl p-6 relative w-[96%] max-w-[512px] max-h-[96vh] overflow-auto"
      >
        <button onClick={onClose} className="absolute top-4 right-4">
          <X />
        </button>

        <h2 className="text-[18px] font-bold font-[Arial] mb-1">
          Approve High-Risk Payout
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Review and approve flagged payout: PAY-2024-001
        </p>

        <div className="border border-orange-200 bg-orange-50 rounded-lg p-4 mb-4">
          <div className="grid grid-cols-2 gap-y-3 text-sm">
            <div>
              <p className="text-gray-500">Payout ID</p>
              <p className="font-medium">PAY-2024-001</p>
            </div>
            <div>
              <p className="text-gray-500">Provider</p>
              <p className="font-medium">Provider ****2345</p>
            </div>
            <div>
              <p className="text-gray-500">Amount</p>
              <p className="text-lg font-semibold">$125,000</p>
            </div>
            <div>
              <p className="text-gray-500">Risk Score</p>
              <p className="font-semibold text-red-600">78</p>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-3 text-orange-700 text-sm">
            <AlertTriangle className="w-4 h-4" />
            <span>
              <b>Flag Reason:</b> Unusually high payout amount – 3× average
            </span>
          </div>
        </div>

        <label className="text-sm font-medium mb-1 block">
          Approval Rationale (Required)
        </label>
        <textarea
          className="w-full h-28 rounded-lg bg-[#F2F4F7] p-3 outline-none mb-4 text-sm"
          placeholder="Provide justification for approving this high-risk payout..."
        />

        <div className="border border-yellow-300 bg-yellow-50 rounded-lg p-3 text-sm text-yellow-800 mb-6">
          <b>Warning:</b> This payout will execute immediately upon approval.
          Ensure all fraud checks have passed.
        </div>

        <div className="flex justify-end">
          <button className="flex items-center gap-2 px-5 py-2 rounded-lg bg-[#101828] text-white text-sm">
            <CheckCircle className="w-4 h-4" />
            Approve Payout
          </button>
        </div>
      </div>
    </div>
  );
}
