import { useState } from "react";
import { Search, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ActiveIncidents() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const incidents = [
    {
      id: 1,
      sev: "SEV1",
      title: "Authentication outage",
      owner: "Sam",
      elapsed: "26m 15s",
    },
    {
      id: 2,
      sev: "SEV2",
      title: "Payment latency regression",
      owner: "Lee",
      elapsed: "18m 42s",
    },
    {
      id: 3,
      sev: "SEV1",
      title: "Token validation failure",
      owner: "Sam",
      elapsed: "12m 05s",
    },
    {
      id: 4,
      sev: "SEV3",
      title: "CDN cache inconsistency",
      owner: "Mina",
      elapsed: "40m 11s",
    },
    {
      id: 5,
      sev: "SEV1",
      title: "OAuth provider timeout",
      owner: "Aman",
      elapsed: "9m 30s",
    },
    {
      id: 6,
      sev: "SEV2",
      title: "Checkout API 500 errors",
      owner: "Neha",
      elapsed: "22m 10s",
    },
    {
      id: 7,
      sev: "SEV3",
      title: "Edge routing mismatch",
      owner: "Ravi",
      elapsed: "15m 55s",
    },
    {
      id: 8,
      sev: "SEV2",
      title: "Database connection pool spike",
      owner: "Arjun",
      elapsed: "33m 12s",
    },
    {
      id: 9,
      sev: "SEV1",
      title: "Session invalidation bug",
      owner: "Priya",
      elapsed: "7m 48s",
    },
    {
      id: 10,
      sev: "SEV3",
      title: "Search index delay",
      owner: "Mina",
      elapsed: "55m 01s",
    },
    {
      id: 11,
      sev: "SEV2",
      title: "Webhook retry backlog",
      owner: "Karan",
      elapsed: "19m 17s",
    },
    {
      id: 12,
      sev: "SEV1",
      title: "Redis memory saturation",
      owner: "Sam",
      elapsed: "11m 03s",
    },
    {
      id: 13,
      sev: "SEV3",
      title: "Analytics event lag",
      owner: "Ravi",
      elapsed: "1h 05m",
    },
    {
      id: 14,
      sev: "SEV2",
      title: "Email delivery delay",
      owner: "Neha",
      elapsed: "24m 22s",
    },
    {
      id: 15,
      sev: "SEV1",
      title: "Primary DB failover triggered",
      owner: "Aman",
      elapsed: "6m 14s",
    },
    {
      id: 16,
      sev: "SEV3",
      title: "Cache warmup failure",
      owner: "Mina",
      elapsed: "48m 09s",
    },
    {
      id: 17,
      sev: "SEV2",
      title: "High error rate on Orders API",
      owner: "Arjun",
      elapsed: "29m 33s",
    },
    {
      id: 18,
      sev: "SEV1",
      title: "Payment gateway timeout spike",
      owner: "Lee",
      elapsed: "14m 26s",
    },
    {
      id: 19,
      sev: "SEV3",
      title: "Background job processing delay",
      owner: "Priya",
      elapsed: "37m 50s",
    },
    {
      id: 20,
      sev: "SEV2",
      title: "Third-party webhook failures",
      owner: "Karan",
      elapsed: "21m 08s",
    },
  ];

  const sevStyle = {
    SEV1: "bg-[#FEE2E2] text-[#B91C1C]",
    SEV2: "bg-[#FEF3C7] text-[#B45309]",
    SEV3: "bg-[#DBEAFE] text-[#2563EB]",
  };

  const handleRowClick = (row) => {
    navigate("/incident-details", {
      state: row,
    });
  };

  const filtered = incidents.filter(
    (i) =>
      i.title.toLowerCase().includes(search.toLowerCase()) ||
      i.owner.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-semibold">Active incidents</h2>
          <p className="text-sm text-gray-500">
            Sev1/2/3 with owners and timers.
          </p>
        </div>

        <div className="relative w-full lg:w-72">
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
      </div>

      <div className="max-h-[calc(100vh-310px)] overflow-auto scroll-hide">
        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full text-sm">
            <tbody>
              {filtered.map((row) => (
                <tr
                  key={row.id}
                  onClick={() => handleRowClick(row)}
                  className="border-b border-[#0000001a] last:border-b-0 cursor-pointer hover:bg-gray-50 transition"
                >
                  <td className="py-4">
                    <div>
                      <span
                      className={`px-2 py-0.5 text-xs rounded min-w-10 mr-3 ${sevStyle[row.sev]}`}
                    >
                      {row.sev} 
                    </span>
                    {row.title}
                    </div>
                  </td>


                  <td className="text-gray-600">
                    Owners:{" "}
                    <span className="font-medium text-black">{row.owner}</span>
                  </td>

                  <td className="text-gray-600 text-end">
                    <div className="">
                      <span className="text-black pr-5">{row.elapsed}</span>
                    <ChevronRight size={16} className="text-gray-400 inline " />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
