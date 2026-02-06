import { useState } from "react";
import EmergencyActionModal from "../../components/common/EmergencyActionModal";
import { useNavigate } from "react-router-dom";
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
import dollarIcon from "../../assets/greendollaricon.svg";
import userIcon from "../../assets/alertcircleicon.svg";
import growthIcon from "../../assets/alertcircleicon.svg";
import providerIcon from "../../assets/alertcircleicon.svg";
import influencerIcon from "../../assets/alertcircleicon.svg";
import churnIcon from "../../assets/alertcircleicon.svg";
import retainIcon from "../../assets/alertcircleicon.svg";
import postIcon from "../../assets/alertcircleicon.svg";
import eyeIcon from "../../assets/eyeicon.svg";
import adIcon from "../../assets/alertcircleicon.svg";
import reachIcon from "../../assets/alertcircleicon.svg";
import okrIcon from "../../assets/alertcircleicon.svg";
import goalIcon from "../../assets/alertcircleicon.svg";
import giftIcon from "../../assets/alertcircleicon.svg";
import peopleIcon from "../../assets/alertcircleicon.svg";
import integrationIcon from "../../assets/alertcircleicon.svg";
import partnerIcon from "../../assets/alertcircleicon.svg";
import verticalIcon from "../../assets/alertcircleicon.svg";
import riskIcon from "../../assets/alertcircleicon.svg";
import RevenuePerformanceSection from "../../components/dashboard-component/RevenuePerformanceSection";
import ExecutiveDashboardSection from "../../components/dashboard-component/ExecutiveDashboardSection";
import CityPerformance from "../../components/dashboard-component/CityPerformance";
import AutomationAndRevenue from "../../components/dashboard-component/AutomationAndRevenue";
import RiskAssessmentSection from "../../components/dashboard-component/RiskAssessmentSection";
import RevenueEngagementSection from "../../components/dashboard-component/RevenueEngagementSection";
import {
  Activity,
  CheckCircle,
  Download,
  Globe,
  MapPin,
  Server,
  ShieldAlert,
  Target,
  TrendingDown,
  TrendingUp,
  DollarSign,
  AlertTriangle,
  AlertOctagon,
  Lock,
  UserX,
  Database,
  ShieldClose,
  FileWarning,
  Bot,
  ClipboardList,
  Percent,
  Wallet,
  Clock4Icon,
  TriangleAlert,
  Briefcase,
  XCircle,
  Zap,
  Lightbulb,
} from "lucide-react";

const peopleStats = [
  {
    label: "Active Employees",
    value: "247",
    change: "+12",
    icon: peopleIcon,
  },
  {
    label: "Active Integrations",
    value: "34",
    change: "+2",
    icon: integrationIcon,
  },
  {
    label: "Active Partners",
    value: "18",
    change: "0",
    icon: partnerIcon,
  },
  {
    label: "Top Vertical",
    value: "Food ($8.2M)",
    icon: verticalIcon,
    highlight: true,
  },
  {
    label: "#2 Vertical",
    value: "Services ($4.1M)",
    icon: verticalIcon,
    highlight: true,
  },
  {
    label: "Top City",
    value: "NYC ($5.4M)",
    icon: cityIcon,
    highlight: true,
  },
  {
    label: "#2 City",
    value: "Boston ($2.8M)",
    icon: cityIcon,
    highlight: true,
  },
  {
    label: "Highest Risk City",
    value: "SF (Blocked)",
    icon: riskIcon,
    danger: true,
  },
];

const governanceRules = [
  "CEO Top Section is read-only by default",
  "All actions must go through Action Workflow Management (AWM)",
  "CFO approval required for pricing, fees, payouts, financial changes",
  "CEO is final approver for policy, pricing, emergency overrides",
  "Role switching requires explicit switch + audit log",
  "Every metric, filter, export, action is fully audited (actor, time, scope, reason)",
];

