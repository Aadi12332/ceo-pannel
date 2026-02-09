import {
  RefreshCcw,
  Eye,
  Play,
  Trash2,
} from "lucide-react";

const statusStyle = {
  Healthy: "bg-[#DCFCE7] text-[#008236]",
  "Expiring Soon": "bg-[#FEF3C7] text-[#B45309]",
  "Auth Failures": "bg-[#FFEDD4] text-[#F54900]",
  Expired: "bg-[#FFDDDB] text-[#CF2027]",
};

const progressColor = {
  green: "bg-[#22C55E]",
  red: "bg-[#CF2027]",
};

const credentials = [
  {
    name: "Stripe API Key",
    age: "45 days",
    rotation: "45 days",
    lastUsed: "2 min ago",
    status: "Healthy",
    progress: 45,
    color: "green",
  },
  {
    name: "Twilio Auth Token",
    age: "82 days",
    rotation: "8 days",
    lastUsed: "5 min ago",
    status: "Expiring Soon",
    progress: 82,
    color: "red",
    action: "Request Rotation",
  },
  {
    name: "SendGrid API Key",
    age: "30 days",
    rotation: "60 days",
    lastUsed: "1 hour ago",
    status: "Auth Failures",
    progress: 30,
    color: "green",
    failures: "3 failures",
  },
  {
    name: "Partner OAuth Token",
    age: "0 days",
    rotation: "60 days",
    lastUsed: "2 hours ago",
    status: "Expired",
    progress: 5,
    color: "red",
    failures: "10 failures",
    action: "Request Rotation",
  },
];

const webhookData = {
  replay: [
    {
      source: "Stripe",
      event: "payment.succeeded",
      time: "5 min ago • 3 attempts",
      error: "Timeout",
    },
    {
      source: "Partner API",
      event: "order.created",
      time: "5 min ago • 3 attempts",
      error: "Connection Refused",
    },
    {
      source: "Twilio",
      event: "message.delivered",
      time: "5 min ago • 3 attempts",
      error: "Rate limited",
    },
  ],
  dead: [
    {
      source: "Partner API",
      event: "order.updated",
      time: "2 hours ago • 10 attempts",
      error: "Max Retries Exceeded",
      note: "Integration down",
    },
    {
      source: "SendGrid",
      event: "email.bounced",
      time: "2 hours ago • 10 attempts",
      error: "Invalid payload",
      note: "Schema mismatch",
    },
  ],
};

export default function CredentialStatusAndWebhookQueues() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div className="bg-white rounded-xl p-6">
        <h2 className="text-lg font-semibold">
          Credential Status
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Current state of All System Credentials
        </p>

        <div className="space-y-5  max-h-[420px] overflow-auto scroll-hide">
          {credentials.map((c, i) => (
            <div key={i} className="border-b pb-6 last:border-b-0">
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium text-[#0E1E38]">
                  {c.name}
                </p>
                <span
                  className={`px-2 py-0.5 text-xs rounded ${statusStyle[c.status]}`}
                >
                  {c.status}
                </span>
              </div>

              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>Age: {c.age}</span>
                <span>Rotation: {c.rotation}</span>
              </div>

              <div className="h-2 bg-gray-200 rounded mb-2">
                <div
                  className={`h-2 rounded ${progressColor[c.color]}`}
                  style={{ width: `${c.progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">
                  Last used: {c.lastUsed}
                </span>

                {c.failures && (
                  <span className="text-[#CF2027]">
                    {c.failures}
                  </span>
                )}

                {c.action && (
                  <button className="flex items-center gap-2 text-[#0E1E38] font-medium">
                    <RefreshCcw className="w-4 h-4" />
                    {c.action}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6">
        <h2 className="text-lg font-semibold">
          Webhook Queues
        </h2>
        <p className="text-sm text-[#CF2027] mb-6">
          3 Pending, 2 Dead
        </p>
<div className=" max-h-[420px] overflow-auto scroll-hide">
        <p className="font-bold mb-3">Replay Queue</p>
        <div className="space-y-4 mb-6">
          {webhookData.replay.map((w, i) => (
            <div key={i} className="border-b pb-4 border-[#0000001a]">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 border rounded text-sm">
                    {w.source}
                  </span>
                  <p className="font-medium">{w.event}</p>
                </div>

                <div className="flex items-center gap-3">
                  <Eye className="w-4 h-4 cursor-pointer" />
                  <Play className="w-4 h-4 cursor-pointer" />
                  <Trash2 className="w-4 h-4 text-[#CF2027] cursor-pointer" />
                </div>
              </div>

              <p className="text-sm text-gray-500">
                {w.time}
              </p>
              <span className="inline-block mt-2 px-2 py-0.5 text-xs rounded bg-[#FFDDDB] text-[#CF2027]">
                {w.error}
              </span>
            </div>
          ))}
        </div>

        <p className="font-bold mb-3">Dead Letter</p>
        <div className="space-y-4">
          {webhookData.dead.map((w, i) => (
            <div key={i} className="border-b pb-4 last:border-b-0">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 border rounded text-sm">
                    {w.source}
                  </span>
                  <p className="font-medium">{w.event}</p>
                </div>

                <div className="flex items-center gap-3">
                  <Eye className="w-4 h-4 cursor-pointer" />
                  <Trash2 className="w-4 h-4 text-[#CF2027] cursor-pointer" />
                </div>
              </div>

              <p className="text-sm text-gray-500">
                {w.time}
              </p>
              <p className="text-sm text-gray-400 mt-1">
                {w.note}
              </p>
              <span className="inline-block mt-2 px-2 py-0.5 text-xs rounded bg-[#FFDDDB] text-[#CF2027]">
                {w.error}
              </span>
            </div>
          ))}
        </div>

</div>
      </div>
    </div>
  );
}
