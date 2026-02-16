import { useState } from "react";
import { Search, Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";
const rulesData = [
  {
    id: 1,
    ruleName: "Core SaaS Subscription",
    strategy: "Subscription",
    updatedDate: "01-20-2026",
    amount: "$140",
    status: "Active",
  },
  {
    id: 2,
    ruleName: "Growth Hybrid",
    strategy: "Hybrid",
    updatedDate: "01-21-2026",
    amount: "$140",
    status: "Draft",
  },
  {
    id: 3,
    ruleName: "Core SaaS Subscription",
    strategy: "Hybrid",
    updatedDate: "01-22-2026",
    amount: "$249",
    status: "Active",
  },
  {
    id: 4,
    ruleName: "Growth Hybrid",
    strategy: "Usage",
    updatedDate: "01-20-2026",
    amount: "$99",
    status: "Draft",
  },
];
const statusStyle = {
  Active: "bg-[#DCFCE7] text-[#166534]",
  Draft: "bg-[#FEF3C7] text-[#B45309]",
};

export default function MonetizationList() {
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
      <th className="py-4 px-4 font-semibold">Rule Name</th>
      <th className="py-4 px-4 font-semibold">Strategy</th>
      <th className="py-4 px-4 font-semibold">Updated Date</th>
      <th className="py-4 px-4 font-semibold">Amount</th>
      <th className="py-4 px-4 font-semibold">Status</th>
      <th className="py-4 px-4 font-semibold text-center">Actions</th>
    </tr>
  </thead>

  <tbody>
    {rulesData.map((row) => (
      <tr
        key={row.id}
        className="border-b border-[#0000001a] hover:bg-gray-50 transition"
      >
        <td className="py-5 px-4 font-medium text-[#111827]">
          {row.ruleName}
        </td>

        <td className="px-4 text-[#374151]">
          {row.strategy}
        </td>

        <td className="px-4 text-[#374151]">
          {row.updatedDate}
        </td>

        <td className="px-4 text-[#111827] font-medium">
          {row.amount}
        </td>

        <td className="px-4">
          <span
            className={`px-3 py-1 text-xs rounded-md ${statusStyle[row.status]}`}
          >
            {row.status}
          </span>
        </td>

        <td className="px-4 text-center">
          <button className="" onClick= {() => navigate("/add-monetization-rule")}>
            <Pencil size={16} />
          </button>
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
