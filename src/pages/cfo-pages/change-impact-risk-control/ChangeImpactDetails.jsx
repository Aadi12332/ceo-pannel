import { useState } from "react";
import MainLayout from "../../../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Calendar, ChevronRight } from "lucide-react";

const ChangeImpactDetails = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="space-y-5">
        <div className="flex justify-between items-start">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="w-5 text-gray-500" />
            <div>
              <h1 className="text-2xl font-semibold">
                CHG-1042 — Change detail
              </h1>
              <p className="text-sm text-gray-500">
                Swap payment provider fallback routing
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate("/score-risk-details")}
            className="bg-[#0E1E38] text-white text-lg rounded-lg font-bold flex items-center gap-2 h-[52px] px-4"
          >
            Score Risk
            <ChevronRight className="w-5 text-white" />
          </button>
        </div>

      <div className="space-y-5">
  <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
    <div className="flex items-center gap-3 mb-4">
      <p className="text-lg font-semibold text-[#0A0A0A]">Current Risk:</p>
      <span className="px-3 py-1 text-xs rounded bg-[#FFE4D6] text-[#F54900]">
        High
      </span>
    </div>

    <div className="border border-[#0000001a] bg-[#F9FAFB] rounded-lg p-4 text-sm text-[#1E1E1E]">
      Auto-score is 78. If you override, add a mitigation note.
    </div>
  </div>

  <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
    <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">
      What is changing
    </h2>

    <p className="text-sm text-[#1E1E1E] mb-4">
      Adjusts failover rules for provider selection under degraded latency;
      introduces new guardrails and monitoring.
    </p>

    <ul className="list-disc pl-5 space-y-2 text-sm text-[#1E1E1E]">
      <li>
        New routing rule for EU cards when Provider A latency &gt; 450ms
      </li>
      <li>Adds circuit-breaker thresholds and alerting</li>
      <li>Updates retry budget and idempotency handling</li>
    </ul>
  </div>

  <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
    <h2 className="text-2xl font-semibold mb-6 text-[#0A0A0A]">
      Affected products
    </h2>

    <div className="space-y-3">
      <div className="pb-3 border-b border-[#0000001a]">
        <p className="font-medium text-[#1D2939]">Card Processing</p>
        <p className="text-sm text-[#667085] mt-1">
          PAY-CORE · EU · API
        </p>
      </div>

      <div className="pb-3 border-b border-[#0000001a]">
        <p className="font-medium text-[#1D2939]">Card Processing</p>
        <p className="text-sm text-[#667085] mt-1">
          PAY-CORE · US · API
        </p>
      </div>

      <div>
        <p className="font-medium text-[#1D2939]">Recurring Billing</p>
        <p className="text-sm text-[#667085] mt-1">
          PAY-REC · EU · Dashboard
        </p>
      </div>
    </div>
  </div>
</div>

      </div>
    </MainLayout>
  );
};

export default ChangeImpactDetails;
