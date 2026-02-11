import { useState } from "react";
import { Search, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProductList() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const products = [
    {
      id: "PRD-001",
      name: "Digital Banking Platform",
      owner: "John Smith",
      created: "01-15-2025",
      status: "Active",
    },
    {
      id: "PRD-002",
      name: "Mobile Payment Gateway",
      owner: "Sarah Johnson",
      created: "02-15-2025",
      status: "Draft",
    },
    {
      id: "PRD-003",
      name: "Legacy CRM System",
      owner: "Mike Davis",
      created: "03-15-2025",
      status: "Blocked",
    },
    {
      id: "PRD-004",
      name: "Digital Banking Platform",
      owner: "Sarah Johnson",
      created: "01-15-2025",
      status: "Active",
    },
    {
      id: "PRD-005",
      name: "Digital Banking Platform",
      owner: "Sarah Johnson",
      created: "01-15-2025",
      status: "Active",
    },
    {
      id: "PRD-006",
      name: "Mobile Payment Gateway",
      owner: "John Smith",
      created: "01-15-2025",
      status: "Draft",
    },
    {
      id: "PRD-007",
      name: "Mobile Payment Gateway",
      owner: "Esther Howard",
      created: "02-15-2025",
      status: "Blocked",
    },
    {
      id: "PRD-008",
      name: "Mobile Payment Gateway",
      owner: "Ralph Edwards",
      created: "02-15-2025",
      status: "Active",
    },
    {
      id: "PRD-001",
      name: "Digital Banking Platform",
      owner: "John Smith",
      created: "01-15-2025",
      status: "Active",
    },
    {
      id: "PRD-002",
      name: "Mobile Payment Gateway",
      owner: "Sarah Johnson",
      created: "02-15-2025",
      status: "Draft",
    },
    {
      id: "PRD-003",
      name: "Legacy CRM System",
      owner: "Mike Davis",
      created: "03-15-2025",
      status: "Blocked",
    },
    {
      id: "PRD-004",
      name: "Digital Banking Platform",
      owner: "Sarah Johnson",
      created: "01-15-2025",
      status: "Active",
    },
    {
      id: "PRD-005",
      name: "Digital Banking Platform",
      owner: "Sarah Johnson",
      created: "01-15-2025",
      status: "Active",
    },
    {
      id: "PRD-006",
      name: "Mobile Payment Gateway",
      owner: "John Smith",
      created: "01-15-2025",
      status: "Draft",
    },
    {
      id: "PRD-007",
      name: "Mobile Payment Gateway",
      owner: "Esther Howard",
      created: "02-15-2025",
      status: "Blocked",
    },
    {
      id: "PRD-008",
      name: "Mobile Payment Gateway",
      owner: "Ralph Edwards",
      created: "02-15-2025",
      status: "Active",
    },
    {
      id: "PRD-001",
      name: "Digital Banking Platform",
      owner: "John Smith",
      created: "01-15-2025",
      status: "Active",
    },
    {
      id: "PRD-002",
      name: "Mobile Payment Gateway",
      owner: "Sarah Johnson",
      created: "02-15-2025",
      status: "Draft",
    },
    {
      id: "PRD-003",
      name: "Legacy CRM System",
      owner: "Mike Davis",
      created: "03-15-2025",
      status: "Blocked",
    },
    {
      id: "PRD-004",
      name: "Digital Banking Platform",
      owner: "Sarah Johnson",
      created: "01-15-2025",
      status: "Active",
    },
    {
      id: "PRD-005",
      name: "Digital Banking Platform",
      owner: "Sarah Johnson",
      created: "01-15-2025",
      status: "Active",
    },
    {
      id: "PRD-006",
      name: "Mobile Payment Gateway",
      owner: "John Smith",
      created: "01-15-2025",
      status: "Draft",
    },
    {
      id: "PRD-007",
      name: "Mobile Payment Gateway",
      owner: "Esther Howard",
      created: "02-15-2025",
      status: "Blocked",
    },
    {
      id: "PRD-008",
      name: "Mobile Payment Gateway",
      owner: "Ralph Edwards",
      created: "02-15-2025",
      status: "Active",
    },
  ];

  const statusStyle = {
    Active: "bg-[#DCFCE7] text-[#166534]",
    Draft: "bg-[#FEF3C7] text-[#B45309]",
    Blocked: "bg-[#FEE2E2] text-[#B91C1C]",
  };

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.owner.toLowerCase().includes(search.toLowerCase()) ||
      p.id.toLowerCase().includes(search.toLowerCase()),
  );

  const handleView = (row) => {
    navigate("/product-details", { state: row });
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
                <th className="py-3 font-semibold">Product ID</th>
                <th className="py-3 font-semibold">Name</th>
                <th className="py-3 font-semibold">Owner</th>
                <th className="py-3 font-semibold">Created Date</th>
                <th className="py-3 font-semibold">Status</th>
                <th className="py-3 font-semibold text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-[#0000001a] hover:bg-gray-50 transition"
                >
                  <td className="py-4">{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.owner}</td>
                  <td>{row.created}</td>
                  <td>
                    <span
                      className={`px-2 py-1 text-xs rounded ${statusStyle[row.status]}`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="text-center">
                    <button
                      onClick={() => handleView(row)}
                      className="p-2 hover:bg-gray-100 rounded-full transition"
                    >
                      <Eye size={21} />
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
