import PageHeader from "../../components/common/Heading";
import SummaryCards from "../../components/common/SummaryCard";
import MainLayout from "../../components/layout/MainLayout";
import fileIcon from "../../assets/fileicon.svg";
import exportIcon from "../../assets/exporticon.svg";
import AuditChart from "../../components/common/AuditChart";
import ComprehensiveAuditLogging from "../../components/audit-component/AuditLogging";
import RetentionAndComplianceSection from "../../components/audit-component/RetentionAndComplianceSection";
import AuditTabs from "../../components/audit-component/AuditTabs";

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

      <ComprehensiveAuditLogging />

      <AuditTabs />
      
      <RetentionAndComplianceSection />
    </MainLayout>
  );
};

export default Audits;
