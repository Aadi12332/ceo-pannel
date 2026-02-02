import { X, Calendar } from "lucide-react";
import fileIcon from "../../assets/fileicon.svg";

export default function OpenBlockerModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center !mt-0"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[96%] max-w-[596px] max-h-[96vh] overflow-auto rounded-xl p-6 relative"
      >
        <button onClick={onClose} className="absolute top-4 right-4">
          <X />
        </button>

        <h2 className="text-[18px] font-bold mb-4 font-[Arial]">
          Open Blocker Case
        </h2>

        <div className="border border-red-200 bg-red-50 rounded-lg p-4 mb-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs px-2 py-1 bg-white rounded border">
              BLK-001
            </span>
            <p className="font-medium">
              San Francisco Food Service Permit Expired
            </p>
          </div>

          <p className="text-sm text-gray-700 mb-3">
            Permit expired Dec 5. New application submitted but processing time
            30-45 days. Blocks SF market expansion.
          </p>

          <div className="flex gap-10 text-sm">
            <p>
              <span className="text-gray-500">Severity:</span>{" "}
              <span className="font-medium">critical</span>
            </p>
            <p>
              <span className="text-gray-500">Days Blocked:</span>{" "}
              <span className="font-medium">12</span>
            </p>
          </div>
        </div>

        <div className="mb-4">
          <label className="text-sm font-medium block mb-1">
            Assign Owner
          </label>
          <input
            disabled
            value="Jon Deo (LPD)"
            className="w-full h-11 rounded-lg bg-[#F2F4F7] px-3 outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm font-medium block mb-1">
            Target Resolution Date
          </label>
          <div className="relative">
            <input
              placeholder="dd / mm / yyyy"
              className="w-full h-11 rounded-lg bg-[#F2F4F7] px-3 pr-10 outline-none"
            />
            <Calendar className="absolute right-3 top-3 w-4 text-gray-500" />
          </div>
        </div>

        <div className="mb-4">
          <label className="text-sm font-medium block mb-1">
            Resolution Plan
          </label>
          <textarea
            placeholder="How will this blocker be resolved?..."
            className="w-full h-28 rounded-lg bg-[#F2F4F7] p-3 outline-none"
          />
        </div>

        <div className="bg-blue-50 border border-blue-200 text-blue-700 rounded-lg p-3 text-sm mb-6">
          <b>Note:</b> Blocker case will be created and tracked in Audit system.
          CEO will monitor progress from this tab.
        </div>

        <div className="flex justify-end">
          <button className="bg-black text-white px-5 py-2 rounded-lg text-sm flex items-center gap-2">
            <img src={fileIcon} alt="" className="w-5" />
            Create Blocker Case
          </button>
        </div>
      </div>
    </div>
  );
}
