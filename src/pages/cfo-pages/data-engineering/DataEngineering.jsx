import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout";
import PageHeader from "../../../components/common/Heading";
import PipelineHealthDataQualityWarehouse from "./PipelineHealthDataQualityWarehouse";
import EventTrackingAndDatasetAccess from "./EventTrackingAndDatasetAccess";

const DataEngineering = () => {
  const navigate = useNavigate();
  const [openAction, setOpenAction] = useState();

  return (
    <MainLayout>
      <PageHeader
        title="Data Engineering"
        description="Data Pipelines & Processing"
        className="!mt-1"
      />

      <PipelineHealthDataQualityWarehouse />

      <EventTrackingAndDatasetAccess />

    </MainLayout>
  );
};

export default DataEngineering;
