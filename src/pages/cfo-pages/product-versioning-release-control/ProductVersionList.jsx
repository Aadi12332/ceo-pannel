import { useState } from "react";
import {
  Search,
  Eye,
  CheckCircle2,
  Rocket,
  RefreshCw,
  FilePenLine,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Select from "../../../components/common/Select";

const cards = [
  {
    title: "Draft",
    count: 1,
    subtitle: "In preparation",
    icon: FilePenLine,
    bg: "bg-[#FEF9C2]",
    iconColor: "text-[#A65F00]",
  },
  {
    title: "Approved",
    count: 1,
    subtitle: "Ready for release window",
    icon: CheckCircle2,
    bg: "bg-[#DCFCE7]",
    iconColor: "text-[#008236]",
  },
  {
    title: "Released",
    count: 1,
    subtitle: "Live & governed",
    icon: Rocket,
    bg: "bg-[#DCFCE7]",
    iconColor: "text-[#008236]",
  },
  {
    title: "Rolled back",
    count: 1,
    subtitle: "Requires review",
    icon: RefreshCw,
    bg: "bg-[#FFEDD4]",
    iconColor: "text-[#F54900]",
  },
];

const statusStyle = {
  Draft: "bg-[#FEF3C7] text-[#B45309]",
  Approved: "bg-[#D1FAE5] text-[#047857]",
  Released: "bg-[#DCFCE7] text-[#166534]",
  "Rolled Back": "bg-[#FEE2E2] text-[#B91C1C]",
};

const riskStyle = {
  High: "bg-[#FDE2D6] text-[#D9480F]",
  Medium: "bg-[#FEF3C7] text-[#B45309]",
  Low: "bg-[#D1FAE5] text-[#047857]",
};

const versions = [
  {
    version: "2.4.0v-102",
    compliance: "At risk",
    updated: "01-15-2025",
    status: "Draft",
    risk: "High",
  },
  {
    version: "2.3.2v-101",
    compliance: "Compliant",
    updated: "02-15-2025",
    status: "Approved",
    risk: "Medium",
  },
  {
    version: "2.3.0v-100",
    compliance: "Compliant",
    updated: "03-15-2025",
    status: "Released",
    risk: "Low",
  },
  {
    version: "2.2.0v-099",
    compliance: "Non-compliant",
    updated: "01-15-2025",
    status: "Rolled Back",
    risk: "Low",
  },
  {
    version: "2.2.0v-098",
    compliance: "Compliant",
    updated: "01-15-2025",
    status: "Approved",
    risk: "High",
  },
  {
    version: "2.2.0v-097",
    compliance: "At risk",
    updated: "01-15-2025",
    status: "Draft",
    risk: "Medium",
  },
  {
    version: "2.2.0v-096",
    compliance: "At risk",
    updated: "02-15-2025",
    status: "Rolled Back",
    risk: "High",
  },
  {
    version: "2.2.0v-095",
    compliance: "Compliant",
    updated: "02-15-2025",
    status: "Approved",
    risk: "Low",
  },
  {
    version: "2.2.0v-094",
    compliance: "At risk",
    updated: "01-15-2025",
    status: "Draft",
    risk: "Medium",
  },
  {
    version: "2.2.0v-093",
    compliance: "At risk",
    updated: "02-15-2025",
    status: "Rolled Back",
    risk: "High",
  },
  {
    version: "2.2.0v-092",
    compliance: "Compliant",
    updated: "02-15-2025",
    status: "Approved",
    risk: "Low",
  },
];

export default function ProductVersionList() {
  const navigate = useNavigate();
  const [Type, setType] = useState("");
  const [search, setSearch] = useState("");

  const handleView = (row) => {
    navigate("/product-version-details", { state: row });
  };

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
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
        <div className="w-[200px]">
          <Select
            placeholder="All Status"
            value={Type}
            onChange={(value) => {
              setType(value);
            }}
            options={[
              { value: "Draft", label: "Draft" },
              { value: "Approved", label: "Approved" },
              { value: "Released", label: "Released" },
              { value: "Roll Back", label: "Roll Back" },
            ]}
            inputClassName="!h-12 !mt-0 lg:!rounded-xl !rounded-lg !px-3 !text-sm !bg-white !border !border-[#0000001a]"
            listItemClassName="!px-3 !text-sm"
            listParentClassName="!min-h-max"
          />
        </div>
      </div>
      <div className="bg-white lg:rounded-xl rounded-lg lg:p-3 !pt-1 border border-[#0000001a]">
        <div className="max-h-[calc(100vh-430px)] overflow-auto scroll-hide lg:w-[calc(100vw-390px)] w-[calc(100vw-40px)] p-3">
          <table className="min-w-[1000px] w-full text-sm">
            <thead>
              <tr className="text-left border-b border-[#0000001a]">
                <th className="py-3 font-semibold">Version</th>
                <th className="py-3 font-semibold">Compliance</th>
                <th className="py-3 font-semibold">Last updated</th>
                <th className="py-3 font-semibold">Status</th>
                <th className="py-3 font-semibold">Risk</th>
                <th className="py-3 font-semibold text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {versions.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-[#0000001a] hover:bg-gray-50 transition"
                >
                  <td className="py-4">{row.version}</td>
                  <td>{row.compliance}</td>
                  <td>{row.updated}</td>

                  <td>
                    <span
                      className={`px-2 py-1 text-xs rounded ${statusStyle[row.status]}`}
                    >
                      {row.status}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`px-2 py-1 text-xs rounded ${riskStyle[row.risk]}`}
                    >
                      {row.risk}
                    </span>
                  </td>

                  <td className="text-center">
                    <button onClick={() => handleView(row)} className="p-2 hover:bg-gray-100 rounded-full transition">
                      <Eye size={20} />
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
