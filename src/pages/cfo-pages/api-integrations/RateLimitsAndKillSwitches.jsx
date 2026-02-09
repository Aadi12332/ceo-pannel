import { useState } from "react";
import {
  CreditCard,
  MessageSquare,
  Mail,
} from "lucide-react";

const quotaStatusStyle = {
  Normal: "bg-[#DCFCE7] text-[#008236]",
  Warning: "bg-[#FEF3C7] text-[#B45309]",
  Critical: "bg-[#FFDDDB] text-[#CF2027]",
};

const rateLimits = [
  {
    name: "Stripe Payments",
    icon: <CreditCard className="w-4 h-4" />,
    used: "2,340",
    limit: "10,000",
    percent: 23,
    status: "Normal",
  },
  {
    name: "Twilio SMS",
    icon: <MessageSquare className="w-4 h-4" />,
    used: "850",
    limit: "1,000",
    percent: 85,
    status: "Warning",
  },
  {
    name: "SendGrid Email",
    icon: <Mail className="w-4 h-4" />,
    used: "9,200",
    limit: "10,000",
    percent: 92,
    status: "Critical",
  },
  {
    name: "Stripe Payments",
    icon: <CreditCard className="w-4 h-4" />,
    used: "2,340",
    limit: "10,000",
    percent: 23,
    status: "Normal",
  },
  {
    name: "Twilio SMS",
    icon: <MessageSquare className="w-4 h-4" />,
    used: "850",
    limit: "1,000",
    percent: 85,
    status: "Warning",
  },
];

const killSwitchData = [
  {
    name: "Partner Order API",
    desc: "Third-party ordering integration | CTO + CEO",
    active: false,
    last: "Last: 2 hours ago by SRE Team",
  },
  {
    name: "Stripe Payments",
    desc: "Payment processing | CTO",
    active: true,
    last: "Last: 45 days ago by Release Manager",
  },
  {
    name: "Twilio SMS",
    desc: "SMS notifications",
    active: true,
    last: "Last: 2 hours ago by SRE Team",
  },
  {
    name: "SendGrid Email",
    desc: "Email delivery",
    active: true,
    last: "Last: 2 hours ago by SRE Team",
  },
  {
    name: "Firebase FCM",
    desc: "Push notifications",
    active: true,
    last: "Last: 30 days ago by Mobile Team",
  },
];

export default function RateLimitsAndKillSwitches() {
  const [kills, setKills] = useState(killSwitchData);

  const toggleKill = (index) => {
    setKills((prev) =>
      prev.map((k, i) => (i === index ? { ...k, active: !k.active } : k)),
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
      <div className="bg-white rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-1">Rate Limits & Quotas</h2>
        <p className="text-sm text-[#B45309] mb-6">2 approaching limits</p>

        <div className="space-y-5 max-h-[420px] overflow-auto scroll-hide">
          {rateLimits.map((item, i) => (
            <div key={i}>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2 font-medium">
                  {item.name}
                </div>
                <span className="text-sm text-gray-500">
                  {item.used}/{item.limit} per minute
                </span>
              </div>

              <div className="flex items-center justify-between mb-2">
                <span
                  className={`px-2 py-0.5 text-xs rounded ${quotaStatusStyle[item.status]}`}
                >
                  {item.status}
                </span>
                <span className="text-blue-600 font-medium">
                  {item.percent}%
                </span>
              </div>

              <div className="h-2 bg-gray-200 rounded">
                <div
                  className="h-2 bg-blue-600 rounded"
                  style={{ width: `${item.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-1">Kill Switches</h2>
        <p className="text-sm text-[#CF2027] mb-6">1 Active Kill</p>

        <div className="space-y-5 max-h-[420px] overflow-auto scroll-hide">
          {kills.map((item, i) => (
            <div
              key={i}
              className="flex items-start justify-between gap-4 border-b pb-5 last:border-b-0"
            >
              <div className="flex-1">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-[#0E1E38]">{item.name}</p>

                    <span
                      className={`px-2 py-0.5 text-xs rounded ${
                        item.active
                          ? "bg-[#DCFCE7] text-[#008236]"
                          : "bg-[#FFDDDB] text-[#CF2027]"
                      }`}
                    >
                      {item.active ? "Active" : "Killed"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {!item.active && (
                      <span className="text-sm text-[#00A63E]">
                        Request Enable
                      </span>
                    )}

                    <button
                      onClick={() => toggleKill(i)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                        item.active ? "bg-[#2F5BFF]" : "bg-[#E5E7EB]"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                          item.active ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm text-gray-500 mt-1">{item.desc}</p>

                  <p className="text-xs text-gray-400 mt-1">{item.last}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
