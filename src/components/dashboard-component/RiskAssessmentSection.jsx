import { useNavigate } from "react-router-dom";
import financeIcon from "../../assets/financialicon.svg";
import legalIcon from "../../assets/legalicon.svg";
import fraudIcon from "../../assets/fraudicon.svg";
import opsIcon from "../../assets/operationicon.svg";
import techIcon from "../../assets/technologyicon.svg";
import alertIcon from "../../assets/alertcircleicon.svg";
import approveIcon from "../../assets/approvalicon.svg";
import dollarIcon from "../../assets/greendollaricon.svg";

const RiskAssessmentSection = () => {
  const navigate = useNavigate();
  const riskCards = [
    { title: "Financial", icon: financeIcon, value: 28, delta: "-5", bar: "bg-green-500", note: "Revenue tracking healthy" },
    { title: "Legal", icon: legalIcon, value: 15, delta: "-2", bar: "bg-green-500", note: "All compliance checks passed" },
    { title: "Fraud", icon: fraudIcon, value: 78, delta: "+56", bar: "bg-red-500", note: "Refund spike pattern detected", warn: true },
    { title: "Operations", icon: opsIcon, value: 42, delta: "+8", bar: "bg-yellow-500", note: "Minor delivery delays" },
    { title: "Technology", icon: techIcon, value: 22, delta: "-3", bar: "bg-green-500", note: "Systems operating normally" },
  ];

  const approvals = [
    { level: "HIGH", color: "bg-red-500", title: "High-Risk Refund Exceptions", count: 12, time: "6h 23m" },
    { level: "HIGH", color: "bg-red-500", title: "Policy Override Requests", count: 5, time: "3h 10m" },
    { level: "MEDIUM", color: "bg-orange-500", title: "Budget Increase Approvals", count: 8, time: "12h 45m" },
    { level: "LOW", color: "bg-blue-500", title: "Vendor Onboarding", count: 3, time: "1d 4h" },
  ];

  return (
    <div className="space-y-5 mb-5">
      <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {riskCards.map((r, i) => (
          <div key={i} className="bg-white rounded-lg lg:rounded-[14px] p-5">
            <div className="flex items-center gap-2 mb-4">
              <img src={r.icon} className="w-5 h-5" />
              <span className="font-medium">{r.title}</span>
            </div>
            <div className={`text-[28px] font-semibold ${r.warn ? "text-red-500" : "text-green-600"}`}>{r.value}</div>
            <div className="flex items-center gap-2 mt-3">
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className={`h-full ${r.bar}`} style={{ width: "70%" }} />
              </div>
              <span className={`text-[12px] ${r.delta.startsWith("+") ? "text-red-500" : "text-green-600"}`}>
                {r.delta}
              </span>
            </div>
            <div className="mt-2 text-[13px] text-[#667085] flex items-center gap-1">
              {r.warn && <span className="text-yellow-500">⚠</span>}
              {r.note}
            </div>
          </div>
        ))}
      </div>

      <div className="grid xl:grid-cols-3 grid-cols-1 gap-5">
        <div className="bg-white rounded-lg lg:rounded-[14px] p-6">
          <div className="flex justify-between items-center mb-5">
            <div className="flex items-center gap-2">
              <img src={alertIcon} className="w-5 h-5" />
              <h3 className="text-[18px] font-medium">Incidents Summary</h3>
            </div>
            <span className="px-3 py-1 text-[12px] bg-red-500 text-white rounded-full">2 Open</span>
          </div>

          <div className="bg-[#F2F4F7] rounded-lg p-4 grid grid-cols-2 gap-4 mb-5">
            <div>
              <div className="text-[#667085] text-[13px]">Total Open</div>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-medium">2</span>
              </div>
            </div>
            <div>
              <div className="text-[#667085] text-[13px]">Impacted Users</div>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-medium">3,259</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border rounded-lg p-4 flex items-center gap-3">
              <span className="px-2 py-0.5 text-[12px] bg-red-500 text-white rounded-full">Sev1</span>
              <span className="flex-1">0 incidents</span>
              <span className="text-[#667085] text-[13px]">N/A</span>
            </div>
            <div className="border rounded-lg p-4 flex items-center gap-3">
              <span className="px-2 py-0.5 text-[12px] bg-orange-500 text-white rounded-full">Sev2</span>
              <span className="flex-1">1 incidents</span>
              <span className="text-[#667085] text-[13px]">2h 15m</span>
            </div>
            <div className="border rounded-lg p-4 flex items-center gap-3">
              <span className="px-2 py-0.5 text-[12px] bg-yellow-500 text-white rounded-full">Sev3</span>
              <span className="flex-1">1 incidents</span>
              <span className="text-[#667085] text-[13px]">45m</span>
            </div>
          </div>

          <button className="mt-5 w-full border rounded-lg py-2 text-[14px]">
            Open Incident Dashboard
          </button>
        </div>

        <div className="bg-white rounded-lg lg:rounded-[14px] p-6">
          <div className="flex justify-between items-center mb-5">
            <div className="flex items-center gap-2">
              <img src={approveIcon} className="w-5 h-5" />
              <h3 className="text-[18px] font-medium">Approvals Queue</h3>
            </div>
            <span className="px-3 py-1 text-[12px] bg-red-500 text-white rounded-full">28 Pending</span>
          </div>

          <div className="bg-[#F2F4F7] rounded-lg p-4 grid grid-cols-2 gap-4 mb-5">
            <div>
              <div className="text-[#667085] text-[13px]">Total Pending</div>
              <div className="font-medium mt-1">28</div>
            </div>
            <div>
              <div className="text-[#667085] text-[13px]">High Priority</div>
              <div className="font-medium mt-1 text-red-500">17</div>
            </div>
          </div>

          <div className="space-y-4">
            {approvals.map((a, i) => (
              <div key={i} className="border rounded-lg p-4 flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-2 py-0.5 text-[11px] text-white rounded-full ${a.color}`}>
                      {a.level}
                    </span>
                    <span className="font-medium">{a.title}</span>
                  </div>
                  <div className="text-[13px] text-[#667085]">Oldest: {a.time}</div>
                </div>
                <span className="px-3 py-1 border rounded-full text-[12px]">{a.count}</span>
              </div>
            ))}
          </div>

          <button onClick={()=>navigate("/approvals")} className="mt-5 w-full border rounded-lg py-2 text-[14px]">
            Open Approval Queue
          </button>
        </div>

        <div className="space-y-5">
          <div className="bg-white rounded-lg lg:rounded-[14px] p-6">
            <div className="flex items-center gap-2 mb-5">
              <img src={dollarIcon} className="w-5 h-5" />
              <h3 className="text-[18px] font-medium">Financial Snapshot</h3>
            </div>

            <div className="mb-5">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[#667085]">Revenue</span>
                <span className="text-green-600 text-[13px]">↗ +12.4%</span>
              </div>
              <div className="grid grid-cols-3 gap-4 text-[14px]">
                <div><div className="text-[#667085]">Today</div><div>$487,250</div></div>
                <div><div className="text-[#667085]">MTD</div><div>$12,456,800</div></div>
                <div><div className="text-[#667085]">YTD</div><div>$145,678,900</div></div>
              </div>
            </div>

            <div className="mb-5">
              <div className="flex justify-between text-[14px] mb-2">
                <span>Spend vs Budget</span>
                <span className="text-[#667085]">89.5% utilized</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: "89.5%" }} />
              </div>
              <div className="mt-2 text-[14px]">$8,945,600 <span className="text-[#667085]">of $10,000,000</span></div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-[14px]">
              <div><div className="text-[#667085]">Daily</div><div>$298,520</div></div>
              <div><div className="text-[#667085]">Projected</div><div>$8,955,600</div></div>
              <div><div className="text-[#667085]">Runway</div><div>18 months</div></div>
            </div>
          </div>

          <div className="bg-white rounded-lg lg:rounded-[14px] p-6">
            <div className="flex items-center gap-2 mb-5">
              <img src={dollarIcon} className="w-5 h-5" />
              <h3 className="text-[18px] font-medium">Global Spend vs Budget</h3>
            </div>

            <div className="mb-5">
              <div className="flex justify-between text-[14px] mb-2">
                <span>Today</span>
                <span className="text-[#667085]">89.5%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: "89.5%" }} />
              </div>
              <div className="mt-2">$89,450 <span className="text-[#667085]">of $100,000</span></div>
            </div>

            <div>
              <div className="flex justify-between text-[14px] mb-2">
                <span>Month-to-Date</span>
                <span className="text-[#667085]">89.5%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500" style={{ width: "89.5%" }} />
              </div>
              <div className="mt-2">$8,945,600 <span className="text-[#667085]">of $10,000,000</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskAssessmentSection;
