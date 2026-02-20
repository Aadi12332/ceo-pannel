import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../../components/common/Heading";
import MainLayout from "../../../components/layout/MainLayout";
import CommonCard from "../common/CommonCard";
import {
  CheckCircle2,
  Check,
  Clock4Icon,
  TriangleAlertIcon,
  AlertTriangle,
  Circle,
} from "lucide-react";

const statsConfig = [
  {
    title: "Completed",
    value: 29,
    change: "Items verified",
    icon: <CheckCircle2 className="w-5 h-5 text-[#00A63E]" />,
    iconBgClass: "bg-[#D0FAE5]",
  },
  {
    title: "In Progress",
    value: 12,
    change: "Primary + 2 backups",
    icon: <Clock4Icon className="w-5 h-5 text-[#3178EC]" />,
    iconBgClass: "bg-[#CEDFFF]",
  },
  {
    title: "Pending",
    value: 7,
    change: "2 need review",
    icon: <TriangleAlertIcon className="w-5 h-5 text-[#A65F00]" />,
    iconBgClass: "bg-[#FEF9C2]",
  },
  {
    title: "Pending",
    value: 7,
    change: "Blocking launch",
    icon: <TriangleAlertIcon className="w-5 h-5 text-[#A65F00]" />,
    iconBgClass: "bg-[#FEF9C2]",
  },
];

const items = [
  {
    title: "Monitoring & Alerting",
    desc: "All critical metrics have alerts configured",
    status: "completed",
  },
  {
    title: "Incident Response Plan",
    desc: "Documented escalation procedures",
    status: "completed",
  },
  {
    title: "On-call Schedule",
    desc: "Primary and backup on-call assigned",
    status: "completed",
  },
  {
    title: "Runbook Documentation",
    desc: "2 runbooks require review",
    status: "warning",
  },
  {
    title: "Capacity Planning",
    desc: "Load testing pending",
    status: "pending",
  },
  {
    title: "Security Review",
    desc: "Pending final security sign-off",
    status: "pending",
  },
];

const statusStyles = {
  completed: {
    bg: "bg-[#DCFCE7]",
    iconBg: "bg-[#BBF7D0]",
    iconColor: "text-[#15803D]",
    icon: <CheckCircle2 size={20} />,
  },
  warning: {
    bg: "bg-[#FEF3C7]",
    iconBg: "bg-[#FDE68A]",
    iconColor: "text-[#B45309]",
    icon: <AlertTriangle size={20} />,
  },
  pending: {
    bg: "bg-[#DBEAFE]",
    iconBg: "bg-[#BFDBFE]",
    iconColor: "text-[#2563EB]",
    icon: <Circle size={20} />,
  },
};

const tabContent = [
  {
    title: "Product Operational Readiness",
    description: "Track and verify all operational requirements before launch",
  },
  {
    title: "On-call & Runbook Verification",
    description: "Verify team readiness and documentation before going live",
  },
  {
    title: "Operational Sign-off Summary",
    description: "Review all requirements and provide final sign-off",
  },
];

const getButtonClass = (variant) =>
  variant === "primary"
    ? "bg-[#0E1E38] text-white"
    : "bg-[#fff] text-[#0E1E38]";

