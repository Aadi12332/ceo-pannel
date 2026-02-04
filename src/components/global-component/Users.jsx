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
  Eye,
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
    id: "#C001",
    title: "Maya Patel",
    content: "sara.bright@example.com",
    phone: "202-555-0199",
    orders: 12,
    status: "Active",
  },
  {
    id: "#C002",
    title: "Ravi Kumar",
    content: "mike.jones@samplemail.com",
    phone: "415-555-0123",
    orders: 12,
    status: "Suspended",
  },
  {
    id: "#C003",
    title: "Sofia Mehta",
    content: "linda.smith@webmail.com",
    phone: "312-555-0147",
    orders: 12,
    status: "Active",
  },
  {
    id: "#C004",
    title: "Arjun Singh",
    content: "david.lee@domain.com",
    phone: "718-555-0165",
    orders: 12,
    status: "Active",
  },
  {
    id: "#C005",
    title: "Leela Joshi",
    content: "emily.clark@service.com",
    phone: "503-555-0182",
    orders: 12,
    status: "Under Review",
  },
  {
    id: "#C006",
    title: "Kiran Desai",
    content: "james.brown@mymail.com",
    phone: "619-555-0134",
    orders: 12,
    status: "Active",
  },
  {
    id: "#C007",
    title: "Nisha Verma",
    content: "olivia.white@inbox.com",
    phone: "303-555-0178",
    orders: 12,
    status: "Active",
  },
  {
    id: "#C008",
    title: "Vikram Reddy",
    content: "noah@mailservice.com",
    phone: "404-555-0110",
    orders: 12,
    status: "Active",
  },
];

export default function Merchants() {
  const navigate = useNavigate();
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [viewApplication, setViewApplication] = useState(false);
  const [confirmType, setConfirmType] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  return (
    <MainLayout>
      <div className="mb-5">
        <div
          className="text-sm sm:text-base flex items-center gap-5 mb-1 cursor-pointer"
          onClick={() => {
            if (viewApplication) {
              navigate("/users");
              setViewApplication(false);
            } else {
              navigate("/global-tool-registry");
              setViewApplication(true);
            }
          }}
        >
          <ChevronLeft className="sm:w-5 w-4 sm:h-5 h-4 cursor-pointer" />
          <h1 className="sm:text-xl text-sm font-semibold">
            <span className="text-gray-500">
              {viewApplication ? "Users" : "Global Tool Registry"}
            </span>{" "}
            <span className="text-gray-500">&gt;</span>
            {viewApplication ? " View New Applications" : " Users"}
          </h1>
        </div>

        <p className="text-sm text-gray-500 mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="bg-[#EEF4FF] space-y-5">
        <div className="flex items-center justify-between flex-wrap gap-3 lg:h-10">
          <h2 className="text-[20px] font-semibold text-[#101828]">
            {viewApplication
              ? "All Influencer's Request"
              : "Under Review Users"}
          </h2>

            <div className="flex items-center gap-3 flex-wrap">
              <button className="flex items-center gap-2 bg-[#0E1E38] text-white sm:px-4 px-2 h-10 rounded-lg">
                <FileDown className="w-4 h-4" />
                Export PDF
              </button>

              <button
                onClick={() => setViewApplication(true)}
                className="flex items-center gap-2 bg-[#0E1E38] text-white sm:px-4 px-2 h-10 rounded-lg"
              >
                <Eye className="w-4 h-4 text-white" />
                View New Applications
              </button>

              <button onClick={() => navigate("/add-new-user", {
                          state: { adduser: true },
                        })} className="flex items-center gap-2 bg-[#0E1E38] text-white sm:px-4 px-2 h-10 rounded-lg">
                <Plus className="w-4 h-4" />
                Add New User
              </button>
            </div>
        </div>

        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="relative max-w-[360px] w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#667085]" />
            <input
              placeholder="Search by Name, Email, Phone"
              className="w-full h-11 pl-10 pr-3 rounded-lg border border-[#D0D5DD] bg-white focus:outline-none"
            />
          </div>

          {!viewApplication && (
            <div className="flex gap-3">
              <FilterDropdown
                options={["All", "Users", "Influencers"]}
                value={typeFilter}
                onChange={setTypeFilter}
              />

              <FilterDropdown
                options={["All", "Active", "Suspend", "Under Review"]}
                value={statusFilter}
                onChange={setStatusFilter}
              />
            </div>
          )}
        </div>

        <div className="bg-white rounded-[14px] border border-[#D0D5DD] w-[calc(100vw-24px)] overflow-auto scroll-hide lg:w-full">
          <table className="w-full text-[15px] min-w-[1150px]">
            <thead>
              <tr className="border-b border-[#D0D5DD]">
                {[
                  "Customer ID",
                  "Customer Name",
                  "Email",
                  "Phone",
                  !viewApplication && "Total Orders",
                  "Status",
                  "Action",
                ].filter(Boolean).map((label) => (
                  <th
                    key={label}
                    className="sm:px-5 px-2.5 sm:py-4 py-4 text-left font-semibold text-[#101828]"
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
                  <td className="sm:px-5 px-2.5 sm:py-4 py-4  font-medium text-[#667085]">
                    {row.id}
                  </td>

                  <td className="sm:px-5 px-2.5 sm:py-4 py-4  text-[#101828]">{row.title}</td>

                  <td className="sm:px-5 px-2.5 sm:py-4 py-4  text-[#475467]">{row.content}</td>

                  <td className="sm:px-5 px-2.5 sm:py-4 py-4  text-[#101828]">{row.phone}</td>

                  {!viewApplication && (
                    <td className="sm:px-5 px-2.5 sm:py-4 py-4  text-[#101828]">{row.orders}</td>
                  )}

                  <td className="sm:px-5 px-2.5 sm:py-4 py-4 ">
                    <span
                      className={`px-4 py-1.5 rounded-full text-sm font-medium ${statusStyles[row.status]}`}
                    >
                      {row.status}
                    </span>
                  </td>

                  <td className="sm:px-5 px-2.5 sm:py-4 py-4 ">
                   <RowActionMenu
                      viewApplication={viewApplication}
                      onView={() =>
                        navigate("/add-new-user", {
                          state: { view: true, viewApplication:viewApplication },
                        })
                      }
                      onEdit={() =>
                        navigate("/add-new-user", {
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
                      onApprove={() => {
                        setSelectedRow(row);
                        setConfirmType("APPROVE");
                      }}
                      onReject={() => {
                        setSelectedRow(row);
                        setConfirmType("REJECT");
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ConfirmActionModal
          viewApplication={viewApplication}
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

          <button className="sm:w-9 sm:h-9 w-8 h-8 rounded-lg border border-[#D0D5DD] flex items-center justify-center">
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button className="sm:w-9 sm:h-9 w-8 h-8 rounded-lg bg-[#0E1E38] text-white">
            1
          </button>

          <button className="sm:w-9 sm:h-9 w-8 h-8 rounded-lg border border-[#D0D5DD]">
            2
          </button>

          <button className="sm:w-9 sm:h-9 w-8 h-8 rounded-lg border border-[#D0D5DD]">
            3
          </button>

          <button className="sm:w-9 sm:h-9 w-8 h-8 rounded-lg border border-[#D0D5DD] flex items-center justify-center">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </MainLayout>
  );
}
