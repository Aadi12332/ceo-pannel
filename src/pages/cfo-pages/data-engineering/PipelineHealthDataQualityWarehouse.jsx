export default function PipelineHealthDataQualityWarehouse() {
  const pipelineData = [
    {
      job: "marketing_attribution_hourly",
      owner: "Data Eng Lead",
      lastRun: "01-20-2026, 15:14",
      nextRun: "01-19-2027",
      sla: "35m",
      status: "Running",
      statusClass: "bg-[#DBEAFE] text-[#2563EB]",
      retryDisabled: true,
    },
    {
      job: "events_ingest_stream",
      owner: "Analytics Eng",
      lastRun: "01-20-2026, 09:14",
      nextRun: "01-19-2027",
      sla: "5m",
      status: "Delayed",
      statusClass: "bg-[#FFEDD4] text-[#F54900]",
    },
    {
      job: "golden_kpis_daily",
      owner: "You (CTO)",
      lastRun: "01-19-2026, 10:14",
      nextRun: "01-18-2027",
      sla: "20m",
      status: "On-time",
      statusClass: "bg-[#DBEAFE] text-[#2563EB]",
    },
    {
      job: "marketing_attribution_hourly",
      owner: "Data Eng Lead",
      lastRun: "01-20-2026, 15:14",
      nextRun: "01-19-2027",
      sla: "20m",
      status: "Failed",
      statusClass: "bg-[#FFDDDB] text-[#CF2027]",
    },
  ];

  const qualityData = [
    {
      check: "Attribution events completeness",
      detail:
        "Missing 8.2% of attribution events since 07:00Z (upstream outage suspected).",
      updated: "01-20-2026, 15:14",
      status: "Failed",
      statusClass: "bg-[#FFDDDB] text-[#CF2027]",
    },
    {
      check: "Checkout event contract",
      detail:
        "New field 'promo_code' observed without schema registry update.",
      updated: "01-20-2026, 09:14",
      status: "Warning",
      statusClass: "bg-[#FEF3C7] text-[#B45309]",
    },
    {
      check: "Duplicate session ids",
      detail: "No duplicates above threshold.",
      updated: "01-19-2026, 10:14",
      status: "Pass",
      statusClass: "bg-[#DCFCE7] text-[#008236]",
    },
    {
      check: "Attribution events completeness",
      detail:
        "Missing 8.2% of attribution events since 07:00Z (upstream outage suspected).",
      updated: "01-20-2026, 15:14",
      status: "Pass",
      statusClass: "bg-[#DCFCE7] text-[#008236]",
    },
  ];

  const warehouseData = [
    {
      table: "gold.kpi_daily",
      owner: "Analytics Eng",
      refresh: "Daily",
      last: "01-20-2026, 15:14",
      pii: "No",
      piiClass: "bg-[#DBEAFE] text-[#2563EB]",
    },
    {
      table: "mart.marketing_attribution_hourly",
      owner: "Data Eng Lead",
      refresh: "Hourly",
      last: "01-20-2026, 09:14",
      pii: "No",
      piiClass: "bg-[#DBEAFE] text-[#2563EB]",
    },
    {
      table: "raw.events",
      owner: "Data Eng Lead",
      refresh: "Stream",
      last: "01-19-2026, 10:14",
      pii: "Yes",
      piiClass: "bg-[#FFDDDB] text-[#CF2027]",
    },
    {
      table: "gold.kpi_daily",
      owner: "Analytics Eng",
      refresh: "Daily",
      last: "01-20-2026, 15:14",
      pii: "No",
      piiClass: "bg-[#DBEAFE] text-[#2563EB]",
    },
  ];

  return (
    <div className="space-y-6 mb-5">
      <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3">
        <h2 className="text-xl font-semibold mb-1">Pipeline health</h2>
        <p className="text-sm text-gray-500 mb-4">
          On-time, delayed, failed — with retry controls.
        </p>

        <div className="overflow-x-auto lg:w-[calc(100vw-390px)] w-[calc(100vw-44px)] scroll-hide">
          <table className="min-w-[900px] w-full text-sm">
            <thead className="border-b text-left">
              <tr>
                <th className="py-3">Job</th>
                <th>Owner</th>
                <th>Last run</th>
                <th>Next run</th>
                <th>SLA</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pipelineData.map((p, i) => (
                <tr key={i} className="border-b last:border-b-0">
                  <td className="py-4 break-all">{p.job}</td>
                  <td>{p.owner}</td>
                  <td>{p.lastRun}</td>
                  <td>{p.nextRun}</td>
                  <td><span className="inline-block min-w-[80px]">{p.sla}</span></td>
                  <td>
                    <span
                      className={`px-2 py-0.5 text-xs inline-block rounded ${p.statusClass}`}
                    >
                      {p.status}
                    </span>
                  </td>
                  <td>
                    <button
                      disabled={p.retryDisabled}
                      className={`px-4 py-2 rounded-lg min-w-[120px] text-center ${
                        p.retryDisabled
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : "bg-[#0E1E38] text-white"
                      }`}
                    >
                      Retry
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3">
        <div className="flex items-center justify-between mb-4 gap-3 flex-wrap">
          <div>
            <h2 className="text-xl font-semibold">Data Quality</h2>
            <p className="text-sm text-gray-500">
              Missing events, schema drift, duplicates — enforce trust in dashboards.
            </p>
          </div>
          <button className="px-4 py-2 bg-[#0E1E38] text-white rounded-lg text-sm">
            Run Checks
          </button>
        </div>

        <div className="overflow-x-auto lg:w-[calc(100vw-390px)] w-[calc(100vw-44px)] scroll-hide">
          <table className="min-w-[900px] w-full text-sm">
            <thead className="border-b text-left">
              <tr>
                <th className="py-3">Check</th>
                <th>Detail</th>
                <th>Updated</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {qualityData.map((q, i) => (
                <tr key={i} className="border-b last:border-b-0">
                  <td className="py-4">{q.check}</td>
                  <td><span className="inline-block max-w-[300px]">{q.detail}</span></td>
                  <td>{q.updated}</td>
                  <td>
                    <span className="inline-block min-w-[120px]">
                    <span
                      className={`px-2 py-0.5 text-xs  rounded ${q.statusClass}`}
                    >
                      {q.status}
                    </span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3">
        <h2 className="text-xl font-semibold mb-1">
          Warehouse tables catalog
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Owners, refresh schedules, and PII flags.
        </p>

        <div className="overflow-x-auto lg:w-[calc(100vw-390px)] w-[calc(100vw-44px)] scroll-hide">
          <table className="min-w-[900px] w-full text-sm">
            <thead className="border-b text-left">
              <tr>
                <th className="py-3">Table</th>
                <th>Owner</th>
                <th>Refresh</th>
                <th>Last Refreshed</th>
                <th>PII</th>
              </tr>
            </thead>
            <tbody>
              {warehouseData.map((w, i) => (
                <tr key={i} className="border-b last:border-b-0">
                  <td className="py-4">{w.table}</td>
                  <td>{w.owner}</td>
                  <td>{w.refresh}</td>
                  <td>{w.last}</td>
                  <td>
                    <span
                      className={`px-2 py-0.5 text-xs rounded ${w.piiClass}`}
                    >
                      {w.pii}
                    </span>
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
