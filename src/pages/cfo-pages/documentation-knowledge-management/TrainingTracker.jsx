import { useState } from "react";
import MainLayout from "../../../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Search, Pencil, Plus } from "lucide-react";
import AddEditTrainingMaterialModal from "./AddEditTrainingMaterialModal";

const materials = [
  {
    id: 1,
    title: "Support Playbook (Launch Week)",
    description: "Include escalation paths + known issues.",
    audience: "Support",
    owner: "Support Lead",
    due: "01-20-2026",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Sales Pitch Deck (v1)",
    description: "",
    audience: "Sales",
    owner: "Sales Ops",
    due: "01-21-2026",
    status: "Not Started",
  },
  {
    id: 3,
    title: "Internal Product Onboarding",
    description: "Record a 12–15 min walkthrough + FAQ.",
    audience: "All",
    owner: "Product",
    due: "01-22-2026",
    status: "Ready",
  },
];

const statusStyle = {
  "In Progress": "bg-[#FEF3C7] text-[#B45309]",
  "Not Started": "bg-[#DBEAFE] text-[#2563EB]",
  Ready: "bg-[#DCFCE7] text-[#15803D]",
};

const TrainingTracker = () => {
  const navigate = useNavigate();
  const [openAction, setOpenAction] = useState(false);

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
              <h1 className="text-2xl font-semibold">Training Tracker</h1>
              <p className="text-sm text-gray-500">
                Track launch enablement across teams: owners, due dates, and
                readiness status.
              </p>
            </div>
          </div>
          <button
            onClick={() => setOpenAction(true)}
            className="h-14 flex items-center gap-3 px-4 rounded-lg bg-[#0E1E38] text-white text-base font-medium"
          >
            <Plus />
            Add Training Material
          </button>
        </div>

        <div className="relative w-full max-w-sm mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
          <input
            type="text"
            placeholder="Search"
            className="w-full h-10 pl-9 pr-4 rounded-lg border border-[#0000001a] text-sm focus:outline-none"
          />
        </div>
        <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
          <div className="overflow-x-auto">
            <table className="min-w-[1100px] w-full text-sm">
              <thead>
                <tr className="text-left border-b border-[#0000001a]">
                  <th className="pb-3 px-4 font-semibold">Material</th>
                  <th className="pb-3 px-4 font-semibold">Audience</th>
                  <th className="pb-3 px-4 font-semibold">Owner</th>
                  <th className="pb-3 px-4 font-semibold">Due</th>
                  <th className="pb-3 px-4 font-semibold">Status</th>
                  <th className="pb-3 px-4 font-semibold text-right">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {materials.map((row) => (
                  <tr
                    key={row.id}
                    className="border-b border-[#0000001a] hover:bg-gray-50 transition"
                  >
                    <td className="py-4 px-4">
                      <p className="font-medium text-[#111827]">{row.title}</p>
                      {row.description && (
                        <p className="text-xs text-[#6B7280] mt-1">
                          {row.description}
                        </p>
                      )}
                    </td>

                    <td className="px-4 text-[#374151]">{row.audience}</td>

                    <td className="px-4 text-[#374151]">{row.owner}</td>

                    <td className="px-4 text-[#374151] whitespace-nowrap">
                      {row.due}
                    </td>

                    <td className="px-4">
                      <span
                        className={`px-3 py-1 text-xs rounded-md ${statusStyle[row.status]}`}
                      >
                        {row.status}
                      </span>
                    </td>

                    <td className="px-4">
                      <div className="flex justify-end">
                        <button
                          onClick={() => setOpenAction(true)}
                          className="p-2 rounded-md hover:bg-[#F3F4F6]"
                        >
                          <Pencil className="w-4 h-4 text-[#374151]" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <AddEditTrainingMaterialModal
        open={openAction}
        onClose={() => setOpenAction(false)}
      />
    </MainLayout>
  );
};

export default TrainingTracker;
