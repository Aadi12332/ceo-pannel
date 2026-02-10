const riskStyle = {
  High: "bg-[#FEE2E2] text-[#B91C1C]",
  Medium: "bg-[#FEF3C7] text-[#B45309]",
  Low: "bg-[#DCFCE7] text-[#15803D]",
};

const statusStyle = {
  Running: "bg-[#DBEAFE] text-[#2563EB]",
  Completed: "bg-[#DCFCE7] text-[#15803D]",
};

export default function MLOverviewSection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-[#0000001a] lg:rounded-xl rounded-lg lg:p-6 p-3 bg-white">
          <h3 className="font-semibold text-lg">Performance Snapshot</h3>
          <p className="text-sm text-gray-500 mb-4">
            Precision/recall, latency, and drift in one place.
          </p>

          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Precision</p>
              <p className="font-medium">94.2%</p>
            </div>
            <div>
              <p className="text-gray-500">Recall</p>
              <p className="font-medium">88.1%</p>
            </div>
            <div>
              <p className="text-gray-500">p95 latency (last 24h)</p>
              <p className="font-medium">83ms</p>
            </div>
          </div>
        </div>

        <div className="border border-[#0000001a] lg:rounded-xl rounded-lg lg:p-6 p-3 bg-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg">Monitoring + drift</h3>
              <p className="text-sm text-gray-500">
                Gated data access, audited, with safe-mode fallback recommendations.
              </p>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center gap-2 justify-between mb-2">
              <p className="text-sm text-gray-500">0.34</p>
              <span className="text-xs bg-[#DBEAFE] text-[#2563EB] px-2 py-1 rounded">
                Watch
              </span>
            </div>
            <p className="text-xs text-gray-400 mb-2">Drift score</p>

            <div className="h-2 bg-gray-200 rounded">
              <div className="h-2 bg-[#22C55E] rounded w-[70%]" />
            </div>
          </div>
        </div>
      </div>

      <div className="border border-[#0000001a] lg:rounded-xl rounded-lg lg:p-6 p-3 bg-white overflow-x-auto">
        <div className="pb-5">
          <h3 className="font-semibold text-lg">Model catalog</h3>
          <p className="text-sm text-gray-500">
            Versioning, owners, training data lineage, and last deploy
          </p>
        </div>

        <table className="min-w-[900px] w-full text-sm">
          <thead className="border-t border-b text-black text-left">
            <tr>
              <th className="py-3 text-left px-4">Model</th>
              <th>Version</th>
              <th>Owner</th>
              <th>Training window</th>
              <th>Last used</th>
              <th>Risk</th>
              <th>Stage</th>
            </tr>
          </thead>

          <tbody>
            {[
              {
                model: "Ranking – Home Feed",
                version: "v2.8.1",
                owner: "ML Lead",
                train: "2025-08 → 2025-12",
                used: "01-20-2026, 15:14",
                risk: "High",
                stage: "Canary",
              },
              {
                model: "Fraud Detection",
                version: "v1.14.0",
                owner: "Data Science",
                train: "2025-09 → 2025-12",
                used: "01-20-2026, 09:14",
                risk: "High",
                stage: "Promoted",
              },
              {
                model: "Refund Assist – Eligibility",
                version: "v0.9.3",
                owner: "ML Lead",
                train: "2025-10 → 2025-12",
                used: "01-19-2026, 10:14",
                risk: "Medium",
                stage: "Shadow",
              },
              {
                model: "Search Suggestion",
                version: "v3.2.0",
                owner: "MLOps/SRE",
                train: "2025-07 → 2025-12",
                used: "01-20-2026, 15:14",
                risk: "Low",
                stage: "Promoted",
              },
            ].map((row, i) => (
              <tr key={i} className="border-b last:border-b-0 text-gray-500">
                <td className="px-4 py-3">{row.model}</td>
                <td>{row.version}</td>
                <td>{row.owner}</td>
                <td>{row.train}</td>
                <td>{row.used}</td>
                <td>
                  <span
                    className={`px-2 py-0.5 rounded text-xs ${riskStyle[row.risk]}`}
                  >
                    {row.risk}
                  </span>
                </td>
                <td>{row.stage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border border-[#0000001a] lg:rounded-xl rounded-lg lg:p-6 p-3 bg-white overflow-x-auto">
        <div className="pb-5">
          <h3 className="font-semibold text-lg">Experiment / A-B results</h3>
          <p className="text-sm text-gray-500">
            Guardrails first: violations block promotion and require review
          </p>
        </div>

        <table className="min-w-[700px] w-full text-sm">
          <thead className="border-t border-b text-black text-left">
            <tr>
              <th className="py-3 px-4">Experiment</th>
              <th>Owner</th>
              <th>Uplift</th>
              <th>Violations</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {[
              {
                exp: "Ranking v2.8.1 vs v2.7.9",
                owner: "Data Science",
                uplift: "+1.9%",
                violations: 0,
                status: "Running",
              },
              {
                exp: "Refund Assist prompt tuning",
                owner: "ML Lead",
                uplift: "+0.7%",
                violations: 1,
                status: "Completed",
              },
              {
                exp: "Refund Assist prompt tuning",
                owner: "Data Science",
                uplift: "+1.9%",
                violations: 0,
                status: "Running",
              },
              {
                exp: "Ranking v2.8.1 vs v2.7.9",
                owner: "ML Lead",
                uplift: "+0.7%",
                violations: 1,
                status: "Completed",
              },
            ].map((row, i) => (
              <tr key={i} className="border-b last:border-b-0 text-gray-500">
                <td className="px-4 py-3">{row.exp}</td>
                <td>{row.owner}</td>
                <td>{row.uplift}</td>
                <td>{row.violations}</td>
                <td>
                  <span
                    className={`px-2 py-0.5 rounded text-xs ${statusStyle[row.status]}`}
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
  );
}
