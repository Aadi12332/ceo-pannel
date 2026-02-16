import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { EyeIcon, Pencil, PlusIcon } from "lucide-react";
import PassingFailingChart from "./PassingFailingChart";
import { ReviewSchemaModal } from "./ReviewSchemaModal";

const statusStyle = {
  Pending: "bg-[#FEF3C7] text-[#B45309]",
  "In Review": "bg-[#DBEAFE] text-[#2563EB]",
  Approved: "bg-[#DCFCE7] text-[#166534]",
  Active: "bg-[#DCFCE7] text-[#166534]",
  Draft: "bg-[#FEF3C7] text-[#B45309]",
  Deprecated: "bg-[#DBEAFE] text-[#1D4ED8]",
  Passing: "bg-[#FEF3C7] text-[#B45309]",
  Failing: "bg-[#FEE2E2] text-[#B91C1C]",
};

const severityStyle = {
  Error: "bg-[#FEE2E2] text-[#B91C1C]",
  Warning: "bg-[#FEF3C7] text-[#B45309]",
  Info: "bg-[#DBEAFE] text-[#2563EB]",
};

const riskStyle = {
  Low: "bg-[#DCFCE7] text-[#166534]",
  Medium: "bg-[#FEF3C7] text-[#B45309]",
  High: "bg-[#FEE2E2] text-[#B91C1C]",
  Critical: "bg-[#FEE2E2] text-[#B91C1C]",
};

const eventData = [
  {
    event: "checkout_started",
    key: "evt_checkout_started_v3",
    owner: "Payments Team",
    version: "v3",
    submitted: "01-20-2026",
    status: "Pending",
  },
  {
    event: "dashboard_viewed",
    key: "evt_dashboard_viewed_v2",
    owner: "Core UX",
    version: "v2",
    submitted: "01-21-2026",
    status: "Pending",
  },
  {
    event: "checkout_started",
    key: "evt_checkout_started_v3",
    owner: "Payments Team",
    version: "v3",
    submitted: "01-22-2026",
    status: "Pending",
  },
  {
    event: "dashboard_viewed",
    key: "evt_dashboard_viewed_v2",
    owner: "Core UX",
    version: "v2",
    submitted: "01-20-2026",
    status: "Pending",
  },
];

const qualityData = [
  {
    dataset: "events_raw",
    rule: "Freshness < 30 minutes",
    lastRun: "01-20-2026",
    severity: "Error",
    status: "Passing",
  },
  {
    dataset: "events_raw",
    rule: "user_id is not null",
    lastRun: "01-21-2026",
    severity: "Error",
    status: "Failing",
  },
  {
    dataset: "payments",
    rule: "currency is ISO-4217",
    lastRun: "01-22-2026",
    severity: "Warning",
    status: "Failing",
  },
  {
    dataset: "events_raw",
    rule: "Schema coverage > 95%",
    lastRun: "01-20-2026",
    severity: "Info",
    status: "Passing",
  },
];

const kpiData = [
  {
    name: "Activation Rate",
    slug: "kpi_activation_rate",
    owner: "Growth Analytics",
    cadence: "Daily",
    updatedDate: "01-20-2026",
    status: "Active",
  },
  {
    name: "Weekly Active Teams",
    slug: "kpi_weekly_active_teams",
    owner: "Product Analytics",
    cadence: "Weekly",
    updatedDate: "01-21-2026",
    status: "Active",
  },
  {
    name: "Pipeline Health Score",
    slug: "kpi_pipeline_health",
    owner: "Data Platform",
    cadence: "Daily",
    updatedDate: "01-22-2026",
    status: "Draft",
  },
  {
    name: "Legacy MQL Count",
    slug: "kpi_old_mql",
    owner: "RevOps",
    cadence: "Monthly",
    updatedDate: "01-20-2026",
    status: "Deprecated",
  },
];

