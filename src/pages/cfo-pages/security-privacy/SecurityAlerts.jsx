import { AlertTriangle } from "lucide-react";

export default function SecurityAlerts() {
  const alerts = [
    {
      severity: "High",
      severityClass: "bg-[#FFEDD4] text-[#F54900]",
      status: "Investigating",
      statusClass: "bg-[#E9D5FF] text-[#6D28D9]",
      title: "Password spray detected",
      desc: "102 failed logins across 17 accounts from 3 ASNs (10m window).",
      created: "Created 2026-01-20 16:02",
    },
    {
      severity: "Medium",
      severityClass: "bg-[#FEF3C7] text-[#B45309]",
      status: "Investigating",
      statusClass: "bg-[#E9D5FF] text-[#6D28D9]",
      title: "Unusual API usage spike",
      desc: "Payments export endpoint +340% above baseline (30m window).",
      created: "Created 2026-01-20 11:46",
    },
    {
      severity: "Low",
      severityClass: "bg-[#DCFCE7] text-[#008236]",
      status: "Resolved",
      statusClass: "bg-[#DCFCE7] text-[#008236]",
      title: "New admin session from new device",
      desc: "Admin token minted with MFA from an unrecognised device fingerprint.",
      created: "Created 2026-01-19 21:03",
    },
  ];

  return (
    <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 space-y-4 mb-5">
      <div>
        <h2 className="text-xl font-semibold">Security alerts</h2>
        <p className="text-sm text-gray-500">
          Auth anomalies, failed logins, suspicious API usage.
        </p>
      </div>

      {alerts.map((a, i) => (
        <div
          key={i}
          className="border border-[#F59E0B] rounded-xl p-4 flex justify-between gap-6"
        >
          <div className="flex gap-3">
            <AlertTriangle className="w-4 h-4 text-[#B45309] mt-1" />

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span
                  className={`px-2 py-0.5 text-xs rounded ${a.severityClass}`}
                >
                  {a.severity}
                </span>
                <span
                  className={`px-2 py-0.5 text-xs rounded ${a.statusClass}`}
                >
                  {a.status}
                </span>
              </div>

              <p className="font-medium text-[#92400E]">{a.title}</p>
              <p className="text-sm text-[#B45309]">{a.desc}</p>
              <p className="text-xs text-[#B45309]">{a.created}</p>
            </div>
          </div>

          <button className="px-4 py-2 h-fit bg-[#0E1E38] text-white rounded-lg">
            Acknowledge
          </button>
        </div>
      ))}
    </div>
  );
}
