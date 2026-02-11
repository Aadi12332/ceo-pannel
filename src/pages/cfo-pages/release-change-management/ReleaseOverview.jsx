import { useState } from "react";

export default function ReleaseOverview() {
  const releases = [
    {
      id: "CR-1844",
      risk: "Low Risk",
      status: "Completed",
      title: "Database connection pool tuning",
      time: "Thu 22 Jan, 07:30",
      team: "Platform",
    },
    {
      id: "CR-1843",
      risk: "Medium Risk",
      status: "Approved",
      title: "Feature flag: New onboarding flow",
      time: "Thu 22 Jan, 23:30",
      team: "Web",
    },
    {
      id: "CR-1842",
      risk: "High Risk",
      status: "Scheduled",
      title: "Payments API v2 deploy",
      time: "Sat 24 Jan, 00:30 • depends on CR-1843",
      team: "Payments",
    },
  ];

  const blackout = [
    {
      title: "Global marketing launch",
      time: "Sun 25 Jan, 13:30 → Tue 27 Jan, 01:30",
      desc: "No prod deploys unless emergency path is approved.",
      scope: "Global",
    },
    {
      title: "Global marketing launch",
      time: "Sun 25 Jan, 13:30 → Tue 27 Jan, 01:30",
      desc: "No prod deploys unless emergency path is approved.",
      scope: "Global",
    },
  ];

  const [flags, setFlags] = useState({
    onboarding: "Paused",
    search: "Running",
  });

  const riskStyle = {
    "Low Risk": "bg-[#DCFCE7] text-[#008236]",
    "Medium Risk": "bg-[#FEF3C7] text-[#B45309]",
    "High Risk": "bg-[#FFDDDB] text-[#CF2027]",
  };

  const statusStyle = {
    Completed: "bg-[#DCFCE7] text-[#008236]",
    Approved: "bg-[#DCFCE7] text-[#008236]",
    Scheduled: "bg-[#DBEAFE] text-[#2563EB]",
  };

  const flagStyle = {
    Paused: "bg-[#FFEDD4] text-[#F54900]",
    Running: "bg-[#DBEAFE] text-[#2563EB]",
  };

  return (
    <div className="space-y-5 mb-5">
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
          <h2 className="text-xl font-semibold">Release Calendar</h2>
          <p className="text-sm text-gray-500 mb-5">
            Schedules, blackout windows, and release dependencies.
          </p>

          <div className="space-y-5">
            {releases.map((r, i) => (
              <div key={i} className="border-b border-[#00000033] pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{r.id}</span>
                    <span className={`px-2 py-0.5 text-xs rounded ${riskStyle[r.risk]}`}>
                      {r.risk}
                    </span>
                    <span className={`px-2 py-0.5 text-xs rounded ${statusStyle[r.status]}`}>
                      {r.status}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{r.team}</span>
                </div>
                <p className="font-medium">{r.title}</p>
                <p className="text-sm text-gray-500">{r.time}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
          <h2 className="text-xl font-semibold">Blackout windows</h2>
          <p className="text-sm text-gray-500 mb-5">
            Prevents non-emergency changes during critical periods.
          </p>

          <div className="space-y-5">
            {blackout.map((b, i) => (
              <div key={i} className="border-b border-[#00000033] pb-4 flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">{b.title}</p>
                  <span className="text-sm text-gray-500">{b.scope}</span>
                </div>
                <p>{b.time}</p>
                <p className="text-sm text-gray-500">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
        <h2 className="text-xl font-semibold">Feature flag rollout dashboard</h2>
        <p className="text-sm text-gray-500 mb-5">Progressive delivery</p>

        <div className="grid lg:grid-cols-2 gap-5">
          <div className="border border-[#00000033] rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <p className="font-semibold">Onboarding_revamp</p>
              <span className={`px-2 py-0.5 text-xs rounded ${flagStyle[flags.onboarding]}`}>
                {flags.onboarding}
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              New onboarding with progressive profile capture
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm mb-4 border-b border-[#00000033] pb-4">
              <div>
                <p className="text-gray-500">Rollout</p>
                <p className="font-medium">10% of users</p>
              </div>
              <div>
                <p className="text-gray-500">Change record</p>
                <p className="font-medium">CR-1843</p>
              </div>
              <div>
                <p className="text-gray-500">Guardrail: crash rate</p>
                <p className="font-medium">+18%</p>
              </div>
              <div>
                <p className="text-gray-500">Guardrail: P95 latency</p>
                <p className="font-medium">+7%</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 border border-[#00000033] rounded-lg py-2">
                Pause
              </button>
              <button className="flex-1 bg-[#0E1E38] text-white rounded-lg py-2">
                Rollback
              </button>
            </div>
          </div>

          <div className="border border-[#00000033] rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <p className="font-semibold">search_v3</p>
              <span className={`px-2 py-0.5 text-xs rounded ${flagStyle[flags.search]}`}>
                {flags.search}
              </span>
            </div>
            <p className="text-gray-600 mb-4">New ranking model rollout</p>

            <div className="grid grid-cols-2 gap-4 text-sm mb-4 border-b border-[#00000033] pb-4">
              <div>
                <p className="text-gray-500">Rollout</p>
                <p className="font-medium">Austin, London, Tokyo</p>
              </div>
              <div>
                <p className="text-gray-500">Change record</p>
                <p className="font-medium">CR-1842</p>
              </div>
              <div>
                <p className="text-gray-500">Guardrail: crash rate</p>
                <p className="font-medium">+2%</p>
              </div>
              <div>
                <p className="text-gray-500">Guardrail: P95 latency</p>
                <p className="font-medium">+4%</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 border border-[#00000033] rounded-lg py-2">
                Pause
              </button>
              <button className="flex-1 bg-[#0E1E38] text-white rounded-lg py-2">
                Rollback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
