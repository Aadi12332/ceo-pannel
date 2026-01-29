import { useState } from "react";
import { useNavigate } from "react-router-dom";
import quickIcon1 from "../../assets/apisicon.svg";
import quickIcon2 from "../../assets/emailicon.svg";
import quickIcon3 from "../../assets/messageicon.svg";
import quickIcon4 from "../../assets/createreporticon.svg";
import {
  LocationIcon,
  WarningIcon,
  ErrorIcon,
  SuccessIcon,
} from "../../assets/icons/icons.jsx";
import CreateReportModal from "./CreateReportModal.jsx";

const column1 = [
  {
    title: "Marketing",
    rows: [
      ["Budget Spent", "$50,000"],
      ["Campaign ROI", "250%"],
    ],
  },
  {
    title: "Customer Service",
    rows: [
      ["Total Tickets", "125"],
      ["Avg. Response Time", "2.1 hrs"],
    ],
  },
  {
    title: "Technical / Dev",
    rows: [
      ["Open Bugs.", "12"],
      ["Uptime", "98.8%"],
    ],
  },
];

const column2 = [
  {
    title: "Onboarding",
    rows: [
      ["Providers Contacted", "1,500"],
      ["Providers Signed Up", "300"],
    ],
  },
  {
    title: "Finance",
    rows: [
      ["Revenue Per Vertical", "$1,000,000"],
      ["Taxes Paid", "1,180,000"],
    ],
  },
  {
    title: "Legal / Compliance",
    rows: [
      ["DMCA Complaints", "5"],
      ["Contracts Expiring", "2"],
    ],
  },
];

const quickActions = [
  {
    label: "Restart API",
    icon: quickIcon1,
    type: "modal",
    modal: "restartApi",
  },
  {
    label: "Send Mass Email",
    icon: quickIcon2,
    type: "navigate",
    path: "/send-mass-email",
  },
  {
    label: "Broadcast Message",
    icon: quickIcon3,
    type: "navigate",
    path: "#",
  },
  {
    label: "Create Report",
    icon: quickIcon4,
    type: "modal",
    modal: "createReport",
  },
];

const cities = [
  {
    name: "New York City",
    status: "At Risk",
    icon: <WarningIcon />,
    statusColor: "bg-yellow-100 text-yellow-700",
    border: "border-yellow-300",
    blocks: ["Food", "Shop", "Home", "IT", "Viral", "Pay"],
    colors: [
      "bg-green-500",
      "bg-green-500",
      "bg-yellow-600",
      "bg-green-500",
      "bg-red-600",
      "bg-yellow-600",
    ],
    stats: ["$8.4M", "245.0K", "12.4K"],
    blockers: ["Payment gateway issues", "Viral vertical permits pending"],
  },
  {
    name: "San Francisco",
    status: "Ready",
    icon: <SuccessIcon />,
    statusColor: "bg-green-100 text-green-700",
    border: "border-green-300",
    blocks: ["Food", "Shop", "Home", "IT", "Viral", "Pay"],
    colors: Array(6).fill("bg-green-500"),
    stats: ["$6.2M", "189.0K", "8.9K"],
    blockers: [],
  },
  {
    name: "Los Angeles",
    status: "Ready",
    icon: <SuccessIcon />,
    statusColor: "bg-green-100 text-green-700",
    border: "border-green-300",
    blocks: ["Food", "Shop", "Home", "IT", "Viral", "Pay"],
    colors: [
      "bg-green-500",
      "bg-green-500",
      "bg-green-500",
      "bg-yellow-600",
      "bg-green-500",
      "bg-green-500",
    ],
    stats: ["$5.9M", "167.0K", "9.2K"],
    blockers: ["IT vertical capacity constraints"],
  },
  {
    name: "Chicago",
    status: "Blocked",
    icon: <ErrorIcon />,
    statusColor: "bg-red-100 text-red-700",
    border: "border-red-300",
    blocks: ["Food", "Shop", "Home", "IT", "Viral", "Pay"],
    colors: [
      "bg-green-500",
      "bg-yellow-600",
      "bg-red-600",
      "bg-red-600",
      "bg-green-500",
      "bg-yellow-600",
    ],
    stats: ["$1.2M", "45.0K", "2.1K"],
    blockers: [
      "Regulatory approval pending",
      "Home & IT infrastructure incomplete",
    ],
  },
  {
    name: "Boston",
    status: "At Risk",
    icon: <WarningIcon />,
    statusColor: "bg-yellow-100 text-yellow-700",
    border: "border-yellow-300",
    blocks: ["Food", "Shop", "Home", "IT", "Viral", "Pay"],
    colors: [
      "bg-green-500",
      "bg-green-500",
      "bg-yellow-600",
      "bg-green-500",
      "bg-yellow-600",
      "bg-green-500",
    ],
    stats: ["$2.5M", "78.0K", "4.5K"],
    blockers: ["Provider onboarding delays"],
  },
  {
    name: "Miami",
    status: "Ready",
    icon: <SuccessIcon />,
    statusColor: "bg-green-100 text-green-700",
    border: "border-green-300",
    blocks: ["Food", "Shop", "Home", "IT", "Viral", "Pay"],
    colors: Array(6).fill("bg-green-500"),
    stats: ["$3.4M", "112.0K", "5.6K"],
    blockers: [],
  },
];

