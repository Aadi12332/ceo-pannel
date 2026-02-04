import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/common/Heading";
import QuickActions from "../../components/common/QuickAction";
import SummaryCards from "../../components/common/SummaryCard";
import MainLayout from "../../components/layout/MainLayout";
import alertIcon from "../../assets/darkshieldicon.svg";
import pauseIcon from "../../assets/freezeicon.svg";
import approvalIcon from "../../assets/darkfileicon.svg";
import exportIcon from "../../assets/exporticon.svg";
import FinanceChart from "../../components/financial-component/FinanceChart";
import RevenueGrossMargin from "../../components/financial-component/RevenueGrossMargin";
import ChargebackAndFraudSection from "../../components/financial-component/ChargebackAndFraudSection";
import BudgetCeilingModal from "../../components/financial-component/BudgetCeilingModal";
import RequestCFOReportModal from "../../components/financial-component/RequestCFOReportModal";

const mtd = [
  {
    title: "Revenue",
    budget: "$550K",
    actual: "$580K",
    change: "+5.5%",
    barColor: "bg-[#5CC65A]",
  },
  {
    title: "Operating Costs",
    budget: "$450K",
    actual: "$487K",
    change: "+8.2%",
    barColor: "bg-[#EF4444]",
  },
  {
    title: "Marketing",
    budget: "$120K",
    actual: "$124K",
    change: "+3.3%",
    barColor: "bg-[#EF4444]",
  },
  {
    title: "R&D",
    budget: "$280K",
    actual: "$265K",
    change: "-5.4%",
    barColor: "bg-[#5CC65A]",
  },
];

const ytd = [
  {
    title: "Revenue",
    budget: "$62.0M",
    actual: "$68.5M",
    change: "+10.5%",
    barColor: "bg-[#5CC65A]",
  },
  {
    title: "Operating Costs",
    budget: "$5.2M",
    actual: "$5.5M",
    change: "+4.8%",
    barColor: "bg-[#EF4444]",
  },
  {
    title: "Marketing",
    budget: "$1.4M",
    actual: "$1.5M",
    change: "+8.6%",
    barColor: "bg-[#EF4444]",
  },
  {
    title: "R&D",
    budget: "$3.2M",
    actual: "$3.1M",
    change: "-3.1%",
    barColor: "bg-[#5CC65A]",
  },
];

const financeStats = [
  {
    label: "Monthly Burn Rate",
    value: "$487K",
    change: -8,
  },
  {
    label: "Runway (Months)",
    value: "18",
    change: 5,
  },
  {
    label: "Payroll Exposure",
    value: "$1.2M",
    change: 3,
  },
  {
    label: "Monthly Revenue",
    value: "$5.8M",
    change: 12,
  },
  {
    label: "Gross Margin",
    value: "68%",
    change: 3,
  },
  {
    label: "Active Spend Freezes",
    value: "2",
    change: 0,
  },
];

const Financial = () => {
  const navigate = useNavigate();
  const [openBudget, setOpenBudget] = useState(false);
  const [openRequestCFO, setOpenRequestCFO] = useState(false);
  const Section = ({ title, data }) => (
    <div className="flex-1">
      <h3 className="text-[18px] text-[#0A0A0A] mb-4">{title}</h3>

      <div className="space-y-5">
        {data.map((item, i) => (
          <div key={i}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[14px] text-[#0A0A0A]">{item.title}</span>
              <span
                className={`text-[14px] font-medium ${
                  item.change.startsWith("-")
                    ? "text-[#16A34A]"
                    : item.barColor === "bg-[#EF4444]"
                      ? "text-[#EF4444]"
                      : "text-[#16A34A]"
                }`}
              >
                {item.change}
              </span>
            </div>

            <div className="flex justify-between text-[13px] text-[#475467] mb-2">
              <span>Budget: {item.budget}</span>
              <span>Actual: {item.actual}</span>
            </div>

            <div className="h-[8px] w-full bg-[#E5E7EB] rounded-full overflow-hidden">
              <div
                className={`h-full ${item.barColor}`}
                style={{ width: "100%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <MainLayout>
      <PageHeader
        title="Financial Oversight"
        description="Control money boundaries without executing payments - monitor revenue, burn rate, payroll, and emergency spend controls"
      />

      <SummaryCards items={financeStats} title="Financial Dashboard" />

      <QuickActions
        title="CEO Financial Controls"
        actions={[
          {
            label: "Set Budget Cap",
            command: "Lorem Ipsum is simply dummy text",
            icon: alertIcon,
            onClick: () => setOpenBudget(true),
          },
          {
            label: "Request CFO Report",
            command: "Lorem Ipsum is simply dummy text",
            icon: approvalIcon,
            onClick: () => setOpenRequestCFO(true),
          },
          {
            label: "Export Data",
            command: "Lorem Ipsum is simply dummy text",
            icon: exportIcon,
            onClick: () => navigate("/approvals"),
          },
          {
            label: "Emergency Freeze",
            command: "Lorem Ipsum is simply dummy text",
            icon: pauseIcon,
            variant: "danger",
            onClick: () => console.log("Pause Automations"),
          },
        ]}
      />

      

<BudgetCeilingModal open={openBudget} onClose={() => setOpenBudget(false)} />
<RequestCFOReportModal open={openRequestCFO} onClose={() => setOpenRequestCFO(false)} />


      <FinanceChart />

      <div className="bg-white lg:rounded-[16px] rounded-lg border border-[#0000001A] lg:p-6 p-3 mb-5">
        <h2 className="text-[20px] text-[#0A0A0A] mb-6">Budget vs Actual</h2>

        <div className="flex flex-col lg:flex-row gap-10">
          <Section title="Month-to-Date (MTD)" data={mtd} />
          <Section title="Year-to-Date (YTD)" data={ytd} />
        </div>
      </div>

      <RevenueGrossMargin />

      <ChargebackAndFraudSection />
      
    </MainLayout>
  );
};

export default Financial;
