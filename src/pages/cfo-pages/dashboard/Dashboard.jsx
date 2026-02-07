import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../../components/common/Heading";
import MainLayout from "../../../components/layout/MainLayout";
import CommonCard from "../common/CommonCard";
import {
  Monitor,
  Gauge,
  AlertOctagon,
  List,
  DollarSign,
  Clock,
} from "lucide-react";
import QuickActionModal from "./QuickActionModal";
import ActiveAlertsQuene from "./ActiveAlertsQuene";
import RecentChangesToolsPanel from "./RecentChangesToolsPanel";

const statsConfig = [
  {
    title: "Availability",
    value: "99.97%",
    change: "+0.02%",
    changeType: "positive",
    icon: <Monitor className="w-5 h-5 text-[#00A63E]" />,
    iconBgClass: "bg-[#D0FAE5]",
  },
  {
    title: "Latency (P95)",
    value: "142ms",
    change: "-8ms",
    changeType: "negative",
    icon: <Gauge className="w-5 h-5 text-[#3178EC]" />,
    iconBgClass: "bg-[#CEDFFF]",
  },
  {
    title: "Error Rate",
    value: "0.12%",
    change: "+0.03%",
    changeType: "positive",
    icon: <AlertOctagon className="w-5 h-5 text-[#8E63CF]" />,
    iconBgClass: "bg-[#F3E8FF]",
  },
  {
    title: "Backlog",
    value: "47 items",
    change: "+12",
    changeType: "positive",
    icon: <List className="w-5 h-5 text-[#A65F00]" />,
    iconBgClass: "bg-[#FEF9C2]",
  },
  {
    title: "Monthly Cost",
    value: "$48.2K",
    subText: "On budget",
    icon: <DollarSign className="w-5 h-5 text-[#00A63E]" />,
    iconBgClass: "bg-[#D0FAE5]",
  },
  {
    title: "SLA Breaches",
    value: "2",
    subTextValue: "this week",
    change: "-3",
    changeType: "negative",
    icon: <Clock className="w-5 h-5 text-[#F54900]" />,
    iconBgClass: "bg-[#FFEDD4]",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [openAction, setOpenAction] = useState();

  return (
    <MainLayout>
      <PageHeader
        title="Dashboard"
        description="Infrastructure & Platform"
        className="!mt-0"
        actions={[
          {
            label: "Quick Actions",
            onClick: () => setOpenAction(true),
          },
        ]}
      />

      <QuickActionModal
        open={openAction}
        onClose={() => setOpenAction(false)}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
        {statsConfig.map((item, index) => (
          <CommonCard key={index} {...item} />
        ))}
      </div>

      <ActiveAlertsQuene />

      <RecentChangesToolsPanel />
    </MainLayout>
  );
};

export default Dashboard;
