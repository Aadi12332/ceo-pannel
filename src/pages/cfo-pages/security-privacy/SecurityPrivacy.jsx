import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../../components/common/Heading";
import MainLayout from "../../../components/layout/MainLayout";
import PIIMaskingRulesEditor from "./AccessReview";
import SecurityAlerts from "./SecurityAlerts";
import KeyRotationAndPrivacyRequest from "./KeyRotationAndPrivacyRequest";

const SecurityPrivacy = () => {
  const navigate = useNavigate();
  const [openAction, setOpenAction] = useState();

  return (
    <MainLayout>
      <PageHeader
        title="Security & Privacy"
        description="Keeping Your Data Safe and Private"
        className="!mt-1"
      />

      <PIIMaskingRulesEditor />

      <SecurityAlerts />

      <KeyRotationAndPrivacyRequest />

    </MainLayout>
  );
};

export default SecurityPrivacy;
