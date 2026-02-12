import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout";
import PageHeader from "../../../components/common/Heading";
import ChangeImpact from "./ChangeImpact";
const ChangeImpactRiskControl = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  return (
    <MainLayout>
      <PageHeader
        title="Change Impact & Risk Control"
        description="Approve risky product changes with consistent scoring and clear audit trails."
        className="!mt-1"
      />

      <ChangeImpact />

    </MainLayout>

  );
};

export default ChangeImpactRiskControl;
