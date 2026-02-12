import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout";
import PageHeader from "../../../components/common/Heading";
import ProductList from "./ProductList";
const ProductLifecycleManagement = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <PageHeader
        title="Product Lifecycle Management"
        description="State by product — jump into health, deprecation planning, or retirement confirmation."
        className="!mt-1"
      />

      <ProductList />
    </MainLayout>
  );
};

export default ProductLifecycleManagement;
