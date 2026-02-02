import { useEffect, useRef } from "react";
import { X, Paperclip, FileText, ExternalLink } from "lucide-react";

export default function EvidenceModal({ open, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const handleOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center !mt-0">
      <div
        ref={ref}
        className="bg-white rounded-xl w-[96%] max-w-[512px] max-h-[96vh] overflow-auto p-6 font-[Arial]"
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-[18px] font-bold mb-5 font-[Arial]">
              Evidence & Supporting Documents
            </h2>
            <p className="text-sm text-gray-500 mt-1 font-[Arial]">
              High-Value Refund Request
            </p>
            <p className="text-sm text-gray-500 font-[Arial]">
              Requested by Jennifer Lee (Customer Service)
            </p>
          </div>

          <X
            className="w-5 h-5 cursor-pointer"
            onClick={onClose}
          />
        </div>

        <div className="space-y-5">
          <div>
            <div className="flex items-center gap-2 mb-2 font-medium">
              <Paperclip className="w-4 h-4" />
              Attachments
            </div>

            {["order_history.pdf", "customer_communication.pdf"].map((f) => (
              <div
                key={f}
                className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2 mb-2"
              >
                <span className="text-sm">{f}</span>
                <button className="text-blue-600 text-sm font-medium">
                  Download
                </button>
              </div>
            ))}
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2 font-medium">
              <FileText className="w-4 h-4" />
              Audit Log References
            </div>

            {["AUD-2024-001234", "AUD-2024-001235"].map((id) => (
              <div
                key={id}
                className="flex items-center justify-between bg-blue-50 rounded-lg px-3 py-2 mb-2"
              >
                <span className="text-sm">{id}</span>
                <button className="text-blue-600 text-sm font-medium flex items-center gap-1">
                  View Log
                </button>
              </div>
            ))}
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2 font-medium">
              <FileText className="w-4 h-4" />
              Simulation Results
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg px-3 py-3 text-sm">
              Fraud probability: 12% (Low risk)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
