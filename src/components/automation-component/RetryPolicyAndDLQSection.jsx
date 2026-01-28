import React from "react";
import fileIcon from "../../assets/sidebaricon/policiesicon.svg";
import { HexagonWarningIcon } from "../../assets/icons/icons";

export default function RetryPolicyAndDLQSection() {
  const retryConfig = [
    { label: "Max Retries", value: "3 attempts" },
    { label: "Backoff Strategy", value: "Exponential (2x)" },
    { label: "Initial Delay", value: "5 seconds" },
    { label: "Max Delay", value: "60 seconds" },
  ]

  const dlqStats = [
    { label: "Failed Jobs (24h)", value: 12, color: "text-red-600" },
    { label: "Requires Review", value: 5, color: "text-orange-500" },
    { label: "Auto-Retry Eligible", value: 7, color: "text-blue-600" },
  ]

  return (
    <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6">
      <h2 className="text-[20px] font-semibold mb-6">
        Retry Policy & Dead-Letter Queue
      </h2>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-[#F9FAFB] rounded-xl p-5">
          <h3 className="text-[18px] font-medium mb-4">
            Retry Configuration
          </h3>

          <div className="space-y-3">
            {retryConfig.map((item) => (
              <div
                key={item.label}
                className="flex justify-between text-[15px]"
              >
                <span className="text-[#475467]">{item.label}:</span>
                <span className="font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#FFF5F5] border border-[#FECACA] rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <HexagonWarningIcon color="#E7000B" width={16} />
            <h3 className="text-[18px] font-medium">
              Dead-Letter Queue
            </h3>
          </div>

          <div className="space-y-3 mb-4">
            {dlqStats.map((item) => (
              <div
                key={item.label}
                className="flex justify-between text-[15px]"
              >
                <span className="text-[#475467]">
                  {item.label}:
                </span>
                <span className={`font-semibold ${item.color}`}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E5E7EB] rounded-lg text-[14px] font-medium hover:bg-gray-50">
            <img src={fileIcon} alt="" className="w-4 h-4 invert" />
            Review DLQ
          </button>
        </div>
      </div>
    </div>
  )
}
