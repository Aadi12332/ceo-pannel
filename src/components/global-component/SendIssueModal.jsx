import { X, ChevronDown } from "lucide-react"
import { useState } from "react"
import Select from "../common/Select"

export default function SendIssueModal({ open, onClose }) {
  const [Type, setType] = useState("");
  const [desc, setDesc] = useState("")

  if (!open) return null

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div onClick={(e)=>e.stopPropagation()} className="w-[520px] bg-white rounded-2xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-5 top-5"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-semibold text-[#101828] mb-6">
          Send An Issue
        </h2>

        <div className="mb-4">
          <label className="block text-base font-medium mb-2">
            Issue In
          </label>

          <Select
              placeholder="Select user type"
              value={Type}
              onChange={setType}
              options={[
                { label: "Identity Verification", value: "Identity Verification" },
                { label: "Tax Information", value: "Tax Information" },
                { label: "Bank Details", value: "Bank Details" },
              ]}
              inputClassName="!h-[61px] !mt-1 !rounded-lg !px-3 !text-[18px] !bg-white !border !border-[#D0D5DD]"
              listItemClassName="!px-3 !text-base"
              listParentClassName=""
            />
        </div>

        <div className="mb-8">
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="enter description..."
            className="w-full h-[160px] p-4 rounded-lg border border-[#D0D5DD] resize-none focus:outline-none"
          />
        </div>

        <div className="flex items-center justify-center gap-6">
          <button
            onClick={onClose}
            className="px-10 h-[52px] rounded-lg border border-red-500 text-red-500 text-lg font-medium"
          >
            Cancel
          </button>

          <button
            className="px-10 h-[52px] rounded-lg bg-[#4CAF50] text-white text-lg font-medium"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
