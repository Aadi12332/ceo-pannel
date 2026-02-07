import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../../components/common/Heading";
import MainLayout from "../../../components/layout/MainLayout";
import ArchitectureAndChanges from "./ArchitectureAndChanges";
import ServiceDomainMap from "./ServiceDomainMap";
import CapacityAndDependencies from "./CapacityAndDependencies";
import RiskAndToolsRegistry from "./RiskAndToolsRegistry";

const PlatformArchitecture = () => {
  const navigate = useNavigate();
  const [openAction, setOpenAction] = useState();

  return (
    <MainLayout>
      <PageHeader
        title="Platform Architecture"
        description="System structure and scalability control"
        className="!mt-0"
      />

      <ServiceDomainMap />

      <ArchitectureAndChanges />

      <CapacityAndDependencies />

      <RiskAndToolsRegistry />

    </MainLayout>
  );
};

export default PlatformArchitecture;
