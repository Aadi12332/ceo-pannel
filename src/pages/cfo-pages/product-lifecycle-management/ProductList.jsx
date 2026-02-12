import { useState } from "react";
import { Search, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProductList() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const products = [
    {
      name: "Atlas API",
      owner: "Platform",
      releaseDate: "01-10-2026",
      mau: 128400,
      mrr: 214000,
      incidents: 3,
      status: "Growth",
    },
    {
      name: "Pulse Mobile",
      owner: "Consumer",
      releaseDate: "01-11-2026",
      mau: 310200,
      mrr: 142000,
      incidents: 6,
      status: "Mature",
    },
    {
      name: "Beacon Reports",
      owner: "Analytics",
      releaseDate: "01-12-2026",
      mau: 22900,
      mrr: 18000,
      incidents: 10,
      status: "Deprecated",
    },
    {
      name: "Legacy Pay",
      owner: "Billing",
      releaseDate: "01-13-2026",
      mau: 8120,
      mrr: 54000,
      incidents: 4,
      status: "Launch",
    },
    {
      name: "Atlas API",
      owner: "Platform",
      releaseDate: "01-14-2026",
      mau: 128400,
      mrr: 214000,
      incidents: 3,
      status: "Growth",
    },
    {
      name: "Pulse Mobile",
      owner: "Consumer",
      releaseDate: "01-16-2026",
      mau: 310200,
      mrr: 142000,
      incidents: 6,
      status: "Mature",
    },
    {
      name: "Beacon Reports",
      owner: "Analytics",
      releaseDate: "01-18-2026",
      mau: 22900,
      mrr: 18000,
      incidents: 10,
      status: "Deprecated",
    },
    {
      name: "Legacy Pay",
      owner: "Billing",
      releaseDate: "01-20-2026",
      mau: 8120,
      mrr: 54000,
      incidents: 4,
      status: "Launch",
    },
    {
      name: "Core Ledger",
      owner: "Finance",
      releaseDate: "01-22-2026",
      mau: 45200,
      mrr: 97000,
      incidents: 2,
      status: "Growth",
    },
    {
      name: "Risk Studio",
      owner: "Compliance",
      releaseDate: "01-25-2026",
      mau: 18900,
      mrr: 36000,
      incidents: 8,
      status: "Mature",
    },
    {
      name: "Legacy Pay",
      owner: "Billing",
      releaseDate: "01-20-2026",
      mau: 8120,
      mrr: 54000,
      incidents: 4,
      status: "Launch",
    },
    {
      name: "Core Ledger",
      owner: "Finance",
      releaseDate: "01-22-2026",
      mau: 45200,
      mrr: 97000,
      incidents: 2,
      status: "Growth",
    },
    {
      name: "Risk Studio",
      owner: "Compliance",
      releaseDate: "01-25-2026",
      mau: 18900,
      mrr: 36000,
      incidents: 8,
      status: "Mature",
    },
    {
      name: "Legacy Pay",
      owner: "Billing",
      releaseDate: "01-20-2026",
      mau: 8120,
      mrr: 54000,
      incidents: 4,
      status: "Launch",
    },
    {
      name: "Core Ledger",
      owner: "Finance",
      releaseDate: "01-22-2026",
      mau: 45200,
      mrr: 97000,
      incidents: 2,
      status: "Growth",
    },
    {
      name: "Risk Studio",
      owner: "Compliance",
      releaseDate: "01-25-2026",
      mau: 18900,
      mrr: 36000,
      incidents: 8,
      status: "Mature",
    },
  ];

  const statusStyle = {
    Growth: "bg-[#DCFCE7] text-[#166534]",
    Mature: "bg-[#DBEAFE] text-[#1D4ED8]",
    Deprecated: "bg-[#FFE4D6] text-[#F54900]",
    Launch: "bg-[#E9D5FF] text-[#6B21A8]",
  };

  const handleView = (row) => {
    navigate("/product-lifecycle-details", { state: row });
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
          <table className="min-w-[900px] w-full text-sm">
            <thead>
              <tr className="text-left border-b border-[#0000001a]">
                <th className="py-3 px-3 font-semibold">Product</th>
                <th className="py-3 px-3 font-semibold">Owner</th>
                <th className="py-3 px-3 font-semibold">Release Date</th>
                <th className="py-3 px-3 font-semibold text-right">MAU</th>
                <th className="py-3 px-3 font-semibold text-right">MRR</th>
                <th className="py-3 px-3 font-semibold text-right">
                  Incidents
                </th>
                <th className="py-3 px-3 font-semibold">Status</th>
              </tr>
            </thead>

            <tbody>
              {products.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-[#0000001a] hover:bg-gray-50 transition"
                >
                  <td onClick={()=>handleView()} className="py-4 px-4 font-medium text-[#111827]">
                    {row.name}
                  </td>
                  <td className="px-4 text-[#374151]">{row.owner}</td>
                  <td className="px-4 text-[#374151]">{row.releaseDate}</td>
                  <td className="px-4 text-[#374151] text-right">
                    {row.mau.toLocaleString()}
                  </td>
                  <td className="px-4 text-[#374151] text-right">
                    ${row.mrr.toLocaleString()}
                  </td>
                  <td className="px-4 text-[#374151] text-right">
                    {row.incidents}
                  </td>
                  <td className="px-4">
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
