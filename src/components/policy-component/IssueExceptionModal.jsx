import { useState } from "react"
import { X, Ticket } from "lucide-react"
import { DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css"
import { format } from "date-fns"
import calendarIcon from "../../assets/calendaricon.svg"

export default function IssueExceptionModal({ rollbackOpen, onClose }) {
  const [date, setDate] = useState()
  const [pickerOpen, setPickerOpen] = useState(false)

  if (!rollbackOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center !mt-0">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="relative bg-white w-[560px] max-h-[95vh] overflow-y-auto rounded-2xl p-6">
        <div className="flex items-start justify-between mb-1">
          <h2 className="sm:text-xl text-sm font-semibold">Issue Exception Token</h2>
          <X className="cursor-pointer" onClick={onClose} />
        </div>

        <p className="text-sm text-gray-500 mb-6">
          Grant temporary exception to policy enforcement
        </p>

        <div className="mb-4">
          <label className="text-sm font-medium">Policy Code</label>
          <input
            placeholder="REF-001"
            className="mt-1 h-11 w-full rounded-lg bg-gray-100 px-3 text-sm text-gray-700 outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm font-medium">Granted To</label>
          <input
            placeholder="User ID, Customer ID, or Department"
            className="mt-1 h-11 w-full rounded-lg bg-gray-100 px-3 text-sm outline-none"
          />
        </div>

        <div className="mb-4 relative">
          <label className="text-sm font-medium">Expires At</label>

          <div
            onClick={() => setPickerOpen((v) => !v)}
            className="mt-1 h-11 w-full rounded-lg bg-gray-100 px-3 flex items-center justify-between cursor-pointer"
          >
            <span className={`text-sm ${date ? "text-black" : "text-gray-400"}`}>
              {date ? format(date, "dd/MM/yyyy") : "DD/MM/YYYY, --:--"}
            </span>
            <img src={calendarIcon} alt="" className="w-4 h-4" />
          </div>

          {pickerOpen && (
            <div className="absolute z-50 mt-2 bg-white rounded-xl shadow-lg p-3">
              <DayPicker
                mode="single"
                selected={date}
                onSelect={(d) => {
                  setDate(d)
                  setPickerOpen(false)
                }}
              />
            </div>
          )}
        </div>

        <div className="mb-4">
          <label className="text-sm font-medium">
            Reason <span className="text-red-500">(Required)</span>
          </label>
          <textarea
            placeholder="Justification for policy exception..."
            className="mt-1 w-full h-28 rounded-lg bg-gray-100 p-3 text-sm outline-none resize-none"
          />
        </div>

        <div className="mb-6">
          <label className="text-sm font-medium">
            Incident Link <span className="text-gray-400">(Optional)</span>
          </label>
          <input
            placeholder="INC-2024-XXX"
            className="mt-1 h-11 w-full rounded-lg bg-gray-100 px-3 text-sm outline-none"
          />
        </div>

        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#0E1E38] text-white px-6 py-3 rounded-xl">
            <Ticket size={18} />
            Issue Exception Token
          </button>
        </div>
      </div>
    </div>
  )
}
