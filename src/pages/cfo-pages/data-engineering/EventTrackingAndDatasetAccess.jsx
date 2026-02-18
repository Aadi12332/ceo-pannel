export default function EventTrackingAndDatasetAccess() {
  const coverageData = [
    {
      title: "Marketing attribution",
      missing: "ad_click, campaign_attribution",
      percent: 72,
      badgeClass: "bg-[#DCFCE7] text-[#008236]",
    },
    {
      title: "Checkout",
      missing: "payment_failed",
      percent: 93,
      badgeClass: "bg-[#DBEAFE] text-[#2563EB]",
    },
    {
      title: "Activation",
      missing: "email_verified",
      percent: 88,
      badgeClass: "bg-[#DCFCE7] text-[#008236]",
    },
  ];

  const datasetData = [
    {
      dataset: "gold.kpi_daily",
      owner: "Analytics Eng",
      audience: "business_readonly",
      token: "--",
      sensitivity: "Curated",
      sensitivityClass: "bg-[#DBEAFE] text-[#2563EB]",
    },
    {
      dataset: "mart.marketing_attribution",
      owner: "Data Eng Lead",
      audience: "business_readonly",
      token: "--",
      sensitivity: "Curated",
      sensitivityClass: "bg-[#DBEAFE] text-[#2563EB]",
    },
    {
      dataset: "raw.events",
      owner: "Data Eng Lead",
      audience: "data_only",
      token: "Required",
      sensitivity: "Sensitive",
      sensitivityClass: "bg-[#FFDDDB] text-[#CF2027]",
    },
    {
      dataset: "gold.kpi_daily",
      owner: "Analytics Eng",
      audience: "business_readonly",
      token: "--",
      sensitivity: "Curated",
      sensitivityClass: "bg-[#DBEAFE] text-[#2563EB]",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3">
        <h2 className="text-xl font-semibold mb-1">
          Event Tracking Coverage
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Coverage by product area; highlight missing events and delayed data.
        </p>

        <div className="space-y-6">
          {coverageData.map((c, i) => (
            <div key={i}>
              <div className="flex items-center justify-between mb-1">
                <div>
                  <p className="font-medium">{c.title}</p>
                  <p className="text-sm text-gray-400">
                    Missing: {c.missing}
                  </p>
                </div>

                <span
                  className={`px-2 py-0.5 text-sm rounded ${c.badgeClass}`}
                >
                  {c.percent}% Coverage
                </span>
              </div>

              <div className="h-2 bg-gray-200 rounded">
                <div
                  className="h-2 bg-[#4CAF50] rounded"
                  style={{ width: `${c.percent}%` }}
                />
              </div>

              <div className="border-b mt-6" />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3">
        <h2 className="text-xl font-semibold mb-1">
          Access Controls to Datasets
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Curated datasets for business; time-bound tokens for sensitive data.
        </p>

        <div className="overflow-x-auto lg:w-[calc(100vw-390px)] w-[calc(100vw-44px)] scroll-hide">
          <table className="min-w-[900px] w-full text-sm">
            <thead className="border-b text-left">
              <tr>
                <th className="py-3">Dataset</th>
                <th>Owner</th>
                <th>Default audience</th>
                <th>Token</th>
                <th>Sensitivity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {datasetData.map((d, i) => (
                <tr key={i} className="border-b last:border-b-0">
                  <td className="py-4">{d.dataset}</td>
                  <td>{d.owner}</td>
                  <td>{d.audience}</td>
                  <td>{d.token}</td>
                  <td>
                    <span
                      className={`px-2 py-0.5 text-xs rounded ${d.sensitivityClass}`}
                    >
                      {d.sensitivity}
                    </span>
                  </td>
                  <td>
                    <button className="px-4 py-2 bg-[#0E1E38] text-white rounded-lg min-w-[120px]">
                      Export
                    </button>
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
