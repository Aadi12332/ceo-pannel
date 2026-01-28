import { useState } from "react";
import buildingIcon from "../../assets/buildingIcon.svg";
import locationIcon from "../../assets/locationIcon.svg";
import ArrowUpRight from "../../assets/upsidecharticon.svg";
import ArrowDownRight from "../../assets/downsidecharticon.svg";
import { WarningTriangleIcon } from "../../assets/icons/icons";

const CITY_DATA = [
  {
    name: "New York",
    revenue: "$1.85M",
    margin: "70%",
    contribution: "32%",
    change: 18,
  },
  {
    name: "San Francisco",
    revenue: "$1.62M",
    margin: "68%",
    contribution: "28%",
    change: 12,
  },
  {
    name: "Austin",
    revenue: "$1.12M",
    margin: "65%",
    contribution: "19%",
    change: 25,
  },
  {
    name: "Boston",
    revenue: "$0.79M",
    margin: "72%",
    contribution: "14%",
    change: 8,
  },
  {
    name: "Seattle",
    revenue: "$0.42M",
    margin: "62%",
    contribution: "7%",
    change: -5,
  },
];

const VERTICAL_DATA = [
  {
    name: "E-Commerce",
    revenue: "$2.40M",
    margin: "72%",
    contribution: "41%",
    change: 15,
  },
  {
    name: "SaaS Platform",
    revenue: "$1.80M",
    margin: "85%",
    contribution: "31%",
    change: 22,
  },
  {
    name: "Marketplace",
    revenue: "$0.98M",
    margin: "58%",
    contribution: "17%",
    change: -3,
  },
  {
    name: "Consulting",
    revenue: "$0.62M",
    margin: "65%",
    contribution: "11%",
    change: 8,
  },
];

const refunds = [
  {
    id: "REF-2024-001",
    status: "pending",
    amount: "$8,500",
    customer: "CUST-****5678",
    reason: "Product not as described",
    score: 12,
  },
  {
    id: "REF-2024-002",
    status: "approved",
    amount: "$450",
    customer: "CUST-****9012",
    reason: "Changed mind",
    score: 5,
  },
  {
    id: "REF-2024-003",
    status: "denied",
    amount: "$12,000",
    customer: "CUST-****3456",
    reason: "Duplicate charge",
    score: 85,
  },
  {
    id: "REF-2024-004",
    status: "approved",
    amount: "$2,200",
    customer: "CUST-****7890",
    reason: "Service quality issue",
    score: 28,
  },
];

const statusStyles = {
  pending: "bg-[#FEF3C7] text-[#92400E]",
  approved: "bg-[#DCFCE7] text-[#166534]",
  denied: "bg-[#FEE2E2] text-[#991B1B]",
};

const payouts = [
  {
    id: "PAY-2024-001",
    status: "flagged",
    risk: 78,
    provider: "Provider ****2345",
    amount: "$125,000",
    scheduled: "Dec 23, 03:30 PM",
    reason: "Unusually high payout amount - 3x average",
  },
  {
    id: "PAY-2024-002",
    status: "pending",
    risk: 22,
    provider: "Provider ****6789",
    amount: "$45,000",
    scheduled: "Dec 23, 03:30 PM",
  },
  {
    id: "PAY-2024-003",
    status: "failed",
    risk: 45,
    provider: "Provider ****1111",
    amount: "$8,500",
    scheduled: "Dec 22, 03:30 PM",
    reason: "Bank account verification failed",
  },
  {
    id: "PAY-2024-004",
    status: "flagged",
    risk: 65,
    provider: "Provider ****8888",
    amount: "$92,000",
    scheduled: "Dec 23, 03:30 PM",
    reason: "New provider - first payout over $50K",
  },
];

const cardStyles = {
  flagged: "border-[#FDA4AF] bg-[#FFF1F2] text-[#9A3412]",
  pending: "border-[#86EFAC] bg-[#F0FDF4] text-[#016630]",
  failed: "border-[#FDBA74] bg-[#FFF7ED] text-[#991B1B]",
};

const statusBadge = {
  flagged: "bg-[#FFEDD5] text-[#9A3412]",
  pending: "bg-[#E0EAFF] text-[#1D4ED8]",
  failed: "bg-[#FEE2E2] text-[#991B1B]",
};

