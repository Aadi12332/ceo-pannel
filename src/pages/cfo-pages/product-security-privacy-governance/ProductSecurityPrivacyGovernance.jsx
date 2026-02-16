import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../../components/common/Heading";
import MainLayout from "../../../components/layout/MainLayout";
import SensitiveFeatureApprovals from "./SensitiveFeatureApprovals";

const ProductSecurityPrivacyGovernance = () => {
  const navigate = useNavigate();
  const [openAction, setOpenAction] = useState();

  return (
    <MainLayout>
      <PageHeader
        title="Product Security & Privacy Governance"
        description="Ensuring Data Protection, Compliance, and Risk Control"
        className="!mt-1"
      />

      <SensitiveFeatureApprovals />

    </MainLayout>
  );
};

export default ProductSecurityPrivacyGovernance;
