import { useState } from "react";
import brainicon from "../../assets/brainicon.svg";
import { ElectricIcon } from "../../assets/icons/icons";

export default function ExpansionTabs() {
  const [tab, setTab] = useState("city")

  return (
    <div className="mb-5">
        <div className="mb-5 flex items-center gap-2 bg-[#F3F4F6] rounded-full p-1">
          {[
            { key: "city", label: "City Readiness" },
            { key: "gates", label: "Expansion Gates" },
            { key: "experiments", label: "Experiments" },
            { key: "risk", label: "Partner Risk" },
            { key: "ai", label: "AI Performance" }
          ].map(t => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-4 py-2 rounded-full flex-1 text-sm ${
                tab === t.key
                  ? "bg-white text-black"
                  : "text-gray-600"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      <div className=" bg-white rounded-xl p-6">
        {tab === "city" && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">
              City Readiness Scorecard - Permits, Staffing, Supply, SLA, Integration
            </h2>

            <CityCard
              name="New York City"
              region="Northeast"
              status="ready"
              score={95}
              staffing="96%"
              supply="98%"
              sla="3h"
              integration="99.8%"
              permits={["Food Service", "Business", "Health"]}
              action="approve"
            />

            <CityCard
              name="San Francisco"
              region="West"
              status="blocked"
              score={45}
              staffing="80%"
              supply="65%"
              sla="8h"
              integration="97.2%"
              permits={["Business", "Health"]}
              reason={[
                "Food service permit expired",
                "Support SLA breached",
                "Integration error rate above 2%"
              ]}
            />

            <CityCard
              name="Boston"
              region="Northeast"
              status="ready"
              score={88}
              staffing="107%"
              supply="89%"
              sla="3.5h"
              integration="99.5%"
              permits={["Food Service", "Business", "Health"]}
              action="approve"
            />

            <CityCard
              name="Chicago"
              region="Midwest"
              status="blocked"
              score={72}
              staffing="63%"
              supply="82%"
              sla="5h"
              integration="99.2%"
              permits={["Food Service", "Business", "Health"]}
              reason={["Staffing below 80% of requirement"]}
            />
          </div>
        )}

        {tab === "gates" && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">
              Expansion Gates - Block/Allow by City/Vertical
            </h2>

            <GateCard city="New York City" score={95} status="allowed" />
            <GateCard
              city="San Francisco"
              score={45}
              status="blocked"
              reason="permit expired, SLA breach, integration unstable"
            />
            <GateCard city="Boston" score={88} status="allowed" />
            <GateCard
              city="Chicago"
              score={72}
              status="blocked"
              reason="insufficient staffing (63%)"
            />

            <div className="rounded-xl bg-blue-50 p-4 text-sm text-blue-900">
              Expansion gates are automatically enforced by policy AEPS-LAUNCH-001.
              Cities must achieve readiness score ≥ 85 to launch.
            </div>
          </div>
        )}

        {tab === "experiments" && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">
              Experiment Outcomes - A/B Tests, Cohort Retention, CAC vs LTV
            </h2>

            <ExperimentCard
              title="Dynamic Pricing - Peak Hours"
              status="completed"
              retention="+8.3%"
              cac="-6.7%"
              ltv="+11.8%"
              recommendation="Roll out to all markets. Projected +$2.1M ARR impact."
              success
            />

            <ExperimentCard
              title="Onboarding Flow v3 - Gamification"
              status="running"
              retention="+8.8%"
              cac="0%"
              ltv="+9.7%"
              recommendation="Continue monitoring. Positive early signals."
            />

            <ExperimentCard
              title="Referral Bonus - $20 vs $30"
              status="completed"
              retention="-1.5%"
              cac="+30.8%"
              ltv="-1.4%"
              recommendation="Reject. Higher bonus increased CAC without LTV gain."
              danger
            />

            <ExperimentCard
              title="Premium Support Tier"
              status="analyzing"
              retention="+17.1%"
              cac="0%"
              ltv="+36.8%"
              recommendation="Strong positive signal. Complete analysis then propose pricing."
            />
          </div>
        )}

        {tab === "risk" && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">
              Partner Risk Exposure - Dependency Score for Major Integrations
            </h2>

            <PartnerCard
              name="Stripe"
              score={95}
              revenue="$12.4M"
              uptime="99.9%"
              level="critical"
              plan="Evaluate secondary processor (Adyen). 6-month integration timeline."
            />

            <PartnerCard
              name="Twilio"
              score={72}
              revenue="$8.7M"
              uptime="99.5%"
              level="high"
              plan="SMS fallback to AWS SNS implemented."
            />

            <PartnerCard
              name="Google Maps"
              score={88}
              revenue="$12.4M"
              uptime="99.8%"
              level="high"
              plan="No viable alternative. Monitor pricing quarterly."
            />

            <PartnerCard
              name="AWS"
              score={98}
              revenue="$12.4M"
              uptime="99.99%"
              level="critical"
              plan="Multi-region deployment active. DR tested quarterly."
            />

            <PartnerCard
              name="SendGrid"
              score={45}
              revenue="$6.2M"
              uptime="99.7%"
              level="medium"
              plan="Secondary provider (Mailgun) ready."
            />
          </div>
        )}

        {tab === "ai" && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">
              AI Performance Summaries (Assistive Only)
            </h2>

            <AICard
              name="Customer Support"
              hours={1240}
              savings="$89K"
              tasks={3420}
              accuracy="94%"
              review="12%"
            />

            <AICard
              name="Finance"
              hours={320}
              savings="$24K"
              tasks={890}
              accuracy="98%"
              review="8%"
            />

            <AICard
              name="Legal"
              hours={180}
              savings="$42K"
              tasks={245}
              accuracy="96%"
              review="18%"
            />

            <AICard disabled name="Engineering" />

            <AICard
              name="Marketing"
              hours={560}
              savings="$32K"
              tasks={1680}
              accuracy="92%"
              review="15%"
            />

            <div className="rounded-xl bg-purple-50 p-4 text-sm flex flex-col gap-3">
              <p className="font-medium text-[#0A0A0A] text-[18px] flex items-center gap-2">
                <ElectricIcon color="#9810FA" width={16}  />
                AI Governance Summary</p>
              <p className="text-[#364153]">Total cost savings: <span className="font-semibold text-green-600">$187K/month</span></p>
              <p className="text-[#364153]">
                AI is used as <span className="font-bold">assistive tooling only</span> - all outputs subject to human review and approval. No autonomous decision-making permitted.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function Metric({ label, value, sub, highlight }) {
  return (
    <div
      className={`rounded bg-white p-3 text-center border ${
        highlight ? "border-dashed border-purple-500" : ""
      }`}
    >
      <p className="text-xs text-gray-500">{label}</p>
      <p className="font-medium">{value}</p>
      {sub && <p className="text-xs text-gray-400">{sub}</p>}
    </div>
  )
}

function CityCard({
  name,
  region,
  status,
  score,
  staffing,
  supply,
  sla,
  integration,
  permits,
  reason,
  action
}) {
  const bg =
    status === "ready"
      ? "bg-green-50 border-green-300"
      : status === "blocked" && score < 60
      ? "bg-red-50 border-red-300"
      : "bg-yellow-50 border-yellow-300"

  const meta = {
    "New York City": {
      staffingSub: "48/50",
      supplySub: "125 providers",
      slaSub: "Target: 4h",
      integrationSub: "0.2% errors"
    },
    "San Francisco": {
      staffingSub: "28/35",
      supplySub: "45 providers",
      slaSub: "Target: 4h",
      integrationSub: "2.8% errors"
    },
    Boston: {
      staffingSub: "32/30",
      supplySub: "78 providers",
      slaSub: "Target: 4h",
      integrationSub: "0.5% errors"
    },
    Chicago: {
      staffingSub: "25/40",
      supplySub: "92 providers",
      slaSub: "Target: 4h",
      integrationSub: "0.8% errors"
    }
  }[name]

  return (
    <div className={`rounded-xl border p-4 ${bg}`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <p className="font-medium">{name}</p>

            <span className="text-xs border rounded-full px-2 py-0.5 bg-white">
              {region}
            </span>

            <span
              className={`text-xs rounded-full px-2 py-0.5 ${
                status === "ready"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {status === "ready" ? "Ready" : "Policy Blocked"}
            </span>
          </div>

          <p className="text-xs text-gray-500">Policy: AEPS-LAUNCH-001</p>
        </div>

        <div className="text-right">
          <p className="text-3xl font-bold">{score}</p>
          <p className="text-xs text-gray-500">Readiness Score</p>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-3 text-sm mb-4">
        <div className="rounded bg-white p-3 border">
          <p className="text-xs text-gray-500 mb-1">Permits</p>
          <ul className="space-y-1 text-xs">
            {["Food Service", "Business", "Health"].map(p => (
              <li
                key={p}
                className={
                  permits.includes(p) ? "text-green-700" : "text-red-600"
                }
              >
                {p}
              </li>
            ))}
          </ul>
        </div>

        <Metric
          label="Staffing"
          value={staffing}
          sub={meta.staffingSub}
          highlight={staffing.startsWith("107")}
        />

        <Metric
          label="Supply"
          value={supply}
          sub={meta.supplySub}
        />

        <Metric
          label="Support SLA"
          value={sla}
          sub={meta.slaSub}
        />

        <Metric
          label="Integration"
          value={integration}
          sub={meta.integrationSub}
        />
      </div>

      {reason && (
        <div className="rounded bg-red-100 p-3 text-sm text-red-700 mb-4">
          <p className="font-medium mb-1">Why This City is Blocked:</p>
          <ul className="list-disc ml-4">
            {reason.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      )}

      {status === "blocked" && (
        <button className="rounded bg-red-600 text-white px-4 py-2 text-sm">
          Override Block (Manual)
        </button>
      )}

      {action && status === "ready" && (
        <button className="rounded bg-black text-white px-4 py-2 text-sm">
          Approve City Launch
        </button>
      )}
    </div>
  )
}

function GateCard({ city, score, status, reason }) {
  const isAllowed = status === "allowed"

  const gateMap = {
    "New York City": "GATE-NYC",
    "San Francisco": "GATE-SF",
    Boston: "GATE-BOS",
    Chicago: "GATE-CHI"
  }

  return (
    <div
      className={`rounded-xl border p-4 ${
        isAllowed
          ? "bg-green-50 border-green-300"
          : "bg-red-50 border-red-300"
      }`}
    >
      <div className="flex justify-between items-start mb-2">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium border rounded px-2 py-0.5 bg-white">
              {gateMap[city]}
            </span>

            <p className="font-medium">{city}</p>

            <span className="text-xs rounded-full px-2 py-0.5 bg-blue-100 text-blue-700">
              Food Delivery
            </span>

            <span
              className={`text-xs rounded-full px-2 py-0.5 ${
                isAllowed
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {isAllowed ? "allowed" : "blocked"}
            </span>
          </div>

          <p className="text-sm text-gray-600">
            Policy Pack: AEPS-LAUNCH-001
          </p>
        </div>

        <div className="text-right">
          <p
            className={`text-3xl font-bold ${
              isAllowed ? "text-green-600" : "text-red-600"
            }`}
          >
            {score}
          </p>
          <p className="text-xs text-gray-500">Threshold: 85</p>
        </div>
      </div>

      {!isAllowed && reason && (
        <div className="mt-3 rounded bg-red-100 border border-red-300 p-3 text-sm text-red-700">
          <span className="font-extrabold">Block Reason:</span>{" "}
          Readiness score {score} &lt; threshold 85. Blockers: {reason}.
        </div>
      )}
    </div>
  )
}

function MetricBlock({ title, data }) {
  const positive = data.d.startsWith("+")
  const negative = data.d.startsWith("-")

  return (
    <div className="rounded bg-gray-50 p-3">
      <p className="text-xs text-gray-500 mb-2">{title}</p>
      <p className="text-sm">
        Control: <span className="font-medium">{data.c}</span>
      </p>
      <p className="text-sm">
        Variant: <span className="font-medium">{data.v}</span>
      </p>
      <p
        className={`text-sm font-medium mt-1 ${
          positive ? "text-green-600" : negative ? "text-red-600" : "text-gray-600"
        }`}
      >
        {data.d}
      </p>
    </div>
  )
}

function ExperimentCard({
  title,
  status,
  retention,
  cac,
  ltv,
  recommendation,
  success,
  danger
}) {
  const statusStyle =
    status === "completed"
      ? "bg-green-100 text-green-700"
      : status === "running"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-blue-100 text-blue-700"

  const metaMap = {
    "Dynamic Pricing - Peak Hours": {
      id: "EXP-001",
      tag: "pricing",
      tagColor: "bg-purple-100 text-purple-700",
      dates: "Start: 11/1/2024   End: 12/1/2024",
      cohort: "Cohort: 5,000 users",
      confidence: "Confidence: 95%",
      retention: { c: "72%", v: "78%", d: "+8.3%" },
      cac: { c: "$45", v: "$42", d: "-6.7%" },
      ltv: { c: "$380", v: "$425", d: "+11.8%" }
    },
    "Onboarding Flow v3 - Gamification": {
      id: "EXP-002",
      tag: "onboarding",
      tagColor: "bg-purple-100 text-purple-700",
      dates: "Start: 12/15/2024",
      cohort: "Cohort: 2,500 users",
      confidence: "Confidence: 82%",
      retention: { c: "68%", v: "74%", d: "+8.8%" },
      cac: { c: "$48", v: "$48", d: "0%" },
      ltv: { c: "$360", v: "$395", d: "+9.7%" }
    },
    "Referral Bonus - $20 vs $30": {
      id: "EXP-003",
      tag: "marketing",
      tagColor: "bg-purple-100 text-purple-700",
      dates: "Start: 10/1/2024   End: 11/15/2024",
      cohort: "Cohort: 8,000 users",
      confidence: "Confidence: 98%",
      retention: { c: "65%", v: "64%", d: "-1.5%" },
      cac: { c: "$52", v: "$68", d: "+30.8%" },
      ltv: { c: "$350", v: "$345", d: "-1.4%" }
    },
    "Premium Support Tier": {
      id: "EXP-004",
      tag: "feature",
      tagColor: "bg-purple-100 text-purple-700",
      dates: "Start: 12/1/2024   End: 12/22/2024",
      cohort: "Cohort: 1,200 users",
      confidence: "Confidence: 88%",
      retention: { c: "70%", v: "82%", d: "+17.1%" },
      cac: { c: "$45", v: "$45", d: "0%" },
      ltv: { c: "$380", v: "$520", d: "+36.8%" }
    }
  }[title]

  return (
    <div className="rounded-xl border p-4">
      <div className="flex justify-between mb-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs border rounded px-2 py-0.5">
              {metaMap.id}
            </span>
            <p className="font-medium">{title}</p>
            <span className={`text-xs rounded px-2 py-0.5 ${metaMap.tagColor}`}>
              {metaMap.tag}
            </span>
            <span className={`text-xs rounded px-2 py-0.5 ${statusStyle}`}>
              {status}
            </span>
          </div>

          <p className="text-xs text-gray-500">
            {metaMap.dates} &nbsp; {metaMap.cohort} &nbsp; {metaMap.confidence}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 text-sm mb-4">
        <MetricBlock title="Cohort Retention" data={metaMap.retention} />
        <MetricBlock title="CAC (Customer Acquisition Cost)" data={metaMap.cac} />
        <MetricBlock title="LTV (Lifetime Value)" data={metaMap.ltv} />
      </div>

      <div
        className={`rounded p-3 text-sm border ${
          success
            ? "bg-green-50 text-green-700 border-green-200"
            : danger
            ? "bg-red-50 text-red-700 border-red-200"
            : "bg-blue-50 text-blue-700 border-blue-200"
        }`}
      >
        <span className="font-medium">Recommendation:</span> {recommendation}
      </div>
    </div>
  )
}

function PartnerCard({ name, score, revenue, uptime, level, plan }) {
  const bg =
    level === "critical"
      ? "bg-red-50 border-red-300"
      : level === "high"
      ? "bg-orange-50 border-orange-300"
      : "bg-white border-gray-200"

  const riskLabel =
    level === "critical"
      ? "critical risk"
      : level === "high"
      ? "high risk"
      : "medium risk"

  const categoryMap = {
    Stripe: "payment",
    Twilio: "integration",
    "Google Maps": "integration",
    AWS: "infrastructure",
    SendGrid: "integration"
  }

  const revenueShareMap = {
    Stripe: "100% of total",
    Twilio: "70% of total",
    "Google Maps": "100% of total",
    AWS: "100% of total",
    SendGrid: "50% of total"
  }

  return (
    <div className={`rounded-xl border p-4 ${bg}`}>
      <div className="flex justify-between items-start mb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-sm">🔌</span>

            <p className="font-medium">{name}</p>

            <span className="text-xs border rounded-full px-2 py-0.5 bg-white">
              {categoryMap[name]}
            </span>

            <span
              className={`text-xs rounded-full px-2 py-0.5 ${
                level === "critical"
                  ? "bg-red-100 text-red-700"
                  : level === "high"
                  ? "bg-orange-100 text-orange-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {riskLabel}
            </span>
          </div>
        </div>

        <div className="text-right">
          <p
            className={`text-3xl font-bold ${
              level === "critical"
                ? "text-red-600"
                : level === "high"
                ? "text-orange-600"
                : "text-yellow-600"
            }`}
          >
            {score}
          </p>
          <p className="text-xs text-gray-500">Dependency Score</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 text-sm mb-4">
        <div className="">
          <p className="text-xs text-gray-500 mb-1">Revenue at Risk</p>
          <p className="font-medium">{revenue}</p>
          <p className="text-xs text-gray-400">{revenueShareMap[name]}</p>
        </div>

        <div className="">
          <p className="text-xs text-gray-500 mb-1">Uptime (30d)</p>
          <p
            className={`font-medium ${
              uptime.startsWith("99.9") ? "text-green-600" : "text-orange-600"
            }`}
          >
            {uptime}
          </p>
        </div>

        <div className="">
          <p className="text-xs text-gray-500 mb-1">Status</p>
          <span className="inline-block text-xs rounded-full px-2 py-0.5 bg-blue-100 text-blue-700">
            Mitigated
          </span>
        </div>
      </div>

      <div className="rounded bg-blue-50 border border-blue-200 p-3 text-sm text-blue-700">
        <span className="font-[900]">Mitigation Plan:</span> {plan}
      </div>
    </div>
  )
}

function AICard({ name, hours, savings, tasks, accuracy, review, disabled }) {
  if (disabled) {
    return (
      <div className="rounded-xl border p-4 bg-gray-50 text-gray-600">
        <div className="flex items-center gap-2 mb-2">
          <img src={brainicon} alt="" className="filter brightness-0 opacity-60" />
          <div>
            <p className="font-medium">{name}</p>
          <span className="text-xs rounded-lg px-2 py-0.5 bg-gray-200 text-gray-700 border border-[#0000001A]">
            AI Disabled
          </span>
          </div>
        </div>

        <div className="rounded bg-gray-100 p-3 text-sm">
          AI usage not permitted for this department per governance policy.
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-xl border p-4">
      <div className="flex items-center gap-2 mb-4">
        <img src={brainicon} alt="" />
       <div>
         <p className="font-medium">{name}</p>
        <span className="text-xs rounded-lg px-2 py-0.5 bg-green-100 text-green-700 border border-[#0000001A]">
          AI Enabled
        </span>
       </div>
      </div>

      <div className="grid grid-cols-4 gap-3 text-sm mb-4">
        <div className="rounded bg-gray-50 p-3 text-center">
          <p className="text-xs text-gray-500">Usage Hours</p>
          <p className="font-semibold">{hours.toLocaleString()}</p>
        </div>

        <div className="rounded bg-green-50 p-3 text-center">
          <p className="text-xs text-gray-500">Cost Savings</p>
          <p className="font-semibold text-green-600">{savings}</p>
        </div>

        <div className="rounded bg-gray-50 p-3 text-center">
          <p className="text-xs text-gray-500">Tasks Assisted</p>
          <p className="font-semibold">{tasks.toLocaleString()}</p>
        </div>

        <div className="rounded bg-blue-50 p-3 text-center">
          <p className="text-xs text-gray-500">Accuracy</p>
          <p className="font-semibold text-blue-600">{accuracy}</p>
        </div>
      </div>

      <div className="rounded bg-orange-50 border border-orange-200 p-3 text-sm text-[#9F2D00]">
        <span className="font-bold">Human Review Rate:</span> {review} of AI
        outputs are reviewed by humans (assistive only, not autonomous).
      </div>
    </div>
  )
}