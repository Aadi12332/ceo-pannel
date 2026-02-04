"use client"

export default function RoadmapMilestones() {
  return (
    <div className="lg:rounded-xl rounded-lg bg-white lg:p-6 p-3 mb-5">
      <h2 className="mb-6 text-xl font-semibold">
        Roadmap Milestones & Quarterly OKRs (Read-Only)
      </h2>

      <div className="grid grid-cols-1 md:gap-6 gap-3 md:grid-cols-2">
        <MilestoneCard
          title="Launch NYC Market"
          owner="GSD"
          status="on track"
          progress={85}
          target="1/15/2025"
        />

        <MilestoneCard
          title="Implement Premium Support Tier"
          owner="COO"
          status="on track"
          progress={60}
          target="2/1/2025"
        />

        <MilestoneCard
          title="Resolve SF Permit Issues"
          owner="LPD"
          status="at risk"
          progress={40}
          target="1/30/2025"
        />

        <MilestoneCard
          title="Chicago Staffing Ramp"
          owner="COO"
          status="delayed"
          progress={25}
          target="2/15/2025"
        />

        <MilestoneCard
          title="Partner Diversification - Payments"
          owner="CTO"
          status="on track"
          progress={15}
          target="6/30/2025"
        />
      </div>

      <div className="mt-8 lg:rounded-xl rounded-lg bg-blue-50 sm:px-5 p-2.5 sm:py-4 text-blue-700">
        <span className="font-medium">Note:</span> Milestones are read-only for CEO view. Updates are submitted via GSD approvals and managed by respective directory owners.
      </div>
    </div>
  )
}

function MilestoneCard({ title, owner, status, progress, target }) {
  const statusStyles = {
    "on track": "bg-green-100 text-green-700 border-green-200",
    "at risk": "bg-yellow-100 text-yellow-700 border-yellow-200",
    delayed: "bg-red-100 text-red-600 border-red-200"
  }

  const barColor =
    status === "on track"
      ? "bg-green-600"
      : status === "at risk"
      ? "bg-orange-500"
      : "bg-red-600"

  return (
    <div className="lg:rounded-xl rounded-lg border border-gray-200 bg-white sm:p-5 p-2.5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-lg font-medium">{title}</p>
          <p className="text-sm text-gray-600">Owner: {owner}</p>
        </div>
        <span
          className={`rounded-full border px-3 py-1 text-xs min-w-max ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>

      <div className="mt-4">
        <div className="mb-1 flex items-center justify-between text-sm">
          <span className="text-gray-600">Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="h-2 w-full rounded-full bg-gray-200">
          <div
            className={`h-2 rounded-full ${barColor}`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <p className="mt-3 text-sm text-gray-600">Target: {target}</p>
    </div>
  )
}