const growthStats = [
  { title: "New Users", value: "18,420", change: "+14%", icon: userIcon },
  { title: "New Providers", value: "1,247", change: "+9%", icon: providerIcon },
  {
    title: "New Influencers",
    value: "342",
    change: "+22%",
    icon: influencerIcon,
  },
  { title: "User Growth", value: "12.4%", change: "+1.2%", icon: growthIcon },
  {
    title: "Provider Growth",
    value: "8.7%",
    change: "+0.8%",
    icon: growthIcon,
  },
  {
    title: "Churn Rate",
    value: "2.3%",
    change: "-0.4%",
    icon: churnIcon,
    danger: true,
  },
  { title: "Retention 7D", value: "68%", change: "+3%", icon: retainIcon },
  { title: "Retention 30D", value: "42%", change: "+2%", icon: retainIcon },
];

const contentStats = [
  { title: "Total Posts", value: "847K", change: "+11%", icon: postIcon },
  { title: "Total Videos", value: "124K", change: "+18%", icon: videoIcon },
  {
    title: "Views / Impressions",
    value: "42.8M",
    change: "+15%",
    icon: eyeIcon,
  },
  { title: "Ad Campaigns", value: "12", change: "+3", icon: adIcon },
  { title: "Ad Spend", value: "$340K", change: "+8%", icon: dollarIcon },
  {
    title: "Ad Revenue",
    value: "$520K",
    change: "+12%",
    icon: dollarIcon,
    highlight: true,
  },
  { title: "External Reach", value: "8.4M", change: "+20%", icon: reachIcon },
];

const strategicStats = [
  { title: "Company OKR", value: "73%", change: "+5%", icon: okrIcon },
  { title: "Top Goal Status", value: "On Track", icon: goalIcon },
  { title: "Initiative 1", value: "NYC Launch", icon: goalIcon },
  { title: "Initiative 2", value: "Premium Tier", icon: starIcon, warn: true },
  { title: "Initiative 3", value: "Partner Div", icon: giftIcon },
];

const Card = ({ item }) => (
  <div
    className={`border-[1.33px] rounded-lg lg:rounded-[14px] lg:p-4 p-2.5 flex flex-col justify-between border-[#7BF1A8] bg-[#F0FDF4]`}
  >
    <div className="flex items-center gap-2 mb-2">
      <img src={item.icon} alt="" className="w-6" />
      <p className="text-[13px] uppercase text-[#475467] font-medium">
        {item.title}
      </p>
    </div>

    <div>
      <p className="sm:text-[24px] text-[20px] font-semibold text-[#0A0A0A] mb-1">
        {item.value}
      </p>

      {item.change && (
        <p
          className={`text-[14px] ${
            item.change.startsWith("-") ? "text-red-600" : "text-green-600"
          }`}
        >
          {item.change}
        </p>
      )}
    </div>
  </div>
);

const moneyStats = [
  {
    title: "Gross Revenue",
    value: "$18.7M",
    change: "+14%",
    tone: "good",
    status: "upside",
    icon: <DollarSign className="w-4 h-4 text-[#00A63E]" />,
  },
  {
    title: "Net Revenue",
    value: "$12.4M",
    change: "+11%",
    tone: "good",
    status: "upside",
    icon: <DollarSign className="w-4 h-4 text-[#00A63E]" />,
  },
  {
    title: "Platform Margin",
    value: "34.2%",
    change: "+1.2%",
    tone: "good",
    status: "upside",
    icon: <Percent className="w-4 h-4 text-[#00A63E]" />,
  },
  {
    title: "Cash Balance",
    value: "$8.2M",
    change: "-5%",
    tone: "warn",
    status: "downside",
    icon: <Wallet className="w-4 h-4 text-[#D08700]" />,
  },
  {
    title: "Outstanding Payouts",
    value: "$1.8M",
    change: "0%",
    tone: "good",
    status: "",
    icon: <Clock4Icon className="w-4 h-4 text-[#00A63E]" />,
  },
  {
    title: "Refund Liability",
    value: "$240K",
    change: "-3%",
    tone: "good",
    status: "downside",
    icon: <TriangleAlert className="w-4 h-4 text-[#00A63E]" />,
  },
  {
    title: "Burn Rate",
    value: "$420K / mo",
    change: "-8%",
    tone: "good",
    status: "downside",
    icon: <TrendingDown className="w-4 h-4 text-[#00A63E]" />,
  },
  {
    title: "Runway",
    value: "19.5 months",
    change: "-1mo",
    tone: "warn",
    status: "downside",
    icon: <Clock4Icon className="w-4 h-4 text-[#D08700]" />,
  },
  {
    title: "Payment Success",
    value: "98.7%",
    change: "+0.3%",
    tone: "good",
    status: "upside",
    icon: <CheckCircle className="w-4 h-4 text-[#00A63E]" />,
  },
  {
    title: "Settlement Delays",
    value: "3",
    change: "+2",
    tone: "warn",
    status: "upside",
    icon: <Clock4Icon className="w-4 h-4 text-[#D08700]" />,
  },
  {
    title: "Wallet Float",
    value: "$4.2M",
    change: "+6%",
    tone: "good",
    status: "upside",
    icon: <Wallet className="w-4 h-4 text-[#00A63E]" />,
  },
];

