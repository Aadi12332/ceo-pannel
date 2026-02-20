import { AlertTriangle, ShieldAlert } from "lucide-react";

const featureFlags = [
  {
    title: "Provider Signup v2",
    key: "ff-provider-signup-v2",
    risk: "High Risk",
    approval: "Approval Required",
    owner: "SK",
    time: "2h ago",
    progress: 50,
    target: 100,
    regions: "NYC, LA, CHI",
  },
  {
    title: "Multi-vendor Cart",
    key: "ff-multi-vendor-cart",
    risk: "High Risk",
    approval: "Approval Required",
    owner: "SK",
    time: "2h ago",
    progress: 10,
    target: 100,
    regions: "NYC",
  },
  {
    title: "Studio Video Templates",
    key: "ff-studio-templates",
    risk: null,
    approval: null,
    owner: "SK",
    time: "2h ago",
    progress: 100,
    target: 100,
    regions: "Global",
  },
  {
    title: "Push Notification v2",
    key: "ff-push-notifications",
    risk: null,
    approval: null,
    owner: "SK",
    time: "2h ago",
    progress: 25,
    target: 100,
    regions: "NYC, MIA",
  },
];

export default function FeatureFlags() {
  return (
    <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-4 border border-[#0000001a] mb-5">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Feature Flags</h2>
        <p className="text-sm text-[#6B7280]">
          {featureFlags.length} total
        </p>
      </div>

      <div className="space-y-6">
        {featureFlags.map((item, index) => (
          <div
            key={index}
            className="border-b border-[#0000001a] pb-6"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-medium">
                    {item.title}
                  </h3>

                  {item.risk && (
                    <span className="flex items-center gap-1 px-2 py-1 text-xs rounded-md bg-[#FEE2E2] text-[#DC2626]">
                      <AlertTriangle className="w-3 h-3" />
                      {item.risk}
                    </span>
                  )}

                  {item.approval && (
                    <span className="flex items-center gap-1 px-2 py-1 text-xs rounded-md bg-[#EDE9FE] text-[#7C3AED]">
                      <ShieldAlert className="w-3 h-3" />
                      {item.approval}
                    </span>
                  )}
                </div>

                <p className="text-sm text-[#6B7280] mt-1">
                  {item.key}
                </p>
              </div>

              <div className="text-sm text-[#6B7280] lg:text-right">
                <p>Owner: {item.owner}</p>
                <p>{item.time}</p>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between text-sm text-[#6B7280] mb-2">
                <span>Rollout Progress</span>
                <span>
                  {item.progress}% → {item.target}%
                </span>
              </div>

              <div className="h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#2563EB]"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>

            <p className="text-sm text-[#6B7280] mt-3">
              Regions: {item.regions}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
