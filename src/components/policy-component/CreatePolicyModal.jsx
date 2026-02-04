import { useState } from "react"
import { X } from "lucide-react"
import Select from "../common/Select"
import { DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css"
import { format } from "date-fns"
import calendarIcon from "../../assets/calendaricon.svg"

export default function CreatePolicyModal({ policyOpen, onClose, title, subtitle, btnText }) {
  const [group, setGroup] = useState("")
  const [scope, setScope] = useState("")
    const [date, setDate] = useState()
  const [open, setOpen] = useState(false)

  if (!policyOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center !mt-0">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      <div className="relative bg-white max-w-[510px] w-[95%] max-h-[95vh] overflow-y-auto scroll-hide lg:rounded-xl rounded-lg lg:p-6 p-3">
        <div className="flex items-start justify-between mb-1">
          <h2 className="text-lg font-semibold">
            {title}
          </h2>
          <X className="cursor-pointer" onClick={onClose} />
        </div>

        <p className="text-sm text-gray-500 mb-5">
          {subtitle}
        </p>

        <div className="grid grid-cols-2 sm:gap-4 gap-2">
          <div>
            <label className="text-sm font-medium">Policy Name</label>
            <input
              placeholder="e.g., CEO High-Value Refund"
              className="mt-1 h-10 w-full rounded-lg text-sm bg-[#F3F3F5] px-3 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Policy Code</label>
            <input
              placeholder="e.g., REF-003"
              className="mt-1 h-10 w-full rounded-lg text-sm bg-[#F3F3F5] px-3 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Group</label>
            <Select
              placeholder="Select..."
              options={[
                { label: "Financial", value: "financial" },
                { label: "Access/RBAC", value: "access/rbac" },
                { label: "Automation", value: "automation" },
                { label: "Legal", value: "legal" },
              ]}
              value={group}
              onChange={setGroup}
              inputClassName="!h-10 !w-full !px-3 !text-[14px] !rounded-lg !bg-[#F3F3F5] !border !border-[#E5E7EB]"
              listItemClassName="!text-[14px] !px-3 !py-2"
              listParentClassName="!max-h-[260px]"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Scope</label>
            <Select
              placeholder="Select..."
              options={[
                { label: "Global", value: "global" },
                { label: "City", value: "city" },
                { label: "Department", value: "department" },
              ]}
              value={scope}
              onChange={setScope}
              inputClassName="!h-10 !w-full !px-3 !text-[14px] !rounded-lg !bg-[#F3F3F5] !border !border-[#E5E7EB]"
              listItemClassName="!text-[14px] !px-3 !py-2"
              listParentClassName="!max-h-[260px]"
            />
          </div>

              <div className="relative">
                <label className="text-sm font-medium">Effective Date</label>

                <div
                    onClick={() => setOpen((v) => !v)}
                    className="mt-1 h-10 w-full rounded-lg bg-[#F3F3F5] px-3 flex items-center justify-between cursor-pointer"
                >
                    <span className={`text-sm ${date ? "text-black" : "text-gray-400"}`}>
                    {date ? format(date, "dd/MM/yyyy") : "DD/MM/YYYY"}
                    </span>
                    <img src={calendarIcon} alt="" className="w-4 h-4" />
                </div>

                {open && (
                    <div className="absolute z-50 mt-2 bg-white rounded-xl shadow-lg p-3">
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={(d) => {
                        setDate(d)
                        setOpen(false)
                        }}
                    />
                    </div>
                )}
                </div>

          <div className="col-span-2">
            <label className="text-sm font-medium">Conditions (JSON)</label>
            <textarea
              className="mt-1 w-full h-28 rounded-lg bg-[#F3F3F5] p-3 text-sm outline-none"
              placeholder={`[{"field":"refund_amount","operator":">","value":100}]`}
            />
          </div>

          <div className="col-span-2">
            <label className="text-sm font-medium">Outcome</label>
            <input
              placeholder="e.g., require_approval: [CEO]"
              className="mt-1 h-10 w-full rounded-lg text-sm bg-[#F3F3F5] px-3 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Maximum Limit</label>
            <input
              placeholder="e.g., 10000"
              type="number"
              className="mt-1 h-10 w-full rounded-lg text-sm bg-[#F3F3F5] px-3 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Threshold</label>
            <input
              placeholder="e.g., 5000"
              type="number"
              className="mt-1 h-10 w-full rounded-lg text-sm bg-[#F3F3F5] px-3 outline-none"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button className="bg-[#0E1E38] text-white px-6 py-2 rounded-lg" onClick={onClose}>
            {btnText}
          </button>
        </div>
      </div>
    </div>
  )
}