export default function RevenueGrossMargin() {
  const [mode, setMode] = useState("vertical");
  const data = mode === "city" ? CITY_DATA : VERTICAL_DATA;

  return (
    <>
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 mb-5">
        <h2 className="text-[20px] font-semibold mb-5">
          Revenue & Gross Margin
        </h2>

        <div className="flex bg-[#F2F4F7] rounded-full p-1 mb-6">
          <button
            onClick={() => setMode("vertical")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-full text-[14px] font-medium transition ${
              mode === "vertical" ? "bg-white shadow-sm" : "text-[#475467]"
            }`}
          >
            <img src={buildingIcon} alt="" />
            By Vertical
          </button>

          <button
            onClick={() => setMode("city")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-full text-[14px] font-medium transition ${
              mode === "city" ? "bg-white shadow-sm" : "text-[#475467]"
            }`}
          >
            <img src={locationIcon} alt="" />
            By City
          </button>
        </div>

        <div className="space-y-3">
          {data.map((item) => (
            <div
              key={item.name}
              className="border border-[#E5E7EB] rounded-xl px-6 py-4 flex items-center justify-between"
            >
              <div className="flex-1">
                <p className="font-medium mb-1">{item.name}</p>
                <p className="text-[#475467] text-[14px]">Revenue</p>
                <p className="font-semibold">{item.revenue}</p>
              </div>

              <div className="flex-1">
                <p className="text-[#475467] text-[14px]">Gross Margin</p>
                <p className="font-semibold">{item.margin}</p>
              </div>

              <div className="flex-1">
                <p className="text-[#475467] text-[14px]">Contribution</p>
                <p className="font-semibold">{item.contribution}</p>
              </div>

              <div className="w-[80px] flex justify-end">
                <div
                  className={`flex items-center gap-1 text-[14px] font-medium ${
                    item.change >= 0 ? "text-[#16A34A]" : "text-[#DC2626]"
                  }`}
                >
                  {item.change >= 0 ? (
                    <img src={ArrowUpRight} alt="" />
                  ) : (
                    <img src={ArrowDownRight} alt="" />
                  )}
                  {item.change > 0 ? "+" : ""}
                  {item.change}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 mb-5">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[20px] font-semibold">Refunds Analysis</h2>

          <div className="flex gap-2">
            <span className="text-[14px] px-3 py-1 rounded-full bg-[#EEF2FF] text-[#3730A3]">
              Total: $23,150
            </span>
            <span className="text-[14px] px-3 py-1 rounded-full bg-[#FFEDD5] text-[#9A3412]">
              Avg Abuse Score: 32.5
            </span>
          </div>
        </div>

        <div className="space-y-4">
          {refunds.map((item) => {
            const isDenied = item.status === "denied";

            return (
              <div
                key={item.id}
                className={`rounded-xl border p-5 ${
                  isDenied
                    ? "bg-[#FEF2F2] border-[#FCA5A5]"
                    : "border-[#E5E7EB]"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-md text-[13px] bg-[#F9FAFB] border">
                    {item.id}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-[13px] capitalize ${statusStyles[item.status]}`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-6">
                  <div>
                    <p className="text-[#475467] text-[14px] mb-1">Amount</p>
                    <p className="font-semibold">{item.amount}</p>
                  </div>

                  <div>
                    <p className="text-[#475467] text-[14px] mb-1">Customer</p>
                    <p>{item.customer}</p>
                  </div>

                  <div>
                    <p className="text-[#475467] text-[14px] mb-1">Reason</p>
                    <p>{item.reason}</p>
                  </div>

                  <div>
                    <p className="text-[#475467] text-[14px] mb-1">
                      Abuse Score
                    </p>
                    <p
                      className={`font-semibold ${
                        item.score >= 70 ? "text-[#DC2626]" : "text-[#16A34A]"
                      }`}
                    >
                      {item.score}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 mb-5">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[20px] font-semibold">Payout Exposure</h2>

          <div className="flex gap-2">
            <span className="px-3 py-1 rounded-full text-[14px] bg-[#FFEDD5] text-[#9A3412]">
              2 Flagged
            </span>
            <span className="px-3 py-1 rounded-full text-[14px] bg-[#FEE2E2] text-[#991B1B]">
              1 Failed
            </span>
            <span className="px-3 py-1 rounded-full text-[14px] bg-[#E0EAFF] text-[#1D4ED8]">
              Total Pending: $270.5K
            </span>
          </div>
        </div>

        <div className="space-y-4">
          {payouts.map((p) => (
            <div
              key={p.id}
              className={`rounded-xl border p-5 ${cardStyles[p.status]}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-md text-[13px] bg-white border">
                    {p.id}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-[13px] capitalize ${statusBadge[p.status]}`}
                  >
                    {p.status}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[13px] bg-white border">
                    Risk: {p.risk}
                  </span>
                </div>

                {p.status === "flagged" && (
                  <button className="px-4 py-2 rounded-lg bg-[#101828] text-white text-[14px]">
                    Review & Approve
                  </button>
                )}
              </div>

              <div className="grid grid-cols-3 gap-6 mb-4">
                <div>
                  <p className="text-[#475467] text-[14px] mb-1">Provider</p>
                  <p className="font-medium text-[#7A271A]">{p.provider}</p>
                </div>

                <div>
                  <p className="text-[#475467] text-[14px] mb-1">Amount</p>
                  <p className="font-semibold text-[#7A271A]">{p.amount}</p>
                </div>

                <div>
                  <p className="text-[#475467] text-[14px] mb-1">Scheduled</p>
                  <p className="text-[#7A271A]">{p.scheduled}</p>
                </div>
              </div>

              {p.reason && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-[#FFF3E0] text-[#9A3412] text-[14px]">
                  <WarningTriangleIcon color="#F54900" />
                  <span className="font-extrabold">Flag Reason:</span>
                  <span>{p.reason}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