const opsStats = [
  {
    title: "Orders / Requests",
    value: "142K",
    change: "+9%",
    tone: "",
    status: "upside",
    icon: <ClipboardList className="w-4 h-4 text-[#155DFC]" />,
  },
  {
    title: "Active Services",
    value: "8",
    change: "0",
    tone: "",
    status: "",
    icon: <Briefcase className="w-4 h-4 text-[#155DFC]" />,
  },
  {
    title: "Automation Health",
    value: "7 / 0 / 1",
    tone: "warn",
    status: "",
    icon: <Bot className="w-4 h-4 text-[#D08700]" />,
  },
  {
    title: "AI Actions Today",
    value: "8,420",
    change: "+12%",
    tone: "",
    status: "upside",
    icon: <Zap className="w-4 h-4 text-[#155DFC]" />,
  },
  {
    title: "AI Suggestions",
    value: "247",
    change: "+5%",
    tone: "",
    status: "upside",
    icon: <Lightbulb className="w-4 h-4 text-[#155DFC]" />,
  },
  {
    title: "AI Blocked",
    value: "12",
    change: "-3",
    tone: "good",
    status: "downside",
    icon: <ShieldAlert className="w-4 h-4 text-[#00A63E]" />,
  },
  {
    title: "Open Issues",
    value: "18",
    change: "-5",
    tone: "good",
    status: "downside",
    icon: <TriangleAlert className="w-4 h-4 text-[#00A63E]" />,
  },
  {
    title: "CEO Approvals",
    value: "5",
    change: "0",
    tone: "warn",
    status: "upside",
    icon: <CheckCircle className="w-4 h-4 text-[#D08700]" />,
  },
  {
    title: "System Uptime",
    value: "99.8%",
    change: "0%",
    tone: "good",
    status: "",
    icon: <Server className="w-4 h-4 text-[#00A63E]" />,
  },
  {
    title: "Failed Txns",
    value: "124",
    change: "-8",
    tone: "good",
    status: "downside",
    icon: <XCircle className="w-4 h-4 text-[#00A63E]" />,
  },
];

const StatCard = ({ item }) => (
  <div
    className={`border-[1.33px] rounded-lg lg:rounded-[14px] lg:p-4 p-2.5 flex flex-col justify-between ${
      item.tone === "good"
        ? "border-[#7BF1A8] bg-[#F0FDF4]"
        : item.tone === "warn"
          ? "border-[#FFDF20] bg-[#FEFCE8]"
          : "border-[#E5E7EB] bg-white"
    }`}
  >
    <div className="flex items-center gap-2 mb-2">
      {item.icon}
      <p className="text-[14px] text-[#4A5565] uppercase font-bold">
        {item.title}
      </p>
    </div>

    <div className="flex justify-between gap-2 items-start">
      <p
        className={`sm:text-[24px] leading-[1] text-[20px] font-semibold ${item.tone == "good" ? "text-green-600" : item.tone == "warn" ? "text-[#D08700]" : "text-black"} mb-1`}
      >
        {item.value}
      </p>

      {item.change && (
        <p
          className={`text-[14px] flex items-center gap-1 ${
            item.change.startsWith("+")
              ? "text-green-600"
              : item.change.startsWith("-")
                ? "text-red-600"
                : "text-[#667085]"
          }`}
        >
          {item.status == "upside" ? (
            <TrendingUp className="w-4" />
          ) : item.status == "downside" ? (
            <TrendingDown className="w-4" />
          ) : (
            ""
          )}
          {item.change}
        </p>
      )}
    </div>
  </div>
);

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

