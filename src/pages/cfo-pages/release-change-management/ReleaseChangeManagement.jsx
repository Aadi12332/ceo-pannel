import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout";
import PageHeader from "../../../components/common/Heading";
import PostReleaseMonitoringModal from "./PostReleaseMonitoringModal";
import ReleaseOverview from "./ReleaseOverview";
import ChangeRecordList from "./ChangeRecordList";

const ReleaseChangeManagement = () => {
  const navigate = useNavigate();
const [openMonitor, setOpenMonitor] = useState(false);

  return (
    <MainLayout>
      <PageHeader
        title="Release & Change Management"
        description="Planned Deployments and Controlled Changes"
        className="!mt-1"
        actions={[
          {
            label: "Post-release Monitoring",
            onClick: () => setOpenMonitor(true),
          },
        ]}
      />

      <PostReleaseMonitoringModal
  open={openMonitor}
  onClose={() => setOpenMonitor(false)}
/>

<ReleaseOverview />

<ChangeRecordList />


    </MainLayout>
  );
};

export default ReleaseChangeManagement;
