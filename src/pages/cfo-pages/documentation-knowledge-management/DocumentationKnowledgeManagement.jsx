import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../../components/common/Heading";
import MainLayout from "../../../components/layout/MainLayout";
import DocumentationCards from "./DocumentationCards";

const DocumentationKnowledgeManagement = () => {
  const navigate = useNavigate();
  const [openAction, setOpenAction] = useState(false);

  return (
    <MainLayout>
      <PageHeader
        title="Documentation Portal"
        description="Docs required for launch—track product specs, ownership, and readiness in one place."
        className="!mt-1"
        actions={[
          {
            label: "Training Tracker",
            onClick: () => navigate("/training-tracker"),
          },
        ]}
      />

      <DocumentationCards />


    </MainLayout>
  );
};

export default DocumentationKnowledgeManagement;
