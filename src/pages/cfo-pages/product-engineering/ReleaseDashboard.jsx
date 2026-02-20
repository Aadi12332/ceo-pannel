import {
  CheckCircle2,
  Circle,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const releases = [
  {
    id: "FEAT-1215",
    tag: "Business Suite",
    title: "Provider Signup v2",
    target: "Today",
    owner: "SK",
    progress: 100,
    checks: [true, true, true, true, true],
  },
  {
    id: "FEAT-1220",
    tag: "Studio",
    title: "Studio Asset Library",
    target: "Tomorrow",
    owner: "NK",
    progress: 80,
    checks: [true, true, true, true, false],
  },
  {
    id: "FEAT-1221",
    tag: "Shopping",
    title: "Multi-vendor Cart",
    target: "Jan 22",
    owner: "AM",
    progress: 60,
    checks: [true, false, false, false, false],
  },
  {
    id: "FEAT-1225",
    tag: "IT",
    title: "IT Ticketing Integration",
    target: "Jan 22",
    owner: "AM",
    progress: 60,
    checks: [true, false, false, false, true],
  },
];

const tagStyle = {
  "Business Suite": "bg-[#EDE9FE] text-[#7C3AED]",
  Studio: "bg-[#FFEDD5] text-[#EA580C]",
  Shopping: "bg-[#DCFCE7] text-[#15803D]",
  IT: "bg-[#DBEAFE] text-[#2563EB]",
};

const metrics = [
  {
    label: "Deployment Frequency",
    value: "8.2",
    suffix: "deploys/day",
    change: "+12%",
    positive: true,
  },
  {
    label: "Lead Time",
    value: "4.2",
    suffix: "days",
    change: "-18%",
    positive: true,
  },
  {
    label: "Change Failure Rate",
    value: "2.2%",
    suffix: "",
    change: "-0.4%",
    positive: true,
  },
  {
    label: "MTTR",
    value: "42",
    suffix: "minutes",
    change: "-0%",
    positive: true,
  },
];

const deployments = [
  {
    name: "provider-api",
    version: "v2.4.1",
    user: "SK",
    time: "10 min ago",
    status: "success",
  },
  {
    name: "order-service",
    version: "v3.1.0",
    user: "VL",
    time: "30 min ago",
    status: "success",
  },
  {
    name: "payment-gateway",
    version: "v1.8.2",
    user: "VL",
    time: "1 hr ago",
    status: "rollback",
  },
];

export default function ReleaseDashboard() {
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
        <div className="lg:col-span-2 space-y-6 bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
          <div>
            <h2 className="text-2xl font-semibold">
              Release Readiness
            </h2>
            <p className="text-sm text-[#6B7280]">
              {releases.length} total
            </p>
          </div>

          {releases.map((item) => (
            <div key={item.id} className="border-b border-[#0000001a] pb-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                    <span>{item.id}</span>
                    <span
                      className={`px-2 py-1 text-xs rounded-md ${tagStyle[item.tag]}`}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <p className="font-medium mt-1">
                    {item.title}
                  </p>
                </div>

                <div className="text-sm text-[#6B7280] lg:text-right">
                  <p>Target: {item.target}</p>
                  <p>Owner: {item.owner}</p>
                  <p className="text-[#2563EB] font-medium">
                    {item.progress}%
                  </p>
                </div>
              </div>

              <div className="mt-3 h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#2563EB]"
                  style={{ width: `${item.progress}%` }}
                />
              </div>

              <div className="flex flex-wrap gap-4 mt-3 text-sm">
                {[
                  "Security Review",
                  "QA Pass",
                  "Policy Compliance",
                  "Performance Test",
                  "Documentation",
                ].map((label, index) => (
                  <div
                    key={label}
                    className="flex items-center gap-1 text-[#6B7280]"
                  >
                    {item.checks[index] ? (
                      <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                    ) : (
                      <CheckCircle2 className="w-4 h-4 text-[#9CA3AF]" />
                    )}
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6 bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
          <div className="border border-[#0000001a] rounded-xl p-4">
            <h3 className="text-xl font-semibold">
              Deployment Metrics
            </h3>
            <p className="text-sm text-[#6B7280] mb-4">
              Last 7 days
            </p>

            <div className="space-y-4">
              {metrics.map((m) => (
                <div key={m.label}>
                  <p className="text-sm text-[#6B7280]">
                    {m.label}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xl font-semibold">
                      {m.value}
                    </span>
                    <span className="text-sm text-[#6B7280]">
                      {m.suffix}
                    </span>
                    <span
                      className={`flex items-center gap-1 text-sm ${
                        m.positive
                          ? "text-[#16A34A]"
                          : "text-[#DC2626]"
                      }`}
                    >
                      {m.positive ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                      {m.change}
                    </span>
                  </div>
                  <div className="border-b border-[#0000001a] mt-3" />
                </div>
              ))}
            </div>
          </div>

          <div className="border border-[#0000001a] rounded-xl p-4">
            <h3 className="text-xl font-semibold">
              Recent Deployments
            </h3>

            <div className="mt-4 space-y-4">
              {deployments.map((d, i) => (
                <div
                  key={i}
                  className="border-b border-[#0000001a] pb-3"
                >
                  <p className="font-medium">
                    {d.name}{" "}
                    <span className="text-sm text-[#6B7280]">
                      {d.version} | {d.user} | {d.time}
                    </span>
                  </p>
                  <span
                    className={`inline-block mt-2 px-3 py-1 text-xs rounded-md ${
                      d.status === "success"
                        ? "bg-[#DCFCE7] text-[#15803D]"
                        : "bg-[#FFEDD5] text-[#EA580C]"
                    }`}
                  >
                    {d.status === "success"
                      ? "success"
                      : "Rollback"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
