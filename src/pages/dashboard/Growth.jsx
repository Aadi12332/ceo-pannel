import { useState } from "react";
import PageHeader from "../../components/common/Heading";
import SummaryCards from "../../components/common/SummaryCard";
import MainLayout from "../../components/layout/MainLayout";
import fileIcon from "../../assets/sidebaricon/policiesicon.svg";
import dollorIcon from "../../assets/sidebaricon/financialicon.svg";
import GrowthChart from "../../components/growth-component/GrowthChart";
import RoadmapMilestones from "../../components/growth-component/RoadmapMilestones";
import StrategicAlertsSection from "../../components/growth-component/StrategicAlertsSection";
import ExpansionTabs from "../../components/growth-component/ExpansionTabs";
import RequestGrowthAnalysisModal from "../../components/growth-component/RequestGrowthAnalysisModal";
import PricingChangeModal from "../../components/growth-component/PricingChangeModal";
import { PlayIcon, CheckCircle, PauseIcon } from "lucide-react";
import { FreezeIcon } from "../../assets/icons/icons";

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

const items = [
  {
    label: "Ready to Launch",
    value: 3,
    description: "Cities passed all 4 gates",
    icon: <CheckCircle className="w-5 text-[#16A34A]" />,
    valueColor: "text-[#16A34A]",
  },
  {
    label: "Blocked",
    value: 2,
    description: "Cities below readiness threshold",
    icon: <FreezeIcon color="#DC2626" className="w-5" />,
    valueColor: "text-[#DC2626]",
  },
  {
    label: "Active",
    value: 1,
    description: "Cities in operation",
    icon: <PlayIcon className="w-5 text-[#2563EB]" />,
    valueColor: "text-[#2563EB]",
  },
  {
    label: "Paused",
    value: 0,
    description: "Cities temporarily halted",
    icon: <PauseIcon className="w-5 text-[#EA580C]" />,
    valueColor: "text-[#EA580C]",
  },
];
const Growth = () => {
  const [openAnalysis, setOpenAnalysis] = useState(false);
  const [openPricingModal, setOpenPricingModal] = useState(false);

  return (
    <MainLayout>
      <PageHeader
        title="Strategic Intelligence"
        description="CEO-only view for growth and expansion decisions, gated by policy and readiness scores (not daily ops)"
        actions={[
          {
            label: "Request Analysis",
            icon: fileIcon,
            onClick: () => setOpenAnalysis(true),
          },
          {
            label: "Pricing Change",
            icon: dollorIcon,
            onClick: () => setOpenPricingModal(true),
          },
        ]}
      />

      <RequestGrowthAnalysisModal
        open={openAnalysis}
        onClose={() => setOpenAnalysis(false)}
      />

      <PricingChangeModal
        open={openPricingModal}
        onClose={() => setOpenPricingModal(false)}
      />
      <SummaryCards items={auditStats} title="Strategic Dashboard" />

      <div className="grid xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 sm:gap-5 gap-2 mb-5">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg lg:rounded-[16px] border border-[#0000001A] lg:p-6 p-3"
          >
            <div className="flex items-center sm:gap-3 gap-1.5 mb-4">
              {item.icon}
              <p className="sm:text-[16px] text-sm text-[#0A0A0A]">{item.label}</p>
            </div>

            <p className={`text-[32px] font-semibold mb-2 ${item.valueColor}`}>
              {item.value}
            </p>

            <p className="text-[14px] text-[#475467]">{item.description}</p>
          </div>
        ))}
      </div>

      <GrowthChart />

      <ExpansionTabs />

      <RoadmapMilestones />

      <StrategicAlertsSection />
    </MainLayout>
  );
};

export default Growth;
