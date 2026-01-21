import PageHeader from "../../components/common/Heading";
import QuickActions from "../../components/common/QuickAction";
import SummaryCards from "../../components/common/SummaryCard";
import MainLayout from "../../components/layout/MainLayout";
import alertIcon from "../../assets/sidebaricon/auditicon.svg";
import pauseIcon from "../../assets/freezeicon.svg";
import approvalIcon from "../../assets/sidebaricon/policiesicon.svg";
import cityIcon from "../../assets/exporticon.svg";

const financeStats = [
  {
    label: "Monthly Burn Rate",
    value: "$487K",
    change: -8,
  },
  {
    label: "Runway (Months)",
    value: "18",
    change: 5,
  },
  {
    label: "Payroll Exposure",
    value: "$1.2M",
    change: 3,
  },
  {
    label: "Monthly Revenue",
    value: "$5.8M",
    change: 12,
  },
  {
    label: "Gross Margin",
    value: "68%",
    change: 3,
  },
  {
    label: "Active Spend Freezes",
    value: "2",
    change: 0,
  },
];

const Financial = () => {
  return (
    <MainLayout>
      <PageHeader
        title="Financial Oversight"
        description="Control money boundaries without executing payments - monitor revenue, burn rate, payroll, and emergency spend controls"
      />

      <SummaryCards items={financeStats} title="Financial Dashboard" />

      <QuickActions
        title="CEO Financial Controls"
        actions={[
          {
            label: "Set Budget Cap",
            command: "Lorem Ipsum is simply dummy text",
            icon: alertIcon,
            filter: true,
            onClick: () => console.log("Open Alert"),
          },
          {
            label: "Request CFO Report",
            command: "Lorem Ipsum is simply dummy text",
            icon: approvalIcon,
            filter: true,
            onClick: () => console.log("Open Approval"),
          },
          {
            label: "Export Data",
            command: "Lorem Ipsum is simply dummy text",
            icon: cityIcon,
            onClick: () => console.log("City Readiness"),
          },
          {
            label: "Emergency Freeze",
            command: "Lorem Ipsum is simply dummy text",
            icon: pauseIcon,
            variant: "danger",
            onClick: () => console.log("Pause Automations"),
          },
        ]}
      />
    </MainLayout>
  );
};

export default Financial;
