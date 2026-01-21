import { useState } from "react";
import PageHeader from "../../components/common/Heading";
import QuickActions from "../../components/common/QuickAction";
import StatsCards from "../../components/common/StatsCard";
import usersIcon from "../../assets/statscardicon/usericon.svg";
import providersIcon from "../../assets/statscardicon/providericon.svg";
import revenueIcon from "../../assets/statscardicon/dollaricon.svg";
import starIcon from "../../assets/statscardicon/ratingicon.svg";
import influencersIcon from "../../assets/statscardicon/influencericon.svg";
import costIcon from "../../assets/statscardicon/dollaricon.svg";
import videoIcon from "../../assets/statscardicon/videoicon.svg";
import ordersIcon from "../../assets/statscardicon/ordericon.svg";
import alertIcon from "../../assets/alertcircleicon.svg";
import incidentIcon from "../../assets/incidenticon.svg";
import freezeIcon from "../../assets/freezeicon.svg";
import pauseIcon from "../../assets/pauseicon.svg";
import approvalIcon from "../../assets/approvalgrayicon.svg";
import cityIcon from "../../assets/locationicon.svg";
import MainLayout from "../../components/layout/MainLayout";
import FilterBar from "../../components/common/FilterBox";
import exportIcon from "../../assets/exporticon.svg";

const statsData = [
  {
    label: "Total Users",
    value: "15,240",
    change: 12.5,
    changeText: "12.5% from last month",
    icon: usersIcon,
    iconBg: "#FCE7DF",
  },
  {
    label: "Total Providers",
    value: "25,00",
    change: 0.3,
    changeText: "0.3% from last month",
    icon: providersIcon,
    iconBg: "#DCFCE7",
  },
  {
    label: "Total Revenue",
    value: "$84,120",
    change: 20.1,
    changeText: "20.1% from last month",
    icon: revenueIcon,
    iconBg: "#EDE9FE",
  },
  {
    label: "Avg Rating",
    value: "4.6 ★",
    change: -0.5,
    changeText: "0.5% from last month",
    icon: starIcon,
    iconBg: "#DBEAFE",
  },
  {
    label: "Total Influencers",
    value: "6,148",
    change: 12.5,
    changeText: "12.5% from last month",
    icon: influencersIcon,
    iconBg: "#DBEAFE",
  },
  {
    label: "Total Cost",
    value: "$184,120",
    change: 20.1,
    changeText: "20.1% from last month",
    icon: costIcon,
    iconBg: "#EDE9FE",
  },
  {
    label: "Total Videos",
    value: "25M",
    change: 0.3,
    changeText: "0.3% from last month",
    icon: videoIcon,
    iconBg: "#DCFCE7",
  },
  {
    label: "Total Orders",
    value: "4,169",
    change: 12.5,
    changeText: "12.5% from last month",
    icon: ordersIcon,
    iconBg: "#FCE7DF",
  },
];

const Dashboard = () => {
  const [city, setCity] = useState("");
  const [vertical, setVertical] = useState("");
  const [time, setTime] = useState("");
  return (
    <MainLayout>
      <PageHeader
        title="CEO Governance & Control Tower"
        description="Comprehensive oversight dashboard for platform governance, compliance, and emergency control"
      />
      <FilterBar
        filters={[
          {
            placeholder: "All Cities",
            options: [
              { value: "delhi", label: "Delhi" },
              { value: "mumbai", label: "Mumbai" },
            ],
            value: city,
            onChange: setCity,
          },
          {
            placeholder: "All Verticals",
            options: [
              { value: "finance", label: "Finance" },
              { value: "health", label: "Health" },
            ],
            value: vertical,
            onChange: setVertical,
          },
          {
            placeholder: "Last 24 Hours",
            options: [
              { value: "24h", label: "Last 24 Hours" },
              { value: "7d", label: "Last 7 Days" },
            ],
            value: time,
            onChange: setTime,
          },
        ]}
        action={{
          label: "Export Snapshot",
          icon: exportIcon,
          onClick: () => console.log("Export clicked"),
        }}
      />

      <QuickActions
        title="CEO Quick Actions"
        actions={[
          {
            label: "Open Critical Alert",
            command: "ceo.alert.open",
            icon: alertIcon,
            onClick: () => console.log("Open Alert"),
          },
          {
            label: "Enter Incident Mode",
            command: "ceo.incident.enter",
            icon: incidentIcon,
            variant: "danger",
            onClick: () => console.log("Incident Mode"),
          },
          {
            label: "Freeze Payouts",
            command: "ceo.emergency.freeze_payouts",
            icon: freezeIcon,
            variant: "danger",
            onClick: () => console.log("Freeze Payouts"),
          },
          {
            label: "Pause Automations",
            command: "ceo.emergency.pause_automation",
            icon: pauseIcon,
            variant: "danger",
            onClick: () => console.log("Pause Automations"),
          },
          {
            label: "Open Approval Item",
            command: "ceo.approvals.open",
            icon: approvalIcon,
            onClick: () => console.log("Open Approval"),
          },
          {
            label: "City Readiness Detail",
            command: "ceo.strategy.city_open",
            icon: cityIcon,
            onClick: () => console.log("City Readiness"),
          },
        ]}
      />


      <StatsCards stats={statsData} />


    </MainLayout>
  );
};

export default Dashboard;