const executiveSummary = [
  {
    title: "Growing",
    subtitle: "+12% users, +9% providers",
    icon: <TrendingUp className="w-8 h-8 text-[#00A63E]" />,
  },
  {
    title: "Profitable",
    subtitle: "34% margin, $12.4M net",
    icon: <CheckCircle className="w-8 h-8 text-[#00A63E]" />,
  },
  {
    title: "Healthy",
    subtitle: "99.8% uptime, 7/8 auto OK",
    icon: <Server className="w-8 h-8 text-[#00A63E]" />,
  },
  {
    title: "Low Risk",
    subtitle: "2 incidents, 0 data breaches",
    icon: <ShieldAlert className="w-8 h-8 text-[#D08700]" />,
  },
  {
    title: "On Track",
    subtitle: "73% OKR, 2/3 initiatives",
    icon: <Target className="w-8 h-8 text-[#00A63E]" />,
  },
];

const companyStats = [
  {
    label: "Cities Live",
    value: "23",
    change: "+2",
    status: "upside",
    icon: <MapPin className="w-4 h-4 text-[#155DFC]" />,
  },
  {
    label: "Countries Live",
    value: "5",
    change: "– 0",
    status: "",
    icon: <TrendingUp className="w-4 h-4 text-[#155DFC]" />,
  },
  {
    label: "App Downloads",
    value: "3.8M",
    change: "+18%",
    status: "upside",
    icon: <Download className="w-4 h-4 text-[#155DFC]" />,
  },
  {
    label: "MAU",
    value: "1.2M",
    change: "+10%",
    status: "upside",
    icon: <Activity className="w-4 h-4 text-[#155DFC]" />,
  },
  {
    label: "DAU",
    value: "340K",
    change: "+7%",
    status: "upside",
    icon: <Activity className="w-4 h-4 text-[#155DFC]" />,
  },
];

const riskStats = [
  {
    label: "Active Incidents",
    value: 2,
    delta: "-1",
    icon: <AlertOctagon className="w-4 h-4 text-[#D08700]" />,
    status: "downside",
    tone: "warn",
  },
  {
    label: "Refunds Pending",
    value: 67,
    delta: "-12",
    icon: <DollarSign className="w-4 h-4 text-[#00A63E]" />,
    status: "downside",
    tone: "good",
  },
  {
    label: "Policy Violations",
    value: 8,
    delta: "+3",
    icon: <FileWarning className="w-4 h-4 text-[#D08700]" />,
    status: "upside",
    tone: "warn",
  },
  {
    label: "Fraud Flagged",
    value: 15,
    delta: "-5",
    icon: <ShieldClose className="w-4 h-4 text-[#00A63E]" />,
    status: "downside",
    tone: "good",
  },
  {
    label: "Chargebacks",
    value: 23,
    delta: "+4",
    icon: <AlertTriangle className="w-4 h-4 text-[#D08700]" />,
    status: "upside",
    tone: "warn",
  },
  {
    label: "Legal Complaints",
    value: 1,
    delta: "– 0",
    icon: <FileWarning className="w-4 h-4 text-[#D08700]" />,
    status: "",
    tone: "warn",
  },
  {
    label: "Compliance Warn",
    value: 3,
    delta: "-2",
    icon: <ShieldAlert className="w-4 h-4 text-[#D08700]" />,
    status: "downside",
    tone: "warn",
  },
  {
    label: "Security Alerts",
    value: 7,
    delta: "+2",
    icon: <Lock className="w-4 h-4 text-[#D08700]" />,
    status: "upside",
    tone: "warn",
  },
  {
    label: "Unauth Access",
    value: 42,
    delta: "-8",
    icon: <UserX className="w-4 h-4 text-[#00A63E]" />,
    status: "downside",
    tone: "good",
  },
  {
    label: "Data Incidents",
    value: 0,
    delta: "– 0",
    icon: <Database className="w-4 h-4 text-[#00A63E]" />,
    status: "",
    tone: "good",
  },
];

