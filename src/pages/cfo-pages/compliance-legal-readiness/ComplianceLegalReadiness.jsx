import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../../components/common/Heading";
import MainLayout from "../../../components/layout/MainLayout";
import CommonCard from "../common/CommonCard";
import {
  CheckCircle2,
  Clock4Icon,
  TriangleAlertIcon,
} from "lucide-react";
import ComplianceCategories from "./ComplianceCategories";
import ComplianceTabs from "./ComplianceTabs";

const statsConfig = [
  {
    title: "Completed",
    value: 29,
    changeType: "positive",
    icon: <CheckCircle2 className="w-5 h-5 text-[#00A63E]" />,
    iconBgClass: "bg-[#D0FAE5]",
  },
  {
    title: "In Progress",
    value: 12,
    changeType: "negative",
    icon: <Clock4Icon className="w-5 h-5 text-[#3178EC]" />,
    iconBgClass: "bg-[#CEDFFF]",
  },
  {
    title: "Pending",
    value: 7,
    changeType: "positive",
    icon: <TriangleAlertIcon className="w-5 h-5 text-[#A65F00]" />,
    iconBgClass: "bg-[#FEF9C2]",
  },
];

const ComplianceLegalReadiness = () => {
  const navigate = useNavigate();
  const [openAction, setOpenAction] = useState();

  return (
    <MainLayout>
      <PageHeader
        title="Compliance & Legal Readiness"
        description="Track and manage all compliance requirements for product launch clearance"
        className="!mt-1"
        actions={[
          {
            label: "Request Launch Clearance",
            onClick: () => navigate("/request-launch-clearance"),
          },
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-7">
        {statsConfig.map((item, index) => (
          <CommonCard key={index} {...item} />
        ))}
      </div>

      <ComplianceTabs />

    </MainLayout>
  );
};

export default ComplianceLegalReadiness;
