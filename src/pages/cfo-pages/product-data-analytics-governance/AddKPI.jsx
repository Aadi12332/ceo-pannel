import { useState } from "react";
import MainLayout from "../../../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const AddKPI = () => {
  const navigate = useNavigate();
  const [cadence, setCadence] = useState("Daily");

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
              <h1 className="text-2xl font-semibold">Add/Edit KPI Definition</h1>
              <p className="text-sm text-gray-500">
                Capture a consistent definition so stakeholders can trust the metric.
              </p>
            </div>
          </div>
        </div>

    <div className="bg-white lg:rounded-2xl rounded-lg lg:p-6 p-4 border border-[#0000001a]">
      <h2 className="text-xl font-semibold mb-6">Identity</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <label className="block text-sm text-[#111827] mb-2">Name</label>
          <input
            type="text"
            className="w-full h-10 px-3 rounded-xl border border-[#0000001a] outline-none text-sm"
          />
        </div>

        <div>
          <label className="block text-sm text-[#111827] mb-2">
            Canonical ID
          </label>
          <input
            type="text"
            className="w-full h-10 px-3 rounded-xl border border-[#0000001a] outline-none text-sm"
          />
        </div>

        <div>
          <label className="block text-sm text-[#111827] mb-2">Owner</label>
          <input
            type="text"
            className="w-full h-10 px-3 rounded-xl border border-[#0000001a] outline-none text-sm"
          />
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm text-[#111827] mb-3">Review cadence</p>
        <div className="flex gap-10">
          {["Daily", "Weekly", "Monthly"].map((item) => (
            <label key={item} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="cadence"
                value={item}
                checked={cadence === item}
                onChange={() => setCadence(item)}
                className="h-4 w-4 accent-[#0E1E38]"
              />
              <span className="text-sm text-[#111827]">{item}</span>
            </label>
          ))}
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-10 mb-6">Definition</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-[#111827] mb-2">Name</label>
          <textarea
            rows={4}
            className="w-full px-3 py-3 rounded-xl border border-[#0000001a] outline-none text-sm resize-none"
          />
        </div>

        <div>
          <label className="block text-sm text-[#111827] mb-2">Formula</label>
          <textarea
            rows={4}
            className="w-full px-3 py-3 rounded-xl border border-[#0000001a] outline-none text-sm resize-none"
          />
        </div>

        <div className="md:col-span-1">
          <label className="block text-sm text-[#111827] mb-2">
            Primary Data Source
          </label>
          <input
            type="text"
            className="w-full h-10 px-3 rounded-xl border border-[#0000001a] outline-none text-sm"
          />
        </div>
      </div>

      <div className="border-t border-[#0000001a] mt-10 pt-6 flex justify-end">
        <button className="h-11 px-8 rounded-xl bg-[#0E1E38] text-white text-sm font-medium">
          Save Draft
        </button>
      </div>
    </div>
      </div>
    </MainLayout>
  );
};

export default AddKPI;
