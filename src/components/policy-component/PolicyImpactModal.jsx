import { X, CheckCircle2, TrendingUp, DollarSign, Shield } from "lucide-react"

export default function PolicyImpactModal({ policyImpactOpen, onClose }) {
  if (!policyImpactOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center !mt-0">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="relative bg-white w-[96%] max-w-[560px] max-h-[95vh] scroll-hide overflow-auto rounded-lg lg:rounded-2xl lg:p-6 p-3">
        <div className="flex items-start justify-between mb-1">
          <h2 className="text-[18px] font-bold text-[#0A0A0A]">Policy Impact Simulation</h2>
          <X className="cursor-pointer" onClick={onClose} />
        </div>

        <p className="text-sm text-[#717182] mb-4">
          Preview the impact of this policy before publishing
        </p>

        <div className="border border-[#BEDBFF] bg-[#EFF6FF] rounded-xl p-4 mb-4">
          <h3 className="text-lg font-semibold">
            Simulation Results – Standard Refund Authorization
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Version: 2.3 • Scope: global
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="border rounded-xl border-[#BEDBFF] p-4">
            <div className="flex items-center gap-2 text-gray-700 mb-8">
              <CheckCircle2 className="text-[#155DFC]" />
              <span className="font-medium">Estimated Approvals</span>
            </div>
            <div className="text-[30px] font-bold text-[#155DFC]">52</div>
            <div className="text-sm text-gray-500 mt-1">per day</div>
          </div>

          <div className="border rounded-xl border-[#BEDBFF] p-4">
            <div className="flex items-center gap-2 text-gray-700 mb-8">
              <TrendingUp className="text-[#F54900]" />
              <span className="font-medium">Volume Change</span>
            </div>
            <div className="text-[30px] font-bold text-[#F54900]">-8%</div>
            <div className="text-sm text-gray-500 mt-1">from baseline</div>
          </div>

          <div className="border rounded-xl border-[#BEDBFF] p-4">
            <div className="flex items-center gap-2 text-gray-700 mb-8">
              <DollarSign className="text-[#00A63E]" />
              <span className="font-medium">Cost Exposure</span>
            </div>
            <div className="text-[30px] font-bold text-[#00A63E]">$58K</div>
            <div className="text-sm text-gray-500 mt-1">
              monthly estimate
            </div>
          </div>

          <div className="border rounded-xl border-[#BEDBFF] p-4">
            <div className="flex items-center gap-2 text-gray-700 mb-8">
              <Shield className="text-[#9810FA]" />
              <span className="font-medium">Abuse Risk</span>
            </div>
            <div className="text-[30px] font-bold text-[#9810FA]">
              Medium
            </div>
            <div className="text-sm text-gray-500 mt-1">risk level</div>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold mb-2">Impacted Actions</h4>
          <div className="space-y-2">
            <div className="bg-[#F3F4F6] text-[#0A0A0A] rounded-md px-3 py-2 font-mono text-sm">
              refund_request
            </div>
            <div className="bg-[#F3F4F6] text-[#0A0A0A] rounded-md px-3 py-2 font-mono text-sm">
              customer_service.approve
            </div>
            <div className="bg-[#F3F4F6] text-[#0A0A0A] rounded-md px-3 py-2 font-mono text-sm">
              finance.process_refund
            </div>
          </div>
        </div>

        <div className="bg-[#FEFCE8] border border-[#FFF085] rounded-xl p-4 text-sm text-[#0A0A0A]">
          <span className="font-bold">Affected Users:</span>{" "}
          Approximately 576 users will be subject to this policy
        </div>
      </div>
    </div>
  )
}