const ProductOperationalReadiness = () => {
  const navigate = useNavigate();
  const [openAction, setOpenAction] = useState();
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Dashboard", "On-call & Runbook", "Sign-off"];
  const [checked, setChecked] = useState({
    monitoring: true,
    oncall: true,
    runbook: true,
    responsibility: true,
  });

  const toggle = (key) =>
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));

  const tabButtons = [
    {
      buttons: [
        {
          label: "Continue to Verification",
          onClick: () => setActiveTab(1),
          variant: "primary",
        },
      ],
    },
    {
      buttons: [
        {
          label: "Back",
          onClick: () => setActiveTab(0),
          variant: "secondary",
        },
        {
          label: "Continue to Sign-off",
          onClick: () => setActiveTab(2),
          variant: "primary",
        },
      ],
    },
    {
      buttons: [
        {
          label: "Back",
          onClick: () => setActiveTab(1),
          variant: "secondary",
        },
        {
          label: "Complete Sign-off",
          onClick: () => console.log("Sign-off completed"),
          variant: "primary",
        },
      ],
    },
  ];
  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-170px)]">
        <div className="flex lg:flex-row flex-col items-center justify-between gap-3">
          {tabContent[activeTab] && (
            <PageHeader
              title={tabContent[activeTab].title}
              description={tabContent[activeTab].description}
              className="!mt-1"
            />
          )}
          <div className="flex items-center sm:gap-5 gap-3 flex-wrap mb-5">
            {tabs.map((tab, index) => {
              const isActive = activeTab === index;
              const isCompleted = activeTab > index;

              return (
                <div
                  key={tab}
                  className={`flex items-center gap-2 font-semibold cursor-pointer min-w-max ${
                    isCompleted
                      ? "text-[#000]"
                      : isActive
                        ? "text-[#000]"
                        : "text-[#4A5565]"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <CheckCircle2
                    className={`w-5 min-w-5 ${
                      isCompleted
                        ? "text-[#00A63E]"
                        : isActive
                          ? "text-[#00A63E]"
                          : "text-[#4A5565]"
                    }`}
                  />
                  {tab}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {statsConfig.map((item, index) => (
            <CommonCard key={index} {...item} />
          ))}
        </div>

        {activeTab === 0 && (
          <div className="space-y-5 mt-5">
            <h2 className="text-2xl font-semibold text-[#111827]">
              Readiness Checklist
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {items.map((item, index) => {
                const style = statusStyles[item.status];

                return (
                  <div
                    key={index}
                    className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a] flex items-start gap-4"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${style.iconBg} ${style.iconColor}`}
                    >
                      {style.icon}
                    </div>

                    <div>
                      <p className="font-semibold text-[#111827]">
                        {item.title}
                      </p>
                      <p className="text-sm text-[#6B7280] mt-1">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 1 && (
          <div className="space-y-5 mt-5">
            <div>
              <h2 className="text-2xl font-semibold">On Call Team</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">
                {[
                  {
                    name: "Sarah Chen",
                    role: "Senior SRE",
                    status: "Verified",
                  },
                  {
                    name: "Marcus Johnson",
                    role: "Platform Engineer",
                    status: "Verified",
                  },
                  {
                    name: "Elena Rodriguez",
                    role: "DevOps Lead",
                    status: "Pending",
                  },
                ].map((user, i) => (
                  <div
                    key={i}
                    className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a] flex justify-between items-center"
                  >
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-sm text-[#6B7280]">{user.role}</p>
                      <p className="text-sm text-[#6B7280] mt-1">
                        Call: +1 (555) 123-4567
                      </p>
                    </div>

                    <span
                      className={`px-3 py-1 text-xs rounded-full ${
                        user.status === "Verified"
                          ? "bg-[#DCFCE7] text-[#15803D]"
                          : "bg-[#DBEAFE] text-[#2563EB]"
                      }`}
                    >
                      {user.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Runbooks</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">
                {[
                  {
                    title: "Service Degradation Response",
                    tag: "Verified",
                  },
                  {
                    title: "Database Failover Procedure",
                    tag: "Verified",
                  },
                  {
                    title: "Scaling Playbook",
                    tag: "Outdated",
                  },
                  {
                    title: "Rollback Procedures",
                    tag: "Review Needed",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a] flex items-center justify-between"
                  >
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-[#6B7280] mt-1">
                        Updated recently
                      </p>
                    </div>

                    <span
                      className={`px-3 py-1 text-xs rounded-full ${
                        item.tag === "Verified"
                          ? "bg-[#DCFCE7] text-[#15803D]"
                          : item.tag === "Outdated"
                            ? "bg-[#FEF3C7] text-[#B45309]"
                            : "bg-[#DBEAFE] text-[#2563EB]"
                      }`}
                    >
                      {item.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Verification</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">
                {[
                  {
                    title: "On-call schedule confirmed for next 30 days",
                    icon: "success",
                  },
                  {
                    title: "Contact information verified",
                    icon: "success",
                  },
                  {
                    title: "Escalation paths documented",
                    icon: "success",
                  },
                  {
                    title: "All critical runbooks reviewed",
                    icon: "warning",
                  },
                  {
                    title: "Runbook dry-run completed",
                    icon: "pending",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a] flex items-center gap-4"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        item.icon === "success"
                          ? "bg-[#DCFCE7]"
                          : item.icon === "warning"
                            ? "bg-[#FEF3C7]"
                            : "bg-[#DBEAFE]"
                      }`}
                    >
                      {item.icon === "success" ? (
                        <CheckCircle2 className="text-[#15803D]" />
                      ) : item.icon === "warning" ? (
                        <AlertTriangle className="text-[#B45309]" />
                      ) : (
                        <Circle className="text-[#2563EB]" />
                      )}
                    </div>

                    <p className="font-medium">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div className="space-y-5 mt-5">
            <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-lg font-semibold">Readiness Score</p>
                  <p className="text-sm text-[#6B7280]">Based on 6 criteria</p>
                </div>
                <p className="text-4xl font-bold text-[#2563EB]">67%</p>
              </div>

              <div className="w-full h-2 bg-[#E5E7EB] mt-3">
                <div className="h-2 bg-[#2563EB]" style={{ width: "67%" }} />
              </div>
            </div>

            <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
              <h2 className="text-2xl font-semibold">Requirements Summary</h2>

              <div className="mt-6 space-y-6">
                {[
                  {
                    title: "Monitoring & Alerting",
                    desc: "12 alerts configured, 4 dashboards created",
                    status: "Completed",
                  },
                  {
                    title: "On-call Coverage",
                    desc: "3 engineers, 30-day schedule confirmed",
                    status: "Completed",
                  },
                  {
                    title: "Runbook Documentation",
                    desc: "8 of 10 runbooks verified, 2 pending review",
                    status: "Needs Attention",
                  },
                  {
                    title: "Incident Response Plan",
                    desc: "Escalation paths and communication plan ready",
                    status: "Completed",
                  },
                  {
                    title: "Capacity Planning",
                    desc: "Load testing scheduled for next week",
                    status: "Needs Attention",
                  },
                  {
                    title: "Security Review",
                    desc: "Security team sign-off obtained",
                    status: "Completed",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-start border-b border-[#0000001a] pb-4"
                  >
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-[#6B7280] mt-1">{item.desc}</p>
                    </div>

                    <span
                      className={`px-3 py-1 text-xs text-center rounded-full ${
                        item.status === "Completed"
                          ? "bg-[#DCFCE7] text-[#15803D]"
                          : "bg-[#FEF3C7] text-[#B45309]"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
              <h2 className="text-2xl font-semibold">Sign-off</h2>
              <p className="text-sm text-[#6B7280] mt-1">
                Please confirm the following to complete the operational
                readiness sign-off.
              </p>

              <div className="mt-6 space-y-6">
                {[
                  {
                    key: "monitoring",
                    label:
                      "I confirm all monitoring and alerting is properly configured",
                  },
                  {
                    key: "oncall",
                    label:
                      "I confirm on-call schedule and escalation paths are in place",
                  },
                  {
                    key: "runbook",
                    label:
                      "I acknowledge pending runbook reviews and accept associated risks",
                  },
                  {
                    key: "responsibility",
                    label:
                      "I take responsibility for operational readiness of this product",
                  },
                ].map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center gap-3 border-b border-[#0000001a] pb-4"
                  >
                    <button
                      onClick={() => toggle(item.key)}
                      className={`w-5 min-w-5 h-5 rounded-md flex items-center justify-center ${
                        checked[item.key] ? "bg-[#0E1E38]" : "bg-[#E5E7EB]"
                      }`}
                    >
                      {checked[item.key] && (
                        <Check className="text-white w-4" />
                      )}
                    </button>

                    <p className="text-sm">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between bg-[#F9FAFB] border border-[#0000001a] lg:rounded-xl rounded-lg lg:p-4 p-2">
                <div className="flex items-center gap-4">
                  <img
                    src="https://i.pravatar.cc/100"
                    alt=""
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">John Smith</p>
                    <p className="text-sm text-[#6B7280]">
                      Engineering Manager
                    </p>
                  </div>
                </div>

                <p className="text-sm text-[#6B7280]">01-20-2026</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-end mt-5 border-t border-[#0000001a] pt-3 gap-5">
        {tabButtons[activeTab]?.buttons.map((btn, index) => (
          <button
            key={index}
            onClick={btn.onClick}
            className={`${getButtonClass(
              btn.variant,
            )} py-2 px-5 md:w-1/2 w-full rounded-lg`}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </MainLayout>
  );
};

export default ProductOperationalReadiness;
