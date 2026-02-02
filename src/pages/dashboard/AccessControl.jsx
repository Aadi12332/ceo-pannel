
import { useState } from "react";
import PageHeader from "../../components/common/Heading";
import SummaryCards from "../../components/common/SummaryCard";
import MainLayout from "../../components/layout/MainLayout";
import fileIcon from "../../assets/userplusicon.svg";
import exportIcon from "../../assets/sidebaricon/policiesicon.svg";
import AccessChart from "../../components/access-control-component/AccessChart";
import EmployeeAuditLog from "../../components/access-control-component/EmployeeAuditLog";
import AccessAndReview from "../../components/access-control-component/AccessAndReview";
import GovernanceTabs from "../../components/access-control-component/GovernanceTabs";
import GrantTempAccessModal from "../../components/access-control-component/GrantTempAccessModal";
import RequestAccessReviewModal from "../../components/access-control-component/RequestAccessReviewModal";

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

const AccessControl = () => {
  const [openGrantAccess, setOpenGrantAccess] = useState(false);
  const [openReview, setOpenReview] = useState(false);

  return (
    <MainLayout>
      <PageHeader
        title="Org & Access Control"
        description="Control who can do what, with scoped permissions, temporary access, and emergency revocation"
        actions={[
          {
            label: "Grant Temp Access",
            icon: fileIcon,
            onClick: () => setOpenGrantAccess(true),
          },
          {
            label: "Request Review",
            icon: exportIcon,
            onClick: () => setOpenReview(true),
          },
        ]}
      />

      <GrantTempAccessModal
  open={openGrantAccess}
  onClose={() => setOpenGrantAccess(false)}
/>

<RequestAccessReviewModal
  open={openReview}
  onClose={() => setOpenReview(false)}
/>

      <SummaryCards items={auditStats} title="Access Control Dashboard" />

      <AccessChart />

      <GovernanceTabs />

      <AccessAndReview />

      <EmployeeAuditLog />

    </MainLayout>
  );
};

export default AccessControl;
