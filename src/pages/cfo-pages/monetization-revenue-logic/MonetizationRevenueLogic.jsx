import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout";
import PageHeader from "../../../components/common/Heading";
import plusIcon from "../../../assets/plusicon.svg";
import MonetizationList from "./MonetizationList";
const MonetizationRevenueLogic = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <PageHeader
        title="Monetization & Revenue Logic"
        description="Define how the product makes money, what’s paywalled, and what’s usage-limited."
        className="!mt-1"
        actions={[
          {
            label: "Add Rule",
            icon: plusIcon,
            onClick: () => navigate("/add-monetization-rule"),
          },
        ]}
      />

      <MonetizationList />
    </MainLayout>
  );
};

export default MonetizationRevenueLogic;
