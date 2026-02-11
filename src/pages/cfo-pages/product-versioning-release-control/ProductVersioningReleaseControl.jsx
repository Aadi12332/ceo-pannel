import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout";
import PageHeader from "../../../components/common/Heading";
import plusIcon from "../../../assets/plusicon.svg";
import ProductVersionList from "./ProductVersionList";
const ProductVersioningReleaseControl = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  return (
    <MainLayout>
      <PageHeader
        title="Product Versioning & Release Control"
        description="A governance-first view of product versions: status, risk, readiness, approvals, and rollback traceability."
        className="!mt-0"
        actions={[
          {
            label: "Create Version",
            icon: plusIcon,
            onClick: () => navigate("/create-version"),
          },
        ]}
      />

      <ProductVersionList />

    </MainLayout>

  );
};

export default ProductVersioningReleaseControl;
