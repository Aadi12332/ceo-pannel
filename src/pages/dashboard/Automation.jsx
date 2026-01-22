import PageHeader from "../../components/common/Heading";
import SummaryCards from "../../components/common/SummaryCard";
import MainLayout from "../../components/layout/MainLayout";
import plusIcon from "../../assets/plusicon.svg";
import AutomationChart from "../../components/common/AutomationChart";
import shieldIcon from "../../assets/shieldicon.svg";
import pauseIcon from "../../assets/pauseicon.svg";
import dollarIcon from "../../assets/greendollaricon.svg";
import alertIcon from "../../assets/alertcircleicon.svg";
import warningIcon from "../../assets/alertcircleicon.svg";

const automationStats = [
  {
    label: "Active Automations",
    value: 47,
    change: 12,
  },
  {
    label: "Auto-Paused",
    value: 3,
    change: -25,
  },
  {
    label: "Policy Compliance",
    value: "96%",
    change: 4,
  },
  {
    label: "CEO Notifications",
    value: 8,
    change: 14,
  },
];
const Automation = () => {
  return (
    <MainLayout>
      <PageHeader
        title="Automation & AI Governance"
        description="Ensure automation executes policy, never authority - monitor AI systems and auto-pause when thresholds are exceeded."
        actions={[
          {
            label: "Set Cost Cap",
            icon: plusIcon,
            onClick: () => console.log("Set Cost Cap"),
          },
        ]}
      />

      <SummaryCards items={automationStats} title="Automation Dashboard" />

      <AutomationChart />

      <div className="bg-white rounded-[16px] border border-[#0000001A] p-6 mb-5">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <img src={shieldIcon} alt="" className="w-5 h-5" />
            <h2 className="text-[20px] text-[#0A0A0A]">
              Circuit Breaker Status
            </h2>
          </div>

          <button className="flex items-center gap-2 bg-[#C5313F] text-white px-4 py-2 rounded-[10px] text-[14px] font-medium">
            <img src={pauseIcon} alt="" className="w-4 h-4" />
            Emergency Pause All
          </button>
        </div>

        <div className="bg-[#F9FAFB] rounded-[14px] p-6 flex items-center justify-between">
          <div>
            <span className="inline-block bg-[#DCFCE7] text-[#166534] text-[16px] font-medium px-4 py-2 rounded-[10px] mb-3">
              NORMAL
            </span>

            <p className="text-[16px] text-[#475467] mt-2">
              All automation systems operating within policy bounds
            </p>
          </div>

          <div className="text-right">
            <p className="text-[32px] font-semibold text-[#2F5BFF]">3</p>
            <p className="text-[16px] text-[#475467]">Active Workflows</p>
          </div>
        </div>
      </div>

    <div className="grid xl:grid-cols-2 grid-cols-1 gap-6 mb-5">
      <div className="bg-white rounded-[16px] border border-[#0000001A] p-6">
        <div className="flex items-center gap-2 mb-6">
          <img src={dollarIcon} alt="" />
          <h3 className="text-[20px] text-[#0A0A0A]">Cost Overview</h3>
        </div>

        <div className="bg-[#F1FDF4] rounded-[12px] p-5 mb-4">
          <p className="text-[14px] text-[#475467]">Daily Spend</p>
          <p className="text-[28px] font-semibold text-[#16A34A]">
            $4,409
          </p>
          <p className="text-[13px] text-[#475467] mb-2">
            Cap: $11,800/day
          </p>

          <div className="w-full h-2 bg-[#E5E7EB] rounded-full overflow-hidden mb-1">
            <div
              className="h-full bg-[#22C55E]"
              style={{ width: "37.4%" }}
            />
          </div>

          <p className="text-[13px] text-[#475467]">
            37.4% utilization
          </p>
        </div>

        <div className="bg-[#EFF6FF] rounded-[12px] p-5">
          <p className="text-[14px] text-[#475467]">
            Monthly Projection
          </p>
          <p className="text-[28px] font-semibold text-[#2563EB]">
            $132,270
          </p>
          <p className="text-[13px] text-[#475467]">
            Cap: $329,000/month
          </p>
        </div>
      </div>

      <div className="bg-white rounded-[16px] border border-[#0000001A] p-6">
        <div className="flex items-center gap-2 mb-6">
          <img src={alertIcon} alt="" />
          <h3 className="text-[20px] text-[#0A0A0A]">Risk Alerts</h3>
        </div>

        <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-[12px] p-5 mb-4">
          <p className="text-[16px] font-medium text-[#B42318] mb-2">
            2 High-Risk Automations
          </p>
          <ul className="text-[14px] text-[#B42318] space-y-1 list-disc pl-4">
            <li>Referral Reward Processing - Abuse alert</li>
            <li>Support Ticket AI Triage - Anomaly alert</li>
          </ul>
        </div>

        <button className="flex items-center gap-2 bg-[#C5313F] text-white px-4 h-10 rounded-lg text-[14px]">
          <img src={warningIcon} alt="" />
          Review High-Risk
        </button>
      </div>
    </div>
    </MainLayout>
  );
};

export default Automation;
