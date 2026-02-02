import { X } from "lucide-react";

export default function ApprovalActionModal({ type, onClose }) {
  const config = {
    approve: {
      title: "Approve Request",
      textareaLabel: "Approval Justification (Required)",
      btnText: "Approve & Execute",
      btnClass: "bg-black text-white"
    },
    reject: {
      title: "Reject Request",
      textareaLabel: "Rejection Reason (Required)",
      btnText: "Reject Request",
      btnClass: "bg-red-600 text-white"
    },
    revision: {
      title: "Request Revision",
      textareaLabel: "Request Requirements (Required)",
      btnText: "Send Revision Request",
      btnClass: "bg-black text-white"
    },
    delegate: {
      title: "Delegate Approval",
      textareaLabel: "Delegation Reason (Required)",
      btnText: "Delegate Approval",
      btnClass: "bg-black text-white"
    },
    escalate: {
      title: "Escalate Request",
      textareaLabel: "Escalation Reason (Required)",
      btnText: "Escalate Request",
      btnClass: "bg-black text-white"
    },
    audit: {
      title: "Open Audit Case",
      textareaLabel: "Audit Case Rationale (Required)",
      btnText: "Open Audit Case",
      btnClass: "bg-black text-white"
    }
  };

  const c = config[type];

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 !mt-0"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-xl p-6 relative overflow-auto w-[96%] max-w-[512px] max-h-[96vh]"
      >
        <button onClick={onClose} className="absolute top-4 right-4">
          <X />
        </button>

        <h2 className="text-[18px] font-bold mb-4 font-[Arial]">
          {c.title}
        </h2>

        <div className="space-y-2 text-sm mb-6">
          <p><b>Type:</b> High-Value Refund Request</p>
          <p><b>Requested by:</b> Jennifer Lee (Customer Service)</p>
          <p><b>Department:</b> Customer Service</p>
          <p><b>Policy:</b> POL-FIN-003 v2.1</p>
          <p><b>Risk Score:</b> <span className="text-red-500">72</span></p>
          <p><b>Dollar Exposure:</b> $8,500</p>
        </div>

        {type === "delegate" && (
          <>
            <label className="text-sm font-medium mb-1 block">
              Delegate To
            </label>
            <input
              className="w-full h-11 rounded-lg bg-[#F2F4F7] px-3 outline-none mb-4"
              placeholder="e.g., COO, CTO, CMO, CFO"
            />

            <label className="text-sm font-medium mb-1 block">
              Delegation Duration (hours)
            </label>
            <input
              type="number"
              className="w-full h-11 rounded-lg bg-[#F2F4F7] px-3 outline-none"
              defaultValue={24}
            />
            <p className="text-xs text-[#667085] mb-4">
              Maximum: 168 hours (7 days)
            </p>
          </>
        )}

        <label className="text-sm font-medium mb-1 block">
          {c.textareaLabel}
        </label>

        <textarea
          className="w-full h-28 rounded-lg bg-[#F2F4F7] p-3 outline-none mb-6"
          placeholder="Provide detailed rationale for audit trail..."
        />

        <div className="flex justify-end">
          <button className={`px-5 py-2 rounded-lg ${c.btnClass}`}>
            {c.btnText}
          </button>
        </div>
      </div>
    </div>
  );
}
