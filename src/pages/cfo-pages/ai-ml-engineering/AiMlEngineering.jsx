import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout";
import PageHeader from "../../../components/common/Heading";
import InfoModal from "./InfoModal";
import MLOverviewSection from "./MLOverviewSection";

const AiMlEngineering = () => {
  const navigate = useNavigate();
const [openModal, setOpenModal] = useState(null);

  return (
    <MainLayout>
      <PageHeader
        title="AI/ML Engineering"
        description="Assistive-only deployments for ranking, recommendations, fraud detection, and assistants"
        className="!mt-0"
        actions={[
          {
            label: "Deployment Pipeline",
            onClick: () => setOpenModal("deployment"),
          },
          {
            label: "Safety Panel",
            onClick: () => setOpenModal("safety"),
          },
        ]}
      />

      <InfoModal type={openModal} onClose={() => setOpenModal(null)} />

        <MLOverviewSection />

    </MainLayout>
  );
};

export default AiMlEngineering;
