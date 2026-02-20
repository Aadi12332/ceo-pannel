import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout";
import PageHeader from "../../../components/common/Heading";
import ActiveIncidents from "./ActiveIncidents";

const TechnicalIncidentResponse = () => {
  const navigate = useNavigate();
const [openMonitor, setOpenMonitor] = useState(false);

  return (
    <MainLayout>
      <PageHeader
        title="Technical Incident Response"
        description="End-to-End Incident Lifecycle Management"
        className="!mt-1"
      />

      <ActiveIncidents />
    </MainLayout>
  );
};

export default TechnicalIncidentResponse;
