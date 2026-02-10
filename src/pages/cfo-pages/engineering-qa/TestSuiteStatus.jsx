export default function TestSuiteStatus() {
  const suites = [
    {
      name: "UNIT",
      status: "Stable",
      statusClass: "bg-[#DCFCE7] text-[#008236]",
      pass: 98,
      flaky: 2,
      meta: "Last run 12:54 • failing 3 • quarantined 5",
    },
    {
      name: "INTEGRATION",
      status: "Stable",
      statusClass: "bg-[#DCFCE7] text-[#008236]",
      pass: 92,
      flaky: 8,
      meta: "Last run 12:32 • failing 12 • quarantined 9",
    },
    {
      name: "E2E",
      status: "Flaky",
      statusClass: "bg-[#FEE2E2] text-[#DC2626]",
      pass: 75,
      flaky: 25,
      meta: "Last run 12:18 • failing 19 • quarantined 14",
    },
  ];

  const flakyTests = [
    {
      test: "checkout_should_submit_payment",
      suite: "e2e",
      reason: "Quarantined due to flaky third-party gateway",
      owner: "QA Automation",
      expires: "01-25-2026",
    },
    {
      test: "checkout_should_apply_coupon",
      suite: "e2e",
      reason: "Flaky due to third-party latency",
      owner: "Auto-QA",
      expires: "01-25-2026",
    },
    {
      test: "checkout_should_submit_payment",
      suite: "e2e",
      reason: "Quarantined due to flaky third-party gateway",
      owner: "QA Automation",
      expires: "01-25-2026",
    },
    {
      test: "checkout_should_apply_coupon",
      suite: "e2e",
      reason: "Flaky due to third-party latency",
      owner: "Auto-QA",
      expires: "01-25-2026",
    },
  ];

  return (
    <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 mb-5">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Test Suite Status</h2>
        <p className="text-sm text-gray-500">
          Unit / integration / e2e pass rate and flaky tests.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {suites.map((s) => (
          <div key={s.name} className="border rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">{s.name}</h3>
              <span
                className={`px-2 py-0.5 text-xs rounded ${s.statusClass}`}
              >
                {s.status}
              </span>
            </div>

            <div className="mb-3">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-500">Pass rate</span>
                <span>{s.pass}%</span>
              </div>
              <div className="h-2 bg-gray-200">
                <div
                  className="h-2 bg-blue-600"
                  style={{ width: `${s.pass}%` }}
                />
              </div>
            </div>

            <div className="mb-3">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-500">Flaky</span>
                <span>{s.flaky}%</span>
              </div>
              <div className="h-2 bg-gray-200">
                <div
                  className="h-2 bg-blue-600"
                  style={{ width: `${s.flaky}%` }}
                />
              </div>
            </div>

            <p className="text-xs text-gray-500">{s.meta}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">
          Flaky quarantine & stabilisation
        </h3>
        <button className="bg-[#0E1E38] text-white px-4 py-2 rounded-lg text-sm">
          Quarantine a flaky test
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[900px] w-full text-sm">
          <thead className="border-b text-left">
            <tr>
              <th className="py-3">Test</th>
              <th>Suite</th>
              <th>Reason</th>
              <th>Owner</th>
              <th>Expires</th>
            </tr>
          </thead>
          <tbody>
            {flakyTests.map((t, i) => (
              <tr key={i} className="border-b border-[#00000033]">
                <td className="py-4">{t.test}</td>
                <td><span className="inline-block min-w-[100px]">{t.suite}</span></td>
                <td>{t.reason}</td>
                <td>{t.owner}</td>
                <td>{t.expires}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
