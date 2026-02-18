import { useState } from "react";
import { ChevronDown, ChevronUp, Calendar } from "lucide-react";

export default function ChangeRecordList() {
  const [openId, setOpenId] = useState(null);

  const records = [
    {
      id: "CR-1842",
      risk: "High Risk",
      status: "Scheduled",
      title: "Payments API v2 deploy",
      ticket: "Ticket PAY-2911 | ADR ADR-77",
      service: "payments",
      date: "01-24-2026",
      progress: 67,
      active: true,
    },
    {
      id: "CR-1843",
      risk: "Medium Risk",
      status: "Approved",
      title: "Feature flag: New onboarding flow",
      ticket: "Ticket PAY-2911 | ADR ADR-79",
      service: "web",
      date: "01-22-2026",
      progress: 100,
      active: false,
    },
    {
      id: "CR-1844",
      risk: "Low Risk",
      status: "Completed",
      title: "Database connection pool tuning",
      ticket: "Ticket SRE-488 | No ADR",
      service: "platform",
      date: "01-22-2026",
      progress: 100,
      active: false,
    },
    {
      id: "CR-1845",
      risk: "Critical Risk",
      status: "In Review",
      title: "Emergency: Roll back crashy build",
      ticket: "No Ticket | No ADR",
      service: "web",
      date: "",
      progress: 45,
      active: true,
    },
  ];

  const riskStyle = {
    "Low Risk": "bg-[#DCFCE7] text-[#00A63E]",
    "Medium Risk": "bg-[#FEF3C7] text-[#B45309]",
    "High Risk": "bg-[#FFDDDB] text-[#CF2027]",
    "Critical Risk": "bg-[#FEE2E2] text-[#B91C1C]",
  };

  const statusStyle = {
    Scheduled: "bg-[#DBEAFE] text-[#2563EB]",
    Approved: "bg-[#DCFCE7] text-[#00A63E]",
    Completed: "bg-[#DCFCE7] text-[#00A63E]",
    "In Review": "bg-[#DBEAFE] text-[#2563EB]",
  };

  return (
    <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
      <h2 className="text-xl font-semibold">Change Record List</h2>
      <p className="text-sm text-gray-500 mb-6">
        Linked ADR/tickets and approvals. Select a record to view actions on the
        right.
      </p>

      <div className="space-y-6">
        {records.map((r) => {
          const isOpen = openId === r.id;

          return (
            <div
              key={r.id}
              className="border-b border-[#0000001a] pb-6 last:pb-0 last:border-b-0"
            >
              <div
                className="flex items-start justify-between cursor-pointer flex-wrap"
                onClick={() => setOpenId(isOpen ? null : r.id)}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="font-semibold">{r.id}</span>
                    <span
                      className={`px-2 py-0.5 text-xs rounded ${riskStyle[r.risk]}`}
                    >
                      {r.risk}
                    </span>
                    <span
                      className={`px-2 py-0.5 text-xs rounded ${statusStyle[r.status]}`}
                    >
                      {r.status}
                    </span>
                  </div>
                  <p className="font-medium">{r.title}</p>
                  <p className="text-sm text-gray-500">{r.ticket}</p>
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span>
                    Service:{" "}
                    <span className="text-black font-bold">{r.service}</span>
                  </span>
                  {r.date && (
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {r.date}
                    </span>
                  )}
                  {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>

              {isOpen && (
                <div className="mt-6 border border-black/20 lg:rounded-xl lg:p-6 rounded-lg p-3 flex flex-wrap items-center lg:gap-12 gap-5 w-full">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-4">
                      Active change
                    </h3>

                    <div className="flex items-center justify-between mb-2 text-sm">
                      <span className="text-gray-500">Approval routing</span>
                      <span>{r.progress}%</span>
                    </div>

                    <div className="h-2 bg-gray-200 rounded mb-4">
                      <div
                        className="h-2 bg-[#3B5CCC] rounded"
                        style={{ width: `${r.progress}%` }}
                      />
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-xs">
                      <span className="px-2 py-1 rounded bg-[#DCFCE7] text-[#00A63E]">
                        Release Manager
                      </span>
                      <span className="px-2 py-1 rounded bg-[#DCFCE7] text-[#00A63E]">
                        SRE
                      </span>
                      <span className="px-2 py-1 rounded bg-[#FEF3C7] text-[#B45309]">
                        CTO
                      </span>
                    </div>

                    <p className="text-sm text-gray-500">
                      {r.progress < 100
                        ? "Your approval is pending"
                        : "All approvals completed"}
                    </p>
                  </div>

                  <div className="flex flex-col gap-5 flex-1">
                    <button className="flex-1 border border-[#00A63E] text-[#00A63E] rounded-lg text-sm py-2">
                      Mark Granted
                    </button>

                    <div className="flex gap-5 items-center border-t border-[#0000001a] pt-5">
                      <button
                        className={`flex-1 rounded-lg text-sm py-2 ${
                          r.progress < 100
                            ? "border-[#0000001a] border text-gray-400"
                            : "bg-[#0E1E38] text-white"
                        }`}
                      >
                        Promote to Prod
                      </button>

                      <button className="flex-1 bg-[#0E1E38] text-white rounded-lg text-sm py-2">
                        Rollback
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
