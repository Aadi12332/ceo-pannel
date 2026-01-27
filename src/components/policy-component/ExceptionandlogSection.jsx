import exceptionIcon from "../../assets/exceptionicon.svg";
import { ErrorIcon, InfoCircleIcon, SuccessIcon } from "../../assets/icons/icons";

const exceptionTokens = [
  {
    id: "EXC-001",
    policy: "REF-003",
    grantedTo: "VIP Customer #12345",
    approvedBy: "Sarah Johnson (CEO)",
    expiresAt: "Jan 1, 05:29 AM",
    reason: "Premium customer - holiday season goodwill exception",
  },
  {
    id: "EXC-002",
    policy: "RBAC-001",
    grantedTo: "John Smith (Contractor)",
    approvedBy: "Sarah Johnson (CEO)",
    expiresAt: "Dec 25, 05:30 AM",
    reason: "Emergency system maintenance - 72h exception",
    incident: "INC-2024-089",
  },
];

const enforcementLogs = [
  {
    policy: "POL-FIN-001 v2.3",
    action: "refund_request",
    user: "customer_12345",
    outcome: "auto_approved",
    time: "Dec 22, 04:00 PM",
    status: "success",
  },
  {
    policy: "POL-FIN-002 v1.8",
    action: "refund_request",
    user: "customer_67890",
    outcome: "require_approval",
    time: "Dec 22, 03:45 PM",
    status: "warning",
  },
  {
    policy: "POL-AUTO-001 v1.5",
    action: "automation_spend_check",
    user: "system",
    outcome: "auto_paused",
    time: "Dec 22, 03:15 PM",
    status: "info",
  },
  {
    policy: "POL-EXP-001 v1.0",
    action: "expansion_request",
    user: "COO",
    outcome: "blocked",
    time: "Dec 22, 01:30 PM",
    status: "error",
  },
];

const StatusIcon = ({ status }) => {
  const map = {
    success: <SuccessIcon width={16} />,
    warning: <InfoCircleIcon width={16} />,
    info: <InfoCircleIcon color="#D08700" width={16} />,
    error: <ErrorIcon width={16} />,
  };
  return <>{map[status]}</>;
};

const ExceptionAndLogsSection = () => {
  return (
    <div className="space-y-5 mb-5">
      <div className="bg-white rounded-2xl p-6">
        <h3 className="text-[18px] font-medium mb-4">
          Active Exception Tokens
        </h3>

        <div className="space-y-4">
          {exceptionTokens.map((data) => (
            <div className="bg-[#FFFCED] border border-[#FDE68A] rounded-2xl p-6 relative">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <img src={exceptionIcon} alt="" />
                  <span className="px-3 py-1 text-[14px] font-medium rounded-lg bg-[#FEF3C7] text-[#0A0A0A]">
                    {data.id}
                  </span>

                  <span className="px-3 py-1 text-[14px] rounded-lg bg-[#FEF3C7] text-[#92400E]">
                    Policy: {data.policy}
                  </span>
                </div>

                <button className="flex items-center gap-2 bg-[#C7363F] text-white px-4 py-2 rounded-xl text-[14px]">
                  <ErrorIcon color="#fff" width={16} /> Revoke
                </button>
              </div>

              <div className="grid grid-cols-2 gap-10">
                <div className="space-y-4">
                  <div>
                    <p className="text-[#667085] text-[14px]">Granted To</p>
                    <p className="text-[#0A0A0A] font-medium">
                      {data.grantedTo}
                    </p>
                  </div>

                  <div>
                    <p className="text-[#667085] text-[14px]">Expires At</p>
                    <p className="text-[#F04438] font-medium">
                      {data.expiresAt}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-[#667085] text-[14px]">Approved By</p>
                  <p className="text-[#0A0A0A] font-medium">
                    {data.approvedBy}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <span className="font-semibold text-[#344054]">Reason:</span>{" "}
                <span className="text-[#344054]">{data.reason}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6">
        <h3 className="text-[18px] font-medium mb-4">
          Recent Enforcement Logs
        </h3>

        <div className="space-y-3">
          {enforcementLogs.map((log, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-[#F9FAFB] rounded-lg px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <StatusIcon status={log.status} />

                <div className="text-[14px]">
                  <div className="font-medium">
                    <span className="inline-block bg-white rounded-lg px-2 py-1">{log.policy}</span>  {log.action}
                  </div>
                  <div className="text-[#667085] px-2">
                    User: {log.user} · Outcome: {log.outcome}
                  </div>
                </div>
              </div>

              <div className="text-[13px] text-[#667085]">{log.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExceptionAndLogsSection;
