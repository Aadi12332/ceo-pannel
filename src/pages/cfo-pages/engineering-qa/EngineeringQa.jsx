import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout";
import PageHeader from "../../../components/common/Heading";
import ExceptionApprovalModal from "./ExceptionApprovalModal";
import TestSuiteStatus from "./TestSuiteStatus";
import ReleaseGateCoverage from "./ReleaseGateCoverage";

const EngineeringQa = () => {
  const navigate = useNavigate();
const [openException, setOpenException] = useState(false);

  return (
    <MainLayout>
      <PageHeader
        title="Engineering QA"
        description="Prevent Defects Before They Reach Production"
        className="!mt-1"
        actions={[
          {
            label: "Exception Approvals",
            onClick: () => setOpenException(true),
          },
        ]}
      />

      <ExceptionApprovalModal
  open={openException}
  onClose={() => setOpenException(false)}
/>

<TestSuiteStatus />

<ReleaseGateCoverage />

    </MainLayout>
  );
};

export default EngineeringQa;
