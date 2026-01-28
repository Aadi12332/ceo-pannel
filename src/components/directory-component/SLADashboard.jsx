import { LocationIcon } from "../../assets/icons/icons";

export default function SLADashboard() {
  const slaData = [
    { role: "CEO", name: "Sarah Johnson", response: "2h / 4h target", progress: 50, status: "meeting" },
    { role: "COO", name: "Mike Davis", response: "6h / 8h target", progress: 75, status: "meeting" },
    { role: "CFO", name: "Emily Wang", response: "12h / 24h target", progress: 50, status: "meeting" },
    { role: "CTO", name: "Alex Chen", response: "4h / 6h target", progress: 70, status: "meeting" },
    { role: "CMO", name: "Jessica Lee", response: "18h / 12h target", progress: 100, status: "breached" },
    { role: "GSD", name: "Tom Rodriguez", response: "10h / 12h target", progress: 80, status: "meeting" },
    { role: "LPD", name: "Emma Wilson", response: "72h / 48h target", progress: 100, status: "breached" },
    { role: "Automation", name: "Automation Team", response: "0.5h / 1h target", progress: 50, status: "meeting" }
  ]

  const cities = [
    {
      city: "New York",
      status: "ready",
      readiness: 95,
      load: 82
    },
    {
      city: "San Francisco",
      status: "blocked",
      readiness: 45,
      load: 65,
      blockers: ["Food service permit expired", "Provider capacity at 90%"]
    },
    {
      city: "Austin",
      status: "ready",
      readiness: 88,
      load: 45
    },
    {
      city: "Boston",
      status: "at risk",
      readiness: 72,
      load: 78,
      blockers: ["Insurance renewal pending"]
    },
    {
      city: "Seattle",
      status: "ready",
      readiness: 91,
      load: 58
    },
    {
      city: "Chicago",
      status: "at risk",
      readiness: 68,
      load: 88,
      blockers: ["High operational load", "Provider SLA at risk"]
    }
  ]

  return (
    <div className="space-y-5">
      <div className="rounded-2xl border bg-white p-6">
        <h2 className="mb-4 text-lg font-semibold">SLA Performance Summary</h2>
        <div className="space-y-3">
          {slaData.map(item => (
            <div key={item.name} className="flex items-center justify-between rounded-xl bg-gray-50 p-4">
              <div className="flex items-center gap-4">
                <span className="rounded-full border px-3 py-1 text-xs">{item.role}</span>
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">Response: {item.response}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-2 w-32  bg-gray-200">
                  <div
                    className={`h-2  ${item.status === "breached" ? "bg-red-500" : "bg-green-500"}`}
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
                <span
                  className={` px-3 py-1 text-xs min-w-[80px] border border-[#0000001A] rounded-lg text-center ${
                    item.status === "breached"
                      ? "bg-red-100 text-red-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border bg-white p-6">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
          <LocationIcon />
          City Readiness & Operational Load Heatmap
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {cities.map(city => (
            <div
              key={city.city}
              className={`rounded-xl border p-4 ${
                city.status === "blocked"
                  ? "border-red-300 bg-red-50"
                  : city.status === "at risk"
                  ? "border-yellow-300 bg-yellow-50"
                  : ""
              }`}
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-semibold">{city.city}</h3>
                <LocationIcon
                    className="h-5 w-5"
                    color={
                        city.status === "blocked"
                        ? "#ef4444"
                        : city.status === "at risk"
                        ? "#eab308"
                        : "#22c55e"
                    }
                    />

              </div>
              <span
                className={`mb-3 inline-block rounded-full px-3 py-1 text-xs ${
                  city.status === "blocked"
                    ? "bg-red-100 text-red-600"
                    : city.status === "at risk"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {city.status}
              </span>
              <div className="space-y-3">
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>Readiness Score</span>
                    <span className="font-medium">{city.readiness}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-200">
                    <div
                      className="h-2 rounded-full bg-green-500"
                      style={{ width: `${city.readiness}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>Operational Load</span>
                    <span className="font-medium">{city.load}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-200">
                    <div
                      className={`h-2 rounded-full ${city.load > 80 ? "bg-red-500" : city.load > 60 ? "bg-yellow-500" : "bg-green-500"}`}
                      style={{ width: `${city.load}%` }}
                    />
                  </div>
                </div>
                {city.blockers && (
                  <div className="rounded-lg bg-red-100 p-3 text-sm text-red-700">
                    <p className="mb-1 font-medium">Blockers:</p>
                    <ul className="list-disc pl-4">
                      {city.blockers.map(b => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
