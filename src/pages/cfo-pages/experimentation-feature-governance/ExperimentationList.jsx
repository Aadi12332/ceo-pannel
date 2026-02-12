import { useState } from "react";
import { Search, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
const experiments = [
  {
    id: 1,
    name: "Simplify navigation labels",
    start: "01-27-2026",
    owner: "Maya",
    kpi: "Conversion rate",
    segment: "New users (web)",
    status: "Running",
  },
  {
    id: 2,
    name: "Introduce pricing anchor",
    start: "01-27-2026",
    owner: "Jon",
    kpi: "Revenue per user",
    segment: "US, returning users",
    status: "Running",
  },
  {
    id: 3,
    name: "Trial reminder cadence",
    start: "01-27-2026",
    owner: "Kane",
    kpi: "Churn rate",
    segment: "Trials (all)",
    status: "Paused",
  },
];

const statusStyle = {
  Running: "bg-[#DBEAFE] text-[#2563EB]",
  Paused: "bg-[#FEF3C7] text-[#B45309]",
};
export default function ExperimentationList() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleKPI = (row) => {
    navigate("/experimentation-details", { state: row });
  };

  const handleDecision = (row) => {
    navigate("/decision-details", { state: row });
  };

  return (
    <>
      <div className="relative w-full sm:max-w-72 mb-5">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="w-full pl-9 pr-3 py-2 rounded-lg border border-[#0000001a] focus:outline-none"
        />
      </div>
      <div className="bg-white lg:rounded-xl rounded-lg lg:p-3 border border-[#0000001a]">
        <div className="max-h-[calc(100vh-275px)] overflow-auto scroll-hide">
          <table className="min-w-[1100px] w-full text-sm">
            <thead>
              <tr className="text-left border-b border-[#0000001a]">
                <th className="py-3 px-4 font-semibold">Name</th>
                <th className="py-3 px-4 font-semibold">Owner</th>
                <th className="py-3 px-4 font-semibold">Primary KPI</th>
                <th className="py-3 px-4 font-semibold">Segment</th>
                <th className="py-3 px-4 font-semibold">Status</th>
                <th className="py-3 px-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {experiments.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-[#0000001a] hover:bg-gray-50 transition"
                >
                  <td
                    className="py-4 px-4"
                  >
                    <p className="font-medium text-[#111827]">{row.name}</p>
                    <p className="text-xs text-[#6B7280] mt-1">
                      Start: {row.start}
                    </p>
                  </td>

                  <td className="px-4 text-[#374151]">{row.owner}</td>

                  <td className="px-4 text-[#374151]">{row.kpi}</td>

                  <td className="px-4 text-[#374151]">{row.segment}</td>

                  <td className="px-4">
                    <span 
                      className={`px-3 py-1 text-xs rounded ${statusStyle[row.status]}`}
                    >
                      {row.status}
                    </span>
                  </td>

                  <td className="px-4">
                    <div className="flex justify-end gap-3">
                      <button
                        onClick={() => handleKPI(row)}
                        className="px-6 py-2 rounded-lg cursor-pointer border border-[#0000001a] bg-white"
                      >
                        KPIs
                      </button>
                      <button
                        onClick={() => handleDecision(row)}
                        className="px-6 py-2 rounded-lg cursor-pointer bg-[#0E1E38] text-white"
                      >
                        Decision
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
