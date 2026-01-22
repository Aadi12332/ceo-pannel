import PageHeader from "../../components/common/Heading";
import SummaryCards from "../../components/common/SummaryCard";
import MainLayout from "../../components/layout/MainLayout";
import fileIcon from "../../assets/fileicon.svg";
import exportIcon from "../../assets/exporticon.svg";
import AuditChart from "../../components/common/AuditChart";
import revokeIcon from "../../assets/alertcircleicon.svg";

const revocations = [
  {
    name: "Robert Chen",
    reason: "Contract ended - automatic revocation",
    by: "System Auto",
    time: "Dec 22, 05:30 AM",
  },
  {
    name: "Lisa Park",
    reason: "Moved to different project - access no longer needed",
    by: "Sarah Johnson (CEO)",
    time: "Dec 21, 08:00 PM",
  },
  {
    name: "David Miller",
    reason: "Security review - excessive permissions",
    by: "Michael Chen (CTO)",
    time: "Dec 20, 03:30 PM",
  },
];

const roles = [
  { label: "Admin", count: 12, percent: 10 },
  { label: "Editor", count: 48, percent: 25 },
  { label: "Viewer", count: 187, percent: 65 },
];

const accessPatterns = [
  { label: "Active Today", value: "189 users" },
  { label: "Inactive 30+ days", value: "12 users" },
  { label: "Multi-device access", value: "145 users" },
  { label: "VPN usage", value: "87%" },
];

const compliance = [
  { label: "2FA Enabled", value: "96%" },
  { label: "Password Policy", value: "100%" },
  { label: "Access Reviews", value: "Current" },
  { label: "Audit Logging", value: "Active" },
];

const auditStats = [
  {
    label: "Total Audit Logs",
    value: "1,247",
    change: 12,
  },
  {
    label: "Critical Events",
    value: 34,
    change: -8,
  },
  {
    label: "Compliance Rate",
    value: "98%",
    change: 2,
  },
  {
    label: "Active Investigations",
    value: 5,
    change: 25,
  },
];
const AccessControl = () => {
  return (
    <MainLayout>
      <PageHeader
        title="Org & Access Control"
        description="Control who can do what, with scoped permissions, temporary access, and emergency revocation"
        actions={[
          {
            label: "Grant Temp Access",
            icon: fileIcon,
            onClick: () => console.log("Grant Temp Access"),
          },
          {
            label: "Request Review",
            icon: exportIcon,
            filter: true,
            onClick: () => console.log("Request Review"),
          },
        ]}
      />

      <SummaryCards items={auditStats} title="Access Control Dashboard" />

      <AuditChart />










          <div className="space-y-6">
      <div className="bg-white rounded-[16px] border border-[#0000001A] p-6">
        <h3 className="text-[20px] text-[#0A0A0A] mb-4">
          Recent Access Revocations
        </h3>

        <div className="space-y-4">
          {revocations.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-start bg-[#FAFAFA] rounded-lg p-4"
            >
              <div className="flex gap-3">
                <div className="w-9 h-9 flex items-center justify-center bg-[#FEE2E2] rounded-lg">
                  <img src={revokeIcon} alt="" className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[16px] text-[#0A0A0A]">{item.name}</p>
                  <p className="text-[14px] text-[#475467]">
                    {item.reason}
                  </p>
                  <p className="text-[13px] text-[#667085] mt-1">
                    Revoked by: {item.by}
                  </p>
                </div>
              </div>
              <span className="text-[14px] text-[#667085]">
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid xl:grid-cols-3 grid-cols-1 gap-6">
        <div className="bg-white rounded-[16px] border border-[#0000001A] p-6">
          <h3 className="text-[18px] text-[#0A0A0A] mb-4">
            Role Distribution
          </h3>

          <div className="space-y-4">
            {roles.map((r, i) => (
              <div key={i}>
                <div className="flex justify-between text-[14px] mb-1">
                  <span>{r.label}</span>
                  <span>{r.count} users</span>
                </div>
                <div className="h-2 bg-[#E5E7EB] rounded-full">
                  <div
                    className="h-2 bg-[#4F7BFF] rounded-full"
                    style={{ width: `${r.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[16px] border border-[#0000001A] p-6">
          <h3 className="text-[18px] text-[#0A0A0A] mb-4">
            Access Patterns
          </h3>

          <div className="space-y-3">
            {accessPatterns.map((a, i) => (
              <div
                key={i}
                className="flex justify-between text-[14px]"
              >
                <span className="text-[#475467]">{a.label}</span>
                <span className="text-[#0A0A0A]">{a.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[16px] border border-[#0000001A] p-6">
          <h3 className="text-[18px] text-[#0A0A0A] mb-4">
            Compliance Status
          </h3>

          <div className="space-y-3">
            {compliance.map((c, i) => (
              <div
                key={i}
                className="flex justify-between items-center text-[14px]"
              >
                <span className="text-[#475467]">{c.label}</span>
                <span className="px-3 py-1 rounded-full bg-[#DCFCE7] text-[#166534]">
                  {c.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    </MainLayout>
  );
};

export default AccessControl;
