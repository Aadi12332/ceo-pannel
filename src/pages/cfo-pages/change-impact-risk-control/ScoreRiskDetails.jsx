import { useState } from "react";
import MainLayout from "../../../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Calendar, ChevronRight } from "lucide-react";

const ScoreRiskDetails = () => {
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
            onClick={() => navigate(-1)}
            className="bg-[#fff] text-[#0E1E38] text-lg rounded-lg font-bold flex items-center gap-2 h-[52px] px-8"
          >
            Back
          </button>
        </div>

        <div className="space-y-5">
          <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
            <h2 className="text-2xl font-semibold text-[#0A0A0A] mb-6">
              Manual overrides
            </h2>

            <div className="flex justify-between items-center mb-3">
              <p className="text-sm text-[#344054]">Override score</p>
              <span className="text-sm text-[#667085]">78%</span>
            </div>

            <div className="relative mb-4">
              <div className="w-full h-2 bg-[#E5E7EB] rounded-full" />
              <div
                className="absolute top-0 left-0 h-2 bg-[#2E5BFF] rounded-full"
                style={{ width: "78%" }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-[#2E5BFF] rounded-full border-2 border-white shadow"
                style={{ left: "calc(78% - 10px)" }}
              />
            </div>

            <span className="px-3 py-1 text-xs rounded bg-[#FFE4D6] text-[#F54900]">
              High
            </span>
          </div>

          <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
            <h2 className="text-2xl font-semibold text-[#0A0A0A] mb-6">
              Decision
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-5">
              <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="name" id="" className="accent-[#16A34A] w-5 h-5"  />
                <span className="text-[#16A34A] font-medium">
                  Go{" "}
                  <span className="text-[#667085] font-normal">
                    (Approve to proceed)
                  </span>
                </span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="name" id="" className="accent-[#DC2626] w-5 h-5"  />
                <span className="text-[#DC2626] font-medium">
                  No Go{" "}
                  <span className="text-[#667085] font-normal">
                    (Block until mitigated)
                  </span>
                </span>
              </label>
            </div>

            <div className="mb-4">
              <label className="block text-sm text-[#344054] mb-2">
                Decision Notes
              </label>
              <textarea className="w-full h-28 rounded-lg border border-[#0000001a] p-3 text-sm outline-none resize-none" />
            </div>

            <div className="flex justify-end">
              <button className="px-8 py-3 bg-[#0E1E38] text-white rounded-lg font-medium">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ScoreRiskDetails;
