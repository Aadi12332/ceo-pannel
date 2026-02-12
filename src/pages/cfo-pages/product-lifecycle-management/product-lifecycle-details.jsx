import { useState } from "react";
import MainLayout from "../../../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Calendar, ChevronRight } from "lucide-react";
import UsageRevenueChart from "./UsageRevenueChart";
import Select from "../../../components/common/Select";
const incidents = [
  {
    id: "INC-1842",
    title: "Elevated 5xx rate",
    status: "Mitigated",
    age: "3d",
    severity: "High",
  },
  {
    id: "INC-1811",
    title: "Latency regression",
    status: "Monitoring",
    age: "8d",
    severity: "Medium",
  },
  {
    id: "INC-1790",
    title: "Webhook retries spike",
    status: "Resolved",
    age: "13d",
    severity: "Low",
  },
];

const severityStyle = {
  High: "bg-[#FEE2E2] text-[#B91C1C]",
  Medium: "bg-[#FEF3C7] text-[#B45309]",
  Low: "bg-[#DCFCE7] text-[#166534]",
};
const ProductLifecycleDetails = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("health");
  const [type, setType] = useState("");

  const tabs = [
    { id: "health", label: "Health" },
    { id: "deprecation", label: "Deprecation" },
    { id: "retirement", label: "Retirement" },
  ];

  return (
    <MainLayout>
      <div className="space-y-5">
        <div className="flex justify-between items-start">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="w-5 text-gray-500" />
            <div>
              <h1 className="text-2xl font-semibold">Atlas API</h1>
              <p className="text-sm text-gray-500">Owner: Platform</p>
            </div>
          </div>
        </div>

        <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a] flex justify-between items-start">
          <div className="w-full">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-semibold mb-4">Health Details</h2>
              <span className="px-3 py-1 text-xs rounded bg-[#DCFCE7] text-[#166534]">
                Healthy
              </span>
            </div>
            <div className="grid grid-cols-4 gap-10 text-sm">
              <div>
                <p className="text-gray-500">Health score</p>
                <p className="font-semibold text-lg">84</p>
              </div>
              <div>
                <p className="text-gray-500">MAU</p>
                <p className="font-semibold">128,400</p>
              </div>
              <div>
                <p className="text-gray-500">MRR</p>
                <p className="font-semibold">US$214,000</p>
              </div>
              <div>
                <p className="text-gray-500">Incidents</p>
                <p className="font-semibold">3/30d</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 h-11 rounded-full text-lg font-medium transition ${
                  activeTab === tab.id
                    ? "bg-[#0E1E38] text-white"
                    : "bg-[#fff] text-[#344054]"
                }`}
              >
                {tab.label}{" "}
                {tab.id !== "retirement" && (
                  <ChevronRight size={18} className="inline ml-1" />
                )}
              </button>
            ))}
          </div>

          {activeTab === "health" && (
            <>
              <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
                <h2 className="text-xl font-semibold mb-6">
                  Usage & Revenue Trend
                </h2>
                <UsageRevenueChart />
              </div>
              <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#0000001a] text-left">
                      <th className="py-3 font-semibold">Incident</th>
                      <th className="py-3 font-semibold">Title</th>
                      <th className="py-3 font-semibold">Status</th>
                      <th className="py-3 font-semibold text-right px-3">
                        Age
                      </th>
                      <th className="py-3 font-semibold px-3">Severity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {incidents.map((row, index) => (
                      <tr key={index} className="border-b border-[#0000001a]">
                        <td className="py-4">{row.id}</td>
                        <td>{row.title}</td>
                        <td>{row.status}</td>
                        <td className="text-right px-3">{row.age}</td>
                        <td className="px-3">
                          <span
                            className={`px-3 py-1 text-xs rounded ${severityStyle[row.severity]}`}
                          >
                            {row.severity}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {activeTab === "deprecation" && (
            <div className="grid lg:grid-cols-2 gap-5">
              <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
                <h2 className="text-xl font-semibold mb-6">Timeline</h2>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {["Announcement", "Feature Freeze", "Sunset"].map((item) => (
                    <div key={item}>
                      <p className="text-sm text-gray-600 mb-2">{item}</p>
                      <div className="flex items-center justify-between border border-[#0000001a] rounded-lg pl-3 pr-2 h-11">
                        <input type="date" name="" className="text-sm w-full" id="" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-5 text-sm">
                  <div className="border-t pt-4">
                    <p className="font-semibold">Documentation Complete</p>
                    <p className="text-gray-500">
                      01-05-2026 • Communicate reasons, target, and support
                      policy.
                    </p>
                  </div>
                  <div className="border-t pt-4">
                    <p className="font-semibold">Feature freeze</p>
                    <p className="text-gray-500">
                      01-10-2026 • No new functionality; only critical fixes.
                    </p>
                  </div>
                  <div className="border-t pt-4">
                    <p className="font-semibold">Sunset & retirement window</p>
                    <p className="text-gray-500">
                      01-20-2026 • Disable new onboarding and enforce migration
                      completion.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
                <h2 className="text-xl font-semibold mb-6">Migration target</h2>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      Target Platform
                    </p>
                    <Select
                      placeholder="Select"
                      value={type}
                      onChange={(value) => {
                        setType(value);
                      }}
                      options={[
                        {
                          value: "Revenue Per User",
                          label: "Revenue Per User",
                        },
                        { value: "Conversion Rate", label: "Conversion Rate" },
                        { value: "Retention (D7)", label: "Retention (D7)" },
                        { value: "Churn Rate", label: "Churn Rate" },
                      ]}
                      inputClassName="!h-12 !mt-0 lg:!rounded-xl !rounded-lg !px-3 !text-sm !bg-white !border !border-[#0000001a]"
                      listItemClassName="!px-3 !text-sm"
                      listParentClassName="!min-h-max"
                    />
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-2">Planning Notes</p>
                    <textarea className="w-full h-28 border border-[#0000001a] rounded-lg p-3 text-sm outline-none" />
                  </div>

                  <button className="w-full bg-[#0E1E38] flex items-center gap-3 justify-center text-white h-11 rounded-lg text-sm font-medium">
                    Continue to retirement confirmation{" "}
                    <ChevronRight className="w-5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "retirement" && (
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
                <h2 className="text-xl font-semibold mb-6">Checklist</h2>

                <div className="space-y-5 text-sm">
                  <div className="flex gap-3 border-b items-center pb-4">
                    <input type="checkbox" name="" className="w-5 h-5 accent-[#0E1E38]" id="" />
                    <div>
                      <p className="font-bold mb-2">
                        Customer data migrated to the target
                      </p>
                      <p className="text-gray-500">
                        Validate parity (counts, checksums, and key business
                        queries).
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 border-b items-center pb-4">
                    <input type="checkbox" name="" className="w-5 h-5 accent-[#0E1E38]" id="" defaultChecked />
                    <div>
                      <p className="font-bold mb-2">
                        Access disabled / credentials rotated
                      </p>
                      <p className="text-gray-500">
                        Disable new writes and remove privileged tokens.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 border-b items-center pb-4">
                    <input type="checkbox" name="" className="w-5 h-5 accent-[#0E1E38]" id="" defaultChecked />
                    <div>
                      <p className="font-bold mb-2">
                        Docs, runbooks, and support macros updated
                      </p>
                      <p className="text-gray-500">
                        Ensure internal + customer docs are consistent.
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm mb-2">
                      Data migration proof (link or reference)
                    </p>
                    <input className="w-full h-11 border border-[#0000001a] rounded-lg px-3 text-sm" />
                  </div>

                  <div>
                    <p className="text-sm mb-2">Notes</p>
                    <textarea className="w-full h-24 border border-[#0000001a] rounded-lg p-3 text-sm" />
                  </div>

                  <button className="w-full bg-[#0E1E38] text-white h-11 rounded-lg text-sm font-medium">
                    Confirm Retirement
                  </button>
                </div>
              </div>

              <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
                <h2 className="text-xl font-semibold mb-6">
                  Confirmation status
                </h2>

                <div className="space-y-4 text-sm">
                  <div className="border-b border-[#0000001a] pb-4">
                    <p className="font-semibold">Readiness</p>
                    <p className="text-gray-500">
                      Complete all checklist items.
                    </p>
                  </div>

                  <div className="border-b border-[#0000001a] pb-4">
                    <p className="font-semibold">Proof</p>
                    <p className="text-gray-500">
                      Add a link or reference to migration evidence.
                    </p>
                  </div>

                  <div className="border-b border-[#0000001a] pb-4">
                    <p className="font-semibold">Target</p>
                    <p className="text-gray-500">(set in Deprecation Plan)</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductLifecycleDetails;
