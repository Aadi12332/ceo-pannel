import { useNavigate } from "react-router-dom";

const severityStyles = {
  SEV1: "bg-red-100 text-red-600",
  SEV2: "bg-orange-100 text-orange-600",
  SEV3: "bg-yellow-100 text-yellow-700",
};

const alertsData = [
  {
    severity: "SEV1",
    time: "2m ago",
    title: "Database replica lag > 30s",
    source: "prod-db-cluster",
  },
  {
    severity: "SEV1",
    time: "5m ago",
    title: "Unauthorized API access detected",
    source: "api-gateway",
  },
  {
    severity: "SEV2",
    time: "12m ago",
    title: "Deploy pipeline failed",
    source: "main → prod",
  },
  {
    severity: "SEV2",
    time: "2h ago",
    title: "Approval timeout: IAM policy change",
    source: "terraform-plan",
  },
  {
    severity: "SEV3",
    time: "3h ago",
    title: "Memory usage > 85%",
    source: "worker-pool-3",
  },
  {
    severity: "SEV3",
    time: "3h ago",
    title: "Test coverage dropped below threshold",
    source: "feature/auth",
  },
];

const approvalsData = [
  {
    level: "High",
    type: "approval",
    title: "Production deploy: v2.4.1",
    meta: "Requested by Sarah Chen",
    status: "Waiting: 2 approvers",
  },
  {
    level: "High",
    type: "approval",
    title: "IAM role modification",
    meta: "Requested by Mike Johnson",
    status: "Waiting: Security review",
  },
  {
    level: "Medium",
    type: "execution",
    title: "Database migration: users table",
    status: "Waiting: Scheduled window",
  },
  {
    level: "Low",
    type: "approval",
    title: "Weekly backup verification",
    meta: "Today, 3:00 PM",
  },
  {
    level: "Medium",
    type: "scheduled",
    title: "SSL certificate renewal",
    meta: "Tomorrow, 9:00 AM",
  },
  {
    level: "Low",
    type: "approval",
    title: "New API endpoint: /v2/analytics",
    meta: "Requested by Alex Kim",
    status: "Waiting: Code review",
  },
];

const levelStyles = {
  High: "bg-red-100 text-red-600",
  Medium: "bg-orange-100 text-orange-600",
  Low: "bg-green-100 text-green-600",
};

const ActiveAlertsQuene = () => {
  const navigate = useNavigate();
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mb-5">
      <div className="bg-white lg:rounded-xl lg:p-6 rounded-lg p-3 max-h-[520px] flex flex-col">
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-[#111827]">
            Active Alerts
          </h2>
          <p className="text-sm text-[#6B7280]">{alertsData.length} total</p>
        </div>

        <div className="overflow-auto scroll-hide">
          {alertsData.map((alert, index) => (
            <div
              key={index}
              className="py-4 last:pb-0 first:pt-0 border-b last:border-b-0"
            >
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`text-xs px-2 py-0.5 rounded font-medium ${severityStyles[alert.severity]}`}
                >
                  {alert.severity}
                </span>
                <span className="text-xs text-[#9CA3AF]">{alert.time}</span>
              </div>

              <div className="flex items-start gap-3">
                <div>
                  <p className="text-sm font-medium text-[#111827]">
                    {alert.title}
                  </p>
                  <p className="text-sm text-[#9CA3AF]">{alert.source}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white lg:rounded-xl lg:p-6 rounded-lg p-3 max-h-[520px] flex flex-col">
        <div className="mb-4 flex gap-2 items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-[#111827]">
              Active Quene
            </h2>
            <p className="text-sm text-[#6B7280]">
              {alertsData.length} Pending
            </p>
          </div>
          <button onClick={()=>navigate("/view-action-quene")} className="px-3 py-2 bg-[#0E1E38] rounded-lg text-white">
            View All
          </button>
        </div>

        <div className="overflow-auto scroll-hide">
          {approvalsData.map((item, index) => (
            <div
              key={index}
              className="py-4 last:pb-0 first:pt-0 border-b last:border-b-0"
            >
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`text-xs px-2 py-0.5 rounded font-medium ${levelStyles[item.level]}`}
                >
                  {item.level}
                </span>
                <span className="text-xs text-[#9CA3AF]">{item.type}</span>
              </div>

              <p className="text-sm font-medium text-[#111827]">{item.title}</p>

              {item.meta && (
                <p className="text-sm text-[#9CA3AF]">{item.meta}</p>
              )}

              {item.status && (
                <p className="text-sm text-blue-600 mt-1">{item.status}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActiveAlertsQuene;
