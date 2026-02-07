import {
  User,
  ShoppingCart,
  Megaphone,
  PlaySquare,
  CreditCard,
  Settings,
  Bell,
  FileCheck,
  ExternalLink,
} from "lucide-react";

const servicesData = [
  {
    name: "Identity",
    team: "Auth Team",
    icon: <User className="w-5 h-5 text-[#00A63E]" />,
    iconBg: "bg-[#DCFCE7]",
    status: "ok",
    uptime: "99.99%",
    p95: "12ms",
    errors: "0.01%",
    deps: 2,
  },
  {
    name: "Orders",
    team: "Commerce Team",
    icon: <ShoppingCart className="w-5 h-5 text-[#00A63E]" />,
    iconBg: "bg-[#DCFCE7]",
    status: "ok",
    uptime: "99.95%",
    p95: "45ms",
    errors: "0.03%",
    deps: 4,
  },
  {
    name: "Payments",
    team: "Payments Team",
    icon: <CreditCard className="w-5 h-5 text-[#00A63E]" />,
    iconBg: "bg-[#DCFCE7]",
    status: "ok",
    uptime: "99.95%",
    p95: "45ms",
    errors: "0.03%",
    deps: 3,
  },
  {
    name: "Ads",
    team: "Ads Team",
    icon: <Megaphone className="w-5 h-5 text-[#FF5544]" />,
    iconBg: "bg-[#FFEDD4]",
    status: "warn",
    uptime: "99.99%",
    p95: "156ms",
    errors: "0.12%",
    deps: 2,
  },
  {
    name: "Studio",
    team: "Media Team",
    icon: <PlaySquare className="w-5 h-5 text-[#00A63E]" />,
    iconBg: "bg-[#DCFCE7]",
    status: "ok",
    uptime: "99.95%",
    p95: "45ms",
    errors: "0.03%",
    deps: 4,
  },
  {
    name: "Business Suite",
    team: "Enterprise Team",
    icon: <CreditCard className="w-5 h-5 text-[#00A63E]" />,
    iconBg: "bg-[#DCFCE7]",
    status: "ok",
    uptime: "99.95%",
    p95: "45ms",
    errors: "0.03%",
    deps: 3,
  },
  {
    name: "Automation/AWM",
    team: "Platform Team",
    icon: <Settings className="w-5 h-5 text-[#00A63E]" />,
    iconBg: "bg-[#DCFCE7]",
    status: "ok",
    uptime: "99.99%",
    p95: "156ms",
    errors: "0.12%",
    deps: 2,
  },
  {
    name: "Alerts",
    team: "SRE Team",
    icon: <Bell className="w-5 h-5 text-[#CF2027]" />,
    iconBg: "bg-[#FFDDDB]",
    status: "error",
    uptime: "99.95%",
    p95: "234ms",
    errors: "0.45%",
    deps: 4,
  },
  {
    name: "Audit",
    team: "Compliance Team",
    icon: <FileCheck className="w-5 h-5 text-[#00A63E]" />,
    iconBg: "bg-[#DCFCE7]",
    status: "ok",
    uptime: "99.95%",
    p95: "45ms",
    errors: "0.00%",
    deps: 3,
  },
];

const statusDot = {
  ok: "bg-[#00A63E]",
  warn: "bg-[#F54900]",
  error: "bg-[#CF2027]",
};

const ServiceDomainMap = () => {
  return (
    <div className="mb-5">
      <h2 className="text-[20px] text-[#1E1E1E] font-bold mb-4">
        Service Domain Map
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {servicesData.map((item, index) => (
          <div
            key={index}
            className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.iconBg}`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1E1E1E]">
                      {item.name}
                    </p>
                    <p className="text-sm text-[#929292]">
                      {item.team}
                    </p>
                  </div>
                </div>
                <span
                  className={`w-2 h-2 rounded-full ${statusDot[item.status]}`}
                />
              </div>

              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-[#929292]">Uptime</p>
                  <p className="font-medium text-[#1E1E1E]">{item.uptime}</p>
                </div>
                <div>
                  <p className="text-[#929292]">p95</p>
                  <p className="font-medium text-[#1E1E1E]">{item.p95}</p>
                </div>
                <div>
                  <p className="text-[#929292]">Errors</p>
                  <p
                    className={`font-medium text-[#1E1E1E] ${
                      item.errors !== "0.00%" &&
                      item.status !== "ok"
                        ? "text-[#CF2027]"
                        : ""
                    }`}
                  >
                    {item.errors}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <p className="text-sm text-[#929292]">
                {item.deps} dependencies
              </p>
              <ExternalLink className="w-4 h-4 text-[#3178EC]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDomainMap;
