import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout";
import PageHeader from "../../../components/common/Heading";
import ProductList from "./ProductList";
import plusIcon from "../../../assets/plusicon.svg";
import CreateNewProductModal from "./CreateNewProductModal";
const ProductRegistry = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  return (
    <MainLayout>
      <PageHeader
        title="Product Registry"
        description="Manage and track all product lifecycles"
        className="!mt-1"
        actions={[
          {
            label: "Create Product",
            icon: plusIcon,
            onClick: () => setOpenModal(true),
          },
        ]}
      />

      <CreateNewProductModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />

      <ProductList />
    </MainLayout>
  );
};

export default ProductRegistry;
