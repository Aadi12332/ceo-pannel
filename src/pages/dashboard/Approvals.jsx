import MainLayout from "../../components/layout/MainLayout";
import SummaryCards from "../../components/common/SummaryCard";
import PageHeader from "../../components/common/Heading";

import dollarIcon from "../../assets/greendollaricon.svg";
import clockIcon from "../../assets/clockicon.svg";
import alertIcon from "../../assets/alertcircleicon.svg";
import InsightCards from "../../components/common/InsightCard";
import ApprovalTrends from "../../components/approval-component/ApprovalTrendsChart";
import ApprovalQueue from "../../components/approval-component/ApprovalTabs";
import DelegationAndAudit from "../../components/approval-component/DelegationAndAudit";

const insightData = [
  {
    title: "Total Exposure",
    value: "$2.48M",
    footer: "Across 4 financial approvals",
    icon: dollarIcon,
    color: "#00A63E",
  },
  {
    title: "Oldest Pending",
    value: "8974h ago",
    subtitle: "Market Expansion - Austin",
    icon: clockIcon,
    color: "#F54900",
  },
  {
    title: "SLA Escalations",
    value: "8",
    footer: "Approaching timeout threshold",
    icon: alertIcon,
    color: "#E7000B",
  },
];

const approvalStats = [
  {
    label: "Pending Approvals",
    value: 12,
    change: -15,
  },
  {
    label: "Avg Response Time",
    value: "2.4h",
    change: -18,
  },
  {
    label: "Approval Rate",
    value: "76%",
    change: 5,
  },
  {
    label: "Escalated",
    value: 2,
    change: 0,
  },
];

const Approvals = () => {
  return (
    <MainLayout>
      <PageHeader
        title="Approval Management"
        description="Central approval inbox with delegation, escalation, and policy-bound routing"
      />

      <SummaryCards items={approvalStats} title="Policy Dashboard" />

      <InsightCards items={insightData} />

      <ApprovalTrends />

      <ApprovalQueue />

      <DelegationAndAudit />

    </MainLayout>
  );
};

export default Approvals;
