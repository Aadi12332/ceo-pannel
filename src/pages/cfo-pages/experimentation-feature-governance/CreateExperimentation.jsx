import { useState } from "react";
import MainLayout from "../../../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Calendar, ChevronRight } from "lucide-react";
import Select from "../../../components/common/Select";

const CreateExperimentation = () => {
  const navigate = useNavigate();
  const [type2, setType2] = useState("");

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
              <h1 className="text-2xl font-semibold">Create Experiment</h1>
              <p className="text-sm text-gray-500">
                Define the hypothesis, segment, and success metrics.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white lg:rounded-2xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-[#111827] mb-2">
                Experiment Name
              </label>
              <input
                type="text"
                className="w-full h-10 lg:px-4 px-2 rounded-lg lg:rounded-xl border border-[#0000001a] outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-sm text-[#111827] mb-2">Owner</label>
              <input
                type="text"
                className="w-full h-10 lg:px-4 px-2 rounded-lg lg:rounded-xl border border-[#0000001a] outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-sm text-[#111827] mb-2">
                Primary KPI
              </label>
              <Select
                placeholder="Select"
                value={type2}
                onChange={(value) => {
                  setType2(value);
                }}
                options={[
                  {
                    value: "Revenue Per User",
                    label: "Revenue Per User",
                  },
                  { value: "Conversion Rate", label: "Conversion Rate" },
                  { value: "Churn Rate", label: "Churn Rate" },
                ]}
                inputClassName="!h-10 !mt-0 lg:!rounded-xl !rounded-lg !px-3 !text-sm !bg-white !border !border-[#0000001a]"
                listItemClassName="!px-3 !text-sm"
                listParentClassName="!min-h-max"
              />
            </div>

            <div>
              <label className="block text-sm text-[#111827] mb-2">
                Traffic allocation (%)
              </label>
              <input
                type="number"
                defaultValue={50}
                className="w-full h-10 lg:px-4 px-2 rounded-lg lg:rounded-xl border border-[#0000001a] outline-none text-sm"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm text-[#111827] mb-2">
                Segment
              </label>
              <input
                type="text"
                className="w-full h-10 lg:px-4 px-2 rounded-lg lg:rounded-xl border border-[#0000001a] outline-none text-sm"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm text-[#111827] mb-2">
                Hypothesis
              </label>
              <textarea
                rows={4}
                className="w-full lg:py-3 lg:px-4 px-2 rounded-lg lg:rounded-xl border border-[#0000001a] outline-none text-sm resize-none"
              />
            </div>

            <div>
              <label className="block text-sm text-[#111827] mb-2">
                Start Date
              </label>
              <input
                type="date"
                defaultValue="2026-01-05"
                className="w-full h-10 lg:px-4 px-2 rounded-lg lg:rounded-xl border border-[#0000001a] outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-sm text-[#111827] mb-2">
                End Date <span className="text-gray-400">(optional)</span>
              </label>
              <input
                type="date"
                defaultValue="2026-01-10"
                className="w-full h-10 lg:px-4 px-2 rounded-lg lg:rounded-xl border border-[#0000001a] outline-none text-sm"
              />
            </div>
          </div>

          <div className="border-t border-[#0000001a] mt-8 pt-6 flex gap-4">
            <button className="flex-1 lg:h-12 px-2 rounded-lg lg:rounded-xl border border-[#0000001a] text-sm">
              Cancel
            </button>
            <button className="flex-1 h-12 rounded-xl bg-[#0E1E38] text-white text-sm font-medium">
              Save Draft
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CreateExperimentation;
