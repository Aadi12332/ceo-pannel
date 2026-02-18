import { Copy } from "lucide-react";

export default function ReleaseGateCoverage() {
  const gates = [
    {
      name: "Unit suite",
      status: "Passed",
      statusClass: "bg-[#E0ECFF] text-[#2563EB]",
      owner: "CI",
      desc:
        "Fast feedback; must pass before merge and before release promotion.",
    },
    {
      name: "Integration suite",
      status: "Failed",
      statusClass: "bg-[#FFDDDB] text-[#CF2027]",
      owner: "CI",
      desc: "Service-level checks and contract tests.",
    },
    {
      name: "E2E suite",
      status: "Failed",
      statusClass: "bg-[#FFDDDB] text-[#CF2027]",
      owner: "CI",
      desc: "Critical user journeys across browser/device matrix.",
    },
    {
      name: "Performance budget",
      status: "Passed",
      statusClass: "bg-[#E0ECFF] text-[#2563EB]",
      owner: "QA",
      desc:
        "Optional in normal releases; required during quarter-end freeze.",
    },
    {
      name: "Security scan",
      status: "Running",
      statusClass: "bg-[#FEF3C7] text-[#B45309]",
      owner: "CI",
      desc: "SAST + dependency scan must be green.",
    },
  ];

  const artefacts = [
    {
      type: "video",
      title: "Checkout regression replay (Chrome) — failing E2E",
      source: "device farm",
      bug: "BUG-1842",
    },
    {
      type: "har",
      title: "Network HAR — payment intent 500",
      source: "test runner",
      bug: "BUG-1842",
    },
    {
      type: "trace",
      title: "Playwright trace — checkout_submit",
      source: "test runner",
      bug: "--",
    },
    {
      type: "logs",
      title: "App logs — cart service timeout",
      source: "crash reporting",
      bug: "--",
    },
  ];

  const coverage = [
    {
      module: "Checkout",
      web: "81%",
      ios: "72%",
      android: "69%",
      api: "88%",
      avg: "78%",
      trend: "↘ Down",
    },
    {
      module: "Cart",
      web: "78%",
      ios: "74%",
      android: "73%",
      api: "86%",
      avg: "78%",
      trend: "→ Flat",
    },
    {
      module: "Auth",
      web: "93%",
      ios: "89%",
      android: "87%",
      api: "91%",
      avg: "90%",
      trend: "↗ Up",
    },
    {
      module: "Search",
      web: "84%",
      ios: "79%",
      android: "76%",
      api: "82%",
      avg: "80%",
      trend: "↗ Up",
    },
  ];

  return (
    <div className=" space-y-5">
      <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3">
        <h2 className="text-xl font-semibold mb-1">Release Gate View</h2>
        <p className="text-sm text-gray-500 mb-6">
          Required checks for production promotion. Gate requirements are
          immutable per release record.
        </p>

        <div className="space-y-4">
          {gates.map((g) => (
            <div
              key={g.name}
              className="flex items-center justify-between border-b border-[#00000033] pb-4 gap-3 flex-wrap"
            >
              <div>
                <div className="flex items-center gap-2 font-medium">
                  {g.name} *
                  <span
                    className={`px-2 py-0.5 text-xs rounded ${g.statusClass}`}
                  >
                    {g.status}
                  </span>
                  <span className="text-xs text-gray-400">
                    Owner: {g.owner}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{g.desc}</p>
              </div>

              <div className="flex gap-2">
                <button className="border rounded-lg px-3 py-2 text-sm">
                  Rerun
                </button>
                <button className="border rounded-lg px-3 py-2 text-sm">
                  Pass
                </button>
                <button className="border rounded-lg px-3 py-2 text-sm">
                  Fail
                </button>
                <button className="bg-[#0E1E38] text-white rounded-lg px-3 py-2 text-sm">
                  Reset
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3">
        <h2 className="text-xl font-semibold mb-1">
          Bug Reproduction Artefacts
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Evidence packages to reproduce failures: video, traces, HAR, logs.
        </p>

        <div className="overflow-x-auto lg:w-[calc(100vw-390px)] w-[calc(100vw-48px)] scroll-hide">
          <table className="min-w-[900px] w-full text-sm">
            <thead className="border-b border-[#00000033] text-left">
              <tr>
                <th className="py-3"><span className="inline-block min-w-[100px]">Type</span></th>
                <th>Title</th>
                <th>Source</th>
                <th>Linked bug</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {artefacts.map((a, i) => (
                <tr
                  key={i}
                  className="border-b border-[#00000033] last:border-b-0"
                >
                  <td className="py-4">{a.type}</td>
                  <td>{a.title}</td>
                  <td>{a.source}</td>
                  <td>{a.bug}</td>
                  <td>
                    <button className="flex items-center gap-2 text-sm">
                      <Copy className="w-4" /> Copy Ref
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3">
        <h2 className="text-xl font-semibold mb-1">Coverage Metrics</h2>
        <p className="text-sm text-gray-500 mb-6">
          Coverage by module and platform, with trends.
        </p>

        <div className="overflow-x-auto lg:w-[calc(100vw-390px)] w-[calc(100vw-48px)] scroll-hide">
          <table className="min-w-[900px] w-full text-sm">
            <thead className="border-b border-[#00000033] text-left">
              <tr>
                <th className="py-3">Module</th>
                <th>Web</th>
                <th>iOS</th>
                <th>Android</th>
                <th>API</th>
                <th>Avg</th>
                <th>Trend</th>
              </tr>
            </thead>
            <tbody>
              {coverage.map((c) => (
                <tr
                  key={c.module}
                  className="border-b border-[#00000033] last:border-b-0"
                >
                  <td className="py-4">{c.module}</td>
                  <td>{c.web}</td>
                  <td>{c.ios}</td>
                  <td>{c.android}</td>
                  <td>{c.api}</td>
                  <td>{c.avg}</td>
                  <td>{c.trend}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