export default function ProductData() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="space-y-5">
      <div className="bg-white lg:rounded-2xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold">
              Sensitive Feature Approvals
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Recent Feature Approvals
            </p>
          </div>
          <button
            onClick={() => navigate("/add-kpi")}
            className="h-10 px-5 rounded-xl bg-[#0E1E38] text-white text-sm flex items-center gap-2"
          >
            <PlusIcon className="w-5 font-bold" />
            Add KPI
          </button>
        </div>

        <div className="overflow-auto scroll-hide lg:w-[calc(100vw-390px)] w-[calc(100vw-46px)] ">
          <table className="min-w-[900px] w-full text-sm">
            <thead>
              <tr className="text-left border-b border-[#0000001a]">
                <th className="py-4 px-4 font-semibold">KPI</th>
                <th className="py-4 px-4 font-semibold">Owner</th>
                <th className="py-4 px-4 font-semibold">Cadence</th>
                <th className="py-4 px-4 font-semibold">Updated Date</th>
                <th className="py-4 px-4 font-semibold">Status</th>
                <th className="py-4 px-4 font-semibold text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {kpiData.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-[#0000001a] hover:bg-gray-50 transition"
                >
                  <td className="py-5 px-4">
                    <p className="font-medium text-[#111827]">{row.name}</p>
                    <p className="text-xs text-gray-500 mt-1">{row.slug}</p>
                  </td>

                  <td className="px-4 text-[#374151]">{row.owner}</td>

                  <td className="px-4 text-[#374151]">{row.cadence}</td>

                  <td className="px-4 text-[#374151]">{row.updatedDate}</td>

                  <td className="px-4">
                    <span
                      className={`px-3 py-1 text-sm rounded-md ${statusStyle[row.status]}`}
                    >
                      {row.status}
                    </span>
                  </td>

                  <td className="px-4 text-center">
                    <button onClick={() => navigate("/add-kpi")} className="">
                      <Pencil className="w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white lg:rounded-2xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold">Event Schema Approval</h2>
            <p className="text-sm text-gray-500 mt-1">
              Control KPI definitions: ownership, cadence, formulas, and
              lifecycle status.
            </p>
          </div>
        </div>

        <div className="overflow-auto scroll-hide lg:w-[calc(100vw-390px)] w-[calc(100vw-46px)] ">
          <table className="min-w-[900px] w-full text-sm">
            <thead>
              <tr className="text-left border-b border-[#0000001a]">
                <th className="py-4 px-4 font-semibold">Event</th>
                <th className="py-4 px-4 font-semibold">Owner</th>
                <th className="py-4 px-4 font-semibold">Version</th>
                <th className="py-4 px-4 font-semibold">Submitted</th>
                <th className="py-4 px-4 font-semibold">Status</th>
                <th className="py-4 px-4 font-semibold text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {eventData.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-[#0000001a] hover:bg-gray-50 transition"
                >
                  <td className="py-5 px-4">
                    <p className="font-medium text-[#111827]">{row.event}</p>
                    <p className="text-xs text-gray-500 mt-1">{row.key}</p>
                  </td>

                  <td className="px-4 text-[#374151]">{row.owner}</td>

                  <td className="px-4 text-[#374151]">{row.version}</td>

                  <td className="px-4 text-[#374151]">{row.submitted}</td>

                  <td className="px-4">
                    <span
                      className={`px-3 py-1 text-xs rounded-md ${statusStyle[row.status]}`}
                    >
                      {row.status}
                    </span>
                  </td>

                  <td className="px-4 text-center">
                    <button className="" onClick={() => setOpenModal(true)}>
                      <EyeIcon className="w-5" />
                    </button>
                  </td>
                </tr>
              ))}
              <ReviewSchemaModal open={openModal} onClose={() => setOpenModal(false)} />
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white lg:rounded-2xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold">Data Quality Summary</h2>
          </div>
        </div>

        <p className="text-base font-bold mb-5">Passing vs failing (7d)</p>

        <PassingFailingChart />

        <p className="text-base font-bold mb-5">Latest rules</p>

        <div className="overflow-auto scroll-hide lg:w-[calc(100vw-390px)] w-[calc(100vw-46px)] ">
          <table className="min-w-[900px] w-full text-sm">
            <thead>
              <tr className="text-left border-b border-[#0000001a]">
                <th className="py-4 px-4 font-semibold">Dataset</th>
                <th className="py-4 px-4 font-semibold">Rule</th>
                <th className="py-4 px-4 font-semibold">Last Run</th>
                <th className="py-4 px-4 font-semibold">Severity</th>
                <th className="py-4 px-4 font-semibold">Status</th>
              </tr>
            </thead>

            <tbody>
              {qualityData.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-[#0000001a] hover:bg-gray-50 transition"
                >
                  <td className="py-5 px-4 font-medium text-[#111827]">
                    {row.dataset}
                  </td>

                  <td className="px-4 text-[#374151]">{row.rule}</td>

                  <td className="px-4 text-[#374151]">{row.lastRun}</td>

                  <td className="px-4">
                    <span
                      className={`px-3 py-1 text-xs rounded-md ${severityStyle[row.severity]}`}
                    >
                      {row.severity}
                    </span>
                  </td>

                  <td className="px-4">
                    <span
                      className={`px-3 py-1 text-xs rounded-md ${statusStyle[row.status]}`}
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
    </div>
  );
}
