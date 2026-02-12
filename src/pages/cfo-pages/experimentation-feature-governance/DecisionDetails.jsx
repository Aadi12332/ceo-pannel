import { useState } from "react";
import MainLayout from "../../../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Calendar, ChevronRight } from "lucide-react";
import Select from "../../../components/common/Select";

const DecisionDetails = () => {
  const navigate = useNavigate();
  const [type2, setType2] = useState("");

  const tabs = [
    { id: "health", label: "Health" },
    { id: "deprecation", label: "Deprecation" },
    { id: "retirement", label: "Retirement" },
  ];

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
              <h1 className="text-2xl font-semibold">Scale / Kill Decision</h1>
              <p className="text-sm text-gray-500">
                Formalize the go/no-go with a written rationale.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
          <div className="flex items-start justify-between mb-5">
            <div>
              <h2 className="text-2xl font-semibold text-[#111827]">
                Simplify navigation labels
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Primary KPI: Conversion rate
              </p>
            </div>

            <span className="px-3 py-1 text-xs rounded-lg bg-[#DBEAFE] text-[#1D4ED8]">
              Running
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-4 pb-3 border-b border-[#0000001a]">
              <input
                type="radio"
                name="decision"
                defaultChecked
                className="mt-1 h-5 w-5 accent-[#0E1E38] bg-[#0E1E38]"
              />
              <div>
                <p className="font-semibold text-[#111827]">Scale</p>
                <p className="text-sm text-gray-500 mt-1">
                  Roll out broadly and monitor guardrails
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-3 border-b border-[#0000001a]">
              <input
                type="radio"
                name="decision"
                className="mt-1 h-5 w-5 accent-[#0E1E38] bg-[#0E1E38]"
              />
              <div>
                <p className="font-semibold text-[#111827]">Hold</p>
                <p className="text-sm text-gray-500 mt-1">
                  Collect more data or fix instrumentation
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-3 border-b border-[#0000001a]">
              <input
                type="radio"
                name="decision"
                className="mt-1 h-5 w-5 accent-[#0E1E38] bg-[#0E1E38]"
              />
              <div>
                <p className="font-semibold text-[#111827]">Kill</p>
                <p className="text-sm text-gray-500 mt-1">
                  Stop exposure and revert / iterate
                </p>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <label className="block text-sm text-[#111827] mb-2">
              Rationale
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-[#0000001a] outline-none text-sm resize-none"
            />
          </div>

          <div className="border-t border-[#0000001a] mt-3 pt-5">
            <button className="w-full h-12 rounded-xl bg-[#0E1E38] text-white text-sm font-medium">
              Record Decision
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DecisionDetails;
