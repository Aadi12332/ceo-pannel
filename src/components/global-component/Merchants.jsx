import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MainLayout from "../layout/MainLayout";
import {
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  FileDown,
  Plus,
} from "lucide-react";
import RowActionMenu from "./RowActionMenu";
import ConfirmActionModal from "./ConfirmActionModal";
import FilterDropdown from "./FilterDropdown";

const statusStyles = {
  Active: "bg-[#C7F9CC] text-[#2F9E44]",
  Suspended: "bg-[#FFE3E3] text-[#E03131]",
  "Under Review": "bg-[#FFF3BF] text-[#F59F00]",
};

const history = [
  {
    id: "#VEN001",
    title: "Emily Johnson",
    content: "sara.bright@example.com",
    phone: "202-555-0199",
    business: "Sunny Side Bakery",
    status: "Active",
  },
  {
    id: "#VEN002",
    title: "Michael Smith",
    content: "mike.jones@samplemail.com",
    phone: "415-555-0123",
    business: "Green Leaf Landscaping",
    status: "Suspended",
  },
  {
    id: "#VEN003",
    title: "Olivia Brown",
    content: "linda.smith@webmail.com",
    phone: "312-555-0147",
    business: "Blue Sky Tech Solutions",
    status: "Active",
  },
  {
    id: "#VEN004",
    title: "James Wilson",
    content: "david.lee@domain.com",
    phone: "718-555-0165",
    business: "Urban Chic Boutique",
    status: "Active",
  },
  {
    id: "#VEN005",
    title: "Sophia Davis",
    content: "emily.clark@service.com",
    phone: "503-555-0182",
    business: "Coastal Breeze",
    status: "Under Review",
  },
  {
    id: "#VEN006",
    title: "Daniel Martinez",
    content: "james.brown@mymail.com",
    phone: "619-555-0134",
    business: "Mountain Peak Fitness",
    status: "Active",
  },
  {
    id: "#VEN007",
    title: "Ava Garcia",
    content: "olivia.white@inbox.com",
    phone: "303-555-0178",
    business: "Golden Coffee Roasters",
    status: "Active",
  },
  {
    id: "#VEN008",
    title: "Liam Rodriguez",
    content: "noah@mailservice.com",
    phone: "404-555-0110",
    business: "River Valley Art Supplies",
    status: "Active",
  },
];

export default function Merchants() {
  const navigate = useNavigate();
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const [confirmType, setConfirmType] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  return (
    <MainLayout>
      <div className="mb-5">
        <div
          className="flex items-center gap-5 mb-1 cursor-pointer"
          onClick={() => navigate("/global-tool-registry")}
        >
          <ChevronLeft className="w-5 h-5 cursor-pointer" />
          <h1 className="text-xl font-semibold">
            <span className="text-gray-500">Global Tool Registry</span> <span className="text-gray-500">&gt;</span>
            Merchants
          </h1>
        </div>

        <p className="text-sm text-gray-500 mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="bg-[#EEF4FF] space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-[20px] font-semibold text-[#101828]">
            All Merchants
          </h2>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-[#0E1E38] text-white px-4 h-10 rounded-lg">
              <FileDown className="w-4 h-4" />
              Export PDF
            </button>

            <button
              onClick={() => navigate("/add-new-merchant")}
              className="flex items-center gap-2 bg-[#0E1E38] text-white px-4 h-10 rounded-lg"
            >
              <Plus className="w-4 h-4" />
              Add New Merchant
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="relative w-[360px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#667085]" />
            <input
              placeholder="Search by Name, Email, Phone"
              className="w-full h-11 pl-10 pr-3 rounded-lg border border-[#D0D5DD] bg-white focus:outline-none"
            />
          </div>

          <div className="flex gap-3">
            <FilterDropdown
              options={["All", "Restaurant", "Grocery", "Shopping"]}
              value={typeFilter}
              onChange={setTypeFilter}
            />

            <FilterDropdown
              options={["All", "Active", "Suspend", "Under Review"]}
              value={statusFilter}
              onChange={setStatusFilter}
            />
          </div>
        </div>

        <div className="bg-white rounded-[14px] border border-[#D0D5DD] overflow-hidden">
          <table className="w-full text-[15px]">
            <thead>
              <tr className="border-b border-[#D0D5DD]">
                {[
                  "Merchant ID",
                  "Name",
                  "Email",
                  "Phone",
                  "Business Name",
                  "Status",
                  "Action",
                ].map((label) => (
                  <th
                    key={label}
                    className="px-5 py-4 text-left font-semibold text-[#101828]"
                  >
                    <div className="flex items-center gap-2">
                      {label}
                      <Filter className="w-4 h-4 text-[#667085]" />
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {history.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-[#D0D5DD] last:border-none"
                >
                  <td className="px-5 py-5 font-medium text-[#667085]">
                    {row.id}
                  </td>

                  <td className="px-5 py-5 text-[#101828]">{row.title}</td>

                  <td className="px-5 py-5 text-[#475467]">{row.content}</td>

                  <td className="px-5 py-5 text-[#101828]">{row.phone}</td>

                  <td className="px-5 py-5 text-[#101828]">{row.business}</td>

                  <td className="px-5 py-5">
                    <span
                      className={`px-4 py-1.5 rounded-full text-sm font-medium ${statusStyles[row.status]}`}
                    >
                      {row.status}
                    </span>
                  </td>

                  <td className="px-5 py-5">
                    <RowActionMenu
                      onView={() =>
                        navigate("/add-new-merchant", {
                          state: { view: true },
                        })
                      }
                      onEdit={() =>
                        navigate("/add-new-merchant", {
                          state: { edit: true },
                        })
                      }
                      onSuspend={() => {
                        setSelectedRow(row);
                        setConfirmType("SUSPEND");
                      }}
                      onDelete={() => {
                        setSelectedRow(row);
                        setConfirmType("DELETE");
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ConfirmActionModal
          open={!!confirmType}
          type={confirmType}
          onClose={() => setConfirmType(null)}
          onConfirm={() => {
            console.log(confirmType, selectedRow);
            setConfirmType(null);
            setSelectedRow(null);
          }}
        />

        <div className="flex items-center justify-end gap-3 text-sm text-[#667085]">
          <span>1–10 of 1,247</span>

          <button className="w-9 h-9 rounded-lg border border-[#D0D5DD] flex items-center justify-center">
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button className="w-9 h-9 rounded-lg bg-[#0E1E38] text-white">
            1
          </button>

          <button className="w-9 h-9 rounded-lg border border-[#D0D5DD]">
            2
          </button>

          <button className="w-9 h-9 rounded-lg border border-[#D0D5DD]">
            3
          </button>

          <button className="w-9 h-9 rounded-lg border border-[#D0D5DD] flex items-center justify-center">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </MainLayout>
  );
}
