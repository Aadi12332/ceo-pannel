import { X } from "lucide-react"

const AssignedToolsModal = ({ open, onClose }) => {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      <div className="relative max-w-[520px] w-[96%] max-h-[96vh] overflow-y-auto bg-white lg:rounded-xl rounded-lg lg:p-6 p-3">
        <div className="flex justify-between items-start mb-1">
          <div>
            <h2 className="text-lg font-semibold text-[#0A0A0A]">
              Sarah Johnson
            </h2>
            <p className="text-sm text-[#667085]">
              Allneeda Automation Department (AAD)
            </p>
          </div>

          <X className="cursor-pointer" onClick={onClose} />
        </div>

        <div className="mt-5 space-y-5">
          <div>
            <p className="text-sm font-medium mb-2">Assigned Tools</p>
            <div className="border border-[#E5E7EB] rounded-lg lg:p-4 p-2.5 space-y-3">
              {[
                "Google Meet",
                "WhatsApp",
                "Google Map",
                "Open AI",
              ].map((item, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 text-sm cursor-pointer"
                >
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 rounded-lg accent-[#0E1E38] cursor-pointer"
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">Not Assigned Tools</p>
            <div className="border border-[#E5E7EB] rounded-lg lg:p-4 p-2.5 space-y-3">
              {[
                { label: "Google Earth", checked: true },
                { label: "Call Access", checked: true },
                { label: "Email Access", checked: false },
                { label: "Push Notification", checked: false },
              ].map((item, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 text-sm cursor-pointer"
                >
                  <input
                    type="checkbox"
                    defaultChecked={item.checked}
                    className="w-5 h-5 rounded-lg accent-[#0E1E38] cursor-pointer"
                  />
                  {item.label}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-6">
          <button className="px-6 h-10 flex-1 rounded-lg bg-[#0E1E38] text-white text-sm">
            Save Changes
          </button>
          <button
            onClick={onClose}
            className="px-6 h-10 flex-1 rounded-lg border border-[#E5E7EB] text-sm"
          >
            Cancel
          </button>

        </div>
      </div>
    </div>
  )
}

export default AssignedToolsModal
