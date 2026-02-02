import { X } from "lucide-react";
import {
  FileDocumentIcon,
} from "../../assets/icons/icons";

export default function CommonAuditActionModal({ type, onClose }) {
  const isExport = type === "export";
  const isClose = type === "close";

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-xl p-6 relative w-[96%] max-w-[596px] max-h-[96vh] overflow-auto"
      >
        <button onClick={onClose} className="absolute top-4 right-4">
          <X />
        </button>

        <h2 className="text-[18px] font-bold font-[Arial] mb-4">
          {isExport ? "Request Evidence Pack Export" : "Close Audit Case"}
        </h2>

        {isExport && (
          <>
            <div className="mb-4 rounded-lg border border-blue-200 bg-blue-50 p-3 text-sm text-blue-700">
              <b>Note:</b> Export requires CEO + Legal approval for this evidence type.
            </div>

            <div className="mb-4 rounded-lg bg-[#F9FAFB] p-4">
              <p className="font-medium mb-2">Evidence Pack Contents</p>
              <ul className="text-sm space-y-1">
                <li className="flex items-center gap-2"><FileDocumentIcon width={16} color="black" /> governance_controls.pdf</li>
                <li className="flex items-center gap-2"><FileDocumentIcon width={16} color="black" /> policy_history.json</li>
                <li className="flex items-center gap-2"><FileDocumentIcon width={16} color="black" /> incident_postmortems.pdf</li>
              </ul>
            </div>

            <label className="text-sm font-medium mb-1 block">
              Export Purpose (Required)
            </label>
            <textarea
              className="w-full h-24 rounded-lg bg-[#F2F4F7] p-3 outline-none mb-4"
              placeholder="Why is this evidence being exported?..."
            />

            <label className="text-sm font-medium mb-1 block">
              Export Scope
            </label>
            <textarea
              className="w-full h-24 rounded-lg bg-[#F2F4F7] p-3 outline-none mb-4"
              placeholder="What specific data is included?..."
            />

            <div className="rounded-lg bg-green-50 border border-green-200 p-3 text-sm mb-6">
              <p className="font-medium mb-1">Export Bundle Will Include:</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Policies (current + history)</li>
                <li>Approval chains with timestamps</li>
                <li>Audit logs (immutable references)</li>
                <li>Incident timeline + postmortems</li>
                <li>Configuration diffs</li>
                <li>SHA-256 integrity hash</li>
              </ul>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-lg">
              Request Export (Requires Legal Approval)
            </button>
          </>
        )}

        {isClose && (
          <>
            <div className="mb-4 rounded-lg border border-orange-200 bg-orange-50 p-3 text-sm text-orange-700">
              <b>Warning:</b> Closing this case will mark it as complete and log all actions taken.
            </div>

            <div className="mb-4 rounded-lg bg-[#F9FAFB] p-4 text-sm">
              <p><b>Case:</b> CASE-2024-001 – Investor DD – Q1</p>
              <p><b>Owner:</b> Sarah Johnson (CEO)</p>
            </div>

            <label className="text-sm font-medium mb-1 block">
              Closure Summary (Required)
            </label>
            <textarea
              className="w-full h-24 rounded-lg bg-[#F2F4F7] p-3 outline-none mb-4"
              placeholder="Summarize findings and actions taken..."
            />

            <label className="text-sm font-medium mb-1 block">
              Final Evidence Links (Optional)
            </label>
            <input
              className="w-full h-11 rounded-lg bg-[#F2F4F7] px-3 outline-none mb-6"
              placeholder="Additional evidence files..."
            />

            <button className="w-full bg-black text-white py-3 rounded-lg">
              Close Case
            </button>
          </>
        )}
      </div>
    </div>
  );
}
