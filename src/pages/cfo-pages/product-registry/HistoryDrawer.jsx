import { X } from "lucide-react";

export default function HistoryDrawer({ openModal, setOpenModal }) {
  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        openModal
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        onClick={() => setOpenModal(false)}
        className="absolute inset-0 bg-black/40"
      />

      <div
        className={`absolute right-0 top-0 h-full w-full sm:w-[480px] bg-white
        transform transition-transform duration-300 ease-in-out
        ${openModal ? "translate-x-0" : "translate-x-full"}
        flex flex-col`}
      >
        <div className="px-5 py-3">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-semibold">History</h2>
              <p className="text-sm text-gray-500 mt-1">PRD-001</p>
            </div>

            <button onClick={() => setOpenModal(false)}>
              <X />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-5 pb-3 space-y-3">
          <div className="border-t border-[#0000001a] pt-3">
            <div className="flex items-center gap-3">
              <h3 className="font-semibold text-lg">
                Status Changed to Active
              </h3>
              <span className="px-3 py-1 text-xs rounded bg-[#DBEAFE] text-[#1D4ED8]">
                Status
              </span>
            </div>

            <p className="text-gray-700 mt-2 text-sm">
              Product activated after successful approval process
            </p>

            <p className="text-sm text-gray-500 mt-2">
              System Admin • 01-15-2025
            </p>
          </div>

          <div className="border-t border-[#0000001a] pt-3">
            <div className="flex items-center gap-3">
              <h3 className="font-semibold text-lg">
                Activation Request Approved
              </h3>
              <span className="px-3 py-1 text-xs rounded bg-[#DCFCE7] text-[#15803D]">
                Activation
              </span>
            </div>

            <p className="text-gray-700 mt-2">
              Product activated after successful approval process
            </p>

            <p className="text-sm text-gray-500 mt-2">
              Michael Brown • 01-15-2025
            </p>

          </div>

          <div className="border-t border-[#0000001a] pt-3">
            <div className="flex items-center gap-3">
              <h3 className="font-semibold text-lg">
                Tech Owner Assigned
              </h3>
              <span className="px-3 py-1 text-xs rounded bg-[#DCFCE7] text-[#15803D]">
                Ownership
              </span>
            </div>

            <p className="text-gray-700 mt-2">
              Emily Chen assigned as Technical Owner
            </p>

            <p className="text-sm text-gray-500 mt-2">
              John Smith • 01-15-2025
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
