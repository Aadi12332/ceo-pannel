import { AlertTriangle, X } from "lucide-react";

export default function PostReleaseMonitoringModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[560px] max-w-[95%] rounded-xl p-6"
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold">
              Post-release Monitoring
            </h2>
            <p className="text-sm text-gray-500">
              Metrics/alerting + incident integration (demo signals).
            </p>
          </div>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="border border-red-400 bg-red-50 rounded-xl p-4 mb-4 flex justify-between items-start">
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-red-600 mt-1" />
            <div>
              <p className="font-medium text-red-700">Crash rate</p>
              <p className="text-sm text-red-600">
                Source: metrics/alerting
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-medium">2.1%</p>
            <p className="text-sm">+0.8%</p>
          </div>
        </div>

        <div className="border border-yellow-400 bg-yellow-50 rounded-xl p-4 mb-4 flex justify-between items-start">
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mt-1" />
            <div>
              <p className="font-medium text-yellow-700">P95 latency</p>
              <p className="text-sm text-yellow-600">
                Source: metrics/alerting
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-medium">480ms</p>
            <p className="text-sm">+7%</p>
          </div>
        </div>

        <div className="border border-red-400 bg-red-50 rounded-xl p-4 flex justify-between items-start">
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-red-600 mt-1" />
            <div>
              <p className="font-medium text-red-700">Incident</p>
              <p className="text-sm text-red-600">
                Source: incident
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-medium">INC-331 declared</p>
            <p className="text-sm">Sev-1</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full border border-[#00000033] rounded-lg py-2"
        >
          Close
        </button>
      </div>
    </div>
  );
}
