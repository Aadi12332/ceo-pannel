import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../../components/common/Heading";
import MainLayout from "../../../components/layout/MainLayout";
import ProductData from "./ProductData";

const ProductDataAnalyticsGovernance = () => {
  const navigate = useNavigate();
  const [openAction, setOpenAction] = useState();

  return (
    <MainLayout>
      <PageHeader
        title="Product Data & Analytic Governance"
        description="Controlled Testing with Policy-Based Feature Rollouts"
        className="!mt-1"
      />

      <ProductData />

    </MainLayout>
  );
};

export default ProductDataAnalyticsGovernance;
