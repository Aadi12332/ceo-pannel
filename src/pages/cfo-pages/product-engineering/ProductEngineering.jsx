import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../../components/common/Heading";
import MainLayout from "../../../components/layout/MainLayout";
import ProductDeliveryBoard from "./ProductDeliveryBoard";
import ReleaseDashboard from "./ReleaseDashboard";
import FeatureFlags from "./FeatureFlags";
import BugTrends from "./BugTrends";

const ProductEngineering = () => {
  const navigate = useNavigate();
  const [openAction, setOpenAction] = useState();

  return (
    <MainLayout>
      <PageHeader
        title="Product Engineering"
        description="From Backlog to Production"
        className="!mt-1"
      />

      <ProductDeliveryBoard />

      <ReleaseDashboard />

      <FeatureFlags />

      <BugTrends />
    </MainLayout>
  );
};

export default ProductEngineering;
