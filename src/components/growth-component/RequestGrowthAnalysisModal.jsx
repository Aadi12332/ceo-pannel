import { useState } from "react"
import { X } from "lucide-react"
import Select from "../common/Select"

export default function RequestGrowthAnalysisModal({ open, onClose }) {
  if (!open) return null

  const [Type, setType] = useState("")
  const [Type1, setType1] = useState("")
  const [Type2, setType2] = useState("")

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      <div className="relative w-[96%] max-w-[595px] bg-white rounded-xl p-6">
        <div className="flex items-start justify-between mb-2">
          <h2 className="text-xl font-semibold text-[#101828]">
            Request Growth Analysis
          </h2>
          <X
            className="w-5 h-5 cursor-pointer text-[#667085]"
            onClick={onClose}
          />
        </div>

        <p className="text-sm text-[#667085] mb-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-[#101828] mb-1 block">
              Analysis Type
            </label>
            <Select
              placeholder="Select user type"
              value={Type}
              onChange={setType}
              options={[
                { label: "Growth Trend", value: "growth" },
                { label: "Market Expansion", value: "market" },
                { label: "User Adoption", value: "user" }
              ]}
              inputClassName="!h-[61px] !mt-1 !rounded-lg !px-3 !text-[18px] !bg-white !border !border-[#D0D5DD]"
              listItemClassName="!px-3 !text-sm"
              listParentClassName=""
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[#101828] mb-1 block">
              Scope
            </label>
            <Select
              placeholder="Select user type"
              value={Type1}
              onChange={setType1}
             options={[
                { label: "City", value: "city" },
                { label: "Region", value: "region" },
                { label: "Global", value: "global" }
              ]}
              inputClassName="!h-[61px] !mt-1 !rounded-lg !px-3 !text-[18px] !bg-white !border !border-[#D0D5DD]"
              listItemClassName="!px-3 !text-sm"
              listParentClassName=""
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[#101828] mb-1 block">
              Priority
            </label>
              <Select
              placeholder="Select user type"
              value={Type2}
              onChange={setType2}
            options={[
                { label: "Low", value: "low" },
                { label: "Medium", value: "medium" },
                { label: "High", value: "high" }
              ]}
              inputClassName="!h-[61px] !mt-1 !rounded-lg !px-3 !text-[18px] !bg-white !border !border-[#D0D5DD]"
              listItemClassName="!px-3 !text-sm"
              listParentClassName=""
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[#101828] mb-1 block">
              Specific Questions / Focus Areas
            </label>
            <textarea
              placeholder="What insights do you need?..."
              className="w-full h-[120px] rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm focus:outline-none"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="h-11 px-6 rounded-lg border border-[#D0D5DD] text-[#101828]"
          >
            Cancel
          </button>
          <button className="h-11 px-6 rounded-lg bg-[#0E1E38] text-white">
            Request Analysis
          </button>
        </div>
      </div>
    </div>
  )
}
