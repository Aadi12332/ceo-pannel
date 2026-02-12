import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout";
import PageHeader from "../../../components/common/Heading";
import plusIcon from "../../../assets/plusicon.svg";
import RegisterCapabilityModal from "./RegisterCapabilityModal";
import CapabilityManagement from "./CapabilityManagement";
const ProductCapabilityDependencyControl = () => {
  const navigate = useNavigate();
  const [openRegister, setOpenRegister] = useState(false);

  return (
    <MainLayout>
      <PageHeader
        title="Product Capability & Dependency Control"
        description="Define the set of capabilities services can expose, who owns them, and whether they’re safe to adopt."
        className="!mt-1"
        actions={[
          {
            label: "Register Capability",
            icon: plusIcon,
            onClick: () => setOpenRegister(true),
          },
        ]}
      />

      <RegisterCapabilityModal
        open={openRegister}
        onClose={() => setOpenRegister(false)}
      />

      <CapabilityManagement />

    </MainLayout>

  );
};

export default ProductCapabilityDependencyControl;
