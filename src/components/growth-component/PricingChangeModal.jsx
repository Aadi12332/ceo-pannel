import { useState } from "react"
import { X } from "lucide-react"    
import Select from "../common/Select"

export default function PricingChangeModal({ open, onClose }) {
  const [priceChangeType, setPriceChangeType] = useState(null)
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      <div className="relative w-[96%] max-w-[595px] max-h-[96vh] overflow-y-auto scroll-hide bg-white rounded-xl p-6">
        <div className="flex items-start justify-between mb-2">
          <h2 className="text-xl font-semibold">
            Approve Pricing/Commission Change
          </h2>
          <X className="cursor-pointer" onClick={onClose} />
        </div>

        <p className="text-sm text-[#667085] mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        <div className="bg-[#FFF7CC] border border-[#FFE58F] text-[#8C6D1F] rounded-lg p-3 text-sm mb-5">
          <strong>Approval Required:</strong> Pricing, fees, and commission formulas
          are manual proposals from GSD and require CEO/CFO approval per build bible.
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Pricing Change Type</label>
            <Select
              placeholder="Select type..."
              value={priceChangeType}
              onChange={setPriceChangeType}
              options={[
                { label: "Pricing Update", value: "pricing" },
                { label: "Commission Change", value: "commission" },
              ]}
              inputClassName="!h-[48px] !mt-1 !rounded-lg !px-3 !text-sm !bg-white !border !border-[#D0D5DD]"
              listItemClassName="!px-3 !text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Proposed By (GSD)</label>
            <input
              placeholder="Tom Rodriguez (Sales VP)"
              className="w-full h-[48px] mt-1 px-3 rounded-lg border focus:outline-none border-[#D0D5DD]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium">Current Value</label>
              <input
                placeholder="e.g., $15.00"
                className="w-full h-[48px] mt-1 px-3 rounded-lg border focus:outline-none bg-[#F9FAFB] border-[#D0D5DD]"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Proposed Value</label>
              <input
                placeholder="e.g., $17.00"
                className="w-full h-[48px] mt-1 px-3 rounded-lg border focus:outline-none bg-[#F9FAFB] border-[#D0D5DD]"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Business Case</label>
            <textarea
              rows={4}
              placeholder="Why is this change needed? What is the expected impact?..."
              className="w-full mt-1 px-3 py-2 rounded-lg border border-[#D0D5DD]"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Revenue Impact Estimate</label>
            <input
              placeholder="e.g., +$250K ARR"
              className="w-full h-[48px] mt-1 px-3 rounded-lg border focus:outline-none border-[#D0D5DD]"
            />
          </div>

          <div className="bg-[#FFFBE6] border border-[#FFE58F] text-[#8C6D1F] rounded-lg p-3 text-sm">
            <strong>CFO co-approval required.</strong> This change will be routed to
            Emily Wang (CFO) for review before implementation.
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-6 h-11 rounded-lg border border-[#D0D5DD]"
          >
            Cancel
          </button>

          <button className="px-6 h-11 rounded-lg bg-[#0E1E38] text-white">
            Approve & Route to CFO
          </button>
        </div>
      </div>
    </div>
  )
}
