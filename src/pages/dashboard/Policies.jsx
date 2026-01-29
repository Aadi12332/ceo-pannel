import { useState } from "react";
import PageHeader from "../../components/common/Heading";
import MainLayout from "../../components/layout/MainLayout";
import plusIcon from "../../assets/plusicon.svg";
import SummaryCards from "../../components/common/SummaryCard";
import PolicyTrends from "../../components/policy-component/PolicyChart";
import PolicyPackSelector from "../../components/policy-component/PolicySelector";
import ExceptionAndLogsSection from "../../components/policy-component/ExceptionandlogSection";
import PolicyTabsPage from "../../components/policy-component/PolicyBuilder";
import CreatePolicyModal from "../../components/policy-component/CreatePolicyModal";

const policyStats = [
  {
    label: "Active Policies",
    value: 24,
    change: 8,
  },
  {
    label: "Policy Violations",
    value: 18,
    change: -22,
  },
  {
    label: "Avg Compliance Score",
    value: "94%",
    change: 3,
  },
  {
    label: "Pending Reviews",
    value: 3,
    change: 0,
  },
];

const Policies = () => {
  const [activeTab, setActiveTab] = useState("global");
  const [policyOpen, setPolicyOpen] = useState(false);
  return (
    <MainLayout>
      <PageHeader
        title="Policy Management"
        description="Create, version, and enforce platform policies and thresholds with RBAC controls"
        actions={[
          {
            label: "Create Policy",
            icon: plusIcon,
            onClick: () => setPolicyOpen(true),
          },
        ]}
      />

      <CreatePolicyModal
        title="Create New Policy Rule"
        subtitle="Define a new machine-enforceable policy rule with conditions and outcomes"
        btnText="Create Rule"
        policyOpen={policyOpen}
        onClose={() => setPolicyOpen(false)}
      />

      <SummaryCards items={policyStats} title="Policy Dashboard" />

      <PolicyTrends />

      <PolicyPackSelector
        tabs={[
          { label: "Global", value: "global" },
          { label: "City", value: "city" },
          { label: "Vertical", value: "vertical" },
          { label: "Department", value: "department" },
          { label: "Year", value: "year" },
        ]}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      <PolicyTabsPage />

      <ExceptionAndLogsSection />
    </MainLayout>
  );
};

export default Policies;