const ExecutiveDashboardSection = ({ id }) => {
  const Card = ({ title, children, className = "" }) => (
    <div className={`bg-white rounded-lg lg:rounded-[14px] p-5 ${className}`}>
      <h3 className="text-[18px] font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );

  const [openReport, setOpenReport] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const navigate = useNavigate();

  const handleQuickActionClick = (action) => {
    if (action.type === "modal") {
      setActiveModal(action.modal);
      setOpenReport(true);
      return;
    }

    if (action.type === "navigate") {
      navigate(action.path);
    }
  };

  return (
    <div className="space-y-6" id={id}>
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="grid gap-4">
          {column1.map((c, i) => (
            <Card key={i} title={c.title}>
              {c.rows.map((r, j) => (
                <div key={j} className="flex justify-between text-[14px]">
                  <span className="text-[#667085]">{r[0]}</span>
                  <span className="font-medium">{r[1]}</span>
                </div>
              ))}
            </Card>
          ))}
        </div>

        <div className="grid gap-4">
          {column2.map((c, i) => (
            <Card key={i} title={c.title}>
              {c.rows.map((r, j) => (
                <div key={j} className="flex justify-between text-[14px]">
                  <span className="text-[#667085]">{r[0]}</span>
                  <span className="font-medium">{r[1]}</span>
                </div>
              ))}
            </Card>
          ))}
        </div>

        <div className="grid gap-4">
          <Card title="AI Notifications">
            <div className="space-y-2 text-[14px] font-medium">
              <div>User churn rising in NYC</div>
              <div>Server cost will exceed budget</div>
            </div>
          </Card>

          <Card title="Quick Actions" className="flex-1">
            <div className="space-y-4">
              {quickActions.map((a, i) => (
                <div
                  onClick={() => handleQuickActionClick(a)}
                  key={i}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <img
                    src={a.icon}
                    className="w-9 h-9 bg-[#EEF4FF] rounded-lg p-2"
                  />
                  <span className="font-medium">{a.label}</span>
                </div>
              ))}
            </div>
          </Card>

          {activeModal === "createReport" && (
            <CreateReportModal
              open={openReport}
              onClose={() => {setOpenReport(false);setActiveModal(null);}}
            />
          )}

          {/* {activeModal === "restartApi" && (
              <RestartApiModal
                open
                onClose={() => setActiveModal(null)}
              />
            )} */}
        </div>
      </div>

      <div className="bg-white rounded-lg lg:rounded-[14px] p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <LocationIcon color="#155DFC" />
            <h3 className="text-[18px] font-medium">City Readiness Heatmap</h3>
          </div>
          <div className="flex gap-2 text-[12px]">
            <span className="px-3 py-1 rounded-full bg-green-500 text-white">
              3 Ready
            </span>
            <span className="px-3 py-1 rounded-full bg-yellow-500 text-white">
              2 At Risk
            </span>
            <span className="px-3 py-1 rounded-full bg-red-500 text-white">
              1 Blocked
            </span>
          </div>
        </div>

        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-4">
          {cities.map((c, i) => (
            <div
              key={i}
              className={`rounded-lg lg:rounded-[14px] border p-4 ${c.border} ${c.statusColor.replace("text", "bg").replace("700", "50")}`}
            >
              <div className="flex justify-between mb-3">
                <div className="flex items-center gap-2">
                  <LocationIcon />
                  <span className="font-medium">{c.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  {c.icon}
                  <span
                    className={`text-[12px] px-2 py-1 rounded-full ${c.statusColor}`}
                  >
                    {c.status}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-4">
                {c.blocks.map((b, j) => (
                  <div
                    key={j}
                    className={`text-white text-[12px] text-center py-1 rounded ${c.colors[j]}`}
                  >
                    {b}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 text-[13px] mb-3">
                <div>
                  <div className="text-[#667085]">Revenue</div>
                  <div>{c.stats[0]}</div>
                </div>
                <div>
                  <div className="text-[#667085]">Users</div>
                  <div>{c.stats[1]}</div>
                </div>
                <div>
                  <div className="text-[#667085]">Providers</div>
                  <div>{c.stats[2]}</div>
                </div>
              </div>

              {c.blockers.length > 0 && (
                <ul className="list-disc ml-4 text-[13px] space-y-1">
                  {c.blockers.map((b, k) => (
                    <li key={k}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExecutiveDashboardSection;
