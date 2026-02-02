
import { useState } from "react";
import PageHeader from "../../components/common/Heading";
import SummaryCards from "../../components/common/SummaryCard";
import MainLayout from "../../components/layout/MainLayout";
import plusIcon from "../../assets/plusicon.svg";
import warningIcon from "../../assets/warningicon.svg";
import EmergencyChart from "../../components/emergency-component/EmergencyChart";
import IncidentResponseTimeline from "../../components/emergency-component/IncidentResponseTimeline";
import EmergencyDashboard from "../../components/emergency-component/EmergencyTabs";
import CreateIncidentModal from "../../components/emergency-component/CreateIncidentModal";

const policyStats = [
  {
    label: "Active Freezes",
    value: 1,
    change: 0,
  },
  {
    label: "Response Time",
    value: "45s",
    change: -12,
  },
  {
    label: "Incidents This Week",
    value: 3,
    change: -25,
  },
  {
    label: "System Health",
    value: "97%",
    change: 1,
  },
];
const Emergency = () => {
  const [incidentopen, setIncidentOpen] = useState(false);
  return (
    <MainLayout>
      <PageHeader
        title="Emergency Control"
        description="Kill switches, system freezes, and incident command authority with immediate execution"
        actions={[
          {
            label: "Create Incident",
            icon: plusIcon,
            onClick: () => setIncidentOpen(true),
          },
        ]}
      />

      {incidentopen && <CreateIncidentModal onClose={() => setIncidentOpen(false)} />}

      <div className="border border-[#FFA2A2] bg-[#FEF2F2] rounded-[10px] p-4 flex items-start gap-3 mb-5">
        <img src={warningIcon} alt="" className="w-5 h-5 mt-0.5" />
        <div>
          <p className="text-[14px] text-[#9F0712] mb-1">
            Critical Authority Zone
          </p>
          <p className="text-[14px] text-[#C10007]">
            All actions in this module execute immediately and are irrevocable.
            Every action is logged with full audit trail. Use with extreme
            caution.
          </p>
        </div>
      </div>

      <SummaryCards items={policyStats} title="Emergency Dashboard" />

      <EmergencyChart />

      <EmergencyDashboard />

      <IncidentResponseTimeline />
      
    </MainLayout>
  );
};

export default Emergency;
