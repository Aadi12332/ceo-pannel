import { useState } from "react"
import { X } from "lucide-react"
import Select from "../common/Select"

export default function CityLaunchGateModal({ mode, onClose }) {
  const isApprove = mode === "approve"
  const [owner, setOwner] = useState("")

  return (
    <div onClick={onClose} className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div onClick={(e) => e.stopPropagation()} className="bg-white max-w-[720px] w-[96%] max-h-[96vh] overflow-y-auto scroll-hide lg:rounded-xl rounded-lg lg:p-6 p-3 relative">
        <button onClick={onClose} className="absolute lg:right-5 lg:top-5 right-3 top-3">
          <X />
        </button>

        <h2 className="text-xl font-semibold mb-1">
          {isApprove ? "Approve City Launch Gate" : "Block City Launch"}
        </h2>
        <p className="text-sm text-[#667085] mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        <div className="border rounded-lg sm:p-4 p-2.5 mb-5">
          <h3 className="font-medium mb-3">
            {isApprove
              ? "New York City - Readiness Snapshot"
              : "San Francisco - Readiness Snapshot"}
          </h3>

          <div className="grid grid-cols-2 gap-y-2 text-sm">
            <p>
              Readiness Score:{" "} <br />
              <span className={`font-semibold ${isApprove ? "text-green-600" : "text-red-600"}`}>
                {isApprove ? "95" : "45"}
              </span>
            </p>
            <p>Policy: <br /> AEPS-LAUNCH-001</p>
            <p>Permits: <br /> {isApprove ? "3/3 Valid" : "2/3 Valid"}</p>
            <p>Staffing: <br /> {isApprove ? "96%" : "80%"}</p>
            <p>Supply Coverage: <br /> {isApprove ? "98%" : "65%"}</p>
            <p>Support SLA: <br /> {isApprove ? "3h / 4h" : "8h / 4h"}</p>
            <p>Integration Uptime: <br /> {isApprove ? "99.8%" : "97.2%"}</p>
          </div>
        </div>

        {!isApprove && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700 mb-5">
            <p className="font-medium mb-1">Blockers:</p>
            <ul className="list-disc ml-4 space-y-1">
              <li>Food service permit expired</li>
              <li>Support SLA breached</li>
              <li>Integration error rate above 2%</li>
            </ul>
          </div>
        )}

        <div className="mb-4">
          <label className="text-sm font-medium mb-1 block">
            Rationale (Required for Audit)
          </label>
          <textarea
            placeholder={
              isApprove
                ? "Why are you approving this launch? What evidence supports readiness?..."
                : "Why are you blocking or overriding this launch?..."
            }
            className="w-full h-[120px] border rounded-lg px-3 py-2 resize-none focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="text-sm font-medium mb-1 block">
            Responsible Owner
          </label>

          <Select
            placeholder="Select owner..."
            placement="top"
            value={owner}
            onChange={setOwner}
            options={[
              { label: "Emily Wang (CFO)", value: "Emily Wang" },
              { label: "Tom Rodriguez (Sales VP)", value: "Tom Rodriguez" },
            ]}
            inputClassName="!h-[48px] !rounded-lg !px-3 !bg-white !border !border-[#D0D5DD] !text-base"
            listItemClassName="!px-3 !text-base"
          />
        </div>

        <div className="flex items-center sm:gap-3 gap-1.5 justify-end">
          <button
            className={`h-11 sm:px-6 px-2.5 rounded-lg text-white flex-1 ${
              isApprove ? "bg-black" : "bg-red-600"
            }`}
          >
            {isApprove
              ? "Approve Launch & Log Evidence"
              : "Confirm Block / Override"}
          </button>
          <button
            onClick={onClose}
            className="h-11 sm:px-6 px-2.5 rounded-lg border sm:flex-1"
          >
            Cancel
          </button>

        </div>
      </div>
    </div>
  )
}
