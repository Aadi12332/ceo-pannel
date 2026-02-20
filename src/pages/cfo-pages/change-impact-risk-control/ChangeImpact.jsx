import { useState } from "react";
import { Search, Eye, AlertTriangle, Gauge, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const cards = [
  {
    title: "Pending approvals",
    count: 4,
    subtitle: "Changes awaiting decision",
    icon: AlertTriangle,
    bg: "bg-[#FEF3C7]",
    iconColor: "text-[#B45309]",
  },
  {
    title: "Critical items",
    count: 3,
    subtitle: "Needs extra controls",
    icon: Gauge,
    bg: "bg-[#FEE2E2]",
    iconColor: "text-[#B42318]",
  },
  {
    title: "Avg Auto-risk",
    count: 68,
    subtitle: "Across current sample",
    icon: Sparkles,
    bg: "bg-[#FDEAD7]",
    iconColor: "text-[#F97316]",
  },
];

const riskStyle = {
  High: "bg-[#FFE4D6] text-[#F54900]",
  Medium: "bg-[#FEF3C7] text-[#B45309]",
  Critical: "bg-[#FEE2E2] text-[#CF2027]",
};

const statusStyle = {
  "In Review": "bg-[#D9E8FF] text-[#175CD3]",
  Pending: "bg-[#FEF3C7] text-[#B45309]",
};

const changes = [
  {
    id: "CHG-1042",
    description: "Swap payment provider fallback routing",
    team: "Payments Platform",
    owner: "A. Chen",
    risk: "High",
    status: "In Review",
  },
  {
    id: "CHG-1043",
    description: "Increase max cart item limit",
    team: "Commerce",
    owner: "M. Singh",
    risk: "Medium",
    status: "Pending",
  },
  {
    id: "CHG-1045",
    description: "Update allergen labelling rules engine",
    team: "Compliance",
    owner: "L. Navarro",
    risk: "Critical",
    status: "In Review",
  },
  {
    id: "CHG-1048",
    description: "Swap payment provider fallback routing",
    team: "Payments Platform",
    owner: "A. Chen",
    risk: "High",
    status: "Pending",
  },
  {
    id: "CHG-1056",
    description: "Increase max cart item limit",
    team: "Commerce",
    owner: "M. Singh",
    risk: "Medium",
    status: "In Review",
  },
  {
    id: "CHG-1066",
    description: "Update allergen labelling rules engine",
    team: "Compliance",
    owner: "L. Navarro",
    risk: "Critical",
    status: "Pending",
  },
  {
    id: "CHG-1070",
    description: "Swap payment provider fallback routing",
    team: "Payments Platform",
    owner: "A. Chen",
    risk: "Medium",
    status: "Pending",
  },
  {
    id: "CHG-1080",
    description: "TXN-2024-Increase max cart item limit",
    team: "Commerce",
    owner: "M. Singh",
    risk: "Critical",
    status: "In Review",
  },
];

export default function ChangeImpact() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleView = (row) => {
    navigate("/change-impact-details", { state: row });
  };

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {cards.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a] flex items-center justify-between"
            >
              <div>
                <p className="text-gray-500 text-sm">{item.title}</p>
                <p className="text-3xl font-semibold mt-1">{item.count}</p>
                <p className="text-gray-400 text-sm mt-1">{item.subtitle}</p>
              </div>

              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center ${item.bg}`}
              >
                <Icon className={`${item.iconColor}`} size={22} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-between gap-3 mb-5">
        <div className="relative w-full sm:max-w-72">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="w-full pl-9 pr-3 py-2 h-12 lg:rounded-xl rounded-lg border border-[#0000001a] focus:outline-none"
          />
        </div>
      </div>
      <div className="bg-white lg:rounded-xl rounded-lg lg:p-3 !pt-1 border border-[#0000001a]">
        <div className="max-h-[calc(100vh-430px)] overflow-auto scroll-hide lg:w-[calc(100vw-390px)] w-[calc(100vw-48px)] px-3">
          <table className="min-w-[1000px] w-full text-sm">
            <thead>
              <tr className="text-left border-b border-[#0000001a]">
                <th className="py-3 font-semibold">Change</th>
                <th className="py-3 font-semibold">Team</th>
                <th className="py-3 font-semibold">Risk</th>
                <th className="py-3 font-semibold">Status</th>
              </tr>
            </thead>

            <tbody>
              {changes.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-[#0000001a] hover:bg-gray-50 transition"
                >
                  <td className="py-4">
                    <div className="cursor-pointer" onClick={()=>handleView()}>
                      <p className="font-medium text-[#0A0A0A]">{row.id}</p>
                      <p className="text-sm text-gray-500">{row.description}</p>
                    </div>
                  </td>

                  <td>
                    <div>
                      <p className="text-[#0A0A0A]">{row.team}</p>
                      <p className="text-sm text-gray-500">{row.owner}</p>
                    </div>
                  </td>

                  <td>
                    <span
                      className={`px-3 py-1 text-xs rounded ${riskStyle[row.risk]}`}
                    >
                      {row.risk}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`px-3 py-1 text-xs rounded ${statusStyle[row.status]}`}
                    >
                      {row.status}
                    </span>
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