const emergencyActionsConfig = {
  incident: {
    title: "Enter Incident Mode",
    description:
      "This will activate emergency incident protocols, alert all C-suite members, and enable enhanced monitoring. Normal operations will be suspended until incident mode is deactivated.",
    command: "ceo.emergency.incident_mode",
  },
  freeze: {
    title: "Freeze Payouts",
    description:
      "This will immediately freeze all pending payouts across all verticals and cities. Merchants and vendors will be unable to receive payments until the freeze is lifted.",
    command: "ceo.emergency.freeze_payouts",
  },
  pause: {
    title: "Pause Automations",
    description:
      "This will immediately pause all active automation workflows across all verticals. Automated processes will be suspended until manually reactivated.",
    command: "ceo.emergency.pause_automation",
  },
};

const ControlTower = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [vertical, setVertical] = useState("");
  const [time, setTime] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleOpen = (type) => {
    setModalData(emergencyActionsConfig[type]);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    setModalData(null);
  };

  const filterOptions = [
    {
      placeholder: "All Cities",
      options: [
        { value: "all", label: "All Cities" },
        { value: "nyc", label: "New York City" },
        { value: "sf", label: "San Francisco" },
        { value: "la", label: "Los Angeles" },
        { value: "chicago", label: "Chicago" },
        { value: "boston", label: "Boston" },
      ],
      value: city,
      onChange: setCity,
    },
    {
      placeholder: "All Verticals",
      options: [
        { value: "all", label: "All Verticals" },
        { value: "food", label: "Food" },
        { value: "shop", label: "Shop" },
        { value: "home", label: "Home" },
        { value: "it", label: "IT" },
        { value: "viral", label: "Viral" },
        { value: "pay", label: "Pay" },
      ],
      value: vertical,
      onChange: setVertical,
    },
    {
      placeholder: "Last 24 Hours",
      options: [
        { value: "1h", label: "Last Hour" },
        { value: "24h", label: "Last 24 Hours" },
        { value: "7d", label: "Last 7 Days" },
        { value: "30d", label: "Last 30 Days" },
        { value: "90d", label: "Last 90 Days" },
      ],
      value: time,
      onChange: setTime,
    },
  ];

  return (
    <MainLayout>
      <PageHeader
        title="CEO Governance & Control Tower"
        description="Comprehensive oversight dashboard for platform governance, compliance, and emergency control"
      />

      <FilterBar
        label="Filters"
        filters={filterOptions}
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
            onClick: () => {
              const el = document.getElementById("critical-alert-section");
              if (el) {
                el.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            },
          },
          {
            label: "Enter Incident Mode",
            command: "ceo.incident.enter",
            icon: incidentIcon,
            variant: "danger",
            onClick: () => handleOpen("incident"),
          },
          {
            label: "Freeze Payouts",
            command: "ceo.emergency.freeze_payouts",
            icon: freezeIcon,
            variant: "danger",
            onClick: () => handleOpen("freeze"),
          },
          {
            label: "Pause Automations",
            command: "ceo.emergency.pause_automation",
            icon: pauseIcon,
            variant: "danger",
            onClick: () => handleOpen("pause"),
          },
          {
            label: "Open Approval Item",
            command: "ceo.approvals.open",
            icon: approvalIcon,
            onClick: () => navigate("/approvals"),
          },
          {
            label: "City Readiness Detail",
            command: "ceo.strategy.city_open",
            icon: cityIcon,
            onClick: () => {
              const el = document.getElementById("city-readiness-section");
              if (el) {
                el.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            },
          },
        ]}
      />

      <EmergencyActionModal
        open={openModal}
        data={modalData}
        onClose={handleClose}
      />

      <StatsCards stats={statsData} />

      <div className="space-y-5 mb-5">
        <div className="bg-white rounded-lg lg:rounded-[14px] border border-[#0000001A] lg:p-6 p-3">
          <h2 className="text-[20px] text-[#0A0A0A] mb-6 flex items-center gap-3">
            <Target className="w-5 h-5 text-[#2563EB]" />
            10-Second Executive Summary
          </h2>

          <div className="grid xl:grid-cols-5 md:grid-cols-3 grid-cols-2 lg:gap-4 gap-2">
            {executiveSummary.map((item, i) => (
              <div
                key={i}
                className="border-[1.33px] border-[#E5E7EB] rounded-lg lg:rounded-[14px] lg:p-4 p-2.5 text-center flex items-center flex-col gap-3"
              >
                {item.icon}
                <p className="text-[16px] text-[#0A0A0A]">{item.title}</p>
                <p className="text-[14px] text-[#667085]">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg lg:rounded-[14px] border border-[#0000001A] lg:p-6 p-3">
          <h2 className="text-[20px] text-[#0A0A0A] mb-6 flex items-center gap-3">
            <Globe className="w-5 h-5 text-[#155DFC]" />
            Company Size & Reach
          </h2>

          <div className="grid xl:grid-cols-5 md:grid-cols-3 grid-cols-2 lg:gap-4 gap-2">
            {companyStats.map((item, i) => (
              <div
                key={i}
                className="border-[1.33px] border-[#E5E7EB] rounded-lg lg:rounded-[14px] lg:p-4 p-2.5"
              >
                <div className="flex items-center gap-2 mb-1">
                  {item.icon}
                  <p className="text-[14px] text-[#667085]">{item.label}</p>
                </div>
                <div className="flex items-center lg:gap-6 gap-3">
                  <span className="sm:text-[24px] text-[20px] font-semibold text-[#0A0A0A]">
                    {item.value}
                  </span>
                  <span
                    className={`text-[14px] flex items-center gap-2 ${item.status == "upside" ? "text-green-600" : item.status == "downside" ? "text-red-600" : "text-gray-400"}`}
                  >
                    {item.status == "upside" ? (
                      <TrendingUp className="w-5" />
                    ) : item.status == "downside" ? (
                      <TrendingDown className="w-5" />
                    ) : (
                      ""
                    )}
                    {item.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg lg:rounded-[14px] border border-[#0000001A] lg:p-6 p-3">
          <h2 className="text-[20px] text-[#0A0A0A] mb-6 flex items-center gap-3">
            <ShieldAlert className="w-5 text-red-500" />
            Risk, Trust, Compliance & Security
          </h2>

          <div className="grid xl:grid-cols-5 md:grid-cols-3 grid-cols-2 lg:gap-4 gap-2">
            {riskStats.map((item, i) => (
              <div
                key={i}
                className={`rounded-lg lg:rounded-[14px] border-[1.33px] lg:p-4 p-2.5 ${
                  item.tone === "good"
                    ? "border-[#7BF1A8] bg-[#F0FDF4]"
                    : "border-[#FFDF20] bg-[#FEFCE8]"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  {item.icon}
                  <p className="text-[14px] text-[#475467]">{item.label}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className={`sm:text-[32px] text-[24px] font-semibold ${
                      item.tone === "good" ? "text-[#00A63E]" : "text-[#D08700]"
                    }`}
                  >
                    {item.value}
                  </span>
                  <span
                    className={`text-[14px] flex items-center gap-2 ${
                      item.delta.startsWith("+")
                        ? "text-[#00A63E]"
                        : item.delta.startsWith("-")
                          ? "text-red-600"
                          : "text-[#667085]"
                    }`}
                  >
                    {item.status == "upside" ? (
                      <TrendingUp className="w-5" />
                    ) : item.status == "downside" ? (
                      <TrendingDown className="w-5" />
                    ) : (
                      ""
                    )}
                    {item.delta}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-5 mb-5">
        <div className="bg-white rounded-lg lg:rounded-[14px] border border-[#0000001A] lg:p-6 p-3">
          <h2 className="text-[20px] text-[#0A0A0A] mb-6 flex items-center gap-3">
            <DollarSign className="w-5 text-[#00A63E]" />
            Money & Financial Health
          </h2>

          <div className="grid xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 lg:gap-4 gap-2">
            {moneyStats.map((item, i) => (
              <StatCard key={i} item={item} />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg lg:rounded-[14px] border border-[#0000001A] lg:p-6 p-3">
          <h2 className="text-[20px] text-[#0A0A0A] mb-6 flex  items-center gap-3">
            <Bot className="w-5 h-5 text-[#7C3AED]" />
            Operations, Automation & System Health
          </h2>

          <div className="grid xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-2 lg:gap-4 gap-2">
            {opsStats.map((item, i) => (
              <StatCard key={i} item={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-5 mb-5">
        <div className="bg-white rounded-lg lg:rounded-[14px] border border-[#0000001A] lg:p-6 p-3">
          <h2 className="text-[20px] mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 text-[#00A63E]" /> Growth & Momentum
          </h2>

          <div className="grid xl:grid-cols-8 lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 lg:gap-4 gap-2">
            {growthStats.map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg lg:rounded-[14px] border border-[#0000001A] lg:p-6 p-3">
          <h2 className="text-[20px] mb-6 flex items-center gap-2">
            <img src={adIcon} alt="" /> Content, Marketing & Brand
          </h2>

          <div className="grid xl:grid-cols-7 lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 lg:gap-4 gap-2">
            {contentStats.map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg lg:rounded-[14px] border border-[#0000001A] lg:p-6 p-3">
          <h2 className="text-[20px] mb-6 flex items-center gap-2">
            <img src={okrIcon} alt="" /> Strategic Health (Board-Level)
          </h2>

          <div className="grid xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-2 lg:gap-4 gap-2">
            {strategicStats.map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-5 mb-5">
        <div className="bg-white rounded-lg lg:rounded-[14px] border border-[#0000001A] lg:p-6 p-3">
          <h2 className="text-[20px] mb-6 flex items-center gap-2">
            <img src={peopleIcon} alt="" />
            People, Partners & Ecosystem
          </h2>

          <div className="grid xl:grid-cols-8 lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 lg:gap-4 gap-2">
            {peopleStats.map((item, i) => (
              <div
                key={i}
                className={`lg:p-4 p-2.5 rounded-lg lg:rounded-[14px] border ${
                  item.danger
                    ? "border-red-400 bg-red-50"
                    : item.highlight
                      ? "border-green-400 bg-green-50"
                      : "border-[#E5E7EB] bg-white"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <img src={item.icon} alt="" />
                  <p className="text-[13px] uppercase text-[#475467] font-medium">
                    {item.label}
                  </p>
                </div>

                <p
                  className={`sm:text-[24px] text-[20px] font-semibold ${
                    item.danger ? "text-red-600" : "text-[#0A0A0A]"
                  }`}
                >
                  {item.value}
                </p>

                {item.change && (
                  <p className="text-[14px] text-green-600 mt-1">
                    ↗ {item.change}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg lg:rounded-[14px] border border-[#0000001A] lg:p-6 p-3">
          <h3 className="text-[18px] text-[#0A0A0A] mb-4">Governance Rules:</h3>

          <ul className="space-y-3">
            {governanceRules.map((rule, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-[14px] text-[#344054]"
              >
                ✅ {rule}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <RevenuePerformanceSection id="critical-alert-section" />

      <RevenueEngagementSection />

      <RiskAssessmentSection />

      <AutomationAndRevenue />

      <CityPerformance />

      <ExecutiveDashboardSection id="city-readiness-section" />
    </MainLayout>
  );
};

export default ControlTower;
