import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../../components/common/Heading";
import MainLayout from "../../../components/layout/MainLayout";
import ApprovalQueue from "./ApprovalQueue";

const ProductLevelGlobal = () => {
  const navigate = useNavigate();
  const [openAction, setOpenAction] = useState();

  return (
    <MainLayout>
        <PageHeader
          title={"Product-Level Global Governance"}
          description={
            "Review approvals, explore audit history, and resolve blocked actions—fast, traceable, and consistent."
          }
          className="!mt-1"
        />
        <ApprovalQueue />
    </MainLayout>
  );
};

export default ProductLevelGlobal;
