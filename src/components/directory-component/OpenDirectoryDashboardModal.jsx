import { X, Activity } from "lucide-react";

export default function OpenDirectoryDashboardModal({ open, onClose }) {
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

        <h2 className="text-[18px] font-bold font-[Arial] mb-4">
          Open Directory Dashboard
        </h2>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-700 mb-4">
          <b>Audit Requirement:</b> CEO drill-down reads to sensitive dashboards
          are logged with purpose.
        </div>

        <div className="bg-gray-50 rounded-lg p-4 text-sm mb-4">
          <p><b>Directory:</b> CEO</p>
          <p><b>Executive:</b> Sarah Johnson</p>
        </div>

        <label className="text-sm font-medium block mb-1">
          Access Purpose (Required for Audit)
        </label>
        <textarea
          className="w-full h-28 rounded-lg bg-[#F2F4F7] p-3 outline-none mb-4"
          placeholder="Why are you accessing this directory dashboard?..."
        />

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm text-yellow-700 mb-6">
          <b>Sensitive Dashboard:</b> This dashboard may contain PII, financial
          data, or strategic information. Access is logged.
        </div>

        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm">
            <Activity className="w-4 h-4" />
            Open Dashboard (Read-Only)
          </button>
        </div>
      </div>
    </div>
  );
}
