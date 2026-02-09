import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../../components/common/Heading";
import MainLayout from "../../../components/layout/MainLayout";
import {
  Monitor,
  Gauge,
  AlertOctagon,
  List,
  DollarSign,
  Clock,
} from "lucide-react";
import IntegrationHealth from "./IntegrationHealth";
import RateLimitsAndKillSwitches from "./RateLimitsAndKillSwitches";
import CredentialStatusAndWebhookQueues from "./CredentialStatusAndWebhookQueues";

const ApiIntegrations = () => {
  const navigate = useNavigate();
  const [openAction, setOpenAction] = useState();

  return (
    <MainLayout>
      <PageHeader
        title="Api Integrations"
        description="All System Connections in One Place"
        className="!mt-0"
      />

      <IntegrationHealth />

      <RateLimitsAndKillSwitches />

      <CredentialStatusAndWebhookQueues />
    </MainLayout>
  );
};

export default ApiIntegrations;
