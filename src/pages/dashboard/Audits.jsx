import PageHeader from "../../components/common/Heading";
import SummaryCards from "../../components/common/SummaryCard";
import MainLayout from "../../components/layout/MainLayout";
import fileIcon from "../../assets/fileicon.svg";
import exportIcon from "../../assets/exporticon.svg";
import AuditChart from "../../components/common/AuditChart";
import dbIcon from "../../assets/comprehensiveIcon/dbicon.svg";
import actionIcon from "../../assets/comprehensiveIcon/action.svg";
import approvalIcon from "../../assets/comprehensiveIcon/approve.svg";
import policyIcon from "../../assets/comprehensiveIcon/policy.svg";
import automationIcon from "../../assets/comprehensiveIcon/runs.svg";
import overrideIcon from "../../assets/comprehensiveIcon/overrides.svg";
import totalIcon from "../../assets/comprehensiveIcon/events.svg";

const auditStats = [
  {
    label: "Total Audit Logs",
    value: "1,247",
    change: 12,
  },
  {
    label: "Critical Events",
    value: 34,
    change: -8,
  },
  {
    label: "Compliance Rate",
    value: "98%",
    change: 2,
  },
  {
    label: "Active Investigations",
    value: 5,
    change: 25,
  },
];
const Audits = () => {
  return (
    <MainLayout>
      <PageHeader
        title="Audit & Compliance"
        description="Global audit views, compliance reporting, and investigation tools"
        actions={[
          {
            label: "Open Audit Case",
            icon: fileIcon,
            onClick: () => console.log("Open Audit Case"),
          },
          {
            label: "Export Report",
            icon: exportIcon,
            filter: true,
            onClick: () => console.log("Export Report"),
          },
        ]}
      />

      <SummaryCards items={auditStats} title="Compliance Dashboard" />

      <AuditChart />

      <div className="border-[1.6px] border-[#8EC5FF] rounded-[20px] p-6 bg-white">
        <div className="flex items-center gap-3 mb-6">
          <img src={dbIcon} alt="" className="w-6 h-6" />
          <h3 className="text-[20px] text-[#0A0A0A]">
            Comprehensive Audit Logging
          </h3>
        </div>

        <div className="grid xl:grid-cols-6 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mb-6">
          <div className="bg-[#E8F1FF] rounded-[10px] p-4 text-center">
            <img src={actionIcon} alt="" className="mx-auto mb-3" />
            <p className="text-[24px] font-bold text-[#00A63E]">0</p>
            <p className="text-[16px] font-bold text-[#00A63E]">Actions</p>
          </div>

          <div className="bg-[#E8F1FF] rounded-[10px] p-4 text-center">
            <img src={approvalIcon} alt="" className="mx-auto mb-3" />
            <p className="text-[24px] font-bold text-[#155DFC]">0</p>
            <p className="text-[16px] font-bold text-[#155DFC]">Approvals</p>
          </div>

          <div className="bg-[#E8F1FF] rounded-[10px] p-4 text-center">
            <img src={policyIcon} alt="" className="mx-auto mb-3" />
            <p className="text-[24px] font-bold text-[#9810FA]">0</p>
            <p className="text-[16px] font-bold text-[#9810FA]">
              Policy Decisions
            </p>
          </div>

          <div className="bg-[#E8F1FF] rounded-[10px] p-4 text-center">
            <img src={automationIcon} alt="" className="mx-auto mb-3" />
            <p className="text-[24px] font-bold text-[#F54900]">0</p>
            <p className="text-[16px] font-bold text-[#F54900]">
              Automation Runs
            </p>
          </div>

          <div className="bg-[#E8F1FF] rounded-[10px] p-4 text-center">
            <img src={overrideIcon} alt="" className="mx-auto mb-3" />
            <p className="text-[24px] font-bold text-[#E7000B]">0</p>
            <p className="text-[16px] font-bold text-[#E7000B]">Overrides</p>
          </div>

          <div className="bg-[#E8F1FF] rounded-[10px] p-4 text-center">
            <img src={totalIcon} alt="" className="mx-auto mb-3" />
            <p className="text-[24px] font-bold text-[#4A5565]">10</p>
            <p className="text-[16px] font-bold text-[#4A5565]">Total Events</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 text-[#193CB8] text-[14px]">
          ✅
          <span>
            <span className="font-bold">Every event is logged:</span> Who did
            what, when, why, with full policy and approval chain traceability
          </span>
        </div>
      </div>
    </MainLayout>
  );
};

export default Audits;
