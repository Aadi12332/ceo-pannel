import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout";
import PageHeader from "../../../components/common/Heading";
import plusIcon from "../../../assets/plusicon.svg";
import ExperimentationList from "./ExperimentationList";
const ExperimentationFeatureGovernance = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <PageHeader
        title="Experimentation & Feature Governance"
        description="Controlled Testing with Policy-Based Feature Rollouts"
        className="!mt-1"
        actions={[
          {
            label: "Create Experiment",
            icon: plusIcon,
            onClick: () => navigate("/create-experimentation"),
          },
        ]}
      />

      <ExperimentationList />
    </MainLayout>
  );
};

export default ExperimentationFeatureGovernance;
