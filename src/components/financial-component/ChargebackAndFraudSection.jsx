import { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { ShieldIcon } from "../../assets/icons/icons";
import eyecloseicon from "../../assets/eyecloseicon.svg";
import eyeicon from "../../assets/eyeicon.svg";

const chargebackData = [
  { label: "Invalid Date", value: 12 },
  { label: "Invalid Date", value: 15 },
  { label: "Invalid Date", value: 18 },
  { label: "Invalid Date", value: 14 },
  { label: "Invalid Date", value: 11 },
];

const reasons = [
  { label: "Fraudulent transaction", percent: 43, cases: 3 },
  { label: "Product not received", percent: 29, cases: 2 },
  { label: "Product not as described", percent: 14, cases: 1 },
  { label: "Duplicate charge", percent: 14, cases: 1 },
];

const fraudCards = [
  {
    title: "Suspicious Payouts",
    level: "high",
    levelBg: "bg-[#FEE2E2]",
    levelText: "text-[#991B1B]",
    border: "border-[#FDA4AF]",
    bg: "bg-[#FFF1F2]",
    cases: 2,
    exposure: "$217K",
    description: "Payouts flagged by fraud detection system",
  },
  {
    title: "Coupon Abuse",
    level: "medium",
    levelBg: "bg-[#FFEDD5]",
    levelText: "text-[#9A3412]",
    border: "border-[#FDBA74]",
    bg: "bg-[#FFF7ED]",
    cases: 8,
    exposure: "$4.2K",
    description: "Repeated coupon usage patterns detected",
  },
  {
    title: "Referral Abuse",
    level: "medium",
    levelBg: "bg-[#FFEDD5]",
    levelText: "text-[#9A3412]",
    border: "border-[#FDBA74]",
    bg: "bg-[#FFF7ED]",
    cases: 5,
    exposure: "$2.8K",
    description: "Suspicious referral activity patterns",
  },
];

export default function ChargebackAndFraudSection() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        <div className="bg-white rounded-lg lg:rounded-2xl border border-[#E5E7EB] lg:p-6 p-3">
          <h3 className="text-[18px] font-semibold mb-4">Chargeback Trends</h3>

          <div className="border rounded-xl p-4 mb-4">
            <p className="text-[14px] text-[#475467] mb-5">Chargeback Count</p>

            <div className="h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chargebackData}>
                  <CartesianGrid stroke="#E5E7EB" strokeDasharray="4 4" />
                  <XAxis
                    dataKey="label"
                    tick={{ fontSize: 12, fill: "#667085" }}
                  />
                  <YAxis tick={{ fontSize: 12, fill: "#667085" }} />
                  <Line
                  type="monotone"
                    dataKey="value"
                    stroke="#EF4444"
                    strokeWidth={2}
                    dot={{ r: 5, fill: "#EF4444" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="bg-[#F9FAFB] rounded-lg p-3 text-center">
              <p className="text-[13px] text-[#475467]">Current Rate</p>
              <p className="font-semibold text-[#16A34A]">0.10%</p>
            </div>

            <div className="bg-[#F9FAFB] rounded-lg p-3 text-center">
              <p className="text-[13px] text-[#475467]">This Month</p>
              <p className="font-semibold">7</p>
            </div>

            <div className="bg-[#F9FAFB] rounded-lg p-3 text-center">
              <p className="text-[13px] text-[#475467]">Total Amount</p>
              <p className="font-semibold">$8.9K</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg lg:rounded-2xl border border-[#E5E7EB] lg:p-6 p-3">
          <h3 className="text-[18px] font-semibold mb-6">
            Top Chargeback Reasons
          </h3>

          <div className="space-y-5">
            {reasons.map((r) => (
              <div key={r.label}>
                <div className="flex justify-between text-[14px] mb-1">
                  <span>{r.label}</span>
                  <span className="text-[#475467]">
                    {r.cases} cases ({r.percent}%)
                  </span>
                </div>

                <div className="h-2 bg-[#E5E7EB] overflow-hidden">
                  <div
                    className="h-full bg-[#EF4444]"
                    style={{ width: `${r.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg lg:rounded-2xl border border-[#E5E7EB] lg:p-6 p-3">
        <h3 className="text-[18px] font-semibold mb-5 flex items-center gap-3">
          <ShieldIcon color="#F54900" />
          Fraud Risk Summary
        </h3>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {fraudCards.map((item) => (
            <div
              key={item.title}
              className={`border ${item.border} ${item.bg} rounded-lg lg:rounded-xl lg:p-4 p-2.5`}
            >
              <div className="flex justify-between mb-2">
                <p className="font-medium">{item.title}</p>
                <span
                  className={`px-2 py-0.5 rounded-full text-[12px] ${item.levelBg} ${item.levelText}`}
                >
                  {item.level}
                </span>
              </div>

              <div className="flex gap-2 mb-2">
                <div className="flex-1">
                  <p className="text-[14px] text-[#475467]">Cases</p>
                  <p className="text-[20px] font-semibold">{item.cases}</p>
                </div>
                <div className="flex-1">
                  <p className="text-[14px] text-[#475467]">Exposure</p>
                  <p className="font-semibold">{item.exposure}</p>
                </div>
              </div>

              <p className="text-[14px] text-[#475467]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg lg:rounded-2xl border border-[#E5E7EB] lg:p-6 p-3">
        <h3 className="text-[18px] font-semibold mb-4">
          Sensitivity Controls & Data Export
        </h3>

        <div className="bg-[#F9FAFB] rounded-lg sm:p-4 p-2.5 mb-4 flex justify-between items-center">
          <div>
            <p className="font-medium">PII Visibility</p>
            <p className="text-[14px] text-[#475467]">
              Sensitive data is currently hidden
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <img
                src={visible ? eyeicon : eyecloseicon}
                alt="toggle visibility"
                className="cursor-pointer"
                onClick={() => setVisible((prev) => !prev)}
              />
            </div>
            <span className="px-3 py-1 rounded-full text-[13px] bg-[#DCFCE7] text-[#166534]">
              Protected
            </span>
          </div>
        </div>

        <textarea
          placeholder="e.g., Board meeting presentation, quarterly audit review..."
          className="w-full border border-[#00000000] rounded-lg sm:px-4 px-2.5 py-2 mb-4 text-[14px] bg-[#F3F3F5] h-[100px] focus:outline-none"
        />

        <div className="flex gap-3 flex-wrap">
          <button className="px-4 py-2 rounded-lg border border-[#D0D5DD] text-[14px]">
            Reveal PII
          </button>
          <button className="px-4 py-2 rounded-lg border border-[#D0D5DD] text-[14px]">
            Export Financial Data
          </button>
          <button className="px-4 py-2 rounded-lg bg-[#101828] text-white text-[14px]">
            Request CFO Report
          </button>
        </div>
      </div>
    </div>
  );
}
